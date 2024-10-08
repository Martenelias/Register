const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');
const users = require('../model/users.json');

const usersDB = {
  users,
  setUsers(data) { this.users = data; },
};

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  console.log(req.body, 'auth');
  if (!user || !pwd) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  const foundUser = usersDB.users.find((person) => person.username === user);
  if (!foundUser) {
    return res.sendStatus(401);
  }

  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    // create JWTs
    const accessToken = jwt.sign(
      { username: foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '30s' },
    );
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' },
    );
    // Saving refreshToken with currentUser
    const otherUsers = usersDB.users.filter((person) => person.username !== foundUser.username);
    const currentUser = { ...foundUser, refreshToken };
    usersDB.setUsers([...otherUsers, currentUser]);
    await fsPromises.writeFile(
      path.join(__dirname, '..', 'model', 'users.json'),
      JSON.stringify(usersDB.users),
    );
    res.cookie(
      'jwt',
      refreshToken,
      {
        httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000,
      },
    );

    return res.json({ accessToken, redirectUrl: '/members' });
  }
  return res.sendStatus(401);
};

module.exports = { handleLogin };

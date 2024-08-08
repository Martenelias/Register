const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');
const users = require('../model/users.json');

const usersDB = {
  users,
  setUsers(data) { this.users = data; },
};

const handleNewUser = async (req, res) => {
  const {
    name, user, email, pwd,
  } = req.body;
  if (!name || !user || !email || !pwd) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Check for duplicates
  const duplicate = usersDB.users.find((person) => person.username === user);
  if (duplicate) {
    return res.sendStatus(409);
  }

  try {
    // Encrypt password
    const hashedPwd = await bcrypt.hash(pwd, 10);

    // Store new user
    const newUser = {
      name, username: user, email, password: hashedPwd,
    };
    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, '..', 'model', 'users.json'),
      JSON.stringify(usersDB.users),
    );

    res.redirect('/members');
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };

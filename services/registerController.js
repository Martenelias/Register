const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');
const users = require('../model/users.json');

const usersDB = {
  users,
  setUsers(data) { this.users = data; },
};

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) {
    return res.status(400).json({ message: 'Username and password are required.' });
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
    const newUser = { username: user, password: hashedPwd };
    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, '..', 'model', 'users.json'),
      JSON.stringify(usersDB.users),
    );

    console.log(usersDB.users);
    return res.status(201).json({ success: `New user ${user} created!` });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
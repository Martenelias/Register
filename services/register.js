const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
};

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
  // Check for duplicates
  const duplicate = usersDB.find(person => person.username === user);
  if (duplicate) return res.sendStatus(409);
  try {
    //encrypt pwd
    const hashedPwd = await bcrypt.hash(pwd, 10);
    //store new user
    const newUser = { 'username': user, 'password': hashedPwd };
    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      
    )
  } catch (err) {
    res.status(500).json({ 'message:' err.message });
  }
};
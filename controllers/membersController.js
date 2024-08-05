const data = {
  members: require('../model/members.json'),
  setMembers(newData) { this.members = newData; },
};

const getAllMembers = (req, res) => {
  res.json(data.members);
};

const createNewMember = (req, res) => {
  const newMember = {
    id: data.members?.length ? data.members[data.members.length - 1].id + 1 : 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };

  if (!newMember.firstname || !newMember.lastname) {
    return res.status(400).json({ message: 'First and last names are required.' });
  }

  data.setMembers([...data.members, newMember]);
  res.status(201).json(data.members);
};

const updateMember = (req, res) => {
  const member = data.members.find((emp) => emp.id === parseInt(req.body.id, 10));
  if (!member) {
    return res.status(400).json({ message: `member ID ${req.body.id} not found` });
  }
  if (req.body.firstname) member.firstname = req.body.firstname;
  if (req.body.lastname) member.lastname = req.body.lastname;
  const filteredArray = data.members.filter((emp) => emp.id !== parseInt(req.body.id, 10));
  const unsortedArray = [...filteredArray, member];
  unsortedArray.sort((a, b) => (a.id > b.id ? 1 : -1));
  res.json(data.members);
};

const deleteMember = (req, res) => {
  const member = data.members.find((emp) => emp.id === parseInt(req.body.id, 10));
  if (!member) {
    return res.status(400).json({ message: `member ID ${req.body.id} not found` });
  }
  const filteredArray = data.members.filter((emp) => emp.id !== parseInt(req.body.id, 10));
  data.setMembers([...filteredArray]);
  res.json(data.members);
};

const getMember = (req, res) => {
  const member = data.members.find((emp) => emp.id === parseInt(req.params.id, 10));
  if (!member) {
    return res.status(400).json({ message: `member ID ${req.params.id} not found` });
  }
  res.json(member);
};

module.exports = {
  getAllMembers,
  createNewMember,
  updateMember,
  deleteMember,
  getMember,
};

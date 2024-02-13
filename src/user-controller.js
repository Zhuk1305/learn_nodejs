const users = [
  { id: 1, name: "Yulia" },
  { id: 2, name: "Mike" },
];

const getUsers = (req, res) => {
  if (req.params.id) {
    return res.send(users.find((user) => user.id == req.params.id));
  }
  res.send(users);
};

const createUsers = (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(user);
};

module.exports = {
  getUsers,
  createUsers,
};

const Router = require("../framework/Router");

const router = new Router();

const users = [
  { id: 1, name: "Yulia" },
  { id: 2, name: "Mike" },
];

router.get("/users", (req, res) => {
  console.log(req.params.id);
  if (req.params.id) {
    return res.send(users.find((user) => user.id == req.params.id));
  }
  res.send(users);
});

router.post("/users", (req, res) => {
  console.log(req.body);
  const user = req.body;
  users.push(user);
  res.send(user);
});

module.exports = router;

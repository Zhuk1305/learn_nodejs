const Router = require("../framework/Router");

const router = new Router();

const users = [
  { id: 1, name: "Yulia" },
  { id: 2, name: "Mike" },
];

router.get("/users", (req, res) => {
  res.send(users);
});

module.exports = router;

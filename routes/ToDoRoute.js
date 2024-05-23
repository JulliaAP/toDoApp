const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Bem Vindo!" });
});

module.exports = router;
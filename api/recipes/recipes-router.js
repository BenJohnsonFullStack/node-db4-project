const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("api online");
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;

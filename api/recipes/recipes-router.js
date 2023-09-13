const express = require("express");
const Recipe = require("./recipes-model");

const router = express.Router();

router.get("/:recipe_id", async (req, res, next) => {
  const { recipe_id } = req.params;
  try {
    const recipe = await Recipe.getRecipeById(recipe_id);
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;

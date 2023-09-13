const db = require("../../data/db-config");

const getRecipeById = async (id) => {
  await db("recipes").where("id", id);
};

module.exports = {
  getRecipeById,
};

const db = require("../../data/db-config");

const getRecipeById = async (recipe_id) => {
  const recipeRows = await db("recipes as r")
    .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
    .leftJoin("recipe_ingredients as ri", "ri.step_id", "s.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "ri.ingredient_id")
    .select(
      "r.recipe_id",
      "recipe_name",
      "r.created_at",
      "s.step_id",
      "step_number",
      "instructions",
      "i.ingredient_id",
      "ingredient_name"
    )
    .where("r.recipe_id", recipe_id)
    .orderBy("step_number");

  return recipeRows;
};

// SELECT ******
// r.recipe_id, ******
// recipe_name, ******
// r.created_at, ********
// s.step_id, *******
// step_number, *****
// instructions, ******
// i.ingredient_id, *********
// ingredient_name **********
//     FROM recipes as r *******
//         LEFT JOIN steps as s *******
//             ON r.recipe_id = s.recipe_id ********
//         LEFT JOIN recipe_ingredients as ri *********
//             ON ri.step_id = s.step_id **********
//         LEFT JOIN ingredients as i *********
//             ON i.ingredient_id = ri.ingredient_id *******
//     WHERE r.recipe_id = 1 **********
//     ORDER BY step_number;

module.exports = {
  getRecipeById,
};

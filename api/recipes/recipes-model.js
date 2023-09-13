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
      "ingredient_name",
      "quantity"
    )
    .where("r.recipe_id", recipe_id)
    .orderBy("step_number");

  const recipes = {
    recipe_id: recipeRows[0].recipe_id,
    recipe_name: recipeRows[0].recipe_name,
    created_at: recipeRows[0].created_at,
    steps: recipeRows.reduce((acc, row) => {
      const stepObj = {
        step_id: row.step_id,
        step_number: row.step_number,
        instructions: row.instructions,
        ingredients: [],
      };

      const ingredientObj = {
        ingredient_id: row.ingredient_id,
        ingredient_name: row.ingredient_name,
        quantity: row.quantity,
      };

      if (!row.ingredient_id) {
        return acc.concat(stepObj);
      } else if (
        row.ingredient_id &&
        !acc.find((step) => step.step_id === row.step_id)
      ) {
        return acc.concat({
          step_id: row.step_id,
          step_number: row.step_number,
          instructions: row.instructions,
          ingredients: [ingredientObj],
        });
      } else {
        const currentStep = acc.find((step) => step.step_id === row.step_id);
        currentStep.ingredients.push(ingredientObj);
      }

      return acc;
    }, []),
  };

  return recipes;
};

// SELECT ******
// r.recipe_id, ******
// recipe_name, ******
// r.created_at, ********
// s.step_id, *******
// step_number, *****
// instructions, ******
// i.ingredient_id, *********
// ingredient_name, **********
// quantity *************
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

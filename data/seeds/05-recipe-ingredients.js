/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipe_ingredients").del();
  await knex("recipe_ingredients").insert([
    { recipe_id: 1, ingredient_id: 2, step_id: 2, quantity: "400g" },
    { recipe_id: 1, ingredient_id: 3, step_id: 2, quantity: "1 cup" },
    { recipe_id: 1, ingredient_id: 4, step_id: 2, quantity: "1 cup" },
    { recipe_id: 2, ingredient_id: 2, step_id: 5, quantity: "100g" },
    { recipe_id: 2, ingredient_id: 3, step_id: 6, quantity: "1/4 cup" },
    { recipe_id: 3, ingredient_id: 1, step_id: 7, quantity: "1/8 cup" },
    { recipe_id: 3, ingredient_id: 5, step_id: 8, quantity: "0.25 lbs" },
    { recipe_id: 3, ingredient_id: 6, step_id: 9, quantity: "1 cup" },
  ]);
};

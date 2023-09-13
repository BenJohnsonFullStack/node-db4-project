/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ingredients").del();
  await knex("ingredients").insert([
    { ingredient_name: "oil" },
    { ingredient_name: "pasta" },
    { ingredient_name: "sauce" },
    { ingredient_name: "meat filling" },
    { ingredient_name: "chicken" },
    { ingredient_name: "brussel sprouts" },
  ]);
};

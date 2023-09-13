/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipes").del();
  await knex("recipes").insert([
    { recipe_name: "lasagna" },
    { recipe_name: "spaghetti" },
    { recipe_name: "pollo alla milanese" },
  ]);
};

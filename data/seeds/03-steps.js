/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("steps").del();
  await knex("steps").insert([
    {
      step_number: 1,
      instructions: "preheat oven to 425 degrees",
      recipe_id: 1,
    },
    {
      step_number: 2,
      instructions: "layer pasta, sauce, and filling in a large pan",
      recipe_id: 1,
    },
    { step_number: 3, instructions: "bake for 30 minutes", recipe_id: 1 },
    { step_number: 1, instructions: "boil water", recipe_id: 2 },
    {
      step_number: 2,
      instructions: "add pasta and cook until al dente",
      recipe_id: 2,
    },
    { step_number: 3, instructions: "strain and add sauce", recipe_id: 2 },
    {
      step_number: 1,
      instructions: "heat oil in a pan",
      recipe_id: 3,
    },
    {
      step_number: 2,
      instructions: "bread chicken and fry until golden brown",
      recipe_id: 3,
    },
    {
      step_number: 3,
      instructions: "place chicken on bed of brussel sprouts",
      recipe_id: 3,
    },
  ]);
};

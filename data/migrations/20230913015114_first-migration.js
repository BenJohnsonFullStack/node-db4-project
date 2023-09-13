/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps");
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes").insert([
    { recipe_name: "lasagna" },
    { recipe_name: "spaghetti" },
    { recipe_name: "pollo alla milanese" },
  ]);
};

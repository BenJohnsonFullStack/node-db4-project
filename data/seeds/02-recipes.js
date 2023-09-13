exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes").insert([
    { colName: "rowValue1" },
    { colName: "rowValue2" },
    { colName: "rowValue3" },
  ]);
};

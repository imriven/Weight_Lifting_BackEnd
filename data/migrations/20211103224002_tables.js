exports.up = function (knex) {
  return knex.schema
    .createTable("user", (tbl) => {
      tbl.increments();
      tbl.string("user_name", 128).notNullable();
      tbl.string("email", 128).notNullable();
      tbl.string("first_name", 128).notNullable();
      tbl.integer("weight").notNullable().unsigned();
      tbl.date("account_created").notNullable();
      tbl.date("last_logged_in").notNullable();
    })
    .createTable("exercise", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("type", 128).notNullable();
    })
    .createTable("workout", (tbl) => {
      tbl.increments();
      tbl.string("exercise", 128).notNullable();
    })
    .createTable("workout_exercise", (tbl) => {
      tbl
        .integer("workout_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("workout");
      tbl
        .integer("exercise_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("exercise");
      tbl.primary(["workout_id", "exercise_id"]);
    })
    .createTable("equipment", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
    })
    .createTable("exercise_equipment", (tbl) => {
      tbl
        .integer("exercise_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("exercise");
      tbl
        .integer("equipment_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("equipment");
      tbl.primary(["exercise_id", "equipment_id"]);
    })
    .createTable("set", (tbl) => {
      tbl.increments();
      tbl.integer("reps").notNullable().unsigned();
      tbl.integer("weight").notNullable().unsigned();
    })
    .createTable("workout_instance", (tbl) => {
      tbl.increments();
      tbl.date("date").notNullable().unsigned();
      tbl.integer("weight").notNullable().unsigned();
      tbl.string("name", 128).notNullable();
    })
    .createTable("exercise_instance", (tbl) => {
      tbl.increments();
      tbl.date("date").notNullable().unsigned();
      tbl.integer("weight").notNullable().unsigned();
      tbl.string("name", 128).notNullable();
      tbl.integer("set").notNullable().unsigned();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
  // .dropTableIfExists("exercise_instance")
  // .dropTableIfExists("workout_instance")
  // .dropTableIfExists("set")
  // .dropTableIfExists("exercise_equipment")
  // .dropTableIfExists("equipment")
  // .dropTableIfExists("workout_exercise")
  // .dropTableIfExists("workout")
  // .dropTableIfExists("exercise")
  // .dropTableIfExists("user")
};

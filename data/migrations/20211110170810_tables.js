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
    .createTable("muscle", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
    })
    .createTable("muscle_exercise", (tbl) => {
      tbl
        .integer("muscle_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("muscle");
      tbl
        .integer("exercise_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("exercise");
      tbl.primary(["muscle_id", "exercise_id"]);
    })
    .createTable("workout_instance", (tbl) => {
      tbl.increments();
      tbl.date("date").notNullable().unsigned();
      tbl.integer("weight").notNullable().unsigned();
      tbl.string("name", 128).notNullable();
      //foreign key
      tbl
        .integer("workout_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("workout");
    })
    .createTable("exercise_instance", (tbl) => {
      tbl.increments();
      tbl.date("date").notNullable().unsigned();
      tbl.integer("weight").notNullable().unsigned();
      tbl.string("name", 128).notNullable();
      tbl.integer("set").notNullable().unsigned();
      //foreign key
      tbl
        .integer("workout_instance_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("workout_instance");
    })
    .createTable("set", (tbl) => {
      tbl.increments();
      tbl.integer("reps").notNullable().unsigned();
      tbl.integer("weight").notNullable().unsigned();
      tbl
        .integer("exercise_instance_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("exercise_instance");
    })
    .createTable("type", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
    })
    .createTable("exercise_type", (tbl) => {
      tbl
        .integer("exercise_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("exercise");
      tbl
        .integer("type_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("type");
      tbl.primary(["exercise_id", "type_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("exercise_type")
    .dropTableIfExists("type")
    .dropTableIfExists("exercise_instance")
    .dropTableIfExists("workout_instance")
    .dropTableIfExists("set")
    .dropTableIfExists("exercise_instance")
    .dropTableIfExists("workout_instance")
    .dropTableIfExists("exercise_equipment")
    .dropTableIfExists("equipment")
    .dropTableIfExists("workout_exercise")
    .dropTableIfExists("workout")
    .dropTableIfExists("exercise")
    .dropTableIfExists("user");
};

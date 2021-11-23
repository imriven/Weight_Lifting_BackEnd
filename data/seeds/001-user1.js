exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          user_name: "Imriven",
          email: "imriven@aol.com",
          first_name: "Tiger",
          weight: 200,
          account_created: knex.fn.now(),
        },
      ]);
    })
    .then(() => knex("exercise").truncate())
    .then(function () {
      // Inserts seed entries
      return knex("exercise").insert([
        {
          id: 1,
          name: "Crunches",
          // type: "Abdominal, Push, Core",
        },
        {
          id: 2,
          name: "Lat PullDown",
          // type: "Lats, Pull",
          // equipment: "Machine",
        },
        {
          id: 3,
          name: "Barbell Bicep Curl",
          // type: "Bicep, Push",
          // equipment: "Machine, Barbell, Dumbbell",
        },
        {
          id: 4,
          name: "Squats",
          // type: "Glutes, Hips, Quads, Hamstrings, Push",
          // equipment: "Machine, Barbell, Dumbbell",
        },
        {
          id: 5,
          name: "Deadlift",
          // type: "Glutes, Hips, Core, Trapezius Hamstrings, Pull",
          // equipment: "Machine, Barbell, Dumbbell",
        },
      ]);
    })
    .then(() => knex("equipment").truncate())
    .then(function () {
      // Inserts seed entries
      return knex("equipment").insert([
        {
          id: 1,
          name: "None",
        },
        {
          id: 2,
          name: "Lat PullDown Machine",
        },
        {
          id: 3,
          name: "Dumbbell",
        },
        {
          id: 4,
          name: "Barbell",
        },
        {
          id: 5,
          name: "Kettle Ball",
        },
        {
          id: 6,
          name: "Medicine Ball",
        },
        {
          id: 7,
          name: "Leg Press Machine",
        },
        {
          id: 8,
          name: "Squat Rack",
        },
        {
          id: 9,
          name: "Smith Machine",
        },
        {
          id: 10,
          name: "Preacher Curl Machine",
        },
      ]);
    })
    .then(() => knex("exercise_equipment").truncate())
    .then(function () {
      // Inserts seed entries
      return knex("exercise_equipment").insert([
        {
          exercise_id: 1,
          equipment_id: 1,
        },
        {
          exercise_id: 2,
          equipment_id: 2,
        },
        {
          exercise_id: 3,
          equipment_id: 4,
        },
      ]);
    })
    .then(() => knex("type").truncate())
    .then(function () {
      // Inserts seed entries
      return knex("type").insert([
        {
          id: 1,
          name: "push",
        },
        {
          id: 2,
          name: "pull",
        },
        {
          id: 3,
          name: "upper",
        },
        {
          id: 4,
          name: "lower",
        },
        {
          id: 5,
          name: "core",
        },
        {
          id: 6,
          name: "cross-training",
        },
      ]);
    })
    .then(() => knex("exercise_type").truncate())
    .then(function () {
      // Inserts seed entries
      return knex("exercise_type").insert([
        {
          exercise_id: 1,
          type_id: 1,
        },
        {
          exercise_id: 1,
          type_id: 5,
        },
        {
          exercise_id: 2,
          type_id: 2,
        },
        {
          exercise_id: 3,
          type_id: 1,
        },
        {
          exercise_id: 4,
          type_id: 1,
        },
        {
          exercise_id: 5,
          type_id: 2,
        },
      ]);
    })
    .then(() => knex("muscle").truncate())
    .then(function () {
      // Inserts seed entries
      return knex("muscle").insert([
        {
          id: 1,
          name: "abdomen",
        },
        {
          id: 2,
          name: "core",
        },
        {
          id: 3,
          name: "lats",
        },
        {
          id: 4,
          name: "biceps",
        },
        {
          id: 5,
          name: "glutes",
        },
        {
          id: 6,
          name: "hips",
        },
        {
          id: 7,
          name: "hamstrings",
        },
        {
          id: 8,
          name: "quads",
        },
        {
          id: 9,
          name: "traps",
        },
      ]);
    })
    .then(() => knex("muscle_exercise").truncate())
    .then(function () {
      // Inserts seed entries
      return knex("muscle_exercise").insert([
        {
          muscle_id: 1,
          exercise_id: 1,
        },
        {
          muscle_id: 3,
          exercise_id: 2,
        },
        {
          muscle_id: 4,
          exercise_id: 3,
        },
        {
          muscle_id: 5,
          exercise_id: 4,
        },
        {
          muscle_id: 6,
          exercise_id: 4,
        },
        {
          muscle_id: 7,
          exercise_id: 4,
        },
        {
          muscle_id: 8,
          exercise_id: 4,
        },
        {
          muscle_id: 5,
          exercise_id: 5,
        },
        {
          muscle_id: 6,
          exercise_id: 5,
        },
        {
          muscle_id: 2,
          exercise_id: 5,
        },
        {
          muscle_id: 9,
          exercise_id: 5,
        },
      ]);
    })
    .then(() => knex("workout").truncate())
    .then(function () {
      // Inserts seed entries
      return knex("workout").insert([
        {
          id: 1,
          name: "Core Blaster",
          rating: 4,
        },
        {
          id: 2,
          name: "Upper Body Split",
          rating: 3,
        },
        {
          id: 3,
          name: "Leg Day",
          rating: 5,
        },
      ]);
    })
    .then(() => knex("workout_instance").truncate())
    .then(function () {
      // Inserts seed entries
      return knex("workout_instance").insert([
        {
          id: 1,
          date: knex.fn.now(),
          notes: "Need to substitute some machine exercises for dumbbells.",
          name: "Upper Body Split Workout",
          workout_id: 2,
        },
      ]);
    })
    .then(() => knex("exercise_instance").truncate())
    .then(function () {
      // Inserts seed entries
      return knex("exercise_instance").insert([
        {
          id: 1,
          date: 1,
          weight: 1,
          name: 1,
          set: 1,
          workout_instance_id: 1,
        },
      ]);
    })
    .then(() => knex("set").truncate())
    .then(function () {
      // Inserts seed entries
      return knex("set").insert([
        {
          id: 1,
          reps: 1,
          weight: 1,
          exercise_instance_id: 1,
        },
      ]);
    });
};

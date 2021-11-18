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
    .then(() => knex("workout_instance").truncate())
    .then(function () {
      // Inserts seed entries
      return knex("workout_instance").insert([
        {
          id: 1,
          date: "January 1, 2021",
          weight: 1,
          name: 1,
          set: 1,
          workout_id: 1,
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
    });
};

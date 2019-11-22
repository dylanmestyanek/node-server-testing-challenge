
exports.seed = function(knex) {
      return knex('workers').insert([
        { name: "George", industry: "Construction", position: "Carpenter" },
        { name: "Henry", industry: "Tech", position: "Software Engineer" },
        { name: "Chris", industry: "Plumbing", position: "Plumber" },
        { name: "Bjorn", industry: "Real Estate", position: "Agent" },
        { name: "Michael", industry: "Retail", position: "Clerk" },
      ]);
};

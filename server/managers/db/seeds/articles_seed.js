
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {id: 1, content: '<h1>Article1<h1>', title: 'Article1', admin_id: 0},
        {id: 2, content: '<h1>Article2<h1>', title: 'Article2', admin_id: 0},
        {id: 3, content: '<h1>Article3<h1>', title: 'Article3', admin_id: 0},
      ]);
    });
};

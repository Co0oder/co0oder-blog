const knex = require('./db');

module.exports = {
    getList: () => knex('articles').select('id','title'),
    getOne: (id) => knex('articles').select().where('id','=', id),
}
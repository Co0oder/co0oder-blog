const config = require('config');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: config.db_dir
    },
    migrations: {
      directory: config.migrations_dir
    },
    seeds: {
      directory: config.seeds_dir
    }
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: config.db_dir
    },
    migrations: {
      directory: config.migrations_dir
    },
    seeds: {
      directory: config.seeds_dir
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: config.db_dir
    },
    migrations: {
      directory: config.migrations_dir
    },
    seeds: {
      directory: config.seeds_dir
    }
  }

};

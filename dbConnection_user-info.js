const promise = require('bluebird');

const initOptions = {
    promiseLib: promise // overriding the default (ES6 Promise);
};
const pgp = require('pg-promise')(initOptions);

const cn = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'e-commerce-db',
    user: 'admin',
    password: 'Workfrom40m319$',

    // to auto-exit on idle, without having to shut down the pool;
    // see https://github.com/vitaly-t/pg-promise#library-de-initialization
    allowExitOnIdle: true
};

const db = pgp(cn); // database instance;

const SelectQuery = async (username, password) => {
    try {
      const result = await db.any('Select * from users_info where user_name = $1 and password = $2',[username,password]);
      
      return result;
    } catch (error) {
      console.log(error);
    }
  }
const InsertQuery = async (username, password) => {
    try {
      const result = await db.none('Insert into users_info (user_name, password) values ($1, $2)', [username, password]);
      
    } catch (error) {
      console.log(error);
    }
  }

module.exports = {
    SelectQuery,
    InsertQuery
}
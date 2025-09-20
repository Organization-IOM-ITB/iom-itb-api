const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// Debug environment variables
console.log('=== Database Config Debug ===');
console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '***' : 'undefined');
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'cyeQ9o2AMoSU66uPYJkL9f4mxY8mDdRrDYbInWWqm2qWV6MEETvVDzR4Xswa2eKa',
    database: process.env.DB_DATABASE || 'iom-itb',
    host: process.env.DB_HOST || '195.110.58.17',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'cyeQ9o2AMoSU66uPYJkL9f4mxY8mDdRrDYbInWWqm2qWV6MEETvVDzR4Xswa2eKa',
    database: process.env.DB_DATABASE || 'iom-itb',
    host: process.env.DB_HOST || '195.110.58.17',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME || 'root' ,
    password: process.env.DB_PASSWORD || 'cyeQ9o2AMoSU66uPYJkL9f4mxY8mDdRrDYbInWWqm2qWV6MEETvVDzR4Xswa2eKa',
    database: process.env.DB_DATABASE || 'iom-itb',
    host: process.env.DB_HOST || '195.110.58.17',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
  },
};


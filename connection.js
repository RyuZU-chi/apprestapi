import mysql from 'mysql';

// membuat koneksi database
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbrestapi'
})

conn.connect((err) => {
  if(err) throw err;
  console.log('Database Terkoneksi')
})

module.exports = conn;
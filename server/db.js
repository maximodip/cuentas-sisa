import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'maxpsw',
  database: 'test2',
})

export const connectDB = async () => {
  pool.getConnection((err) => {
    if (err) {
      console.error('Error connecting to the database:', err)
      return
    }
    console.log('Connected to the MySQL database')
  })
}

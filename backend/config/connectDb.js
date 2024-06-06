require("dotenv").config();

const path = require("path");
const fs = require("fs");
const { Pool } = require("pg");

// Load environment variables
const { PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT } = process.env;

// Create a new pool instance
const pool = new Pool({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(path.join(__dirname, "..", "..", "ca.pem")).toString()
  }
});

// Test the connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log(
      `Connected to the database ${PGDATABASE} at:`,
      result.rows[0].now
    );
  });
});

module.exports = pool;

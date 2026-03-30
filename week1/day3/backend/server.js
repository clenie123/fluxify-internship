const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());


// CREATE customer
app.post('/customer', (req, res) => {
  const { name, email } = req.body;

  db.query(
    "INSERT INTO customer (name, email) VALUES (?, ?)",
    [name, email],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Customer created", id: result.insertId });
    }
  );
});


// READ all customers
app.get('/customer', (req, res) => {
  db.query("SELECT * FROM customer", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});


// READ one customer
app.get('/customer/:id', (req, res) => {
  db.query(
    "SELECT * FROM customer WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results[0]);
    }
  );
});


// UPDATE customer
app.put('/customer/:id', (req, res) => {
  const { name, email } = req.body;

  db.query(
    "UPDATE customer SET name = ?, email = ? WHERE id = ?",
    [name, email, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Customer updated" });
    }
  );
});


// DELETE customer
app.delete('/customer/:id', (req, res) => {
  db.query(
    "DELETE FROM customer WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Customer deleted" });
    }
  );
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
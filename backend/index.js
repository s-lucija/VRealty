import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  port: 3306,
  database: ""
});

db.connect(err => {
  if (err) {
    console.error("Greška pri spajanju na bazu:", err);
  } else {
    console.log("Spojeno na MySQL bazu.");
  }
});

app.get("/api/virtualni-obilasci", (req, res) => {
  const query = "SELECT * FROM virtualni_obilasci ORDER BY id DESC";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Greška pri dohvaćanju podataka" });
    }
    res.json(results);
  });
});

app.get("/api/virtualni-obilasci-zadnja-tri", (req, res) => {
  const query = "SELECT * FROM virtualni_obilasci ORDER BY id DESC LIMIT 3";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Greška pri dohvaćanju zadnja tri obilaska" });
    }
    res.json(results);
  });
});

app.post("/api/unos_obilaska", (req, res) => {
  const { naziv, nekretnina, opis, slika } = req.body;

  if (!naziv || !nekretnina) {
    return res.status(400).json({ error: "Naziv i Nekretnina su obavezni." });
  }

  db.query("SELECT MAX(id) AS maxId FROM virtualni_obilasci", (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Greška pri dohvaćanju najvećeg ID-a." });
    }

    const nextId = (rows[0].maxId || 0) + 1;

    const query = "INSERT INTO virtualni_obilasci (id, naziv, nekretnina, opis, slika) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [nextId, naziv, nekretnina, opis, slika], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Greška pri dodavanju obilaska." });
      }

      const newObilazak = {
        id: nextId,
        naziv,
        nekretnina,
        opis,
        slika
      };

      res.json(newObilazak);
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
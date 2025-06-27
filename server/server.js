
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let players = [];
let matches = [];

app.post("/join", (req, res) => {
  const name = req.body.name;
  if (!players.includes(name)) players.push(name);
  if (players.length > 2) players = players.slice(-2);
  res.json({ player1: players[0], player2: players[1] || null });
});

app.post("/start", (req, res) => {
  if (players.length === 2) {
    matches.push({ p1: players[0], p2: players[1] });
    res.json({ status: "started" });
  } else {
    res.status(400).json({ error: "Warte auf 2 Spieler" });
  }
});

app.get("/matches", (req, res) => {
  res.json(matches);
});

app.get("/admin", (req, res) => {
  res.send("<h1>Admin-Panel</h1><p>Gespeicherte Matches: " + matches.length + "</p>");
});

app.listen(10000, () => {
  console.log("Server läuft auf Port 10000");
});

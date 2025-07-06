const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const headlines = require("./headlines");

app.use(cors());
app.use(express.json());

app.post("/business-data", (req, res) => {
  const { name, location } = req.body;

  const data = {
    name,
    location,
    rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
    reviews: Math.floor(Math.random() * 500),
    headline: headlines[0],
  };

  res.json(data);
});

app.get("/regenerate-headline", (req, res) => {
  const randomHeadline =
    headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline: randomHeadline });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});

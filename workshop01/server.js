import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const PORT = process.env.port || 8081;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const QUOTES = [
  "Logic will get you from A to B. Imagination will take you everywhere.",
  "There are 10 kinds of people. Those who know binary and those who don't.",
  "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
  "It's not that I'm so smart, it's just that I stay with problems longer.",
  "It is pitch dark. You are likely to be eaten by a grue.",
];
app.use(express.static(path.join(__dirname, 'my-app', 'build')));

app.get("/api/getQuote", (req, res) => {
  const randomQuote = QUOTES[getRandomArbitrary(0, 5)];
  res.json({ quote: randomQuote });
});

app.get("/api/getImageURL", (req, res) => {
  res.json({ imageURL: "https://www.svgrepo.com/show/30963/cookie.svg" });
});


app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});

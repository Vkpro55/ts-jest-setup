import express from "express";

export const app = express();
app.use(express.json());

export function sum(a: number, b: number) {
  return a + b;
}

app.post("/sum", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const answer = a + b;

  res.json({
    answer,
  });
});

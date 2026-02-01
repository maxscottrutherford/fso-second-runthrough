import express from "express";
import { calculateBmi, BmiValues } from "./bmiCalculator";
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello World!");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!req.query.height || !req.query.weight) {
    return res.status(400).json({ error: "missing parameters" });
  }

  if (isNaN(height) || isNaN(weight)) {
    return res.status(400).json({ error: "malformatted parameters "});
  }

  const values: BmiValues = { height, weight };
  const bmi = calculateBmi(values.height, values.weight);

  return res.json({ height: values.height, weight: values.weight, bmi});
})

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

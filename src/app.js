import express from "express";

const app = express();

//* mock
const selections = [
  {
    id: 1,
    selection: "Brasil",
    group: "G",
  },
  {
    id: 2,
    selection: "Portugal",
    group: "G",
  },
  {
    id: 3,
    selection: "Espanha",
    group: "G",
  },
  {
    id: 4,
    selection: "Italia",
    group: "G",
  },
];

//* default route or root route
app.get("/", (req, res) => {
  res.send("default route ");
});

//* section route
app.get("/selections", (req, res) => {
  res.status(200).send(
    selections
  );
});

export default app;

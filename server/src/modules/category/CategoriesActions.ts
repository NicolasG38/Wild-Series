const categories = [
  {
    id: 1,
    name: "Comedy",
  },
  {
    id: 2,
    name: "Sience-Fiction",
  },
];

// Declare the action

import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filtedPrograms = categories.filter((program) =>
      program.name.includes(req.query.q as string),
    );
    res.json(filtedPrograms);
  } else {
    res.json(categories);
  }
  res.json(categories);
};

const read: RequestHandler = (req, res) => {
  const parseId = Number.parseInt(req.params.id);

  const categorie = categories.find((p) => p.id === parseId);
  if (categorie != null) {
    res.json(categorie);
  } else {
    res.sendStatus(404).send("Program not found");
  }
};

// Export it to import it somewhere else
export default { browse, read };

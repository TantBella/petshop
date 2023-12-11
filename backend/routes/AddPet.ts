import express from 'express';
import { client } from '../index';

const router = express.Router();

router.get('/addpet', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM petstore');
    console.log("Hämtar alla djur");
    response.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    response.status(500).send('Internal Server Error');
  }
});

router.post("/addpet", async (req, res) => {
  console.log(req.body);

  const { name, animal, color, age, price } = req.body;
  console.log(name, animal, color, age, price);

  if (!name || !animal || !color || !age || !price) {
    return res.status(400).send("Alla fält är inte ifyllda");
  }

  try {
    console.log("Received values in backend:", { name, animal, color, age, price });

    const postQuery = `
      INSERT INTO petstore (name, animal, color, age, price)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const values = [name, animal, color, age, price];

    const result = await client.query(postQuery, values);

    if (result.rows.length > 0) {
      res.status(201).json(result.rows[0]);
    } else {
      res.status(500).send("Misslyckades med att lägga in data");
    }
  } catch (error) {
    console.error("Error går ej att posta:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;

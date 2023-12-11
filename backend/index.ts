import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { Client } from 'pg';
import buypet from './routes/BuyPet';
import showpet from './routes/ShowPet';
import addpet from './routes/AddPet'

const port = process.env.PORT || 3000;

dotenv.config();

export const client = new Client({
  connectionString: process.env.PGURI,
});

const app = express();

app.use(cors());
app.use(express.json());


client.connect();

app.use(showpet);
app.use(addpet);
app.use(buypet);

app.get('/api', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM petstore');
    response.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    response.status(500).send('Internal Server Error');
  }
});

app.use(express.static(path.join(path.resolve(), 'dist')));

app.listen(3000, () => {
  console.log(`Välkommen till port ${port}`);
});

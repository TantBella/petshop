import express from 'express';
import { client } from '../index';

const router = express.Router();

router.get('/buypet', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM petstore');
    console.log("Hämtar alla djur");
    response.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    response.status(500).send('Internal Server Error');
  }
});

router.delete('/buypet', async (req, res) => {
  try {
    const { id } = req.body;

    const result = await client.query('DELETE FROM petstore WHERE id = $1;', [id]);

    if (result && result.rowCount != null) {
      if (result.rowCount > 0) {
        res.status(200).json({ success: true, message: 'Djuret är köpt.' });
      } else {
        res.status(404).json({
          success: false,
          message: 'Djuret hittades inte. Det har rymt! Vad ska i ta oss till??',
        });
      }
    } else {
      res.status(500).json({ success: false, message: 'Något gick fel.' });
    }
  } catch (error) {
    console.error('Error deleting pet', error);
    res.status(500).json({ success: false, message: 'Något gick fel.' });
  }
});

export default router;

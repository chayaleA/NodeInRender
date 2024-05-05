import express from 'express'
import cors from "cors"
import bodyParser from "body-parser";
import sdk from '@api/render-api';

const app = express()

const RENDER_API_KEY = 'rnd_6P9iImcHMO8eeP0PCoLMhbU88bfj'

app.use(cors());

app.use(bodyParser.json());

const port = 3000

app.get('/', async (req, res) => {
    sdk.auth(RENDER_API_KEY);
    sdk.getServices({limit: '20'})
      .then(({ data }) =>  res.json(data))
      .catch(err => console.error(err));
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})



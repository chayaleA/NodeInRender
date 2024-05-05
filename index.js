import express from 'express'
import cors from "cors"
import bodyParser from "body-parser";
import fetch from 'node-fetch';

const app = express()

const RENDER_API_KEY = 'rnd_6P9iImcHMO8eeP0PCoLMhbU88bfj'

app.use(cors());

app.use(bodyParser.json());

const port = 3000

app.get('/', async (req, res) => {
    try {
        const renderResponse = await fetch('https://api.render.com/v1/services?limit=20', {
            headers: {
                'header': 'accept: application/json',
                'Authorization': `Bearer ${RENDER_API_KEY}`
            }
        });

        if (!renderResponse.ok) {
            throw new Error('Failed to fetch data from Render API');
        }
        const renderApps = await renderResponse;
        res(renderApps);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500)('error: Failed to fetch data');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})



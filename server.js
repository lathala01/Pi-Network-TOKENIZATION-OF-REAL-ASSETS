// backend/server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/tokenize', (req, res) => {
    const { asset, quantity } = req.body;
    res.send(`Tokenized ${quantity} of ${asset}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

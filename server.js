const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');
app.use(cors());

const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
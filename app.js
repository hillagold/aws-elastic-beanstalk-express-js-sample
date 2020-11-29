const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hilla is in the house and no one can STOP her now!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

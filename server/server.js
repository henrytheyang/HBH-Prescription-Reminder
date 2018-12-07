const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('Hello, world!'));
app.use(express.static('dist'));

app.listen(port, () => console.log(`Server is now listening on port ${port}!`));
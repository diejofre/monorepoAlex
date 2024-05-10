const express = require('express');

const PORT = 3002

const app = express();

app.get('/api', (req, res) => {
  console.log('GET /api');
  res.send({ data: 'Hello World!!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

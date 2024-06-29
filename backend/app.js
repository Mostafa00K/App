const express = require('express');
const app = express();
const db = require('./model/index');
const routes = require('./routes/route');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api', routes);


  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });


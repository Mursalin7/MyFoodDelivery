const bodyParser = require('body-parser');
const path = require('path');
const express =require('express') 
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/restaurants', (req, res) => {
  res.send({ name: 'Lazeez' });
});

app.post('/api/orders', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

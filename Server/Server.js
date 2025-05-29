const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const server = express();
server.use(cors());
server.use(bodyParser.json());

// MongoDB connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB');
}

// Mongoose schema and model
const portfoliodata = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});
const Portfolio = mongoose.model('Portfolio', portfoliodata);

// POST endpoint
server.post('/PortfolioData', (req, res) => {
  const newPortfolio = new Portfolio({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  newPortfolio.save()
    .then(doc => {
      console.log('Data received:', doc);
      res.send('Data saved successfully');
    })
    .catch(err => {
      console.error('Error saving data:', err);
      res.status(500).send('Error saving data');
    });
});

// Start server
server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

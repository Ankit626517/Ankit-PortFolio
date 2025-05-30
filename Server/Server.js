// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// dotenv.config();

// const server = express();
// server.use(express.json());

// // CORS setup — allow frontend origin explicitly (replace with your frontend URL)
// const allowedOrigins = ['https://personal-portfolio-react-dhf1.vercel.app'];
// console.log('Allowed Origins:', allowedOrigins);

// server.use(cors({
//   origin: function(origin, callback) {
//     // allow requests with no origin (like Postman)
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));

// // MongoDB Schema and Model
// const portfoliodata = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
// });

// const Portfolio = mongoose.model('Portfolio', portfoliodata);

// // POST route
// server.post('/PortfolioData', async (req, res) => {
//   const { name, email, message } = req.body;
//   console.log('Received data:', req.body);

//   const newPortfolio = new Portfolio({ name, email, message });

//   try {
//     const savedDoc = await newPortfolio.save();
//     console.log('📩 Data saved:', savedDoc);
//     res.status(200).send('✅ Data saved successfully');
//   } catch (err) {
//     console.error('❌ Error saving data:', err);
//     res.status(500).send({ error: 'Error saving data', details: err.message });
//   }
// });

// server.get('/health', (_, res) => {
//   res.send({ mongoState: mongoose.connection.readyState });
// });


// // Connect to MongoDB and start server
// async function main() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('✅ Connected to MongoDB');

//     const PORT = process.env.PORT || 3000;
//     server.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });

//   } catch (err) {
//     console.error('❌ MongoDB connection error:', err);
//     process.exit(1);
//   }
// }

// main();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const server = express();
server.use(express.json());

// ✅ Allow only your frontend origin
const allowedOrigins = ['https://personal-portfolio-react-dhf1.vercel.app'];

server.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow tools like Postman
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// ✅ MongoDB Schema
const portfoliodata = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Portfolio = mongoose.model('Portfolio', portfoliodata);

// ✅ POST route
server.post('/PortfolioData', async (req, res) => {
  const { name, email, message } = req.body;
  const newPortfolio = new Portfolio({ name, email, message });

  try {
    const savedDoc = await newPortfolio.save();
    res.status(200).send('✅ Data saved successfully');
  } catch (err) {
    res.status(500).send({ error: 'Error saving data', details: err.message });
  }
});

// ✅ Health Check Route
server.get('/health', (_, res) => {
  res.send({ mongoState: mongoose.connection.readyState });
});

// ✅ MongoDB Connection + Start Server
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
}

main();

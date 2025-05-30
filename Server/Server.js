// backend/index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const server = express();
server.use(express.json());

// ✅ Allow specific frontend origin (your Vercel frontend domain)
const allowedOrigins = ['https://personal-portfolio-react-dhf1.vercel.app'];

server.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman etc.
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(
        new Error(`❌ CORS policy does not allow access from origin: ${origin}`),
        false
      );
    }
  }
}));

// ✅ MongoDB schema and model
const portfolioSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// ✅ POST route
server.post('/PortfolioData', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('📥 Received:', req.body);

  const newEntry = new Portfolio({ name, email, message });

  try {
    const savedDoc = await newEntry.save();
    console.log('✅ Saved:', savedDoc);
    res.status(200).send('✅ Message saved successfully');
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).send({ error: 'Error saving message', details: err.message });
  }
});

// ✅ Health route (optional)
server.get('/health', (_, res) => {
  res.send({ mongoState: mongoose.connection.readyState });
});

// ✅ Connect to MongoDB and start server
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

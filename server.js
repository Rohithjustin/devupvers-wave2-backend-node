const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// ✅ Import model
const User = require('./models/User');

// ✅ Create User (POST)
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body); // body: { name, email }
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get All Users (GET)
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

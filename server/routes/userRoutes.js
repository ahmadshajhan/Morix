const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User registration
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    res.json({ 
      message: 'Login successful',
      isPremium: user.isPremium 
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
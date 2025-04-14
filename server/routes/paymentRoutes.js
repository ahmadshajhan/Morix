const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Process payment and upgrade to premium
router.post('/upgrade', async (req, res) => {
  try {
    const { email, paymentId } = req.body;
    
    // In a real app, verify payment with payment gateway
    const user = await User.findOneAndUpdate(
      { email },
      { isPremium: true, paymentId },
      { new: true }
    );
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ 
      message: 'Upgraded to premium successfully',
      isPremium: user.isPremium 
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
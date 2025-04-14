const express = require('express');
const router = express.Router();
const axios = require('axios');
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

// Generate fake AI signals
router.get('/generate', async (req, res) => {
  try {
    // Get real crypto data from CoinGecko
    const { data } = await CoinGeckoClient.coins.markets({
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 20,
      page: 1,
      sparkline: false
    });

    const coins = data.map(coin => coin.symbol.toUpperCase());
    const randomCoin = coins[Math.floor(Math.random() * coins.length)];
    const randomAction = Math.random() > 0.5 ? 'BUY' : 'SELL';
    const randomAccuracy = (Math.random() * 30 + 70).toFixed(2); // 70-100%
    const randomPriceChange = (Math.random() * 10 - 2).toFixed(2); // -2% to +8%
    
    const signal = {
      coin: randomCoin,
      action: randomAction,
      accuracy: randomAccuracy,
      priceChange: randomPriceChange,
      timestamp: new Date(),
      confidence: Math.floor(Math.random() * 5) + 1 // 1-5 stars
    };

    res.json(signal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate signal' });
  }
});

// Get historical signals (for premium users)
router.get('/history', (req, res) => {
  // In a real app, you'd fetch from database
  const history = Array(10).fill().map((_, i) => {
    const coins = ['BTC', 'ETH', 'SOL', 'ADA', 'DOT', 'AVAX', 'MATIC', 'DOGE'];
    const randomCoin = coins[Math.floor(Math.random() * coins.length)];
    const randomAction = Math.random() > 0.5 ? 'BUY' : 'SELL';
    const randomAccuracy = (Math.random() * 30 + 70).toFixed(2);
    const randomPriceChange = (Math.random() * 10 - 2).toFixed(2);
    
    return {
      coin: randomCoin,
      action: randomAction,
      accuracy: randomAccuracy,
      priceChange: randomPriceChange,
      timestamp: new Date(Date.now() - i * 3600000),
      confidence: Math.floor(Math.random() * 5) + 1,
      isPremium: i < 3 // First 3 are premium
    };
  });
  
  res.json(history);
});

module.exports = router;
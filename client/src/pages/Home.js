import React, { useState, useEffect } from 'react';
import styled from 'animated-styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';
import SignalDisplay from '../components/SignalDisplay';
import TradingViewWidget from '../components/TradingViewWidget';
import StatsPanel from '../components/StatsPanel';
import Testimonials from '../components/Testimonials';
import AffiliateBanner from '../components/AffiliateBanner';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 2rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #aaa;
`;

const SignalContainer = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #333;
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
`;

function Home() {
  const [signal, setSignal] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(1024);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate online users count
    const interval = setInterval(() => {
      setOnlineUsers(prev => prev + Math.floor(Math.random() * 10 - 3));
    }, 5000);

    // Fetch initial signal
    fetchSignal();

    // Auto-refresh signal every 30 seconds
    const signalInterval = setInterval(fetchSignal, 30000);

    return () => {
      clearInterval(interval);
      clearInterval(signalInterval);
    };
  }, []);

  const fetchSignal = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/signals/generate');
      setSignal(response.data);
    } catch (err) {
      console.error('Error fetching signal:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Morix AI Crypto Signals
      </Title>
      
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Powered by advanced artificial intelligence with 87.3% accuracy rate
      </Subtitle>
      
      <SignalContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SignalDisplay 
          signal={signal} 
          isLoading={isLoading} 
          onlineUsers={onlineUsers} 
        />
      </SignalContainer>
      
      <TradingViewWidget />
      
      <StatsPanel />
      
      <Testimonials />
      
      <AffiliateBanner />
    </Container>
  );
}

export default Home;
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBitcoin, FaArrowUp, FaArrowDown, FaUsers } from 'react-icons/fa';

const SignalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoinIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.action === 'BUY' ? '#4CAF50' : '#F44336'};
`;

const SignalText = styled(motion.div)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${props => props.action === 'BUY' ? '#4CAF50' : '#F44336'};
`;

const AccuracyText = styled.div`
  font-size: 1.2rem;
  color: #aaa;
  margin-bottom: 1rem;
`;

const ConfidenceMeter = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  
  span {
    color: ${props => props.confidence >= 1 ? '#FFD700' : '#555'};
    margin: 0 2px;
    font-size: 1.5rem;
  }
`;

const OnlineUsers = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #aaa;
  
  svg {
    margin-right: 5px;
  }
`;

function SignalDisplay({ signal, isLoading, onlineUsers }) {
  if (isLoading) {
    return (
      <SignalBox>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Analyzing market data with AI...</p>
      </SignalBox>
    );
  }

  if (!signal) {
    return (
      <SignalBox>
        <p>Failed to load signal. Please try again.</p>
      </SignalBox>
    );
  }

  return (
    <SignalBox>
      <CoinIcon action={signal.action}>
        {signal.coin === 'BTC' ? <FaBitcoin /> : 
         signal.action === 'BUY' ? <FaArrowUp /> : <FaArrowDown />}
      </CoinIcon>
      
      <SignalText 
        action={signal.action}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500 }}
      >
        {signal.coin} {signal.action} SIGNAL
      </SignalText>
      
      <AccuracyText>
        AI Confidence: {signal.accuracy}% Accuracy
      </AccuracyText>
      
      <ConfidenceMeter confidence={signal.confidence}>
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star}>★</span>
        ))}
      </ConfidenceMeter>
      
      <OnlineUsers>
        <FaUsers /> {onlineUsers.toLocaleString()} traders viewing signals
      </OnlineUsers>
    </SignalBox>
  );
}

export default SignalDisplay;
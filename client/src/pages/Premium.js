import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaCrown, FaCheck, FaLock } from 'react-icons/fa';

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #FFD700;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: 10px;
  }
`;

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const PlanCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid ${props => props.featured ? '#FFD700' : '#333'};
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  ${props => props.featured && `
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  `}
`;

const PlanTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.featured ? '#FFD700' : '#fff'};
`;

const PlanPrice = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${props => props.featured ? '#FFD700' : '#00dbde'};
  
  span {
    font-size: 1rem;
    color: #aaa;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: ${props => props.disabled ? '#555' : '#4CAF50'};
  }
`;

const UpgradeButton = styled(motion.button)`
  background: ${props => props.featured ? 
    'linear-gradient(90deg, #FFD700, #FFA500)' : 
    'linear-gradient(90deg, #00dbde, #fc00ff)'};
  color: #000;
  border: none;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: 8px;
  }
`;

function Premium() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpgrade = async (plan) => {
    setIsProcessing(true);
    try {
      // In a real app, you would integrate with a payment gateway here
      // For demo purposes, we'll just simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to payment success page or show success message
      alert(`Successfully upgraded to ${plan} plan!`);
    } catch (err) {
      console.error('Payment error:', err);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaCrown /> Upgrade to Premium
      </Title>
      
      <PlansContainer>
        <PlanCard
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PlanTitle>Monthly</PlanTitle>
          <PlanPrice>$9.99 <span>/ month</span></PlanPrice>
          
          <FeatureList>
            <FeatureItem><FaCheck /> All Free Features</FeatureItem>
            <FeatureItem><FaCheck /> Premium Signals</FeatureItem>
            <FeatureItem><FaCheck /> Early Access to New Features</FeatureItem>
            <FeatureItem><FaCheck /> Priority Support</FeatureItem>
            <FeatureItem><FaCheck /> Detailed Analysis Reports</FeatureItem>
          </FeatureList>
          
          <UpgradeButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleUpgrade('monthly')}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Upgrade Now'}
          </UpgradeButton>
        </PlanCard>
        
        <PlanCard
          featured
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PlanTitle featured>Yearly</PlanTitle>
          <PlanPrice featured>$99 <span>/ year</span></PlanPrice>
          <div style={{ color: '#FFD700', marginBottom: '1rem' }}>Save 17%</div>
          
          <FeatureList>
            <FeatureItem><FaCheck /> All Monthly Features</FeatureItem>
            <FeatureItem><FaCheck /> Exclusive VIP Signals</FeatureItem>
            <FeatureItem><FaCheck /> Personal Account Manager</FeatureItem>
            <FeatureItem><FaCheck /> Advanced AI Customization</FeatureItem>
            <FeatureItem><FaCheck /> Weekly 1-on-1 Consultations</FeatureItem>
          </FeatureList>
          
          <UpgradeButton
            featured
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleUpgrade('yearly')}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : (
              <>
                <FaCrown /> Get VIP Access
              </>
            )}
          </UpgradeButton>
        </PlanCard>
        
        <PlanCard
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PlanTitle>Lifetime</PlanTitle>
          <PlanPrice>$499 <span>/ one time</span></PlanPrice>
          <div style={{ color: '#00dbde', marginBottom: '1rem' }}>Best Value</div>
          
          <FeatureList>
            <FeatureItem><FaCheck /> All Yearly Features</FeatureItem>
            <FeatureItem><FaCheck /> Lifetime Access</FeatureItem>
            <FeatureItem><FaCheck /> Exclusive Alpha Group</FeatureItem>
            <FeatureItem><FaCheck /> Custom AI Model Training</FeatureItem>
            <FeatureItem><FaCheck /> Private Trading Sessions</FeatureItem>
          </FeatureList>
          
          <UpgradeButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleUpgrade('lifetime')}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Get Lifetime Access'}
          </UpgradeButton>
        </PlanCard>
      </PlansContainer>
    </Container>
  );
}

export default Premium;
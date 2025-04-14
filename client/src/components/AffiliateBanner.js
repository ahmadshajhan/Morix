import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExchangeAlt, FaPercentage } from 'react-icons/fa';

const Container = styled(motion.div)`
  background: linear-gradient(90deg, #1a1a2e, #16213e);
  border: 1px solid #333;
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #aaa;
  margin-bottom: 1.5rem;
  max-width: 600px;
`;

const Benefits = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
`;

const Button = styled(motion.a)`
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  color: #000;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
`;

function AffiliateBanner() {
  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Title>Start Trading with Our Partner Exchanges</Title>
      <Description>
        Get the best trading experience with our recommended exchanges. Sign up through our links to get exclusive benefits.
      </Description>
      
      <Benefits>
        <BenefitItem>
          <FaPercentage /> Lower trading fees
        </BenefitItem>
        <BenefitItem>
          <FaExchangeAlt /> Faster withdrawals
        </BenefitItem>
      </Benefits>
      
      <Button
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Sign Up Now
      </Button>
    </Container>
  );
}

export default AffiliateBanner;
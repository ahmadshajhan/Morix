import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatsContainer = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #333;
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
`;

const StatsTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: rgba(20, 20, 20, 0.8);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #aaa;
`;

function StatsPanel() {
  const data = {
    labels: ['BTC', 'ETH', 'SOL', 'ADA', 'DOT', 'AVAX'],
    datasets: [
      {
        label: 'Last Week Accuracy',
        data: [82, 78, 85, 76, 80, 83],
        backgroundColor: 'rgba(0, 219, 222, 0.7)',
      },
      {
        label: 'This Week Accuracy',
        data: [87, 83, 89, 81, 85, 88],
        backgroundColor: 'rgba(252, 0, 255, 0.7)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'AI Prediction Accuracy by Coin',
        color: '#fff',
      },
    },
    scales: {
      y: {
        ticks: {
          color: '#aaa',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        ticks: {
          color: '#aaa',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  return (
    <StatsContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <StatsTitle>Morix AI Performance Metrics</StatsTitle>
      
      <StatsGrid>
        <StatCard>
          <StatValue>87.3%</StatValue>
          <StatLabel>Overall Accuracy</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>1,024+</StatValue>
          <StatLabel>Daily Signals</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>24.7K</StatValue>
          <StatLabel>Traders Using</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>93%</StatValue>
          <StatLabel>User Satisfaction</StatLabel>
        </StatCard>
      </StatsGrid>
      
      <Bar options={options} data={data} />
    </StatsContainer>
  );
}

export default StatsPanel;
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Container = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #333;
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const TestimonialCard = styled.div`
  background: rgba(20, 20, 20, 0.8);
  border-radius: 10px;
  padding: 1.5rem;
`;

const Quote = styled.div`
  color: #aaa;
  font-style: italic;
  margin-bottom: 1rem;
  position: relative;
  
  svg {
    color: #333;
    font-size: 2rem;
    position: absolute;
    top: -10px;
    left: -10px;
    z-index: -1;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.div`
  font-weight: bold;
`;

const AuthorTitle = styled.div`
  font-size: 0.8rem;
  color: #aaa;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  color: #FFD700;
`;

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Morix AI helped me increase my portfolio by 300% in just 3 months. The signals are incredibly accurate!",
      name: "John C.",
      title: "Crypto Trader",
      rating: 5
    },
    {
      id: 2,
      quote: "I've tried many signal services, but Morix stands out with its AI-powered predictions. Worth every penny!",
      name: "Sarah L.",
      title: "Day Trader",
      rating: 5
    },
    {
      id: 3,
      quote: "The premium features give me an edge in this volatile market. Highly recommended for serious traders.",
      name: "Mike T.",
      title: "Investor",
      rating: 4
    }
  ];

  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <Title>What Our Users Say</Title>
      
      <TestimonialsGrid>
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id}>
            <Quote>
              <FaQuoteLeft />
              {testimonial.quote}
            </Quote>
            
            <Author>
              <AuthorAvatar>
                {testimonial.name.charAt(0)}
              </AuthorAvatar>
              
              <AuthorInfo>
                <AuthorName>{testimonial.name}</AuthorName>
                <AuthorTitle>{testimonial.title}</AuthorTitle>
              </AuthorInfo>
              
              <Stars>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </Stars>
            </Author>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </Container>
  );
}

export default Testimonials;
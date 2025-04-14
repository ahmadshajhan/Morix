import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem;
`;

const FormContainer = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #333;
  border-radius: 15px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(10px);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #aaa;
`;

const Input = styled.input`
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid #333;
  border-radius: 5px;
  padding: 0.8rem;
  color: #fff;
  
  &:focus {
    outline: none;
    border-color: #00dbde;
  }
`;

const Button = styled(motion.button)`
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  color: #000;
  border: none;
  padding: 0.8rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
`;

const RegisterLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #aaa;
  
  a {
    color: #00dbde;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <Container>
      <FormContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Login to Morix AI</Title>
        
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Email</Label>
            <Input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </InputGroup>
          
          <InputGroup>
            <Label>Password</Label>
            <Input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </InputGroup>
          
          <Button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            Login
          </Button>
        </Form>
        
        <RegisterLink>
          Don't have an account? <Link to="/register">Register</Link>
        </RegisterLink>
      </FormContainer>
    </Container>
  );
}

export default Login;
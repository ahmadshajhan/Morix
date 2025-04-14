import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBitcoin } from 'react-icons/fa';

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.7);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #333;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #00dbde;
  
  svg {
    margin-right: 10px;
    color: #fc00ff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: #fff;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const LoginButton = styled(Link)`
  padding: 0.5rem 1rem;
  border: 1px solid #333;
  border-radius: 5px;
  color: #aaa;
  text-decoration: none;
`;

const SignupButton = styled(Link)`
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  border-radius: 5px;
  color: #000;
  font-weight: bold;
  text-decoration: none;
`;

function Navbar() {
  return (
    <Nav>
      <Logo>
        <FaBitcoin /> Morix AI
      </Logo>
      
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/premium">Premium</NavLink>
      </NavLinks>
      
      <AuthButtons>
        <LoginButton to="/login">Login</LoginButton>
        <SignupButton to="/register">Sign Up</SignupButton>
      </AuthButtons>
    </Nav>
  );
}

export default Navbar;
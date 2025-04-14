import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaTelegram, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border-top: 1px solid #333;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: #aaa;
  font-size: 1.5rem;
  transition: color 0.3s;
  
  &:hover {
    color: #fff;
  }
`;

const Copyright = styled.p`
  color: #555;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="#"><FaTwitter /></SocialLink>
        <SocialLink href="#"><FaTelegram /></SocialLink>
        <SocialLink href="#"><FaGithub /></SocialLink>
      </SocialLinks>
      <Copyright>© {new Date().getFullYear()} Morix AI. All rights reserved.</Copyright>
    </FooterContainer>
  );
}

export default Footer;
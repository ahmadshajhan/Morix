import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import styled from 'styled-components';
import Home from './pages/Home';
import Premium from './pages/Premium';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: #000;
  color: #fff;
  overflow-x: hidden;
`;

const ThreeDBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <ThreeDBackground>
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
          </Canvas>
        </ThreeDBackground>
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <>
  
  <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-primary text-white text-center d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: '60vh', padding: '3rem 1rem' }}
    >
      <img src="/logo.png" alt="SoftSell Logo" style={{ height: '40px' }} className="mb-3" />
      <h1 className="display-4 fw-bold">Welcome to <span className="text-warning">SoftSell</span></h1>
      <p className="lead mb-4">Maximize the value of your unused software licenses with ease.</p>
      <button className="btn btn-light btn-lg shadow-sm px-4 py-2">Get a Quote</button>
    </motion.section>
    </>
  );
};


export default HeroSection
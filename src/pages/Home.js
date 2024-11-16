import React from 'react'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <motion.div
    className='home'
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
        <h2>Welcome to the Event Management System</h2>
        <p>Manage events, registrations, and attendees with ease.</p>
    </motion.div>
  );
}

export default Home;
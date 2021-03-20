import React from 'react'
import { motion } from 'framer-motion'

export default function TransitionPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  )
}

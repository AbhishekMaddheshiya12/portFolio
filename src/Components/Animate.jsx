import React from 'react'
import { motion } from 'framer-motion'

function Animate() {
  return (
    <motion.div className='flex items-center justify-center'>
        <motion.div  className='h-16 w-8 rounded-2xl border-2 border-white flex  justify-center'>
            <motion.div animate={{y: [5, 45, 5]}} transition={{repeat: Infinity, duration: 2}} className='w-3 h-3 rounded-full bg-white'/>
        </motion.div>
    </motion.div>
  )
}

export default Animate
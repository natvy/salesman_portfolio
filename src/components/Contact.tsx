// src/components/Contact.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";


export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center min-h-screen"
    >
        <h4 className="text-xl font-semibold mb-4">no...</h4>
        <Image src="/images/notyet.jpg" alt="Your Image" width={500} height={300} />
        <h4 className="text-xl font-semibold mb-4">not yet.</h4>
    </motion.div>

    

    );
}
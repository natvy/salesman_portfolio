// src/components/Projects.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";


export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center min-h-screen"
    >
        <h4 className="text-xl font-semibold mb-4">Creo que podriamos eliminar esta seccion</h4>
        <Image src="/images/fotormd.jpg" alt="Your Image" width={500} height={300} />
        <h4 className="text-xl font-semibold mb-4">Los proyectos ya salen en Home</h4>
    </motion.div>

    

    );
}


"use client";
import { motion } from "motion/react";

type SlideProps = {
  children: React.ReactNode;
};


export default function Slide({ children }: SlideProps) {
  return (
    <motion.section 
    initial={{ opacity: 0, y:20 }}
    animate={{ opacity: 1, y:0}}
    exit={{ opacity: 0, y:-20 }}
    className="flex flex-col items-center justify-center min-h-screen"
    >
        {children}
    </motion.section>
  );
}
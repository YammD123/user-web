"use client";
import { motion } from "framer-motion";
import React from "react";
import { Search } from "lucide-react"

export default function NoResult() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center h-full w-full text-lg text-gray-500 gap-4"
    >
      <Search className="w-12 h-12 text-gray-400 animate-bounce" />
      Tidak Ada Product Yang Ditemukan
    </motion.div>
  );
}

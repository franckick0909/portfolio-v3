"use client";

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  isSuccess: boolean;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message, isSuccess }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className={`text-6xl font-bold mb-4 font-marcellus text-center ${isSuccess ? 'text-emerald-500' : 'text-red-600'}`}>
          {isSuccess ? 'Succès' : 'Erreur'}
        </h2>
        <p className="mb-6 text-center">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
        >
          Fermer
        </button>
      </motion.div>
    </div>
    </AnimatePresence>
  );
};

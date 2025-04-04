"use client"; 
import React from "react";


const Texto = ({ text }: { text : string }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm text-center">
        <p className="text-lg md:text-xl font-semibold text-gray-700 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Texto;

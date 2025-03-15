"use client"; 
import { useState } from "react";
import dasdas from "cartas/10E.jpg";

export default function Magica({ carta }: { carta : string }) {

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
    
          <img src={`/cartas/${carta}.jpg`} className="mt-2 w-full h-auto"   />
  
    
    </div>
  );
}
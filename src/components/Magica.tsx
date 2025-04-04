"use client"; 


export default function Magica({ carta }: { carta : string }) {

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
    
          <img src={`/cartas/PNG-cards-1.3/${carta}.png`} className="mt-2 w-full h-auto"   />
  
    
    </div>
  );
}
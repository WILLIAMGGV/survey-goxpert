import React, { useState } from "react";
import Rating from "./components/rating/Rating";
import { Star } from "lucide-react";
import Rating10 from "./components/rating/Ranting10";

function App() {

  const verrespuesta = () => {
    console.log(document.getElementById("respuesta1").value)
    console.log(document.getElementById("respuesta2").value)

  }

  return (
    <div>
      <Rating value={0} onChange={0} showValue size={28} preg={1} />
      <Rating10 
                value={0} 
                onChange={0} 
                showValue 
                size={40} 
                preg={2}
              />
      <button type="button" onClick={() => {
      verrespuesta();
      }}>VER RESPUESTA</button>
    </div>
  );
}

export default App;

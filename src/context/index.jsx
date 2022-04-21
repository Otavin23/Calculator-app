import React, { createContext, useState } from "react";

export const CreateContext = createContext({});

export function CalculadoraProvider({ children }) {
  const [number, setNumber] = useState("");
  const [cont, setCont] = useState(0);

  function Click({ target }) {
    setNumber((anterior) => anterior.concat(target.value));
  }

  function DeletNumber() {
    const EndNumberr = number.slice(0, -1);
    setNumber(EndNumberr);
  }
  function ResetNumber() {
    setNumber("");
  }

  function ResultNumber() {
    const resultado = number.replace("x", ",*");
    const transformArray = resultado.split("");

    var index = resultado.indexOf(",");

    var a = resultado.substring(0, index);
    var b = resultado.substring(index + 2);
 
    transformArray.map((el)=> {
       if(el.includes("*")){
          const multi = a * b 
          setNumber(multi)
       }
    })

  }

  const valor = {
    Click,
    number,
    DeletNumber,
    ResetNumber,
    ResultNumber,
  };

  return (
    <CreateContext.Provider value={valor}>{children}</CreateContext.Provider>
  );
}

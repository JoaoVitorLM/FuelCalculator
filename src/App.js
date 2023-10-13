import React from "react";
import Home from "./pages/home";
import { useState } from "react";

export default function App() {
  const [distancia, setDistacia] = useState(0)
  const [definirdistancia, setDefinirDistacia] = useState(0)

  const [litros, setLitros] = useState(0)
  const [definirlitros, setDefinirLitros] = useState(0)

  const [balanco, setBalanco] = useState(distancia / litros)


  return(
    <>
      <Home/>
    </>
  )
}

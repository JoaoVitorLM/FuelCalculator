import React from "react";
import { useState } from "react";
import { BorderInput, Box, BoxChart, BoxInfos, BoxMain, BoxResults, Button, Container, H3, Input, SectionInfos, SectionResults, Title } from "./styled";
import { GiPathDistance } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FcMoneyTransfer } from "react-icons/fc";
import Chart from "../charts/charts";


export default function Home() {

   const [distancia, setDistancia] = useState(0)
   const [litros, setLitros] = useState(0)
   const [combustivel, setCombustivel] = useState(0)

    return(
        <>
            <BoxMain>
                <Container>
                    <Title>Cálculo do combustível</Title>
                        <SectionInfos>  
                            <BoxInfos>                      
                                <BorderInput><Input type="number" placeholder="Distância percorrida (somente ida)" onChange={(e) =>{setDistancia(Number(e.target.value))}}/><GiPathDistance size={30} color="black"/></BorderInput>
                                <BorderInput><Input type="number" placeholder="Consumo médio do veículo" onChange={(e) =>{setLitros(Number(e.target.value))}}/><BsFillFuelPumpFill size={30} color="black"/></BorderInput>
                                <BorderInput><Input type="number" placeholder="Preço do combustível por litro" onChange={(e) =>{setCombustivel(Number(e.target.value))}}/><FcMoneyTransfer size={30}/></BorderInput>
                            </BoxInfos>                                
                            <BoxResults>
                                <Box><H3>Km: {distancia}</H3></Box>   
                                <Box><H3>Consumo: {Number(distancia / litros).toFixed(2)}km/l</H3></Box>
                                <Box><H3>Valor gasto: R${Number(distancia / litros * combustivel).toFixed(2)}</H3></Box>
                            </BoxResults>  
                            <BoxChart>
                                <Chart/>                               
                            </BoxChart> 
                        </SectionInfos>                   
                </Container>                
            </BoxMain>
        </>
    )
}
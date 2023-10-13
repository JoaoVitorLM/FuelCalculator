import styled from "styled-components";

export const BoxMain = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 140px;

    @media screen and (max-width: 498px) {
        padding-top: 40px;
        padding-bottom: 40px;
    }
`
export const Container = styled.div`
    max-width: 1400px;
    height: 650px;
    margin: auto;
    border: 2px solid #D4D0D9;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1460px) {
        max-width: 100%;
        margin: auto;
        margin-left: 20px;
        margin-right: 20px;
    }
    @media screen and (max-width: 960px) {
        height: 730px;
    }
    @media screen and (max-width: 498px) {
        height: 770px;
    }
`
export const Title = styled.h1`
    text-align: center;
    font-weight: bold;
    font-size: 42px;
    margin-top: 40px;
    margin-bottom: 10px;
    color: white;
`
export const BoxInfos = styled.div`
    width: 1100px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: auto;

    @media screen and (max-width: 1142px) {
       max-width: 900px;
    }
    @media screen and (max-width: 960px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: auto;
        min-height: 180px;
    }
`
export const SectionInfos = styled.div`
    margin-top: 40px;
    width: 100%;
    min-height: 400px;
`
export const BorderInput = styled.div`
    background-color: white;
    border-radius: 17px;
    border: 2px solid white;
    width: 300px;
    min-height: 60px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1142px) {
       max-width: 280px;
       margin: auto;
    }
    @media screen and (max-width: 960px) {
        max-width: 280px;
        margin: auto;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`
export const Input = styled.input`
    width: 250px;
    height: 60px;
    border:none;
    border-radius: 17px;
    border: 2px solid white;
    padding-left: 10px;

    @media screen and (max-width: 1142px) {
       width: 240px;
    }
`
export const BoxResults = styled.div`
    max-width: 800px;
    min-height: 80px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    @media screen and (max-width: 960px) {
        max-width: 660px;
    }
    
`
export const Box = styled.div`
    width: 200px;
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 852px) {
        width: 125px
    }
    @media screen and (max-width: 498px) {
        width: 95px;
        min-height: 60px;
    }
    
`
export const H3 = styled.h3`
    color: white;
    font-size: 24px;
    font-weight: 600;

    @media screen and (max-width: 852px) {
        font-size: 22px;
    }
    @media screen and (max-width: 498px) {
        font-size: 20px;
    }
`
export const BoxChart = styled.div`
    max-width: 600px;
    min-height: 300px;
    margin: auto;
    margin-top: 22px;
    @media screen and (max-width: 688px) {
        margin: 7px;
    }
`
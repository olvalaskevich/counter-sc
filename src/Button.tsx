import React from 'react';
import styled from "styled-components";

type ButtonPropsType={
    text?:string,
    count:number,
    maxValue?:number,
    funcCounter:(c:number)=>void,


}


export const Button = (props:ButtonPropsType) => {


const counterHandler=()=>{
    props.funcCounter(props.count)
}

    return (

            <StyledButton count={props.count}
                          funcCounter={props.funcCounter}
                          text={props.text}
                          maxValue={props.maxValue}
                          onClick={counterHandler}>{props.text}</StyledButton>

    );
};

const StyledButton=styled.button<ButtonPropsType>`
  background-color: #45d3e7;
  padding: 2px 50px;
  border-radius: 5px;
  font-weight: bold;
  opacity: ${props => (props.count===0 && props.text==='reset')||(props.count===props.maxValue && props.text==='inc')? 0.5 : 1}
`
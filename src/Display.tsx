import React from 'react';
import styled from "styled-components";

type DisplayPropsType={
    count:number,
    maxValue?:number

}

export const Display = (props:DisplayPropsType) => {
    return (
        <StyledDisplay maxValue={props.maxValue} count={props.count}>{props.count}</StyledDisplay>
    );
};

const StyledDisplay=styled.div<DisplayPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: #45d3e7;
  border-radius: 5px;
  font-weight: bold;
  color:${props => props.count===props.maxValue? 'red' : 'black'};
`
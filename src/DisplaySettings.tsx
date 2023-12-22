import React from 'react';
import styled from "styled-components";
import {Field} from "./Field";

type DisplaySettingsPropsType={
    maxValue?:number,
    startValue?:number,
    preDataMaxValue?:Array<number>,
    preDataStartValue?:Array<number>,
    changeMaxHandler:(c:number)=>void,
    changeStartHandler:(c:number)=>void
}

export const DisplaySettings = (props:DisplaySettingsPropsType) => {


    return (
        <WrapperSettings>

            <Field preDataMaxValue={props.preDataMaxValue}
                   warning={props.maxValue===0}
                   text={'Max value'}
                   list={'max'}
                   maxValue={props.maxValue}
                   changeHandler={props.changeMaxHandler}/>
            <Field preDataStartValue={props.preDataStartValue}
                   warning={props.startValue===0&&props.maxValue===0}
                   text={'Start value'}
                   list={'start'}
                   startValue={props.startValue}
                   changeHandler={props.changeStartHandler}/>

        </WrapperSettings>
    );
};

const WrapperSettings=styled.div`

  width: 100%;
  height: 200px;
  background-color: #45d3e7;
  border-radius: 5px;
  
  
  
`

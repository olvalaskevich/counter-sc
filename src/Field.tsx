import React, {ChangeEvent} from 'react';
import styled from "styled-components";

type FieldPropsType={
    text?:string,
    maxValue?:number,
    startValue?:number,
    warning?:boolean,
    list:string,
    preDataMaxValue?:Array<number>,
    preDataStartValue?:Array<number>,
    changeHandler:(c:number)=>void
}

type StyledFieldType={
    maxValue?:number,
    startValue?:number,
    warning?:boolean

}


export const Field = (props:FieldPropsType) => {

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        let value=parseInt(e.currentTarget.value)
        props.changeHandler(value)
    }

    return (
        <div>
            <StyledValueSetting>
                <StyledLabel >{props.text}</StyledLabel>
                <StyledField type="number"
                             min="0"
                             step="1"
                             list={props.list}
                             value={props.maxValue? props.maxValue:props.startValue}
                             maxValue={props.maxValue}
                             startValue={props.startValue}
                             warning={props.warning}
                             onChange={onChangeHandler}/>



                <datalist id={props.list} >
                    <option value={5}/>
                    <option value={10}/>
                    <option value={25}/>
                    <option value={35}/>
                    <option value={45}/>
                </datalist>
            </StyledValueSetting>
        </div>
    );
};


const StyledLabel=styled.label`
font-size: 18px;
font-weight: bolder;
`

const StyledValueSetting=styled.div`
  display: flex;
  gap: 10px;
  align-items: start;
  padding: 20px 0 0 50px;
  
  
`
const StyledField=styled.input<StyledFieldType>`
  background-color:  ${props => props.warning?'red' : 'white' };
  vertical-align: top;
  outline: none;
  padding: 0;
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
  display:block;
  width: 150px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  font-size: 14px;
  border-radius: 3px;
  margin-bottom: 50px;

  
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
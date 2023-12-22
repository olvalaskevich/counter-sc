import './App.css';
import {Button} from "./Button";
import styled from "styled-components";
import {Display} from "./Display";
import {useState} from "react";
import {DisplaySettings} from "./DisplaySettings";

type WrapperPropsType={
    width?:string,
    direction?:string,

}

function App() {



    let [count, setCount]=useState(0)
    let [setting, setSetting]=useState(false)
    let [maxValue, setMaxValue]=useState<number>()
    let [startValue, setStartValue]=useState<number>()
    let [preDataMaxValue, setPreDataMaxValue]=useState<Array<number>>([])
    let [preDataStartValue, setPreDataStartValue]=useState<Array<number>>([])


    // useEffect(()=>{
    //     let lastCount=localStorage.getItem("counter")
    //     let lastMaxCount=localStorage.getItem("maxCounter")
    //     let lastStartCount=localStorage.getItem("startCounter")
    //
    //     if (lastCount){setCount(JSON.parse(lastCount))}
    //     if (lastMaxCount){setMaxValue(JSON.parse(lastMaxCount))}
    //     if (lastStartCount){setStartValue(JSON.parse(lastStartCount))}
    //
    // }, [])
    // useEffect(()=>{
    //     localStorage.setItem("counter", JSON.stringify(count))
    //     localStorage.setItem("maxCounter", JSON.stringify(maxValue))
    //     localStorage.setItem("startCounter", JSON.stringify(startValue))
    //
    // }, [count, maxValue, startValue])


    function incCounter(c:number) {
        if (maxValue){
        if (c < maxValue) {
            setCount(++c)
        }} else setCount(++c)
    }
    function resetCounter() {
        if (startValue) {
            setCount(startValue)}
        else
            setCount(0)

    }

    function settings() {
        setSetting(!setting)
        if (startValue&&maxValue) {
            setCount(startValue)
            setPreDataMaxValue([...preDataMaxValue, maxValue])
            setPreDataStartValue([...preDataStartValue, startValue])
        }

    }

    function changeMaxHandler(c:number){
        setMaxValue(c)
    }
    function changeStartHandler(c:number){
        setStartValue(c)
    }

    return (
        <div className="App">
            <Wrapper>
                {!setting?
                    <Display count={count} maxValue={maxValue}/>
                    :
                    <DisplaySettings maxValue={maxValue}
                                     startValue={startValue}
                                     preDataMaxValue={preDataMaxValue}
                                     preDataStartValue={preDataStartValue}
                                     changeMaxHandler={changeMaxHandler}
                                     changeStartHandler={changeStartHandler}/>}


                <Wrapper width={'380px'} direction={'row'}>
                    {!setting ?
                        <>
                            <Button text={'inc'} count={count} maxValue={maxValue} funcCounter={incCounter}/>
                            <Button text={'reset'} count={count} funcCounter={resetCounter}/>
                            <Button text={'set'} count={count} funcCounter={settings}/>
                        </>
                        :
                        <Button text={'set'} count={count} funcCounter={settings}/>}
                </Wrapper>

            </Wrapper>


        </div>
    );
}

export default App;

export const Wrapper=styled.div<WrapperPropsType>`

  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  gap:10px;
  width: ${props => props.width || '400px'};
  border: 2px solid #30cece;
  border-radius: 5px;
  
  font-size:30px

`


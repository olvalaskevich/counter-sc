import './App.css';
import {Button} from "./Button";
import styled from "styled-components";
import {Display} from "./Display";
import {DisplaySettings} from "./DisplaySettings";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store";
import {
    hardResetCounterAC,
    incCounterAC,
    InitialStateType,
    maxValueAC,
    resetCounterAC,
    settingsAC, startValueAC
} from "./counter-reducer";

type WrapperPropsType={
    width?:string,
    direction?:string,

}

function App() {



    // let [count, setCount]=useState(0)
    // let [setting, setSetting]=useState(false)
    // let [maxValue, setMaxValue]=useState<number>()
    // let [startValue, setStartValue]=useState<number>()
    // let [preDataMaxValue, setPreDataMaxValue]=useState<Array<number>>([])
    // let [preDataStartValue, setPreDataStartValue]=useState<Array<number>>([])


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

    let counted=useSelector<RootStateType, InitialStateType>((state)=>state.counter as InitialStateType)
    let dispatch= useDispatch()

    function incCounter(c:number) {
        if (counted.maxValue){
        if (c < counted.maxValue) {
            dispatch(incCounterAC(c))
        }} else dispatch(incCounterAC(c))
    }
    function resetCounter() {
        if (counted.startValue) {
            dispatch(resetCounterAC())}
        else
            dispatch(hardResetCounterAC())

    }

    function settings() {
        dispatch(settingsAC())
        if (counted.startValue&&counted.maxValue) {
            dispatch(maxValueAC(counted.maxValue))
            dispatch(startValueAC(counted.startValue))


            // setPreDataMaxValue([...preDataMaxValue, maxValue])
            // setPreDataStartValue([...preDataStartValue, startValue])

        }

    }

    function changeMaxHandler(c:number){
        dispatch(maxValueAC(c))
    }
    function changeStartHandler(c:number){
        dispatch(startValueAC(c))
    }

    return (
        <div className="App">
            <Wrapper>
                {!counted.setting?
                    <Display count={counted.count} maxValue={counted.maxValue}/>
                    :
                    <DisplaySettings maxValue={counted.maxValue}
                                     startValue={counted.startValue}
                                     // preDataMaxValue={preDataMaxValue}
                                     // preDataStartValue={preDataStartValue}
                                     changeMaxHandler={changeMaxHandler}
                                     changeStartHandler={changeStartHandler}/>}


                <Wrapper width={'380px'} direction={'row'}>
                    {!counted.setting ?
                        <>
                            <Button text={'inc'} count={counted.count} maxValue={counted.maxValue} funcCounter={incCounter}/>
                            <Button text={'reset'} count={counted.count} funcCounter={resetCounter}/>
                            <Button text={'set'} count={counted.count} funcCounter={settings}/>
                        </>
                        :
                        <Button text={'set'} count={counted.count} funcCounter={settings}/>}
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


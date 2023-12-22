

type CounterActionType={
    type:string
    c:number
}

type InitialStateType={
    count: number
    setting: boolean
    maxValue: null | number
    startValue: null | number
}

let initialState:InitialStateType={
    count: 0,
    setting: false,
    maxValue: null,
    startValue:null
}
export const counterReducer=(state:InitialStateType=initialState, action:CounterActionType)=>{
    switch (action.type){
        case 'INC-COUNTER':
             return {...state, count: ++action.c}
        case 'SET-MAXVALUE':
            return {...state, maxValue: action.c}
        case 'SET-STARTVALUE':
            return {...state, startValue: action.c}
        case 'SETTINGS':
            return {...state, setting: !state.setting}
        case 'RESET_COUNTER':
            return {...state, count: state.startValue}
        case 'HARD-RESET':
            return {...state, count: 0}
        default:
            return state
    }

}

export const incCounterAC=(c:number)=>{
    return {type: 'INC-COUNTER', c:c}
}

export const maxValueAC=(c:number)=>{
    return {type: 'SET-MAXVALUE', c:c}
}

export const startValueAC=(c:number)=>{
    return {type: 'SET-STARTVALUE', c:c}
}

export const resetCounterAC=()=>{
    return {type: 'RESET_COUNTER'}
}
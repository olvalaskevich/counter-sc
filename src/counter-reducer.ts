
type CounterActionType={
    type:string
    c:number
}

export type InitialStateType={
    count: number
    setting: boolean
    maxValue: undefined | number
    startValue: undefined | number
}

let initialState:InitialStateType={
    count: 0,
    setting: false,
    maxValue: undefined,
    startValue:undefined
}
export const counterReducer=(state:InitialStateType=initialState, action:CounterActionType)=>{
    switch (action.type){
        case 'INC-COUNTER':
            return {...state, count: ++action.c}
        case 'SET-MAXVALUE':
            return {...state, maxValue: action.c}
        case 'SET-STARTVALUE':
            return {...state, startValue: action.c, count: action.c}
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

export const settingsAC=()=>{
    return {type:'SETTINGS'}
}

export const resetCounterAC=()=>{
    return {type: 'RESET_COUNTER'}
}

export const hardResetCounterAC=()=>{
    return {type: 'HARD-RESET'}
}
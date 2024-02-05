import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

let preloadedState=JSON.parse(localStorage.getItem("counter") as string)

const rootReducer=combineReducers({
    counter:counterReducer
})
export const store=createStore(rootReducer,preloadedState)
store.subscribe(()=>{
    localStorage.setItem("counter", JSON.stringify(store.getState()))
})
export type RootStateType=ReturnType<typeof rootReducer>
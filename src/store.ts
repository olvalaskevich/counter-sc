import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";


const rootReducer=combineReducers({
    counter:counterReducer
})

let preloadedState=JSON.parse(localStorage.getItem("counter") as string)
export const store=createStore(rootReducer,preloadedState)

store.subscribe(()=>{
    localStorage.setItem("counter", JSON.stringify(store.getState().counter))
})

export type RootStateType=ReturnType<typeof rootReducer>
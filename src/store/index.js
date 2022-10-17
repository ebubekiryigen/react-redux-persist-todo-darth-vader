import todoReducer from "./reducer/todoReducer"
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from "redux-persist"

import { combineReducers, createStore } from "redux";

const reducer=combineReducers({
    todo:todoReducer
})

const persistConfig= {
    key:"todo-list",
    storage,
    whitelist:['todo']
}


const perReducer=persistReducer(persistConfig,reducer)

export const store=createStore(perReducer)
export const persistor=persistStore(store)
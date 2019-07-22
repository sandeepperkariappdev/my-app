import {systemReducer} from './systemReducer.ts'
import {chatReducer} from './chatReducer.ts'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    system : systemReducer,
    chat: chatReducer
})

export type AppState = ReturnType<typeof rootReducer>

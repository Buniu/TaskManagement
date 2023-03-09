import {createStore, compose, applyMiddleware} from 'redux'
import { rootReducer } from './root-reducer'
import logger from 'redux-logger'



const middlewares = [logger]

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))



export const store = createStore(rootReducer, undefined, composedEnhancers)
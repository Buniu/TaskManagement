import {createStore, compose, applyMiddleware} from 'redux'
import { rootReducer } from './root-reducer'
import logger from 'redux-logger'
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const middlewares = [logger]

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))



const store = createStore(persistedReducer, undefined, composedEnhancers)

const persistor = persistStore(store)

export {store,persistor}
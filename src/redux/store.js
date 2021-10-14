import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from './rootReducer'

const middlewares = []

process.env.NODE_ENV === 'development' && middlewares.push(logger)

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

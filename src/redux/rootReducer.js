import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from './cart/cartReducer'
import directoryReducer from './directory/directoryReducer'
import userReducer from './user/userReducer'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
})

export default persistReducer(persistConfig, rootReducer) // persistReducer is a function that takes in persistConfig and rootReducer

import { combineReducers } from 'redux'
import checkoutReducer from './checkout'

const rootReducer = combineReducers({
  checkout: checkoutReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer

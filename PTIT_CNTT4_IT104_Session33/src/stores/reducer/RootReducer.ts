import { combineReducers } from 'redux'
import { reducerCart } from './reducerCart'

export const RootReducer = combineReducers({
    cart: reducerCart
})
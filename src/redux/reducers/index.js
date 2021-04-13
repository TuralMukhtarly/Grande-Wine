import { combineReducers } from 'redux';

import filters from './filters'
import beverages from './beverages'
import cart from './cart'


const rootReducer = combineReducers({
    filters,
    beverages,
    cart,
})

export default rootReducer;
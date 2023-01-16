import {createStore, combineReducer} from 'redux'
import shop from './Shop.js'

const reducer = combineReducer({
    shop,   
})
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
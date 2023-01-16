import {createStore, combineReducers} from 'redux'
import shop from './Shop.js'

const reducer = combineReducers({
    shop,
})

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
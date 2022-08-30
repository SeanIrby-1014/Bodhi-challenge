import { createStore } from 'redux'
import { createBrowserHistory as createHistory } from 'history'
import rootReducer from './reducers'

export const history = createHistory()

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store

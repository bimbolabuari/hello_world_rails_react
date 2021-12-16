import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reducer from './app/javascript/redux/greetings'

const reducer = combineReducers({
    greetings: Reducer,
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
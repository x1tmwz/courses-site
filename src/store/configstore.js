import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/user';
import courseReducer from '../reducers/course';

export default () => {
    const store = createStore(combineReducers({
        user:userReducer,
        courses:courseReducer
    }))
    return store;
}
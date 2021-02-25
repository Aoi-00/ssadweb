import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import TwitterReducers from './TwitterReducers'


const RootReducer = combineReducers({
    twitter: TwitterReducers,
    auth: AuthReducers
});

export default RootReducer;

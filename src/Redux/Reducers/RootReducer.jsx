import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import TwitterReducers from './TwitterReducers'
import GameReducers from './GameReducers'

const RootReducer = combineReducers({
    twitter: TwitterReducers,
    auth: AuthReducers,
    game: GameReducers
});

export default RootReducer;

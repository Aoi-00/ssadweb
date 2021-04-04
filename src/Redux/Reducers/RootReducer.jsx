import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import TwitterReducers from './TwitterReducers'
import GameReducers from './GameReducers'
import TutorialReducers from './TutorialReducers';
import QuestReducers from './QuestReducers';

/**
 * RootReducer
 */
const RootReducer = combineReducers({
    twitter: TwitterReducers,
    auth: AuthReducers,
    game: GameReducers,
    tutorial: TutorialReducers,
    quest: QuestReducers
});

export default RootReducer;

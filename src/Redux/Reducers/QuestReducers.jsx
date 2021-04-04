/**
 * set initialstate
 * question, tutquestions to []
 */
const initState = {
    questions: [],
    tutquestions: []
};

/**
 * QeustReducers
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const QuestReducers = (state = initState, action) => {
    switch (action.type) {
        case 'SHOW_ALL_QUESTION':
            return {
                ...state,
                questions: action.payload
            }
        case 'SHOW_TUT_QUESTION':
            return {
                ...state,
                tutquestions: action.payload
            }
        case 'REMOVE_QUESTION':
            return {
                ...state,
                tutquestions: state.tutquestions.filter(x => x.questid !== action.payload)
            }
        case 'ADD_QUESTION':
            return {
                ...state,
                tutquestions: [...state.tutquestions, ...action.payload]
            }
        default:
            return state;
    }
}
export default QuestReducers;

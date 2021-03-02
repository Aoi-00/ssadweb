const initState = {
    questions: [],
    status: []
};

const QuestReducers = (state = initState, action) => {
    switch (action.type) {
        case 'SHOW_QUESTION':
            return {
                ...state,
                questions: action.payload
            }
        case 'REMOVE_QUESTION':
            return {
                ...state,
                status: action.payload
            }
        case 'ADD_QUESTION':
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}
export default QuestReducers;

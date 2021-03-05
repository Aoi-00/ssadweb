const initState = {
    questions: []
};

const QuestReducers = (state = initState, action) => {
    switch (action.type) {
        case 'SHOW_QUESTION':
            return {
                ...state,
                questions: [...state.questions, ...action.payload]
            }
        case 'REMOVE_QUESTION':
            return {
                ...state,
                status: state.questions.filter(x => x.questid !== action.payload)
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

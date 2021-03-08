const initState = {
    questions: []
};

const QuestReducers = (state = initState, action) => {
    switch (action.type) {
        case 'SHOW_QUESTION':
            return {
                ...state,
                questions: action.payload
            }
        case 'REMOVE_QUESTION':
            console.log(action.payload)
            return {
                ...state,
                questions: state.questions.filter(x => x.questid !== action.payload)
            }
        case 'ADD_QUESTION':
            return {
                ...state,
                questions: [...state.questions, ...action.payload]
            }
        default:
            return state;
    }
}
export default QuestReducers;

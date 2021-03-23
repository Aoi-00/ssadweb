const initState = {
    records: [],
    studentlist: [],
    submission: [],
    completedtut: [],
    status: []
};

const GameReducers = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_LEADERBOARD':
            return {
                ...state,
                records: action.payload
            }
        case 'GET_STUDENT_LIST':
            return {
                ...state,
                studentlist: action.payload
            }
        case 'GET_STUDENT_SUBMISSION':
            return {
                ...state,
                submission: action.payload
            }
        case 'UPDATE_SCORES':
            return {
                ...state,
                status: action.payload
            }
        case 'MY_COMPLETED_TUT':
            return {
                ...state,
                completedtut: action.payload
            }
        default:
            return state;
    }
}
export default GameReducers;

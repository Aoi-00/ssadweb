const initState = {
    records: [],
    studentlist: [],
    submission: [],
    completedtut: [],
    status: [],
    competitors: [],
    challengers: [],
    comment: [],
    competitor: [],
    myscore: []
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
        case 'SEND_COMPETE_REQUEST':
            return {
                ...state,
                status: action.payload
            }
        case 'GET_CHALLENGERS':
            return {
                ...state,
                challengers: action.payload
            }
        case 'GET_COMPETITORS':
            return {
                ...state,
                competitors: action.payload
            }
        case 'SEND_COMMENT':
            return {
                ...state,
                status: action.payload
            }
        case 'GET_COMMENT':
            return {
                ...state,
                comment: action.payload
            }
        case 'GET_MY_SCORE':
            return {
                ...state,
                myscore: action.payload
            }
        case 'GET_COMPETITOR_SCORE':
            return {
                ...state,
                competitor: action.payload
            }
        default:
            return state;
    }
}
export default GameReducers;

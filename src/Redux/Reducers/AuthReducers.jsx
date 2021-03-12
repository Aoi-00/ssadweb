const initState = {
    login: [],
    status: [],
    studentinfo: []
};

const AuthReducers = (state = initState, action) => {
    switch (action.type) {
        case 'FACEBOOK_LOGIN':
            return {
                ...state,
                login: action.payload
            }
        case 'EMAIL_LOGIN':
            return {
                ...state,
                login: action.payload
            }
        case 'REGISTER_USER':
            return {
                ...state,
                status: action.payload
            }
        case 'TESTING':
            return {
                ...state,
                status: action.payload
            }
        case 'GET_STUDENT_DETAILS':
            return {
                ...state,
                studentinfo: action.payload
            }
        default:
            return state;
    }
}
export default AuthReducers;

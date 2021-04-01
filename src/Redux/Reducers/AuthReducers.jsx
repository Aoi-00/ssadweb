const initState = {
    login: [],
    status: [],
    studentinfo: [],
    profinfo: [],
    emailcheck: [],
    myInfo: []
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
        case 'GET_MY_DETAILS':
            return {
                ...state,
                myInfo: action.payload
            }
        case 'GET_PROF_DETAILS':
            return {
                ...state,
                profinfo: action.payload
            }
        case 'UPDATE_PROFILE':
            return {
                ...state,
            }
        case 'FACEBOOK_ACCOUNT_LINK':
            return {
                ...state,
            }
        case 'EMAIL_CHECK':
            return {
                ...state,
                emailcheck: action.payload
            }
        default:
            return state;
    }
}
export default AuthReducers;

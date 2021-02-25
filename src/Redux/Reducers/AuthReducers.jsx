const initState = {
    login: []
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
        default:
            return state;
    }
}
export default AuthReducers;

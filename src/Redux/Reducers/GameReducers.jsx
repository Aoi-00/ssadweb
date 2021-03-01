const initState = {
    records: [],
};

const GameReducers = (state = initState, action) => {
    switch(action.type){
        case 'FETCH_LEADERBOARD':
            return{
                ...state,
                records: action.payload
            }
        default:
            return state;
    }
}
export default GameReducers;

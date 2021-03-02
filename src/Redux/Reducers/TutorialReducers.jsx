const initState = {
    tutorialgrp: [],
    status: []
};

const TutorialReducers = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TUTORIAL':
            return {
                ...state,
                status: action.payload
            }
        case 'DELETE_TUTORIAL':
            return {
                ...state,
                status: action.payload
            }
        case 'FETCH_TUTORIAL':
            return {
                ...state,
                tutorialgrp: action.payload
            }
        default:
            return state;
    }
}
export default TutorialReducers;

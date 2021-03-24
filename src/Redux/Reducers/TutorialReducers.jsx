const initState = {
    tutorialgrp: [],
    status: false
};

const TutorialReducers = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TUTORIAL':
            return {
                ...state,
                tutorialgrp: [...state.tutorialgrp, ...action.payload],
            }
        case 'DELETE_TUTORIAL':
            return {
                ...state,
                tutorialgrp: state.tutorialgrp.filter(x => x.tutid !== action.tutid)
            }
        case 'FETCH_TUTORIAL':
            return {
                ...state,
                tutorialgrp: action.payload
            }
        case 'FETCH_USER_TUTORIAL':
            return {
                ...state,
                tutorialgrp: action.payload
            }
        case 'FETCH_PROF_TUTORIAL':
            return {
                ...state,
                tutorialgrp: action.payload
            }
        default:
            return state;
    }
}
export default TutorialReducers;

const initState = {
    tutorialgrp: [],
};

const TutorialReducers = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TUTORIAL':
            return {
                ...state,
                tutorialgrp: [...state.tutorialgrp, action.payload[0]]
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
        default:
            return state;
    }
}
export default TutorialReducers;

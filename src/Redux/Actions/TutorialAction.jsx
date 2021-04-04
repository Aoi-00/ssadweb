/**
 * Fetch addTutorial
 * @param {*} postData 
 * @returns 
 */

export const addTutorial = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/add/tutorial', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'ADD_TUTORIAL',
            payload: data
        })
        );
}
/**
 * Fetch deleteTutorial
 * @param {*} postData 
 * @returns 
 */
export const deleteTutorial = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/delete/tutorial', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'DELETE_TUTORIAL',
            payload: data,
            tutid: postData.tutid
        })
        );
}

/**
 * Fetch showTutorials
 * @returns 
 */
export const showTutorials = () => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/tutlist')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_TUTORIAL',
            payload: data
        })
        );
}
/**
 * Fetch showUserTutorial
 * @param {*} postData 
 * @returns 
 */
export const showUserTutorial = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/user/tutlist', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_USER_TUTORIAL',
            payload: data,
        })
        );
}
/**
 * Fetch showProfTutorial
 * @param {*} postData 
 * @returns 
 */
export const showProfTutorial = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/prof/tutlist', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_PROF_TUTORIAL',
            payload: data,
        })
        );
}
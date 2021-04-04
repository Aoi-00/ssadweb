/**
 * Fetch addQuestions
 * @param {*} postData 
 * @returns 
 */

export const addQuestion = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/add/web/tutquest', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'ADD_QUESTION',
            payload: data
        })
        );
}
/**
 * Fetch deleteQuestion
 * @param {*} postData 
 * @returns 
 */
export const deleteQuestion = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/delete/tutquest', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'REMOVE_QUESTION',
            payload: postData.questid
        })
        );
}

/**
 * Fetch showAllQuestions
 * @param {*} postData 
 * @returns 
 */
export const showAllQuestion = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/show/tutquest', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'SHOW_ALL_QUESTION',
            payload: data
        })
        );
}

/**
 * Fetch showTutorialQuestion
 * @param {*} postData 
 * @returns 
 */
export const showTutorialQuestion = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/show/tutquest', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'SHOW_TUT_QUESTION',
            payload: data
        })
        );
}
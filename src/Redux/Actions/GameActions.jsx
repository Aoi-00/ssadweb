/**
 * Fetch leaderboard
 * @returns 
 */

export const fetchLeaderboard = () => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/leaderboard')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_LEADERBOARD',
            payload: data
        })
        );
}
/**
 * Fetch getStudents
 * @param {*} postData 
 * @returns 
 */
export const getStudents = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/tut/student', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_STUDENT_LIST',
            payload: data
        })
        );
}

/**
 * Fetch getStudentSubmission
 * @param {*} postData 
 * @returns 
 */
export const getStudentSubmission = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/student/submission', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_STUDENT_SUBMISSION',
            payload: data
        })
        );
}

/**
 * Fetch updateScores
 * @param {*} postData 
 * @returns 
 */
export const updateScores = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/marking/update', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'UPDATE_SCORES',
            payload: data
        })
        );
}

/**
 * Fetch mycompletedTutorial
 * @param {*} postData 
 * @returns 
 */
export const myCompletedTutorial = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/student/completed/tut', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'MY_COMPLETED_TUT',
            payload: data
        })
        );
}

/**
 * Fetch sendCompeteRequest
 * @param {*} postData 
 * @returns 
 */
export const sendCompeteRequest = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/start/compete', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'SEND_COMPETE_REQUEST',
            payload: data
        })
        );
}

/**
 * Fetch getChallengers
 * @param {*} postData 
 * @returns 
 */
export const getChallengers = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/get/challengers', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_CHALLENGERS',
            payload: data
        })
        );
}

/**
 * Fetch getMyCompetitors
 * @param {*} postData 
 * @returns 
 */
export const getMyCompetitors = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/get/competitors', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_COMPETITORS',
            payload: data
        })
        );
}

/**
 * Fetch sendComment
 * @param {*} postData 
 * @returns 
 */
export const sendComment = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/send/comment', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'SEND_COMMENT',
            payload: data
        })
        );
}
/**
 * Fetch getComment
 * @param {*} postData 
 * @returns 
 */
export const getComment = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/get/comment', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_COMMENT',
            payload: data
        })
        );
}

/**
 * Fetch getCurrentUserScore
 * @param {*} postData 
 * @returns 
 */
export const getCurrentUserScore = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/user/competitor', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_MY_SCORE',
            payload: data
        })
        );
}

/**
 * Fetch getCompetitorScore
 * @param {*} postData 
 * @returns 
 */
export const getCompetitorScore = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/competitor', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_COMPETITOR_SCORE',
            payload: data
        })
        );
}
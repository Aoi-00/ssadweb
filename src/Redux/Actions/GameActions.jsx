export const fetchLeaderboard = () => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/leaderboard')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_LEADERBOARD',
            payload: data
        })
        );
}

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
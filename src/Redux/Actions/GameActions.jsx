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
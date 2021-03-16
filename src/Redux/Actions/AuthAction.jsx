export const emailLogin = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'EMAIL_LOGIN',
            payload: data
        })
        );
}

export const facebookLogin = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/fblogin', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FACEBOOK_LOGIN',
            payload: data
        })
        );
}
export const registerUser = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'REGISTER_USER',
            payload: data
        })
        );
}

export const testCall = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/test', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'TESTING',
            payload: data
        })
        );
}

export const getStudentInfo = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/studentinfo', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_STUDENT_DETAILS',
            payload: data
        })
        );
}

export const getProfInfo = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/profinfo', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_PROF_DETAILS',
            payload: data
        })
        );
}


export const updateProfile = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/profile/update', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'UPDATE_PROFILE',
            payload: data
        })
        );
}

export const facebookAccountLink = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/facebook/link', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FACEBOOK_ACCOUNT_LINK',
            payload: data
        })
        );
}
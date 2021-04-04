/**
 * Fetch emaillogin
 * @param {*} postData 
 * @returns 
 */
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

/**
 * Fetch facebooklogin
 * @param {*} postData 
 * @returns 
 */
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

/**
 * Fetch registerUSer
 * @param {*} postData 
 * @returns 
 */
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

/**
 * Fetch testCall
 * @param {*} postData 
 * @returns 
 */
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
/**
 * Fetch getStudentInfo
 * @param {*} postData 
 * @returns 
 */
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

/**
 * Fetch getProfInfo
 * @param {*} postData 
 * @returns 
 */
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

/**
 * Fetch updateProfile
 * @param {*} postData 
 * @returns 
 */
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
/**
 * Fetch facebookAccountLink
 * @param {*} postData 
 * @returns 
 */
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

/**
 * Fetch emailChecking
 * @param {*} postData 
 * @returns 
 */
export const emailChecking = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/email/check', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'EMAIL_CHECK',
            payload: data
        })
        );
}

/**
 * Fetch getCompeteMyInfo
 * @param {*} postData 
 * @returns 
 */
export const getCompeteMyInfo = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/studentinfo', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_MY_DETAILS',
            payload: data
        })
        );
}
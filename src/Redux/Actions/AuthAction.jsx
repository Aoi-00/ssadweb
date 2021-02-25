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
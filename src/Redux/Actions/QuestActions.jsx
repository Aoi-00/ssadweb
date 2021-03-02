export const addQuestion = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/add/tutquest', {
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
            payload: data
        })
        );
}

export const showQuestion = (postData) => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/show/tutquest', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'SHOW_QUESTION',
            payload: data
        })
        );
}
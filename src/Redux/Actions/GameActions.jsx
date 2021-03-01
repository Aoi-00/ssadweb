export const fetchLeaderboard = () => dispatch => {
    fetch('https://ssadapi.hyunatic.com/public/index.php/api/leaderboard')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_LEADERBOARD',
            payload: data
        })
        );
}
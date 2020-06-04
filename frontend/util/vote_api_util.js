export const createVote = (vote) => (
    $.ajax({
        url: '/api/votes',
        method: 'POST',
        data: { vote } 
    })
);

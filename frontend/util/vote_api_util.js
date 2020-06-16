export const createVote = (vote) => (
    $.ajax({
        url: '/api/votes',
        method: 'POST',
        data: { vote } 
    })
);

export const fetchVotes = (answerId) => (
    $.ajax({
        url: `/api/answer/${answerId}/votes`,
        method: 'GET'
    })
);

export const updateVote = (vote) => (
    $.ajax({
        url: `api/votes/${vote.id}`,
        method: 'PATCH',
        data: { vote }
    })
)

export const deleteVote = (vote) => (
    $.ajax({
        url: 'api/votes',
        method: 'DELETE',
        data: { vote }
    })
);
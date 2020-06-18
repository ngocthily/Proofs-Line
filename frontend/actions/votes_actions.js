import * as VoteAPIUtil from '../util/vote_api_util';

export const RECEIVE_VOTE = 'RECEIVE_VOTE';
export const RECEIVE_VOTES = 'RECEIVE_VOTES';
export const REMOVE_VOTE = 'RECEIVE_VOTE';

export const receiveVote = (vote) => ({
    type: RECEIVE_VOTE,
    vote
});

export const receiveVotes = (votes) => ({
    type: RECEIVE_VOTES,
    votes
});

export const removeVote = (voteId) => ({
    type: REMOVE_VOTE,
    voteId
});

export const createVote = (vote) => dispatch => (
    VoteAPIUtil.createVote(vote)
        .then((vote) => (dispatch(receiveVote(vote))))
);

export const fetchVotes = (answerId) => dispatch => (
    VoteAPIUtil.fetchVotes(answerId)
        .then((votes) => dispatch(receiveVotes(votes)))
);

export const deleteVote = (voteId) => dispatch => (
    VoteAPIUtil.deleteVote(voteId)
        .then((voteId) => dispatch(removeVote(voteId)))
);

export const updateVote = (vote) => dispatch => (
    VoteAPIUtil.updateVote(vote)
        .then((vote) => (dispatch(receiveVote(vote))))
)
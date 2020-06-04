import * as VoteAPIUtil from '../util/vote_api_util';

export const RECEIVE_VOTE = 'RECEIVE_VOTE';

export const receiveVote = (vote) => ({
    type: RECEIVE_VOTE,
    vote
});

export const createVote = (vote) => dispatch => (
    VoteAPIUtil.createVote(vote)
        .then((vote) => (dispatch(receiveVote(vote))))
);

//no error yet
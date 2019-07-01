import * as SitterUtil from '../util/sitter_api_util';

export const RECEIVE_SITTERS = "RECEIVE_SITTERS";
export const RECEIVE_SITTER = "RECEIVE_SITTER";

export const receiveSitters = (sitters) => ({
    type: RECEIVE_SITTERS,
    sitters
});

export const receiveSitter = (sitter) => ({
    type: RECEIVE_SITTER,
    sitter
});

export const fetchSitters = () => dispatch => (
    SitterUtil.fetchSitters().then(sitters => (dispatch(receiveSitters(sitters))))
)

export const fetchSitter = (id) => dispatch => (
    SitterUtil.fetchSitter(id).then(payload => (dispatch(receiveSitter(payload))))
)


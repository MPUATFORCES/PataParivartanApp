import { combineReducers } from 'redux';

const INITIAL_STATE = {
    current: [],
    possible: [
        'Alice',
        'Bob',
        'Sammy',
    ],
};

const proofReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default combineReducers({
    proof: proofReducer
});
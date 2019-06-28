import { combineReducers } from 'redux';
import sittersReducer from './sitters_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    sitters: sittersReducer
});

export default entitiesReducer;
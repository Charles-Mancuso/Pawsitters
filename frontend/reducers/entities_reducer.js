import { combineReducers } from 'redux';
import sittersReducer from './sitters_reducer';
import usersReducer from './users_reducer';
import bookingsReducer from './bookings_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    sitters: sittersReducer,
    bookings: bookingsReducer
});

export default entitiesReducer;
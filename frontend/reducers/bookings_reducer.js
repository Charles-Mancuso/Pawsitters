import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions'
import merge from "lodash/merge";

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BOOKINGS:
            return action.bookings;
        case RECEIVE_BOOKING:
            const newBooking = { [action.booking.id]: action.booking };
            return merge({}, state, newBooking);
        case REMOVE_BOOKING:
            const newState = merge({}, state);
            delete newState[action.bookingId.id];
            return newState
        default:
            return state;
    }
};

export default bookingsReducer;
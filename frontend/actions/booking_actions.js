import * as BookingUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";

export const receiveBookings = (payload) => ({
    type: RECEIVE_BOOKINGS,
    payload
});

export const receiveBooking = (booking) => ({
    type: RECEIVE_BOOKING,
    booking
});

export const removeBooking = (bookingId) => ({
    type: REMOVE_BOOKING,
    bookingId
});

export const fetchBookings = () => dispatch => (
    BookingUtil.fetchBookings().then(payload => dispatch(receiveBookings(payload)))
)

export const fetchBooking = (bookingId) => dispatch => (
    BookingUtil.fetchBooking(bookingId).then(payload => dispatch(receiveBooking(payload)))
)

export const createBooking = (booking, sitterId) => (
    BookingUtil.createBooking(booking, sitterId).then(booking => dispatch(receiveBooking(booking)))
)

export const updateBooking = (booking) => dispatch => (
    BookingUtil.updateBooking(booking).then(booking => dispatch(receiveBooking(booking)))
)

export const deleteBooking = (bookingId) => dispatch => (
    BookingUtil.deleteBooking(bookingId).then(bookingId => dispatch(removeBooking(bookingId)))
)


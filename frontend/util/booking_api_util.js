export const fetchBookings = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/bookings`,
    });
};

export const fetchBooking = (bookingId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/bookings/${bookingId}`
    });
};

export const createBooking = (start_date, end_date, sitter_id) => {
    return $.ajax({
        method: 'POST',
        url: `api/sitters/${sitter_id}/bookings`,
        data: { booking: {start_date, end_date, sitter_id } }
    });
};

export const updateBooking = (start_date, end_date, sitter_id, booking_id) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/bookings/${booking_id}`,
        data: { booking: { start_date, end_date, sitter_id } }
    });
};

export const deleteBooking = (bookingId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/bookings/${bookingId}`
    });
};
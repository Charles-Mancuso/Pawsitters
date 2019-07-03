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

export const createBooking = (booking, sitterId) => {
    return $.ajax({
        method: 'POST',
        url: `api/sitters/${sitterId}/bookings`,
        data: { booking }
    });
};

export const updateBooking = (booking) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/bookings/${booking.id}`,
        data: { booking }
    });
};

export const deleteBooking = (bookingId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/bookings/${bookingId}`
    });
};
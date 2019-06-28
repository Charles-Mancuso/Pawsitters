export const fetchSitters = (data) => {
    return $.ajax({
        method: 'GET',
        url: '/api/sitters',
        data
    });
};

export const fetchSitter = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/sitters/${id}`
    });
};


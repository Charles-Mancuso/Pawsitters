export const fetchSitters = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/sitters',
    });
};

export const fetchSitter = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/sitters/${id}`
    });
};


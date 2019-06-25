const thunk = (state) => (next) => (action) => {
    if (typeof action === "function") {
        return action(state.dispatch, state.getState)
    }
    return next(action)
};

export default thunk;
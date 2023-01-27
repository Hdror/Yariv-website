export function toggleMiniHeader(isMiniHeader) {
    return async (dispatch) => {
        const action = { type: 'TOGGLE_MINI_HEADER',isMiniHeader }
        dispatch(action)
    }
}
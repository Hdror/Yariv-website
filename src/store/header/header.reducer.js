const initialState = {
    isMiniHeader: false
}



export function headerReducer(state = initialState, action) {
    var newState = state
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'TOGGLE_MINI_HEADER':
            newState = { ...state, isMiniHeader: action.isMiniHeader }
            break

    }
    return newState
}


export function toggleMiniHeader(isMiniHeader) {
    console.log('kkjkkk');
    return async (dispatch, getState) => {
        // const {headerModule} = getState()
        // let isMiniHeader = !headerModule.isMiniHeader
        console.log(isMiniHeader);
        const action = { type: 'TOGGLE_MINI_HEADER',isMiniHeader }
        dispatch(action)
    }
}
const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch(action.type) {
        　case "FIND_ALL_WIDGETS":
            return {
                ...state,
                widgets: action.widgets
            }
        case "CREATE_WIDGET":
            return {

            }
        case "DELETE_WIDGET":
            return {

            }
        case "UPDATE_WIDGET":
            return {

            }
        default:
            return state
    }

}

export default widgetReducer
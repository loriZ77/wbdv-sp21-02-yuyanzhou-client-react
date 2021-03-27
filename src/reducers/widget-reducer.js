import {FIND_ALL_WIDGETS_FOR_TOPIC, DELETE_WIDGET, CREATE_WIDGET, UPDATE_WIDGET} from "../actions/widget-actions";

const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch(action.type) {
        　case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            }
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => {
                    if(widget.id === action.wid) {
                        return false
                    } else {
                        return true
                    }
                })
            }

        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(w => {
                    if (w.id === action.widget.id) {
                        return action.widget
                    } else {
                        return w
                    }
                })
            }

        default:
            return state
    }

}

export default widgetReducer
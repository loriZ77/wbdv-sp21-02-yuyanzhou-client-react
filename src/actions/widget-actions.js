import widgetService from "../services/widget-service";

export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC"
export const CREATE_WIDGET = "CREATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"

export const findWidgetsForTopic = (dispatch, topicId) => {
    widgetService.findWidgetsForTopic(topicId)
        .then(theWidgets => dispatch({
            type: FIND_ALL_WIDGETS_FOR_TOPIC,
            widgets: theWidgets
        }))
}

export const createWidgetsForTopic = (dispatch, topicId) => {
    widgetService.createWidgetForTopic(topicId, {type: "HEADING", size: 3, text: "THIS IS NEW HEADING", ordered: false})
        .then(newWidget => dispatch({
            type: CREATE_WIDGET,
            newWidget
        }))
}

export const deleteWidget = (dispatch, wid) =>
    widgetService.deleteWidget(wid)
        // .then(widgetToDelete => dispatch({
        //     type: "DELETE_WIDGET",
        //     widgetToDelete
        // }))
        .then(status => dispatch({
            type: DELETE_WIDGET,
            wid
        }))
    //console.log(widgets)

export const updateWidget = (dispatch, wid, widget) =>
    widgetService.updateWidget(wid, widget)
        .then(status => dispatch({
            type: UPDATE_WIDGET,
            widget
        }))

const widgetActions = {
    createWidgetsForTopic,
    deleteWidget,
    findWidgetsForTopic,
    updateWidget
}

export default widgetActions
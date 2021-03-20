const WIDGETS_URL= "http://localhost:8080/api"

export const findWidgetsForTopic = (topicId) => {
    return fetch(`${WIDGETS_URL}/topics/${topicId}/widgets`)
        .then(response => response.json())
}

export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${WIDGETS_URL}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGETS_URL}/widgets/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateWidget = (widget) =>
    fetch(`${WIDGETS_URL}/widgets/${widget.id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findWidgetsForTopic,
    createWidgetForTopic,
    deleteWidget,
    updateWidget
}
const WIDGETS_URL= process.env.REACT_APP_WIDGETS_URL

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

export const updateWidget = (wid, widget) => {
    // console.log("CALLED");
    // console.log(JSON.stringify(widget));
    return fetch(`${WIDGETS_URL}/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }

    })
        .then(response => response.json());
}

export default {
    findWidgetsForTopic,
    createWidgetForTopic,
    deleteWidget,
    updateWidget
}
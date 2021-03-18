const WIDGETS_URL= "http://localhost:8080/api"

export const findAllWidgets = (topicId) => {
    return fetch(`${WIDGETS_URL}/topics/${topicId}/widgets`)
        .then(response => response.json());
}


export default {
    findAllWidgets
}
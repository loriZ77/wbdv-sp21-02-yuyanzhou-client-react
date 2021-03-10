const LESSONS_URL= "https://wbdv-generic-server.herokuapp.com/api/001033108/lessons"
const TOPIC_URL = "https://wbdv-generic-server.herokuapp.com/api/001033108/topics"

export const createTopicForLesson = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(response => response.json())

export const updateTopicForLesson = (topicId, topic) =>
    fetch(`${TOPIC_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type' : 'application/json'
        }
    })
        .then(response => response.json())

export const deleteTopicFoeLesson = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    createTopicForLesson,
    findTopicsForLesson,
    updateTopicForLesson,
    deleteTopicFoeLesson
}
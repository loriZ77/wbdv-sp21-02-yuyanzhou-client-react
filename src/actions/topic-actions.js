import topicService from "../services/topic-service";

export const FIND_TOPICS = "FIND_TOPICS"
export const CREATE_TOPIC = "CREATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"

export const findTopicsForLesson = (dispatch, lessonId) => {
    topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: FIND_TOPICS,
            topics: topics
        }))
}

export const createTopicForLesson = (dispatch, lessonId) => {
    topicService.createTopicForLesson(lessonId, {title: "New Topic"})
        .then(theTopic => dispatch({
            type: CREATE_TOPIC,
            topic: theTopic
        }))


}

export const updateTopic = (dispatch, topic) =>
    topicService.updateTopicForLesson(topic._id, topic)
        .then(status => dispatch({
            type: UPDATE_TOPIC,
            topic
        }))

export const deleteTopic = (dispatch, topicToDelete) =>
    topicService.deleteTopicFoeLesson(topicToDelete._id)
        .then(status => dispatch({
            type: DELETE_TOPIC,
            topicToDelete
        }))

const topicActions = {
    findTopicsForLesson,
    deleteTopic,
    updateTopic,
    createTopicForLesson
}

export default topicActions
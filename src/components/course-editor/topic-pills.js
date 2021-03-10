import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom"
import topicService from "../../services/topic-service"
import lessonService from "../../services/lesson-service";

const TopicPills = (
    {
        topics=[
            {_id: "123", title: "Topic A"},
            {_id: "223", title: "Topic B"},
            {_id: "323", title: "Topic C"}],
        findTopicsForLesson,
        createTopicForLesson,
        updateTopic,
        deleteTopic
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return (
        <div>
            <h2>Topics</h2>
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                    <li className="nav-item">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                            item={topic}
                            updateItem={updateTopic}
                            deleteItem={deleteTopic}
                            active={topic._id === topicId}
                        />
                    </li>)
                }
                <li>
                    <i onClick={() => createTopicForLesson(lessonId)} className="fas fa-plus fa-2x"/>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(topics => dispatch({
                    type: "FIND_TOPICS",
                    topics: topics
                }))
        },

        createTopicForLesson: (lessonId) => {
            topicService.createTopicForLesson(lessonId, {title: "New Topic"})
                .then(theTopic => dispatch({
                    type: "CREATE_TOPIC",
                    topic: theTopic
                }))


        },

        updateTopic: (topic) =>
            lessonService.updateLessonForModule(topic._id, topic)
                .then(status => dispatch({
                    type: "UPDATE_TOPIC",
                    topic
                })),

        deleteTopic: (topicToDelete) =>
            lessonService.deleteLessonForModule(topicToDelete._id)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicToDelete
                }))
    }
}
export default connect(stpm, dtpm)(TopicPills)
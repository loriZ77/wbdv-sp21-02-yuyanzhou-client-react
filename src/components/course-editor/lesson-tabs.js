import React, {useEffect}from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"
import moduleService from "../../services/module-service";
import topicService from "../../services/topic-service";
import lessonActions from "../../actions/lesson-actions"
const LessonTabs = (
    {
        lessons=[
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}],
        findLessonsForModule,
        createLessonForModule,
        deleteLesson,
        updateLesson
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return (
    <div>
        <h2>Lessons</h2>
        <ul className="nav nav-pills">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/${moduleId}/${lesson._id}`}
                            item={lesson}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            active={lesson._id === lessonId}
                        />

                    </li>
                )
            }
            <li className="nav-item">
                <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus fa-2x"/>
            </li>
        </ul>
    </div>)
}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) => {
            lessonActions.findLessonsForModule(dispatch, moduleId)

            topicService.findTopicsForLesson(undefined)
                .then(topics => dispatch({type: "FIND_TOPICS", topics: topics}))
        },
        createLessonForModule: (moduleId)=> {
            lessonActions.createLessonForModule(dispatch, moduleId)

        },

        deleteLesson: (item) =>
            lessonActions.deleteLesson(dispatch, item),

        updateLesson: (lesson) =>
            lessonActions.updateLesson(dispatch, lesson)
    }
}

export default connect(stpm, dtpm)(LessonTabs)
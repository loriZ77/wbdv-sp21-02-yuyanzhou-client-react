import React, {useEffect}from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom"
import lessonService from "../../services/lesson-service"
import moduleService from "../../services/module-service";

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
            lessonService.findLessonsForModule(moduleId)
                .then(lessons=> dispatch({
                    type: "FIND_LESSONS",
                    lessons: lessons
                }))
        },
        createLessonForModule: (moduleId)=> {
            lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
                .then(theActualLesson => dispatch({
                    type: "CREATE_LESSON",
                    lesson: theActualLesson
                }))

        },

        deleteLesson: (item) =>
            lessonService.deleteLessonForModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_LESSON",
                    lessonToDelete: item
                })),

        updateLesson: (lesson) =>
            lessonService.updateLessonForModule(lesson._id, lesson)
                .then(status => dispatch({
                    type: "UPDATE_LESSON",
                    lesson: lesson
                }))
    }
}

export default connect(stpm, dtpm)(LessonTabs)
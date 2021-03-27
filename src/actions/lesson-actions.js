import lessonService from "../services/lesson-service";
import topicService from "../services/topic-service";

export const FIND_LESSONS = "FIND_LESSONS"
export const CREATE_LESSON = "CREATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"

export const findLessonsForModule = (dispatch, moduleId) => {
    lessonService.findLessonsForModule(moduleId)
        .then(lessons=> dispatch({
            type: FIND_LESSONS,
            lessons: lessons
        }))

    topicService.findTopicsForLesson(undefined)
        .then(topics => dispatch({type: "FIND_TOPICS", topics: topics}))
}

export const createLessonForModule = (dispatch, moduleId)=> {
    lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
        .then(theActualLesson => dispatch({
            type: CREATE_LESSON,
            lesson: theActualLesson
        }))

}

export const deleteLesson = (dispatch, item) =>
    lessonService.deleteLessonForModule(item._id)
        .then(status => dispatch({
            type: DELETE_LESSON,
            lessonToDelete: item
        }))

export const updateLesson = (dispatch, lesson) =>
    lessonService.updateLessonForModule(lesson._id, lesson)
        .then(status => dispatch({
            type: UPDATE_LESSON,
            lesson: lesson
        }))
const lessonActions = {
    findLessonsForModule,
    deleteLesson,
    createLessonForModule,
    updateLesson
}

export default lessonActions

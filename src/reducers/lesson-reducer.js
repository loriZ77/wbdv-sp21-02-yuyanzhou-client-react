import {FIND_LESSONS, CREATE_LESSON, DELETE_LESSON, UPDATE_LESSON} from "../actions/lesson-actions";

const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case FIND_LESSONS:
            return {
                ...state, //copy old state
                lessons: action.lessons
            }

        case CREATE_LESSON:
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson //append new lesson
                ]
            }

        case UPDATE_LESSON:
            return {
                lessons: state.lessons.map(l => {
                    if(l._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return l
                    }
                })
            }

        case DELETE_LESSON:
            alert("delete the lesson " + action.lessonToDelete.title)
            const newState = {
                lessons: state.lessons.filter(lesson => {
                    if(lesson._id === action.lessonToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState

        default:
            return state
    }

}

export default lessonReducer
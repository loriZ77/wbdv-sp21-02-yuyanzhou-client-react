import moduleService from "../services/module-service"
import lessonService from "../services/lesson-service";
import topicService from "../services/topic-service";

export const CREATE_MODULE = "CREATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"

export const createModule = (dispatch, courseId) => {
    moduleService.createModuleForCourse(courseId, {title: "New Module"})
        .then(theActualModule => dispatch({
            type: "CREATE_MODULE",
            module: theActualModule
        }))
}


export const deleteModule = (dispatch, item) =>
    moduleService.deleteModulesForCourse(item._id)
        .then(status => dispatch({
            type: "DELETE_MODULE",
            moduleToDelete: item
        }))

export const  updateModule = (dispatch, module) =>
    moduleService.updateModuleForCourse(module._id, module)
        .then(status => dispatch({
            type: "UPDATE_MODULE",
            module
        }))

    // findModulesForCourse: (courseId) => {
    //     //alert(courseId);
    //     moduleService.findModulesForCourse(courseId)
    //         .then(theModules => dispatch({
    //             type: "FIND_MODULES_FOR_COURSE",
    //             modules: theModules
    //         }))
    // }
export const findModulesForCourse = (dispatch, courseId) => {
    moduleService.findModulesForCourse(courseId)
        .then(modules => dispatch({type: "FIND_MODULES_FOR_COURSE", modules: modules}))
    lessonService.findLessonsForModule(undefined)
        .then(lessons => dispatch({type: "FIND_LESSONS", lessons: lessons}))
    topicService.findTopicsForLesson(undefined)
        .then(topics => dispatch({type: "FIND_TOPICS", topics: topics}))
}

const moduleActions = {
    createModule,
    findModulesForCourse,
    updateModule,
    deleteModule
}

export default moduleActions

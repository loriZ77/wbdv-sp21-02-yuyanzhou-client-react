import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom"
import moduleService from "../../services/module-service"
import lessonService from "../../services/lesson-service"
import topicService from "../../services/topic-service"
const ModuleList = (
    {
        myModules=[],
        createModule=() => alert("new alert"),
        deleteModule,
        updateModule,
        findModulesForCourse=(courseId) => console.log(courseId)
    }) => {
    const {courseId, moduleId, layout} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return (
    <div>
        <h2>Modules {myModules.length}</h2>
        <ul className="list-group">
            {
                myModules.map(module =>
                    <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/${module._id}`}
                            item={module}
                            deleteItem={deleteModule}
                            updateItem={updateModule}

                        />

                    </li>
                )
            }
            <li className="list-group-item">
                <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"/>
            </li>
        </ul>
    </div>)
}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },


        deleteModule: (item) =>
            moduleService.deleteModulesForCourse(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                })),

        updateModule: (module) =>
            moduleService.updateModuleForCourse(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),

        // findModulesForCourse: (courseId) => {
        //     //alert(courseId);
        //     moduleService.findModulesForCourse(courseId)
        //         .then(theModules => dispatch({
        //             type: "FIND_MODULES_FOR_COURSE",
        //             modules: theModules
        //         }))
        // }
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(modules => dispatch({type: "FIND_MODULES_FOR_COURSE", modules: modules}))
            lessonService.findLessonsForModule(undefined)
                .then(lessons => dispatch({type: "FIND_LESSONS", lessons: lessons}))
            topicService.findTopicsForLesson(undefined)
                .then(topics => dispatch({type: "FIND_TOPICS", topics: topics}))
        }
    }
}
export default connect(stpm, dtpm)
        (ModuleList)
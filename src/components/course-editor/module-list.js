import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom"
import moduleService from "../../services/module-service"
import lessonService from "../../services/lesson-service"
import topicService from "../../services/topic-service"
import moduleActions from "../../actions/module-actions";
import lessonActions from "../../actions/lesson-actions";
import topicActions from "../../actions/topic-actions";


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
        createModule: (courseId) =>
            moduleActions.createModule(dispatch, courseId),


        deleteModule: (item) =>
            moduleActions.deleteModule(dispatch, item),

        updateModule: (module) =>
            moduleActions.updateModule(dispatch, module),

        // findModulesForCourse: (courseId) => {
        //     //alert(courseId);
        //     moduleService.findModulesForCourse(courseId)
        //         .then(theModules => dispatch({
        //             type: "FIND_MODULES_FOR_COURSE",
        //             modules: theModules
        //         }))
        // }
        findModulesForCourse: (courseId) => {
            moduleActions.findModulesForCourse(dispatch, courseId)
            lessonActions.findLessonsForModule(dispatch,undefined)
            topicActions.findTopicsForLesson(dispatch,undefined)

        }
    }
}
export default connect(stpm, dtpm)
        (ModuleList)
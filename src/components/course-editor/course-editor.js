import React from 'react'
import "./course-editor.style.css"
import moduleReducer from "../../reducers/modules-reducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux"
import {Link, useParams} from "react-router-dom"
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import lessonReducer from "../../reducers/lesson-reducer";
import TopicPills from "./topic-pills";


const reducer = combineReducers( {
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
})
//const store = createStore(moduleReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {

    const {courseId, moduleId, layout} = useParams();
    return (
    <Provider store={store}>
        <div>
            <h2>
                <Link to={`/courses/${layout}`}>
                    <i className="fas fa-arrow-left"/>
                </Link>
                Course Editor</h2>
            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-8">
                    <div className="row">
                        <LessonTabs/>
                    </div>
                    <div className="row">
                        <TopicPills/>
                    </div>
                </div>
            </div>
        </div>
    </Provider>)
}


export default CourseEditor
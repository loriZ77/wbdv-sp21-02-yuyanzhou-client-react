import React, {useEffect}from 'react'
import {useState} from 'react'
import "./course-editor.style.css"
import moduleReducer from "../../reducers/modules-reducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux"
import {Link, useParams} from "react-router-dom"
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import lessonReducer from "../../reducers/lesson-reducer";
import TopicPills from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";
import courseService from "../../services/course-service"
import WidgetList from "./widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer";

const reducer = combineReducers( {
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})
//const store = createStore(moduleReducer)
const store = createStore(reducer)

const CourseEditor = (
    {history},

    ) => {
    const {courseId, layout} = useParams();
    const [courseTitle, setCourseTitle] = useState('');
    useEffect(() => getCourse(courseId));
    const getCourse = (courseId) => {
        courseService.findCourseById(courseId)
            .then(course => setCourseTitle(course.title))
    }
    return (
    <Provider store={store}>
        <div>
            <h2>
                <Link to={`/courses/${layout}`}>
                    <i className="fas fa-arrow-left"/>
                </Link>
                Course Editor: {courseTitle}</h2>
            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9">
                    <div className="row">
                        <LessonTabs/>
                        <br/>
                    </div>
                    <div className="row">
                        <TopicPills/>
                    </div>
                    <br/>
                    <div className="row">
                        <WidgetList/>
                    </div>
                </div>
            </div>
        </div>
    </Provider>)
}


export default CourseEditor
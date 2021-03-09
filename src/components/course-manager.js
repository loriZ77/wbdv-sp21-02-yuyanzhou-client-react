import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";
import "./course-manager.style.client.css"
import "./components.style.css";



class CourseManager extends React.Component {
    state = {
        courses: [],
        courseName: ""

    }

    updateCourse = (course) => {
        //console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    componentDidMount = () =>
        findAllCourses()
            .then(courses => this.setState({courses}))


    addCourse = () => {
        const newCourse = {
            title: this.state.courseName,
            owner: "New Owner",
            lastModified: "Never"
        }
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
        this.setState({
            courseName: ""
        })
        // courseService.createCourse(newCourse)
        //     .then(course => this.setState(
        //         (prevState) => ({
        //             ...prevState,
        //             courses: [
        //                 ...prevState.courses,
        //                 course
        //             ]
        //         })))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                        ...prevState,
                        courses: prevState.courses.filter
                        (course => course !== courseToDelete)
                    }))
            })
    }

    createTitle = (title) => {
        this.setState({
            courseName: title
        })
    }


    render() {
        return(
            <div class="container-fluid">
                <div className="row">
                    <div className="wbdv-sticky-nav-bar">
                        <div className="row">
                            <div className="col-1">
                                <i className="fa fa-bars fa-2x"></i>
                            </div>

                            <div className="col-3 d-none d-md-block">
                                <h4>Course Manager</h4>
                            </div>
                            <div className="col-7">
                                <input className="form-control"
                                       placeholder="New Course Title"
                                       value={this.state.courseName}
                                       onChange={event => this.createTitle(event.target.value)}
                                />
                            </div>
                            <div className="col-1">
                                <i className="fa fa-plus fa-2x"
                                   onClick={this.addCourse}></i>
                            </div>
                        </div>
                    </div>
                </div>


                <h1>Course Manager</h1>
                <Route path="/courses/table" exact={true}>

                    <CourseTable
                        addCourse={this.addCourse}
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                <Route path="/courses/grid" exact={true}>
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/:moduleId",
                    "/courses/:layout/edit/:courseId/:moduleId/:lessonId"]}
                       exact={true}
                       render={(props) =>
                           <CourseEditor {...props}/>}>
                </Route>


            </div>
            )
    }

}




export default CourseManager
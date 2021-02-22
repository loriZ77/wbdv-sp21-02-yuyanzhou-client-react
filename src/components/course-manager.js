import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";

class CourseManager extends React.Component {
    state = {
        courses: [
            {title: "CS1234", owner: "Frank", lastModified: "1/22/5566"},
            {title: "CS2234", owner: "Eric", lastModified: "2/22/5566"},
            {title: "CS3234", owner: "Gina", lastModified: "3/22/5566"},
            {title: "CS4234", owner: "Hellen", lastModified: "4/22/5566"}
        ]
    }
    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
    }

    deleteCourse = (course) => {
        console.log(course)
    }

    render() {
        return(
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                <CourseGrid deleteCourse={this.deleteCourse} o ocourses={this.state.courses}/>
                <CourseEditor/>
            </div>
            )
    }

}




export default CourseManager
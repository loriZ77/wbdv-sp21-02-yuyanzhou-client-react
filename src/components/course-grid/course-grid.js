import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import "../components.style.css";

const CourseGrid = (props) =>

    <div className="row">
        <div className="col d-none d-md-block text-bold mr-auto">Recent Documents</div>
        <div className="col-auto d-none d-md-block text-bold mr-auto">Owned by me
            <i className="fas fa-caret-down"></i>
        </div>
        <div className="col">
            <div className="float-right">
                <i className="btn fas fa-folder color-blue"></i>
                <i className="btn fas fa-sort-alpha-down color-blue"></i>
                <Link to="/courses/table">
                    <i className="btn fas fa-th color-blue"></i>
                </Link>
            </div>
        </div>
        <div className="row">
            {
                props.courses.map((course, ndx) =>
                    <CourseCard
                        updateCourse={props.updateCourse}
                        deleteCourse={props.deleteCourse}
                        key={ndx}
                        course={course}
                    />)
            }
        </div>
        <div className="row">
            <div className="col">
                <i onClick={() => this.props.addCourse()}
                   className="redColor my-plus-stuck-at-bottom-right fas fa-3x fa-plus-circle float-right"></i>
            </div>
        </div>


    </div>


export default CourseGrid
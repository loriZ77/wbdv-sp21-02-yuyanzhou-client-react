import React from 'react'
import {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        course
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <div className="col-sm-3">
            <div className="card">
                <img src="https://getbootstrap.com/docs/5.0/assets/img/bootstrap-icons@2x.png"
                     className="card-img-top" alt="..."/>
                <div className="card-body">
                    {
                        !editing &&
                        <Link to="/courses/editor">
                            {course.title}
                        </Link>
                    }
                    {editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                    }

                    <p className="card-text">Course brief introduction</p>
                    <Link to="/courses/editor" className="btn btn-primary">
                        {course.title}
                    </Link>
                    <div>
                        {!editing && <i onClick={() => setEditing(true)}
                                        className="fas fa-edit mr-2 float-right color-blue"></i>}
                    </div>
                    <div className="wbdv-float-top">
                        {editing && <i onClick={() => {
                            deleteCourse(course)
                            setEditing(false)
                        }} className="fas fa-times mr-2 float-right color-red"></i>}
                        {editing && <i onClick={() => saveTitle()}
                                       className="fas fa-check mr-2 float-right color-green"></i>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
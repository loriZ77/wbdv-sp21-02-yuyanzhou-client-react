import React from 'react'
import "./course-editor.style.css"

const CourseEditor = ({history}) =>
    <div>
        <ul className="nav nav-tabs wbdv-bar-color">
            <li>
                <i className="nav-link fas fa-arrow-left fa-lg"
                   onClick={() => history.goBack()}>
                </i>
            </li>
            <li className="nav-item">
                <a className="nav-link">CS5610 - WebDev</a>
            </li>
            <li className="nav-item ml-auto">
                <a className="nav-link" href="#">Build</a>
            </li>
            <li className="nav-item ml-auto">
                <a className="nav-link active" aria-current="page" href="#">Pages</a>
            </li>
            <li className="nav-item ml-auto">
                <a className="nav-link" href="#">Theme</a>
            </li>
            <li className="nav-item ml-auto">
                <a className="nav-link" href="#">Store</a>
            </li>
            <li className="nav-item ml-auto">
                <a className="nav-link" href="#">Apps</a>
            </li>
            <li className="nav-item ml-auto">
                <a className="nav-link" href="#">Settings</a>
            </li>
            <li className="nav-item float-right">
                <a className="nav-link" href="#"> + </a>
            </li>
        </ul>
        <div className="row">
            <div className="col-3">
                <div className="list-group">
                    <a className="list-group-item" href="#">
                        Module 1 - JQuery
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item active" href="#">
                        Module 2 - React
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item" href="#">
                        Module 3 - Redux
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item" href="#">
                        Module 4 - Native
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item" href="#">
                        Module 5 - Angular
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item" href="#">
                        <i className="fas fa-plus float-right"></i>
                    </a>
                </div>
            </div>
            <div className="col-9">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item wbdv-pill">
                        <a className="nav-link" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item wbdv-pill">
                        <a className="nav-link active" href="#">Topic 2</a>
                    </li>
                    <li className="nav-item wbdv-pill">
                        <a className="nav-link" href="#">Topic 3</a>
                    </li>
                    <li className="nav-item wbdv-pill">
                        <a className="nav-link" href="#">Topic 4</a>
                    </li>
                    <li className="nav-item wbdv-pill">
                        <a className="nav-link" href="#"> + </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

export default CourseEditor
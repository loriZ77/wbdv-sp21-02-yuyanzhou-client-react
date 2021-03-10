import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }


    render() {
        return(
            <div>
                <br/>
                <h2>CourseTable</h2>

                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th className="d-none d-md-table-cell">Owned by</th>
                            <th className="d-none d-lg-table-cell">Last modified</th>
                            <th className="float-right">
                                <i className="btn fas fa-folder"/>
                                <i className="btn fas fa-sort-alpha-down"/>
                                <Link to="/courses/grid">
                                    <i className="fas fa-th"/>
                                </Link>
                            </th>
                        </tr>
                    {
                        this.props.courses.map((course, ndx) =>
                        <CourseRow
                            updateCourse={this.props.updateCourse}
                            deleteCourse={this.props.deleteCourse}
                            key={ndx}
                            course={course}
                            title={course.title}
                            owner={course.owner}
                            lastModified={course.lastModified}/>)
                    }
                    </tbody>
                </table>
                <div className="row">
                    <div className="col">
                        <i onClick={() => this.props.addCourse()}
                        className="redColor my-plus-stuck-at-bottom-right fas fa-3x fa-plus-circle float-right"></i>
                    </div>
                </div>
            </div>

        )
    }
}
import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }


    render() {
        return(
            <div>
                <h2>CourseTable</h2>

                <table className="table">
                    <tbody>
                    {/*<CourseRow title="CS1234" owner="Alice" lastModified={"1/2/34"}/>*/}
                    {/*<CourseRow title="CS2234" owner="BOB" lastModified={"22/2/34"}/>*/}
                    {/*<CourseRow title="CS3234" owner="CC" lastModified={"33/2/34"}/>*/}
                    {
                        this.props.courses.map((course, ndx) =>
                        <CourseRow
                            deleteCourse={this.props.deleteCourse}
                            key={ndx}
                            course={course}
                            title={course.title}
                            owner={course.owner}
                            lastModified={course.lastModified}/>)
                    }
                    </tbody>
                </table>
            </div>

        )
    }
}
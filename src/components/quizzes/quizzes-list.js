import {Link, useParams} from "react-router-dom"
import {useEffect, useState} from 'react'
import React from "react";
import quizService from '../../services/quiz-service'
const QuizzesList = ({
    //quizzes=[],
                     }) => {

    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([]);
    const findAllQuizzes = () => {
        return (
            quizService.findAllQuizzes()
                .then((quizzes) => {
                        setQuizzes(quizzes)
                        console.log(JSON.stringify(quizzes))

                })
                )
    }
    useEffect(()=> {
        findAllQuizzes()

    }, [])
    return (
        <div>
            <h2> {courseId} Quizzes</h2>
            <div className='list-group'>
                {
                    quizzes.map((quiz) => {
                        return (
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="list-group-item">{quiz.title}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList
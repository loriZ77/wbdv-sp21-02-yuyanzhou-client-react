import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import questionService from '../../services/question-service'
import Question from "./questions/questions";

const Quiz = () => {
    const {quizId} = useParams();
    const[questions, setQuestions] = useState([]);
    const findAllQuestion = (quizId) => {
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
                console.log(JSON.stringify(questions))
            })
    }

    useEffect(() => {
        findAllQuestion(quizId)
    }, [quizId])
    return (
        <div>
            <h2>Quiz {quizId} {questions.length}</h2>
            <ul>
                {
                    questions.map((question) => {

                        return (
                            <>
                            <Question
                            question={question}/>
                            <br/>
                            </>
                            )
                        //console.log(JSON.stringify(question.type))
                    }

                    )
                }
            </ul>
        </div>
    )
}

export default Quiz
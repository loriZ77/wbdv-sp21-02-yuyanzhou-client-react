import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import questionService from '../../services/question-service'
import Question from "./questions/questions";
import quizService from "../../services/quiz-service";


const Quiz = () => {
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([])
    //const attempts = []
    const[attempts, setAttempts] = useState([])
    const[scored, setScored] = useState(false)

    const score = (quizId, questions) => {
        quizService.submitQuiz(quizId, questions)
            .then((att) => {
                setAttempts([...attempts, att])
                console.log("array: " + JSON.stringify(attempts))

            })

        // quizService.findAllAttempts(quizId)
        //     .then((attempts) => {
        //         //console.log(JSON.stringify(attempts))
        //         setAttempts(attempts)
        //         }
        //     )
    }
    const findAttempts = (quizId) => {
        quizService.findAllAttempts(quizId)
            .then((results) => {
                setAttempts(results)
            })
    }
    const findAllQuestion = (quizId) => {
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
    }

    useEffect(() => {
        findAllQuestion(quizId)

    }, [quizId])

    // useEffect(() => {
    //     findAttempts(quizId)
    // } , [len])
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
            <button
                onClick={() => {
                    score(quizId, questions)
                    setScored(true)
                    findAttempts(quizId)
                }}
                type="button"
                className="btn btn-primary">Submit</button>
            <div>
                {
                scored &&
                <>
                Your Scores:
                    <ol className="list-group">
                        {

                            attempts.map((attempt) => {
                                console.log(JSON.stringify(attempt))
                                return (
                                    <li className="list-group-item">{attempt.score}</li>
                                )

                            })

                        }
                    </ol>
                </>
            }
            </div>

        </div>
    )
}

export default Quiz
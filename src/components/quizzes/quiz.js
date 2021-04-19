import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import questionService from '../../services/question-service'
import Question from "./questions/questions";
import quizService from "../../services/quiz-service";


const Quiz = () => {
    const {quizId} = useParams();
    const[questions, setQuestions] = useState([])
    const[attempts, setAttempts] = useState([])
    const[scored, setScored] = useState(false)

    const score = () => {
        quizService.scoreQuiz(quizId)
            .then((attempts) => {
                //console.log(JSON.stringify(attempts))
                setAttempts(attempts)
                }
            )
    }
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
            <button
                onClick={() => {
                    //console.log(JSON.stringify(questions.answer))
                    quizService.submitQuiz(quizId, questions)
                    setScored(true)
                    score()
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
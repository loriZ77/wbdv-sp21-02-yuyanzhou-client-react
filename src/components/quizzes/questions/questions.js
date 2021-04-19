import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";
import quizService from '../../../services/quiz-service'

const Question = ({question}) => {
    const {quizId} = useParams();
    const [yourAnswer, setYourAnswer] = useState("")
    const [isGraded, setIsGraded] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const grade = (yourAnswer) => {
        setIsGraded(true)
        setIsCorrect(false)
        setYourAnswer([])
        console.log(question.correct)

    }

    return (
        <div>
            <h5>
                {question.question}
                {
                    isGraded && isCorrect &&
                    <i className="fas fa-check color-green float-right"/>

                }
                {
                    isGraded && !isCorrect &&
                    <i className="fas fa-times color-red float-right"/>
                }
            </h5>

            {
                question.type === "TRUE_FALSE" &&
                    <TrueFalseQuestion
                    question={question}
                    yourAnswer={yourAnswer}
                    setYourAnswer={setYourAnswer}
                    isCorrect={isCorrect}
                    isGraded={isGraded}
                    setIsGraded={setIsGraded}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    yourAnswer={yourAnswer}
                    setYourAnswer={setYourAnswer}
                    isGraded={isGraded}
                    setIsGraded={setIsGraded}/>
            }
            <p>Your answer: {yourAnswer}</p>
            {/*<button*/}
            {/*    onClick={() => {*/}
            {/*        grade()*/}
            {/*        setIsCorrect(yourAnswer === question.correct)*/}
            {/*    }}*/}
            {/*    type="button"*/}
            {/*    className="btn btn-success">Grade</button>*/}

        </div>

    )
}

export default Question
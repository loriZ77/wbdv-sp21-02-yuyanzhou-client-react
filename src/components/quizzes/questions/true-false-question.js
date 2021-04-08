import React from 'react'

const TRUE = "true"
const FALSE = "false"

const TrueFalseQuestion = ({question, yourAnswer, setYourAnswer, isCorrect, isGraded, setIsGraded}) => {
    return (
        <div>
            <ul className="list-group" >


                <li className={`list-group-item 
                                ${isGraded ? ((TRUE === question.correct) ? 'list-group-item-success'  : (yourAnswer === TRUE ? 'list-group-item-danger' : "")) : ""}`}>
                    <label>
                        <input
                            onClick={() => {
                                setYourAnswer(TRUE)
                                setIsGraded(false)
                            }}
                            type="radio"
                            name={question._id}

                            />
                        True

                    </label>
                    <i className={`${isGraded ? ((TRUE === question.correct) ? 'fas fa-check color-green float-right' : (yourAnswer === TRUE ? 'fas fa-times color-red float-right' : "")) : ""}`}/>

                </li>
                <li className={`list-group-item 
                                ${isGraded ? ((FALSE === question.correct) ? 'list-group-item-success'  : (yourAnswer === FALSE ? 'list-group-item-danger' : "")) : ""}`}>
                    <label>
                        <input
                            onClick={() => {
                                setYourAnswer(FALSE)
                                setIsGraded(false)
                            }}
                            type="radio"
                            name={question._id}/>

                        False
                    </label>
                    <i className={`${isGraded ? ((FALSE === question.correct) ? 'fas fa-check color-green float-right' : (yourAnswer === FALSE ? 'fas fa-times color-red float-right' : "")) : ""}`}/>

                </li>


            </ul>
        </div>

    )
}

export default TrueFalseQuestion
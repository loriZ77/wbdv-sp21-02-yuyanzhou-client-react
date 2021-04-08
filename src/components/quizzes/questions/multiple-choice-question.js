import React, {useState} from 'react'

const MultipleChoiceQuestion = ({question, yourAnswer, setYourAnswer, isGraded, setIsGraded}) => {

    return (
        <div>
            {/*{*/}
            {/*    question.correct === yourAnswer &&*/}
            {/*    <i className="fas fa-check color-green float-right"/>*/}
            {/*}*/}
            {/*{*/}
            {/*    question.correct !== yourAnswer &&*/}
            {/*    <i className="fas fa-times color-red float-right"/>*/}
            {/*}*/}
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        console.log("your answer in multi: " + yourAnswer)

                        return (
                            <>
                            {
                                <li
                                className={`list-group-item 
                                ${isGraded ? ((choice === question.correct) ? 'list-group-item-success'  : (yourAnswer === choice ? 'list-group-item-danger' : "")) : ""}`}>
                                <label>
                                    <input
                                        onClick={() => {
                                            setYourAnswer(choice)
                                            setIsGraded(false) //after clicking the choice, reset the isGraded state
                                        }}
                                        type="radio"
                                        name={question._id}
                                        />
                                    {choice}
                                </label>
                                <i className={`${isGraded ? ((choice === question.correct) ? 'fas fa-check color-green float-right' : (yourAnswer === choice ? 'fas fa-times color-red float-right' : "")) : ""}`}/>
                                </li>}
                            {


                            }
                            </>
                        )
                    })


                }
            </ul>
        </div>

    )
}

export default MultipleChoiceQuestion
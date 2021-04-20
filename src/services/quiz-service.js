const QUIZZES_URL = 'https://wbdv-yuyanzhou-nodejs.herokuapp.com/api/quizzes'

export const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
export const submitQuiz = (quizId, questions) => {
    fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(result => console.log(result))
}

export const scoreQuiz = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}/attempts`)
        .then(response => response.json())


export default {
    findAllQuizzes,
    submitQuiz,
    scoreQuiz
}
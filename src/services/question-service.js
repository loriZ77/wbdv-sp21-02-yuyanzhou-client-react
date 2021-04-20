const QUIZZES_URL = 'https://wbdv-yuyanzhou-nodejs.herokuapp.com/api/quizzes'

const findQuestionsForQuiz = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}/questions`)
        .then(response => response.json())

export default {
    findQuestionsForQuiz
}

const QUIZZES_URL = 'http://localhost:3001/api/quizzes'

const findQuestionsForQuiz = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}/questions`)
        .then(response => response.json())

export default {
    findQuestionsForQuiz
}

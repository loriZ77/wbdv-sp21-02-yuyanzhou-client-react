const QUIZZES_URL = 'http://localhost:3001/api/quizzes'

export const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}

export default {
    findAllQuizzes
}
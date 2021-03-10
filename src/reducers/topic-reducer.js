const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_TOPICS":
            return {
                ...state,
                topics: action.topics

        }
        case "CREATE_TOPIC":
            //old array and append the new topic
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }

        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(t => {
                    if(t._id === action.topic._id) {
                        return action.topic
                    } else {
                        return t
                    }
                })
            }


        case "DELETE_TOPIC":
            alert("delete the topic " + action.topicToDelete.title)
            const newState = {
                topics: state.topics.filter(topic => {
                    if(topic._id === action.topicToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState

        default:
            return state
    }
}
export default topicReducer
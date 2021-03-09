const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_TOPIC":
            return {

        }
        case "CREATE_TOPIC":
            return {

            }
        case "UPDATE_TOPIC":
            return {

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
    }
}
export default topicReducer
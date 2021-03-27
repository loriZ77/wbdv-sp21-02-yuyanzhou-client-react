import {CREATE_MODULE, DELETE_MODULE, FIND_MODULES_FOR_COURSE, UPDATE_MODULE} from "../actions/module-actions"


const initialState = {
    modules: [
        // {_id:123, title: "Module 123"},
        // {_id:223, title: "Module 234"},
        // {_id:323, title: "Module 345"}
    ]
}

const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case FIND_MODULES_FOR_COURSE:
            return {
                ...state,
                modules: action.modules
            }

        case CREATE_MODULE:
            const newState1 = {
                modules: [
                    ...state.modules, //copy old array
                    action.module
                    // {
                    //     title: "New module",
                    //     _id: (new Date()).getTime()
                    // }
                ]
            }
            return newState1

        case DELETE_MODULE:
            alert("delete the module " + action.moduleToDelete.title)
            const newState2 = {
                modules: state.modules.filter(module => {
                    if(module._id === action.moduleToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState2

        case UPDATE_MODULE:
            return {
                modules: state.modules.map(m => {
                    if(m._id === action.module._id) {
                        return action.module
                    } else {
                        return m
                    }
                })
            }
        default:
            return state

    }
}
export default moduleReducer
const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001033108/courses"
const MODULES_URL= "https://wbdv-generic-server.herokuapp.com/api/001033108/modules"

export const createModuleForCourse = (courseId, module) =>
    fetch(`${COURSES_URL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateModuleForCourse = (moduleId, module) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(response => response.json())

export const deleteModulesForCourse = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    createModuleForCourse,
    updateModuleForCourse,
    findModulesForCourse,
    deleteModulesForCourse
};

export default api;
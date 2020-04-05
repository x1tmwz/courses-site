const logOut = () => ({
    type: 'LOG_OUT'
})
const loginStudent = (userName, password) => ({
    type: 'LOG_IN_STUDENT',
    userName,
    password

})
const loginTeacher = (userName, password) => ({
    type: 'LOG_IN_TEACHER',
    userName,
    password

})



export { logOut, loginStudent, loginTeacher };
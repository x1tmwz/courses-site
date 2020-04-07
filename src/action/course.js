const signOff =(courseId,userId)=>({
    type:"SIGN_OFF",
    courseId,
    userId
})
const signIn =(courseId,userId,firstName,lastName)=>({
    type:"SIGN_IN",
    courseId,
    userId,
    firstName,
    lastName
})
const setGrade =(courseId,teacherId,studentId,grade)=>({
    type:"SET_GRADE",
    courseId,
    teacherId,
    studentId,
    grade
})

export {signOff,signIn,setGrade};
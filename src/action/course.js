const signOff =(courseId,userId)=>({
    type:"SIGN_OFF",
    courseId,
    userId
})
const signIn =(courseId,userId,firstName,lastName)=>({
    type:"SIGN_OFF",
    courseId,
    userId,
    firstName,
    lastName
})
const setGrade =(courseId,teacherId,studentId,grade)=>({
    type:"SIGN_OFF",
    courseId,
    teacherId,
    studentId,
    grade
})

export {signOff,signIn,setGrade};
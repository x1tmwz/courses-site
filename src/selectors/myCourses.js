const myCoursesSelector =(courses,{id,type})=>{
    return courses.filter((course)=>{
        if(type === 'teacher'){
            return course.teacherId === id;
        }
        else if(type ==='student'){
            return !!(course.students.find((student)=>student.id === id));
        }
    })

}
export default myCoursesSelector;
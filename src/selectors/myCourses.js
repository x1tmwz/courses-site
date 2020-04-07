const myCoursesSelector =(courses,{id,type})=>{
    return courses.filter((course)=>{
        console.log(id,type);
        if(type === 'teacher'){
            return course.teacherId === id;
        }
        else if(type ==='student'){
            return !!(course.students.find((student)=>student.id === id));
        }
        return true;
    })

}
export default myCoursesSelector;
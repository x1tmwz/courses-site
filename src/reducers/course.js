import courses from '../data/courses';

const courseReducer = (state = courses, action) => {
    switch (action.type) {
        case "SIGN_OFF":
            return state.map((course) => {
                if (course.id === action.courseId) {
                    return {
                        ...course,
                        students: course.students.filter((student) => student.id !== action.userId)
                    }
                }
                return course
            })
        case "SIGN_IN":
            return state.map((course) => {
                if (course.id === action.courseId) {
                    const student = course.students.find((student) => student.id === action.userId)
                    console.log(student);
                    if (!student) {
                        return {
                            ...course,
                            students: [...course.students,
                            {
                                id: action.userId,
                                firstName: action.firstName,
                                lastName: action.lastName,
                                grade: 0
                            }]
                        }
                    }
                }
                return course
            });
        case "SET_GRADE":
            return state.map((course) => {
                if (course.id === action.courseId && course.teacherId === action.teacherId) {
                    return {
                        ...course,
                        students: course.students.map((student) => {
                            if (student.id === action.studentId) {
                                student.grade = action.grade;
                            }
                            return student;
                        })
                    }
                }
                return course
            })
        default:
            return state;
    }
}
export default courseReducer;
import students from '../data/students';
import teachers from '../data/teachers';

const defaultAuthState = {};

const userReducer = (state = defaultAuthState, action) => {
    switch (action.type) {
        case 'LOG_IN_STUDENT':
            const student = students.find((student) => {
                const userNameMatch = student.userName === action.userName;
                const passwordMatch = student.password === action.password;
                return userNameMatch && passwordMatch;
            });
            if(!student){
                return {}
            }
            return {
                id: student.id ,
                firstName:student.firstName,
                lastName:student.lastName,
                type: 'student'
            }
        case 'LOG_IN_TEACHER':
            const teacher = teachers.find((teacher) => {
                const userNameMatch = teacher.userName === action.userName;
                const passwordMatch = teacher.password === action.password;
                return userNameMatch && passwordMatch;
            });
            if(!teacher){
                return {};
            }
            return {
                id:teacher.id ,
                firstName:teacher.firstName,
                lastName:teacher.lastName,
                type: 'teacher'
            }
        case 'LOG_OUT':
            return {};
        default:
            return state;
    }

}
export default userReducer;
import React from 'react';
import { connect } from 'react-redux'
import myCoursesSelector from '../selectors/myCourses'
import TeacherCourseItem from './TeacherCourseItem';
import StudentItem from './StudentItem';


const MySpace = (props) => {
    return (
        <div>
            <h1>My personal Space</h1>
            <p>Welcome {`${props.user.firstName} ${props.user.lastName}`} </p>
            <h2>Your courses</h2>
            {props.courses.map((course) => {
                if (props.user.type === 'teacher') {
                    return <TeacherCourseItem
                        key={course.id}
                        name={course.name}
                        students={course.students}
                        schedule={course.schedule}
                    />
                }
                if (props.user.type === 'student') {
                    return <StudentItem
                        key={course.id}
                        courseId={course.id}
                        studentId={props.user.id}
                        name={course.name}
                        schedule={course.schedule}
                        grade={course.students.find((student) => student.id === props.user.id).grade}
                    />

                }


            })}
        </div>
    );
}
const mapStateToProps = (state) => ({
    courses: myCoursesSelector(state.courses, state.user),
    user: state.user
})
export default connect(mapStateToProps)(MySpace);
import React from 'react';
import { connect } from 'react-redux'
import CourseItem from './CourseItem';
import teachers from '../data/teachers';
const HomePage = (props) => {
    return (
        <div>
            <h1>Tomer Acdeamy</h1>
            <h2>Our Courses</h2>
            {props.courses.map((course) => <CourseItem
                key={course.id}
                courseId={course.id}
                name={course.name}
                teacher={teachers.find((teacher) => teacher.id === course.teacherId)}
                studentsAmount={course.students.length}
                schedule={course.schedule}
            />)}



        </div>
    );
}
const mapStateToProps = (state) => ({
    courses: state.courses,
})
export default connect(mapStateToProps)(HomePage);
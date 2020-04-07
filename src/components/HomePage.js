import React from 'react';
import { connect } from 'react-redux'
import CourseItem from './CourseItem';
import teachers from '../data/teachers';
const HomePage = (props) => {
    return (
        <div>
            <div className="column_wrap">
                <h1>Tomer Acdeamy</h1>
                <h2>About us</h2>
                <p> Tomer Acdeamy is the undergraduate acdeamy of Tomer University,
                     an Ivy League research university in Israel,
                      Tirat Carmel. Founded in 1636,
                      Tomer Acdeamy is the original school of Tomer University,
                        which is the oldest institution of higher learning in the Israel and one of the most prestigious in the world.</p>
                <h2>Our Courses</h2>
            </div>
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
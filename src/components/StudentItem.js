import React from 'react';
import { connect } from 'react-redux';
import { signOff } from '../action/course';

const StudentItem = ({
    name,
    schedule,
    grade,
    courseId,
    studentId,
    courseSignOff }) => {
    const signOffHandler = () => {
        courseSignOff(courseId,studentId);
    }
    return (
        <div>
            <h1>{name}</h1>
            <p>grade:{grade}</p>
            <button onClick={signOffHandler}>Sign off</button>
        </div>
    );
}
const mapDispacthToProps = (dispatch) => ({
    courseSignOff: (courseId, userId) => dispatch(signOff(courseId, userId))

})
export default connect(undefined, mapDispacthToProps)(StudentItem);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signOff } from '../action/course';
import Schedule from './Schedule';

const StudentItem = ({
    name,
    schedule,
    grade,
    courseId,
    studentId,
    courseSignOff }) => {

    const [isShowSchedule, setShowSchedule] = useState(false);

    const signOffHandler = () => {
        courseSignOff(courseId, studentId);
    }
    const showScheduleHandler=()=>{
        setShowSchedule(!isShowSchedule);
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>grade:{grade? grade : "there is no grade yet"}</p>
            <button onClick={showScheduleHandler}>Schedule</button>
            {isShowSchedule && <Schedule schedule={schedule}/>}
            <button onClick={signOffHandler}>Sign off</button>
        </div>
    );
}
const mapDispacthToProps = (dispatch) => ({
    courseSignOff: (courseId, userId) => dispatch(signOff(courseId, userId))

})
export default connect(undefined, mapDispacthToProps)(StudentItem);
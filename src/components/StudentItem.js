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
    const showScheduleHandler = () => {
        setShowSchedule(!isShowSchedule);
    }

    return (
        <div>
            <div className="item_wrap item--student">
                <h1>{name}</h1>
                <p className="text--bold">Grade:{grade ? grade : "there is no grade yet"}</p>
                <div className="column_wrap">
                    <button onClick={showScheduleHandler} className="button--black">Schedule</button>
                    {isShowSchedule && <Schedule schedule={schedule} />}
                </div>
                <button onClick={signOffHandler} className="button--black">Sign off</button>
            </div>


        </div>

    );
}
const mapDispacthToProps = (dispatch) => ({
    courseSignOff: (courseId, userId) => dispatch(signOff(courseId, userId))

})
export default connect(undefined, mapDispacthToProps)(StudentItem);
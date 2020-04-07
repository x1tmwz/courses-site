import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../action/course';
import Schedule from './Schedule';

const CourseItem = ({ name, teacher, studentsAmount, schedule, courseId, user, startSignIn }) => {
    const [isShowSchedule, setShowSchedule] = useState(false);
    const showScheduleHandler = () => {
        setShowSchedule(!isShowSchedule);
    }
    const signInHandler = () => {
        startSignIn(courseId, user.id, user.firstName, user.lastName);
    }
    return (
        <div className="item_wrap">
            <h1>{name}</h1>
            <div className="item_content">
                <h2> Teacher:{`${teacher.firstName}  ${teacher.lastName} `}</h2>
                <h3>Students in course:{studentsAmount}</h3>
                <div>
                    <div className="item_functions">
                        <button onClick={showScheduleHandler} className='button--black'>Schedule</button>
                        {(user.id && user.type === "student") && <button onClick={signInHandler} className='button--black'>Sign in</button>}
                    </div>
                    {isShowSchedule && <Schedule schedule={schedule} />}
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    startSignIn: (courseId, userId, firstName, lastName) => dispatch(signIn(courseId, userId, firstName, lastName))
})
export default connect(mapStateToProps, mapDispatchToProps)(CourseItem);
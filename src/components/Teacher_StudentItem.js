import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setGrade } from '../action/course';

const StudentItem = ({
    studentId,
    courseId,
    firstName,
    lastName,
    grade,
    user,
    startSetGrade
 }) => {
    const [isEdit, setEdit] = useState(false);
    const [error,setError]= useState('');
    const isEditHandler = () => {
        setEdit(!isEdit)
    }
    const editGradeHandler = (e) => {
        const regX= /^\d\d?\d?$/
        const grade = e.target.value;
        if(grade.match(regX) && grade <= 100){
            startSetGrade(courseId,user.id,studentId,grade);
            setEdit(!isEdit);
            setError("");
        }
        else{
            setError("please enter a valid grade 1-100");
        }


    }

    return (
        <div>
            <p>Id:{`${studentId}`}</p>
            <p>Full-name:{`${firstName} ${lastName}`}</p>
            {isEdit ? <input type="text" onBlur={editGradeHandler} placeholder="Grade..." maxLength="3" /> : <p onClick={isEditHandler}>Grade:{`${grade}`}</p>}
            {error || <p>{error}</p>}
        </div>
    );

}
const mapStateToProps =(state)=>({
    user:state.user
})
const mapDispatchToProps = (dispatch) => ({
    startSetGrade: (courseId, teacherId, studentId, grade) => dispatch(setGrade(courseId, teacherId, studentId, grade))
})
export default connect(mapStateToProps, mapDispatchToProps)(StudentItem);
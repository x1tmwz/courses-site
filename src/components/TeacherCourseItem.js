import React from 'react';
import StudentItem from './Teacher_StudentItem';

const TeacherCourseItem = ({ name, students }) => {
    return (
        <div>
            <h1>{name}</h1>
            {students.map((student)=><StudentItem
            key={student.id}
            id={student.id}
            firstName={student.firstName}
            lastName={student.lastName}
            grade={student.grade}
            />)}
            
        </div>
    );
}
export default TeacherCourseItem;
import React,{useState} from 'react';
import StudentItem from './Teacher_StudentItem';
import Schedule from './Schedule';

const TeacherCourseItem = ({ name, courseId,students,schedule }) => {
    const [isShowSchedule, setShowSchedule] = useState(false);
    const showScheduleHandler=()=>{
        setShowSchedule(!isShowSchedule);
    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={showScheduleHandler}>Schedule</button>
            {isShowSchedule && <Schedule schedule={schedule}/>}
            {students.length > 0 ? students.map((student)=><StudentItem
            key={student.id}
            studentId={student.id}
            firstName={student.firstName}
            lastName={student.lastName}
            grade={student.grade}
            courseId={courseId}
            />) : <p>No students sign to this course </p>
        }
            
        </div>
    );
}
export default TeacherCourseItem;
import React from 'react';
import ScheduleItem from './ScheduleItem'

const Schedule = ({schedule})=>{
    return(
        <div>
        {schedule.map((day)=><ScheduleItem 
            key={day.day}
            day={day.day}
            startAt={day.time.start}
            endAt={day.time.end}
            />)}
        </div>
    );
}
export default Schedule;
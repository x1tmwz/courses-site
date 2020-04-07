import React from 'react';

const ScheduleItem = ({day,startAt,endAt})=>{
    return(
        <p>{day} {startAt}-{endAt}</p>
    );
}
export default ScheduleItem; 
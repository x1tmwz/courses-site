import React from 'react';

const StudentItem =({id,firstName,lastName,grade})=>{
    return (<div>
        <p>Id:{`${id}`}</p>
        <p>Full-name:{`${firstName} ${lastName}`}</p>
        <p>Grade:{`${grade}`}</p>
    </div>);

}
export default StudentItem;
import React from 'react';
import {connect} from 'react-redux'
const HomePage =(props)=>{
    return(
        <div>
            <h1>Tomer Acdeamy</h1>
            <h2>Our Courses</h2>
            
           
        </div>
    );
}
const mapStateToProps=(state)=>({
    courses:state.courses
})
export default connect(mapStateToProps)(HomePage);
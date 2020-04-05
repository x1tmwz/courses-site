import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginStudent, loginTeacher } from '../action/user';



const LoginPage = (props) => {

    const [error, setError] = useState('');
    const [isSubmit,setIsSubmit]= useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        const user = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        const type = e.target.elements.type.value;
        if (type === 'student') {
            props.loginAsStudent(user, password);
            e.target.elements.username.value = "";
            e.target.elements.password.value ="";
            setIsSubmit(true);
        } else if (type === 'teacher') {
            props.loginAsTeacher(user, password);
            e.target.elements.username.value = "";
            e.target.elements.password.value ="";
            setIsSubmit(true);
        }
    }
    useEffect(() => {
        if(isSubmit){
            if (!props.user.id) {
                setError('Something went wrong please enter valid user name and password');
                setIsSubmit(false);
            }
            else{
                setError('');
                props.history.push('/');
            }
        }
    },[props.user.id,isSubmit])


    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder="username" name="username" />
                <input type='password' placeholder="password" name="password" />
                <select name="type">
                    <option>teacher</option>
                    <option>student</option>
                </select>
                <button>Log in</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}
const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    loginAsStudent: (username, password) => dispatch(loginStudent(username, password)),
    loginAsTeacher: (username, password) => dispatch(loginTeacher(username, password))

})
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);



import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../action/user'

const Header = (props) => {
    const clickHandler = () => {
        props.startLogOut();
    }
   
    return (
        <header>
            <NavLink to='/'><h1>ClassManger</h1></NavLink>
            {props.user.id ? <button onClick={clickHandler}>log out</button> : <NavLink to='/login'>Log-in</NavLink>}
            {props.user.type && <NavLink to='/MySpace'>Personal Space</NavLink>} 
        </header>
    );
}

const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(logOut())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
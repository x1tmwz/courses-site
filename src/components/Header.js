import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../action/user'

const Header = (props) => {
    const clickHandler = () => {
        props.startLogOut();
    }

    return (
        <header className="header">
            <div className="header__content">
                <NavLink to='/' className='link'><h1 className="header__title">Tomer <span>Academy</span></h1></NavLink>
                {props.user.id ?
                <div className="column_wrap">
                    <NavLink className='link' to='/MySpace'><span className="link__cool">Personal space</span></NavLink>
                    <button onClick={clickHandler} className="button">Log out</button>
                </div>
                    :
                    <NavLink to='/login' className='link'><span className="link__cool">Log-in</span></NavLink>}



            </div>
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
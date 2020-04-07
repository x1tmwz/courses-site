import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import Header from '../components/Header';
import MySpace from '../components/MySpace';



const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <div className="container">
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/login' component={LoginPage} />
                <PrivateRoute path='/mySpace' component={MySpace} />
            </Switch>
        </div>

    </BrowserRouter>
);
export default AppRouter;
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import Header from '../components/Header';
import MySpace from '../components/MySpace';



const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/' component={HomePage} exact={true} />
            <Route path='/login' component={LoginPage} />
            <Route path='/mySpace' component={MySpace} />
           
        </Switch>

    </BrowserRouter>
);
export default AppRouter;
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <Link to="/">home</Link>
                </div>
                <div>
                    <Link to="/register">register</Link>
                </div>
                <div>
                    <Link to="/login">login</Link>
                </div>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};
import React from 'react'

import App from './containers/App/index'
import NotFound from './components/NotFound';
import LogInPage from './containers/LogInPage';
import {Route, IndexRoute} from 'react-router'


export const routes =(
    <div>
        <Route path='/' component={App}>
            <Route path={'/login'} component={LogInPage}/>
        </Route>
        <Route path='*' component={NotFound}/>
    </div>
)
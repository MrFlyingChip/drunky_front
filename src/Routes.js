import React from 'react'

import App from './containers/App';
import AdminPage from './containers/AdminPage';
import NotFound from './components/NotFound';
import LogInPage from './containers/LogInPage';
import DrinksList from './containers/DrinksList';
import {Route, IndexRoute} from 'react-router'


export const routes =(
    <div>
        <Route path='/' component={App}>
            <Route path={'/login'} component={LogInPage}/>
            <Route path={'/admin'} component={AdminPage} />
            <Route path={'/admin/drinks'} component={DrinksList}/>
            <Route path={'/admin/drinks/:id'} />
        </Route>
        <Route path='*' component={NotFound}/>
    </div>
)
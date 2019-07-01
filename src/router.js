import React, { Component } from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import App from './App'
import Admin from './admin'
import login from './pages/login'
import Button from './pages/ui/buttons'


export class Rouer extends Component {
    render () {
        return (


            <HashRouter>
                <App>
                    <Route path='/login' component={login}></Route>
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Route path='admin/ui/buttons' component={Button}></Route>
                        </Admin>
                    }>

                    </Route>
                </App>
            </HashRouter>

        )
    }
}

export default Rouer

import React, {Component} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from '../views/home'
import NotMatch from '../views/notMatch'
import Admin from '../views/admin'
import Order from '../views/order'
import SecondPage from '../views/secondPage'

class Router extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/' render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/order' component={Order}></Route>
                                    <Route path='/admin/secondPage' component={SecondPage}></Route>
                                    <Route component={NotMatch}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default Router
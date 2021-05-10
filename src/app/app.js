import React from 'react'
import AppMinMax from '@c/minmax'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { observer } from 'mobx-react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import routes from '@/routes'

import Cart from '@p/Cart';
import Order from '@p/Order';
import Result from '@p/Result';
import { routesMap } from '../routes/routes';


class App extends React.Component {

    render() {
        let routesComponents = routes.map((route) => {
            return <Route path={route.url}
                          component={route.component}
                          exact={route.exact}
                          key={route.url}/>
        })

        return (
            <Router>
                <Container>
                    header
                    <hr/>
                    <div className="row">
                        <div style={{marginTop: 25}} className="col col-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to={routesMap.home}>Home</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={routesMap.cart}>Cart</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={routesMap.order}>Order now</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col col-9">
                            <Switch>
                                {routesComponents}
                            </Switch>
                        </div>
                    </div>
                    
               </Container>
            </Router>
        )
    }
}

export default observer(App);









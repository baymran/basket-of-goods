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
import {BrowserRouter as Router, Route} from 'react-router-dom'
import routes from '@/routes'

import Cart from '@p/Cart';
import Order from '@p/Order';
import Result from '@p/Result';


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
                    {routesComponents}
               </Container>
            </Router>
        )
    }
}

export default observer(App);









import React, {Component} from 'react';
import { routesMap } from '@/routes'
import { Link } from 'react-router-dom'
import routes from '../../routes/routes';

export default function() {
    return(
        <>
            <h1>Error 404, page not found</h1>
            <hr/>
            <div className="alert alert-warning">
                <p>Go to&nbsp; 
                    <Link to={routesMap.home}>
                         home page</Link>
                </p>
            </div>
        </>
    )
} 
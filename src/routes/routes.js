import Cart from '@p/Cart';
import Order from '@p/Order';
import Result from '@p/Result';
import Page404 from '@p/error404'
import Post from '@p/post'

let routes = [
    {
        name: 'home',
        url: '/',
        component: Cart,
        exact: true
    },
    {
        name: 'order',
        url: '/order',
        component: Order,
        exact: true
    },
    {
        name: 'result',
        url: '/done',
        component: Result,
        exact: true
    },
    {
        name: 'posts',
        url: '/news/:url',
        component: Post,
        exact: true
    },
    {
        url: '**',
        component: Page404
    }
];

let routesMap = {};

routes.forEach((route) => {
    if(route.hasOwnProperty('name')){
        routesMap[route.name] = route.url
    }
    
})

export default routes;
export {routesMap};
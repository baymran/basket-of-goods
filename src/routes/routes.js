import Cart from '@p/Cart';
import Order from '@p/Order';
import Result from '@p/Result';

let routes = [
    {
        url: '/',
        component: Cart,
        exact: true
    },
    {
        url: '/order',
        component: Order,
        exact: true
    },
    {
        url: '/done',
        component: Result,
        exact: true
    }
];

export default routes;
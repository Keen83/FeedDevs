import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LunchMenu } from './components/LunchMenu';
import { FetchData } from './components/FetchData';
import { NewMenu } from './components/NewMenu';
import { MyOrders } from './components/MyOrders';
import { AllOrders } from './components/AllOrders';

export const routes = <Layout>
    <Route exact path='/' component={ LunchMenu } />
    <Route exact path='/menu' component={ LunchMenu } />
    <Route path='/myorders' component={ MyOrders } />
    <Route path='/newmenu' component={ NewMenu } />
    <Route path='/allorders' component={ AllOrders } />
    <Route path='/fetchdata' component={ FetchData } />
</Layout>;

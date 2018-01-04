import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class MyOrders extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div> 
            <h1>My Orders list</h1>
        </div>;
    }
}

import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class AllOrders extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div> 
            <h1>All people orders for today</h1>
        </div>;
    }
}

import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface CounterState {
    currentCount: number;
}

export class NewMenu extends React.Component<RouteComponentProps<{}>, CounterState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <h1>New Menu</h1>

            <button onClick={ () => { this.incrementCounter() } }>Increment</button>
        </div>;
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}

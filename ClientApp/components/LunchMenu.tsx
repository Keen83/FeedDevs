import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Lunch } from './Lunch';

export class LunchMenu extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return ( 
            <div> 
                <h1>Lunch Menu for 17.01.2018</h1>
                <hr/>
                <Lunch />
            </div>
        );
    }
}

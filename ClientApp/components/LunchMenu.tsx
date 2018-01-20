import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Lunch } from './Lunch';

export class LunchMenu extends React.Component<RouteComponentProps<{}>, {}> {
    a = [{num: 1, name: "Красный борщ"},
        {num: 2, name: "Отбивная (свинина)"},
        {num: 3, name: "Булгур с овощами"},
        {num: 4, name: "Оливье"}];
    
    public render() {
        return ( 
            <div> 
                <h1>Lunch Menu for 21.01.2018</h1>
                <hr/>
                <Lunch />
            </div>
        );
    }
}

import * as React from 'react';
import { MenuItem, MenuItemModel } from './MenuItem'

export class Lunch extends React.Component {
    a = [{num: 1, name: "Красный борщ"},
        {num: 2, name: "Отбивная (свинина)"},
        {num: 3, name: "Булгур с овощами"},
        {num: 4, name: "Оливье"}];

    render() {
        return (
            <div>
                {/* <h2>Lunch {this.props.no}</h2> */}
                <hr/>
                <MenuItem data={this.a[0]} />
                <MenuItem data={this.a[1]}/>
                <MenuItem data={this.a[2]}/>
                <MenuItem data={this.a[3]}/>
            </div>
        );
    }
}
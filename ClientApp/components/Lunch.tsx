import * as React from 'react';
import { MenuItem, MenuItemModel } from './MenuItem'

export class Lunch extends React.Component {
    menuItemsModels = [{id: 1, num: 1, name: "Красный борщ"},
        {id: 2, num: 2, name: "Отбивная (свинина)"},
        {id: 3, num: 3, name: "Булгур с овощами"},
        {id: 4, num: 4, name: "Оливье"}];

    createMenuItem = (menuItemModel: MenuItemModel) => (
        <MenuItem 
            id={menuItemModel.id}
            num={menuItemModel.num} 
            name={menuItemModel.name} 
            key={menuItemModel.id}/>
    )

    createMenuItems = () => (
        this.menuItemsModels.map(this.createMenuItem)
      )
      

    render() {
        return (
            <div>
                {/* <h2>Lunch {this.props.no}</h2> */}
                <hr/>
                <ul>
                    {this.createMenuItems()}
                </ul>
            </div>
        );
    }
}
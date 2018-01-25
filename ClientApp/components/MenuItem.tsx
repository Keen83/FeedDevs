import * as React from 'react'

export interface MenuItemModel {
    id: number,
    num: number, 
    name: string
}

export class MenuItem extends React.Component<MenuItemModel, {}> {
    
    toggleCheckboxChange = () => {
        //const { handleCheckboxChange, label } = this.props;
    }

    public render() {
        return (
            <li>
                {this.props.num}. {this.props.name}
                <input type="checkbox" onChange={this.toggleCheckboxChange} />
            </li>
        );
    }
}
import * as React from 'react'

export interface MenuItemModel {
    data: {num: number, name: string}
}

export class MenuItem extends React.Component<MenuItemModel, {}> {
    public render() {
        return (
            <div>
                {this.props.data.num}. {this.props.data.name}
                <input type="checkbox" />
            </div>
        );
    }
}
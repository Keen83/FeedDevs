import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>FeedDevs</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/menu' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/myorders' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> My Orders
                            </NavLink>
                        </li>
                        <div className='clearfix'></div>
                        <li>
                            <NavLink to={ '/newmenu' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> New Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/allorders' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> All Orders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/fetchdata' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Fetch data
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}

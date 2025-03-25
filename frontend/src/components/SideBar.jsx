import { useState } from "react";
import '../App.css';
import LOGO from '../assets/LOGO.svg';
import people from '../assets/people.svg';

export const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false); 

    return (
    <div>
        <div className="SideBar">
        <img src={LOGO} className="SideBarImg"/>
            <ul> 
                <li className="liSideBar"> 
                    <img src={people}/> 
                    <a className="liSidebarA">Overview</a>
                </li>
                <li className="liSideBar"> 
                    <img src={people}/> 
                    <a className="liSidebarA">Advice</a>
                </li>
                <li className="liSideBar"> 
                    <img src={people}/> 
                    <a className="liSidebarA">Activities</a>
                </li>
                <li className="liSideBar"> 
                    <img src={people}/> 
                    <a className="liSidebarA">Expenses</a>
                </li>
            </ul>
        </div>
        <div className="bottom-menu"> 
            <ul>
                <li className="bottom-menu-li"> 
                    <img src={people}/> 
                    <a className="liSidebarA">Settings</a>
                </li>
                <li className="bottom-menu-li">
                    <img src={people}/> 
                    <a className="liSidebarA">Log out</a>
                </li>
            </ul>
        </div>
    </div>
    );
}
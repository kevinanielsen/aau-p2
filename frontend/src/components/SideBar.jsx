import { useState } from "react";
import '../App.css';
import LOGO from '../assets/LOGO.svg';
import people from '../assets/people.svg';

export const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false); 

    return (
    <div>
        <ul className="ulSideBar"> 
            <img src={LOGO} className="ulSideBarImg"/>
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
        <div> 
            <ul className="bottom-menu">
                <li> 
                    <img src={people}/> 
                    <a>Settings</a>
                </li>
                <li>
                    <img src={people}/> 
                    <a>Log out</a>
                </li>
            </ul>
        </div>
    </div>
    );
}
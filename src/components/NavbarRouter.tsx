import React, {Component} from "react";
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

export default class NavbarRef extends Component{
    public render = () =>{
    return (
        <>
        <nav className="navbar">
            <Link to="/"><h1>(Logo)</h1></Link>
            <div>
                <Link to="/">Thema's</Link>
                <Link to="/samenwerkingsverbanden">Samenwerkingsverbanden</Link>
            </div>
        </nav>
        </>
    )
    }
}
import React, {Component} from "react";
import { Container } from "react-bootstrap";

export default class Navbar extends Component{
    public render = () =>{
        return(
            <nav className="navbar text-light bg-dark navbar-fixed-top">
                <a href="#" className="nav navbar-nav text-light">Home</a>
                <span className="nav navbar-nav">Thema</span>
                <span className="nav navbar-nav">Samenwerkingsverband</span>
            </nav>
        )
    }
}
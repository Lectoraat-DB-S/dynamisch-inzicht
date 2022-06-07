import React, {Component} from "react";
import Themes from "./themes";
import Collabs from "./Collabs";
import "../style/Navbar.css"


export default class Navbar extends Component<{}, {showCollab: boolean, showTheme: boolean}>{
    constructor(props: any){
        super(props);
        this.state = {showCollab: false, showTheme: true}
    }

    private showOnClickCollab = () =>{
        this.setState({showCollab: true, showTheme: false})
    }

    private showOnClickTheme = () =>{
        this.setState({showTheme: true, showCollab: false})
    }


    public render = () =>{
        const {showCollab} = this.state
        return(
            <>
            <nav className="navbar text-light bg-dark navbar-fixed-top text">
                <span className="nav navbar-nav" onClick={this.showOnClickTheme}>Thema</span>
                <span className="nav navbar-nav" onClick={this.showOnClickCollab}>Samenwerkingsverband</span>
            </nav>
            <div>
            {this.state.showCollab ?
            <Collabs/> :
            null}
            {this.state.showTheme ?
            <Themes /> :
            null}
            </div>
            </>
        )
    }
}
import React, {Component} from "react";
import WorldMap from "./components/worldMap";
import Themes from "./components/themes";

export default class App extends Component{
    public render = () =>{
        return(
            <>
            <Themes/>
            <WorldMap/>
            </>
        )
    }
}

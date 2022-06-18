import e from "express";
import React, {Component} from "react";
import "../style/collabs.css"
import WorldMap from "./worldMap"


interface State {
    selectedCollab: string;
}

export default class Collabs extends Component<State>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedCollab: ""
        };
    
        this.changeState = this.changeState.bind(this);
}
    changeState(e: any) {
        this.setState({selectedCollab: e.target.value})
    }

    public render = () =>{
        const selectedCollab = this.state
        const collabs = require("../mock-response/collabs.json")
        const CollabList = ({data}: {data: any}) => {
            return data.map(({name}: any) => (
                <button onClick={this.changeState} value={name} onChange={this.changeState}>{name}</button>
            ))
        }



        return(
            <>
            <div className="collab-container">
            <h2>Samenwerkingsverbanden</h2>
            <ul className="list-items">
            <CollabList data={collabs}/>
            </ul>
            </div>
            </>
        )
    }
}
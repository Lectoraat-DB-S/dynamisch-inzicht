import React, { Component } from "react";
import "../style/Themes.css";

export default class Themes extends Component {
  public render = () => {
    return(
      <>
      <div>
      <table className="table-container">
        <tr>
          <td>Thema 1</td>
          <td>Thema 2</td>
        </tr>
        <tr>
          <td>Thema 3</td>
          <td>Thema 4</td>
        </tr>
        <tr>
          <td>Thema 5</td>
          <td>Thema 6</td>
        </tr>
        <tr>
          <td>Thema 7</td>
          <td>Thema 8</td>
        </tr>
      </table>
      </div>
      </>
    )
  }
}
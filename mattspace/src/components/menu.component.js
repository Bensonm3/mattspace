import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class Menu extends Component{
    render(){
        return(<div>
            <Link to={"/createpost"} className="nav-link">
            Create Post
          </Link>
          <br></br>
          <Link to={"/displayposts"} className="nav-link">
            Display Posts
          </Link>
          </div>
        )
    }
}
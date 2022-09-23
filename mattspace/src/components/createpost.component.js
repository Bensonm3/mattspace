import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default class CreatePost extends Component{
    render(){
        return(
            <div>CREATE POST COMPONENT
                <div><Link to={"/"} > Menu</Link></div>
            </div>
        )
    }
}
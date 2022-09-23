import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class DisplayPosts extends Component{
    render(){
        return(
            <div>DISPLAY POSTS COMPONENT
                <div><Link to={"/"} > Menu</Link></div>
            </div>
            
        )
    }
}
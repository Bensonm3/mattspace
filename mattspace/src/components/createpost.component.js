import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default class CreatePost extends Component{
    constructor(props){
        super(props)
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.submitPost = this.submitPost.bind(this);
        this.state = {
            title: null,
            body: null
        }
    }

    handleTitleChange = (e) =>{
        this.setState({
            title: e.target.value
        })
        console.log(this.state.title)
    }
    handleBodyChange = (e) =>{
        this.setState({
            body: e.target.value
        })
        console.log(this.state.body)
    }
    submitPost = (e) => {
        e.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body
        } 
        console.log(post)
    }
    render(){
        return(
            <div>CREATE POST COMPONENT
                <div><Link to={"/"} > Menu</Link></div>
                <div>
                    <form>
                        <input placeholder="title" onChange={this.handleTitleChange}></input>
                        <br></br>
                        <input placeholder="Post Text" onChange={this.handleBodyChange}></input>
                        <button onSubmit={this.submitPost}>Submit</button>
                    </form>
                </div>
            </div>
            
        )
    }
}
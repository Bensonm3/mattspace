import logo from './logo.svg';
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePost from "./components/createpost.component";
import DisplayPosts from "./components/displayposts.component";
import Menu from "./components/menu.component"

function App() {
  return (<Router>
  {/* <Link to={"/createpost"} className="nav-link">
                Create Post
              </Link>
              <br></br>
              <Link to={"/displayposts"} className="nav-link">
                Display Posts
              </Link> */}
              <Routes>
                <Route exact path='/' element={<Menu/>}  />
                <Route path="/createpost" element={<CreatePost/>} />
                <Route path="/displayposts" element={<DisplayPosts/>} />
              </Routes>
  </Router>
  );
}

export default App;

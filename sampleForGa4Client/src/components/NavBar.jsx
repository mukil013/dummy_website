import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function App() {
  return(
    <nav className="w-screen h-16 grid place-items-center absolute top-0">
      <ul className="flex w-3/4 justify-between items-center">
        <li>
          <Link to='/'><Button shape="round">Home</Button></Link>
        </li>
        <li>
          <Link to='/about'><Button shape="round">About</Button></Link>
        </li>
        <li>
          <Link to='/contact'><Button shape="round">Contact</Button></Link>
        </li>
        <li>
          <Link to='/account'><Button shape="round">Account</Button></Link>
        </li>
      </ul>
      
    </nav>
  )
}

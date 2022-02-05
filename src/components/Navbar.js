import React, { Component } from 'react';
import {Link} from "react-router-dom"
export class Navbar extends Component {
  render() {
    return <div>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/products'>products</Link></li>
            <li><Link to='/customers'>customers</Link></li>
        </ul>
    </div>;
  }
}

export default Navbar;

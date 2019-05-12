import React,{Component} from 'react';
import Logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';



class Navbar extends Component {

    state = {
        isOpen:false
    }

    handleToggle = () =>{

        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    render(){

    return(
        <nav className="navbar">
         <div className="nav-center">
           <div className="nav-header">
         <Link to="/"><img src={Logo}  alt="beach"/> </Link>

         <button type="button" className="nav-btn">
            <FaAlignRight className="nav-icon" onClick={this.handleToggle}/>
         </button>
           </div>
           <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
            <li>
                <Link to="/">Home </Link>
            </li>
            <li>
                <Link to="/Rooms">Room</Link>
            </li>

           </ul>
         </div>
        </nav>
       )
    }
}

export default Navbar
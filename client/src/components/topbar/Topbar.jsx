import { Link } from 'react-router-dom'
import './topbar.css'
import { useContext } from "react";
import { Context } from '../../context/Context';


const Topbar = () => {

  const {user,dispatch } =useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className='top'>
    
    <div className='topLeft'>

    <i className="topIcon fab fa-facebook-square"></i>
    <i className="topIcon fab fa-instagram-square"></i>
     <i className="topIcon fab fa-pinterest-square"></i>
     <i className="topIcon fab fa-twitter-square"></i> 
    </div>


    <div className='topCenter'>
        <ul className="topList">
            <li className='topListItem'>
                <Link to="/" className="link">HOME</Link>
              </li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li>

            <li className='topListItem'>
              <Link to="/write" className="link"> WRITE</Link>
            </li>
            
          {user && <li className='topListItem' onClick={handleLogout}>LOGOUT</li>} 
        </ul>

    </div>

    <div className='topRight'>

      {user ? (
        <Link className="link" to="/settings">
             
        <img
        className="topImg"
        src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
        alt=""
        />
        </Link>
      ):(
        <ul className="topList">
        <li className="topListItem">
          <Link className="link" to="/login">
            LOGIN
          </Link>
        </li>
        <li className="topListItem">
          <Link className="link" to="/register">
            REGISTER
          </Link>
        </li>
      </ul>
      )}
     

<i className="topSearchIcon fas fa-search"></i>
    </div>

    </div>
  )
}

export default Topbar

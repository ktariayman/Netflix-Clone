import React , {useState , useEffect} from 'react'
import './Nav.css';
import {useHistory} from "react-router-dom"
function Nav() {
    const [show , handleshow] = useState(false)
    const history = useHistory();
    const transitionNavBar = () =>{
        if (window.scrollY >100) 
            handleshow(true)
        else 
            handleshow(false)
    }

    useEffect(() => {
        window.addEventListener("scroll" , transitionNavBar);
        return() => window.removeEventListener("scroll", transitionNavBar)
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            {/* <h2>Love</h2> */}
            <div className="nav__contents">
                <img onClick={()=> history.push("/") } className="nav__logo" src="https://i.ibb.co/r5krrdz/logo.png" alt=''/>
                <img onClick={()=> history.push("/profile")}
                className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=''/>
            </div>
        </div>
    )
}

export default Nav

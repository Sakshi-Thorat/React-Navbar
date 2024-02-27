import { Outlet,Link } from "react-router-dom";
import "./Navbar.css"
export const Navbar=()=>{
    return(
        <>
        <nav>
            <ul>
                
            <Link className="Name" to ='/'>Home</Link>  
            <Link className="Name" to ='/about'>About</Link>
            <Link className="Name" to ='/contact'>Contact</Link>
            <Link className="Name" to='/address'>Address</Link>
            <Link className="Name" to='/login'>Login</Link>
            <Link className="Name" to='/intro'>Intro</Link>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

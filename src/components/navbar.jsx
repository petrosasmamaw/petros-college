import React, {useState, useEffect} from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import menu from '../assets/menu-icon.png'


const Navbar = () => {
   const [sticky,setSticky]=useState(false)

   useEffect(() =>{
       const handleScroll = () => {
           setSticky(window.scrollY > 50);
       };
       window.addEventListener('scroll', handleScroll);
       return () => {
           window.removeEventListener('scroll', handleScroll);
       };
   },[])
   const [mobileMenu, setmobileMenu]=useState(false)
   const toggleMenu =()=>{
      mobileMenu?setmobileMenu(false):setmobileMenu(true)
   }

    return (
        <nav className={`container ${sticky ? "dark-nav" : ""}`}>
    <img src={logo} alt="" className='logo'/>
    <ul className={mobileMenu?"":'hide-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></button></li>
    </ul>
    <img src={menu} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}
export default Navbar
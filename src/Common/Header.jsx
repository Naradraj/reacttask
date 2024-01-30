import React, { useState } from 'react'
import './style.css'
import './config.css'
import { Link } from 'react-router-dom'
import { faBagShopping, faBars, faMagnifyingGlass, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { useContext } from 'react'
import { productcontext } from '../Page/Context/Maincontext'

export default function Header() {

    let [showMenuItem, setMenu] = useState('');

    let showMenu = () => {
        setMenu(showMenuItem = !showMenuItem)
    }

    let closeLoginForm = () => {
        setMenu(false)
    }

    let [show_form, setfrom] = useState('')
    let showRegiLoginBtn = () => {
        setfrom(show_form = !show_form);
    }

    // context data
    let {productids,setproductids}=useContext(productcontext)
    console.log(productids);

    // console.log(show_form)
    return (
        <>
            <header className="container-fluid">
                <div className="container ">
                    <div className="innerDiv">
                        
                            <div className="logoDiv">
                                <h2> <Link to={"/"}>BrandName</Link></h2>
                            </div>
                        

                        {/* Logo div */}
                        
                            <div className="loginDiv">
                                <div className="menuIteam">
                                    <ul>
                                        <li> <Link to={"/"}> Home </Link></li>
                                        <li><Link to={"/about"}> About us</Link></li>
                                        <li><Link to={"/courses"}> Product</Link></li>
                                        <li><Link to={'/contact'}>Contact us</Link></li>
                                    </ul>
                                </div>
                                <div className='icon_div'>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className="magniGlassIcon"></FontAwesomeIcon>
                                    </div>
                                    <div className="icon" onClick={showMenu}>
                                        <FontAwesomeIcon icon={faUser} className="magniGlassIcon userIcon"></FontAwesomeIcon>
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faBagShopping} className="magniGlassIcon"></FontAwesomeIcon>
                                        <h4>3</h4>
                                    </div>
                                </div>
                                <div className="closebtn">
                                    <FontAwesomeIcon icon={faBars} className='clsicon'></FontAwesomeIcon>
                                </div>

                            </div>
                            
                        
                        {/* Logo div */}
                    </div>
                </div>

            


            </header>


            {/* login  and signup */}
            <div className={`login_formDiv ${(showMenuItem == true ? 'logInDivShow' : '')} `}>
                <div className="InnerLoginDiv">
                    <div className="logInformDiv">
                        <div className="closeBtnDiv" onClick={closeLoginForm} >
                            <FontAwesomeIcon icon={faXmark} className='close_icon'></FontAwesomeIcon>
                        </div>
                        <div className="leftDiv_loginForm">
                            <h2>Join India's largest learning destination</h2>
                            <p><a href="">Logo of Institue</a></p>
                            <div className="logInSlider">
                                <img src="https://www.adda247.com/images/newloginpopimg4.svg" alt="" />
                            </div>
                        </div>

                        {/* login  */}
                        <div className="righDiv_loginForm">
                            <div className={`logDiv_main ${(show_form == true ? 'logDiv_main_show' : '')}`}>
                                <h4>Login</h4>
                                <div className="logInbtn">
                                    <GoogleOAuthProvider clientId="254408470518-0eb1p01p5a0so6fqeb9lt85l8pgdgn5s.apps.googleusercontent.com">
                                        <GoogleLogin
                                            onSuccess={credentialResponse => {
                                                console.log(credentialResponse);
                                            }}
                                            onError={() => {
                                                console.log('Login Failed');
                                            }}

                                        />
                                    </GoogleOAuthProvider>

                                    {/* <button className='google_btn'>Continue with Google</button> */}
                                    <button className='google_btn  mt-2 facebook_btn' id='facebook_btn'>Continue with Facebook</button>
                                </div>
                                <hr />
                                <div className="formSection_login  ">
                                    <div className="loginInput">
                                        <input type="text" placeholder='Enter Your Email' />
                                    </div>
                                    <div className="loginInput">
                                        <input type="text" placeholder='Enter Password' />
                                        <div className="forgot-pass">
                                            <a href="">Forgot Password ?</a>
                                        </div>
                                    </div>
                                    <div className="loginInput">
                                        <button>Login</button>
                                    </div>

                                </div>
                            </div>
                            <div className={`logDiv_main_register ${(show_form == true ? 'main_register' : '')} `}>
                                <h4>Register Now !</h4>
                                <div className="logInbtn">
                                    <button className='google_btn'>Continue with Google</button>
                                    <button className='google_btn facebook_btn' id='facebook_btn'>Continue with Facebook</button>
                                </div>
                                <hr />
                                <div className="formSection_login">
                                    <div className="loginInput">
                                        <input type="text" placeholder='Enter Full Name' />
                                    </div>
                                    <div className="loginInput">
                                        <input type="text" placeholder='Enter Your Email' />
                                    </div>
                                    <div className="loginInput">
                                        <input type="text" placeholder='Enter Password' />
                                        <div className="forgot-pass">
                                            <a href="">Forgot Password ?</a>
                                        </div>
                                    </div>
                                    <div className="loginInput">
                                        <button>Signup</button>
                                    </div>

                                </div>
                            </div>
                            <div className="signupDiv">
                                Don't have an Account? <span onClick={showRegiLoginBtn}>
                                    {(show_form == true)
                                        ?
                                        "Login"
                                        :
                                        "Sign up here"
                                    }

                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

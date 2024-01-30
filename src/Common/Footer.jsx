import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="innerFooterDiv">
                                <h4>About us</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil harum possimus dolores commodi ab optio aut soluta itaque in, suscipit atque fugit, quas cumque odit</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="innerFooterDiv">
                                <h4>INFORMATION</h4>
                                <ul>
                                    <li>
                                        <a href="">About us</a>
                                    </li>
                                    <li>
                                        <a href="">Delivery Information </a>
                                    </li>
                                    <li>
                                        <a href="">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="">Term & Condition</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="innerFooterDiv">
                                <h4>MY ACCOUNT</h4>
                                <ul>
                                    <li>
                                        <a href="">My Account</a>
                                    </li>
                                    <li>
                                        <a href="">My Cart </a>
                                    </li>
                                    <li>
                                        <a href="">Login</a>
                                    </li>
                                    <li>
                                        <a href="">Wish List</a>
                                    </li>
                                    <li>
                                        <a href="">Checkout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="innerFooterDiv">
                                <h4>OUR SERVICE</h4>
                                <ul>
                                    <li>
                                        <a href="">About us</a>
                                    </li>
                                    <li>
                                        <a href="">Delivery Information </a>
                                    </li>
                                    <li>
                                        <a href="">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="">Term & Condition</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="emailsubdiv">
                        <div className="inputDiv">
                            <input type="text" placeholder='Your mail*' />
                            <button>Send Mail</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

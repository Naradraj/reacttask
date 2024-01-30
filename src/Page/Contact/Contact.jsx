import React from 'react'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import './contact.css'

export default function Contact() {
    return (
        <>
            <Header />
            <section className="container-fluid about_Banner">
                <div className="container about_container">
                    <h4>Contact </h4>
                    <p>Page - <span>Contact us</span></p>
                </div>
            </section>


            <section className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contact_leftDiv">
                                <p>Contact Us</p>
                                <h2>Get In Touch  <span>Today</span></h2>
                                <p className='para_details'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <div className="contact_info_box">
                                    <div className="icon_contact">
                                        <img src="https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/svg/mail.svg" alt="" />
                                    </div>
                                    <div className="contact_content">
                                        <h2>Email-Us </h2>
                                        <p><a href="">Contactyourmail@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="contact_info_box">
                                    <div className="icon_contact">
                                        <img src="https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/svg/call.svg" alt="" />
                                    </div>
                                    <div className="contact_content">
                                        <h2>Call Us</h2>
                                        <p><a href="">+91 1234567890</a></p>
                                    </div>
                                </div>
                                <div className="contact_info_box">
                                    <div className="icon_contact">
                                        <img src="https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/svg/map.svg" alt="" />
                                    </div>
                                    <div className="contact_content">
                                        <h2>Office</h2>
                                        <p>Mountain Green Road 2389, NY, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-7">
                            <div className="inner_contactDiv">
                                <div className="contact_form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="formGroup">
                                                <input type="text" placeholder='Name' />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="formGroup">
                                                <input type="text" placeholder='Last Name' />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="formGroup">
                                                <input type="text" placeholder='Mobile' />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="formGroup">
                                                <input type="text" placeholder='Email' />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="formGroup">
                                                <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="formGroup">
                                                <button>Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

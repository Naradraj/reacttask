import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { productcontext } from '../Context/Maincontext'
import { json } from 'react-router-dom'
import axios from 'axios'
export default function About() {
    let [allproductdata,setalldata]=useState();
    let {productids,setproductids}=useContext(productcontext);
    console.log(productids.length);

    let getalldata=()=>{
        axios.get('https://dummyjson.com/products')
        .then(function (res) {
            return res;
        })
        .then(function (finalres) {
            setalldata(finalres.data.products);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    useEffect(()=>{
        getalldata();
    },[productids!==0])
console.log(allproductdata.length)

    if(allproductdata.length>0){
        
    }
    for (let i=0;i<=allproductdata.length;i++){
        console.log(allproductdata[i]);
    }
   
    return (
        <>
            <Header />
           

            <section className="container-fluid about_Banner">
                <div className="container about_container">
                    <h4>About us</h4>
                    <p>Page - <span>About us</span></p>
                </div>
            </section>

            <section className="container-fluid aboutCompanySec">
                <div className="container aboutCompany">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aboutleftDiv">
                                <img src="https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/all-img/about5.png" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="aboutleftDiv">
                                <h3>About Company Name</h3>
                                <h6>We Provide The Best Online Education</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti excepturi, consequuntur libero eius aperiam, rem eos. Sapiente.
                                Magnam quas earum harum sint fugit, tempora minima eaque voluptates natus quia? Id alias inventore veniam minima nemo recusandae! Dignissimos consequatur inventore vitae rem a maxime fugiat facilis, optio sunt?</p>
                            </div>

                            <div className="about-list">
                                <div className="about_icon">
                                    <img src="https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/icon/video.svg" alt="" />
                                </div>
                                <div className="content_about">
                                    <h2>All Classes Video Provided</h2>
                                    <p>There are many variations of passages of the Lorem Ipsum available.</p>
                                </div>
                            </div>
                            <div className="about-list">
                                <div className="about_icon">
                                    <img src="https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/icon/web-white.svg" alt="" />
                                </div>
                                <div className="content_about">
                                    <h2>All Classes Video Provided</h2>
                                    <p>There are many variations of passages of the Lorem Ipsum available.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className=" container-fluid ourTeam_sec">
                <div className="container">
                    <p className='team_heading'>Team Member</p>
                    <h4 className='heading_instru'>Our Expert <span>Instructors</span></h4>
                    
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="single-team-box">
                                <div className="teamImg">
                                    <img src="https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/all-img/team1.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Erics Widget</h3>
                                    <p>UI/UX Designer</p>
                                </div>
                                <div className="social_links">
                                    <ul>
                                      <li><a href="" className='facebook'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>  
                                      <li><a href="" className='twitter'><FontAwesomeIcon icon={faTwitter} className=''></FontAwesomeIcon></a></li>  
                                      <li><a href="" className='linkden'><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a></li>  
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="single-team-box">
                                <div className="teamImg">
                                    <img src="https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/all-img/team2.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Erics Widget</h3>
                                    <p>UI/UX Designer</p>
                                </div>
                                <div className="social_links">
                                    <ul>
                                      <li><a href="" className='facebook'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>  
                                      <li><a href="" className='twitter'><FontAwesomeIcon icon={faTwitter} className=''></FontAwesomeIcon></a></li>  
                                      <li><a href="" className='linkden'><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a></li>  
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="single-team-box">
                                <div className="teamImg">
                                    <img src="https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/all-img/team4.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Erics Widget</h3>
                                    <p>UI/UX Designer</p>
                                </div>
                                <div className="social_links">
                                    <ul>
                                      <li><a href="" className='facebook'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>  
                                      <li><a href="" className='twitter'><FontAwesomeIcon icon={faTwitter} className=''></FontAwesomeIcon></a></li>  
                                      <li><a href="" className='linkden'><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a></li>  
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="single-team-box">
                                <div className="teamImg">
                                    <img src="https://bestwpware.com/html/tf/edumim-bootstrap/assets/img/all-img/team3.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Erics Widget</h3>
                                    <p>UI/UX Designer</p>
                                </div>
                                <div className="social_links">
                                    <ul>
                                      <li><a href="" className='facebook'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>  
                                      <li><a href="" className='twitter'><FontAwesomeIcon icon={faTwitter} className=''></FontAwesomeIcon></a></li>  
                                      <li><a href="" className='linkden'><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a></li>  
                                    </ul>
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

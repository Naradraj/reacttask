import React, { useEffect, useState } from 'react'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'

import './course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass,  } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Courses() {

    let [alldata,setalldata]=useState('');

    let getalldata=()=>{

        axios.get('https://dummyjson.com/products')
        .then(function(res){
            return res;
        })       
        .then(function(finalres){
            setalldata(finalres.data.products);
        })
        .catch(function(error) {
            console.log(error);
        })

    }
    useEffect(()=>{
        getalldata();
    },[])

    let [viewdata,setviewdata]=useState(8);
    let viewbtn=()=>{
        setviewdata(viewdata+=4);
    }

    console.log(alldata);
    return (
        <>
            <Header />

            <section className="container-fluid about_Banner">
                <div className="container about_container">
                    <h4>Product</h4>
                    <p>Page - <span>Product</span></p>
                </div>
            </section>


            <section className="container-fluid courses_sec">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-4">
                            <div className="search_course">
                                <div className="search_box">
                                    <input type="text" />
                                    <button className='widget-search-btn'><FontAwesomeIcon className='magnifyglass' icon={faMagnifyingGlass}></FontAwesomeIcon></button>
                                </div>
                            </div>
                            <div className="courseCategory">
                                <h3 className="categoryTitle">Categories</h3>
                                <ul>
                                    <li><a href=""><span>Development (23)</span></a></li>
                                    <li><a href=""><span>Development (23)</span></a></li>
                                    <li><a href=""><span>Development (23)</span></a></li>
                                    <li><a href=""><span>Development (23)</span></a></li>
                                </ul>
                            </div>
                        </div> */}

                        
                            <div className="row">
                                {alldata.length>0
                                ?
                                alldata.slice(0,viewdata).map((v,i)=>{
                                    return(
                                        <>
                                        <div className="col-lg-3">
                                        <div className="courseName">
                                            <div className="courseImg">
                                                <img src={v.thumbnail} alt="" />
                                                <div className="tagName_course"><span>{v.category}</span></div>
                                            </div>
                                            <div className="courseContent">
                                                <h3>{v.title}</h3>
                                                <p>$ {v.price}</p>
                                                <button className='btn '><a href="">Add to cart</a></button>
                                                <button className='btn_view'><Link to={`/product/${v.id}`}>view</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </>
                                    )
                                })
                                :

                                <h3>No Data Found</h3>
                                }
                            </div>

                            <div className="viewallcoursebtn">
                                {alldata.length>0
                                ?
                                <button onClick={viewbtn}>
                                    {alldata.length<viewdata
                                    ?
                                    "No Data"
                                    :
                                    "View more"
                                    }
                                    
                                    </button> 
                                :
                                ""
                                }
                                
                            </div>



                    </div>
                </div>
            </section>



            <Footer />
        </>
    )
}

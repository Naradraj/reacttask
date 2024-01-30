import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import './style.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { productcontext } from '../Context/Maincontext';

export default function Home() {

    let [alldata, setalldata] = useState('');

    let getalldata = () => {

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
    useEffect(() => {
        getalldata();
        
    }, [])

    console.log(alldata)

    // faq 
    let faqDiv = [

        {
            'question': 'What is javascript ?',
            'answer': 'lorem ispsum'
        },
        {
            'question': 'What is PHP ?',
            'answer': 'lorem ispsum'
        },
        {
            'question': 'What is CSS ?',
            'answer': 'lorem ispsum'
        },
        {
            'question': 'What is NODE JS?',
            'answer': 'lorem ispsum'
        }


    ]

    // usercontext 
    let {productids,setproductids}=useContext(productcontext)

    
    

    return (
        <>
            <Header />

            {/* Banner slider */}
            <section className="container-fluid bannerSec ">
                <div className="inner_bannerDiv">
                    <img src="https://www.elgincounty.ca/wp-content/uploads/2019/08/Back-to-School-Banner-Website-Banner-.png" alt="" />
                </div>
            </section>
            {/* Banner slider */}

            {/* course section */}
            <section className="container-fluid course_sec">
                <div className="container course_container">
                    <h2 className='text-center'>Product</h2>
                    <p>Explore Our Live Online Product</p>
                    <div className="row">

                        {alldata.length > 0
                            ?
                            alldata.slice(0, 8).map((v, i) => {
                                return (
                                    <div className="col-lg-3">
                                        <div className="courseName">
                                            <div className="courseImg">
                                                <img src={v.thumbnail} alt="" />
                                                <div className="tagName_course"><span>{v.category}</span></div>
                                            </div>
                                            <div className="courseContent">
                                                <h3 className='mb-1' >{v.title} </h3>
                                                <button className='btn ' 
                                                onClick={()=> 
                                                    setproductids(productids+=`${v.id}`)   
                                                } 
                                                
                                                >Add to cart</button>
                                                <button className='btn_view '>  <Link to={`/product/${v.id}`}> view </Link></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <h3>No Data Found</h3>
                        }

                    </div>
                    {alldata.length > 0
                        ?
                        <div className="btndiv">
                            <button><Link to={'/courses'}> View More</Link></button>
                        </div>
                        :
                        ""
                    }

                </div>
            </section>
            {/* course section */}







            <Footer />
        </>
    )
}

import React, { useEffect, useState } from 'react'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';


export default function Course() {

  let currentId=useLocation();
  let currentPath=currentId.pathname;
  let productid=currentPath.split('/');
  console.log(productid);
  let finalproductid=productid[productid.length-1];
  // console.log(finalproductid);

  let [pDetails,setpDetails]=useState([]);

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${finalproductid}`)
    .then((res)=>{
      setpDetails(res.data);
    })

  },[finalproductid])

  console.log(pDetails.id)
  return (
    <>
      <Header />

      <section className="container-fluid about_Banner">
                <div className="container about_container">
                    <h4>Product</h4>
                    <p>Page - <span>Product</span></p>
                </div>
            </section>


      <section className="container-fluid course_Banner">
        <div className="container">

          { (pDetails.id !=="undefined" )
          ?
          <div className="row">
          <div className="col-lg-8">
            <div className="course_inner">
              <div className="course_heading">
                <p> <Link> Home </Link>/ <Link>{pDetails.category} </Link>  </p>
                <h3>{pDetails.title} <span >{pDetails.rating}</span> </h3>
                <h2>{pDetails.description}</h2>
                <p>Brand : - {pDetails.brand}</p>
                <p>Stock : - {pDetails.stock}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="bookCourseDiv">

              <div className="pdpCard">
                <div className="pdpCardImg">
                  <img src={pDetails.thumbnail} alt="" />
                  <img className='bckgroundimgforblug' src={pDetails.thumbnail} alt="" />
                  <div className="bgcolordiv"> </div>
                </div>
              </div>
             
              <div data-testid="pdpPriceWrap" className="pdpPriceWrap">
                <div className="pdpPrice">
                    <div className="pdpleftPrice">
                        <div className="pdpOriginalPrice">$ {pDetails.price}</div>
                        <div className="discountPrice">({pDetails.discountPercentage}% Off)</div>
                    </div>
                </div>
              </div>
              <div className="buybtnDiv">
                <button >Add To Cart</button>
              </div>
              <div className="buybtnDiv viewOfferBtn">
                <button><a href="">Buy now</a></button>
              </div>
            </div>
          </div>
        </div>
          
          :

          <h3>Data No Data Found</h3>
          }
         
        
        
          

        </div>
      </section>
      <Footer />
    </>
  )
}

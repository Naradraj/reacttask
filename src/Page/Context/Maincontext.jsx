import React, { createContext, useState } from 'react'

let productcontext=createContext()

export default function Maincontext(props) {

    let [productids,setproductids]=useState([]);

  return (
    <productcontext.Provider value={{
        productids,
        setproductids
    }}   >
        {props.children}
    </productcontext.Provider>
  )
}

export {productcontext}

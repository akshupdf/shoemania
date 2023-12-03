import {  useEffect, useState } from "react";
import React from "react";
import "../App.css";
// import { Link } from "react-router-dom";
import load1 from "../images/load1.gif"
import ShoeCard from "./ShoeCard";
// import logo from "../images/logo.jpg"

function Vans () {

  let data = [ {
    fov: 1.5,
    campos: [10, 5, 10],
    dirpos: [5, 40, 5],
    dirint: 4,
    title: "Old Skool Shoe",
    model: "./oldvans.glb",
    desc: "The Old Skool was our first footwear design to showcase the famous Vans Sidestripe—although back then, it was just a random doodle drawn by founder Paul Van Doren. Since its debut in 1977, this low-top silhouette has established itself as an icon in the skate, music, and fashion scenes. From 90s street skaters and punks to current hip hop and fashion legends, the Old Skool has consistently been the go-to shoe for creatives who do things their own way."
  },
  {
    fov: 2,
    campos: [10, 5, 10],
    dirpos: [5, 40, 5],
    dirint: 4,
    title: "Old Skool Canvas Shoe",
    model: "./vansss.glb",
    desc:"The Old Skool was our first footwear design to showcase the famous Vans Sidestripe—although back then, it was just a random doodle drawn by founder Paul Van Doren. Since its debut in 1977, this low-top silhouette has established itself as an icon in the skate, music, and fashion scenes. From 90s street skaters and punks to current hip hop and fashion legends, the Old Skool Cavnas has consistently been the go-to shoe for creatives who do things their own way."
  },
  {
    fov: 0.1,
    campos: [2, 0.5, 2],
    dirpos: [5, 40, 5],
    dirint: 4,
    title: "Knu Skool Shoe",
    model: "./vans5.glb",
    desc:"The Knu Skool is a modern interpretation of a classic 90s style, defined by its puffed up tongue and 3D-molded Sidestripe, and tied off with oversized, chunky laces. With its in-your-face profile and dramatic style details, the Knu Skool plays off of the original Old Skool™ while blending an icon of the past with today’s trends."
  }]

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false); 
  }, []);

return(

<div className="w-full p-2 m-4 flex">
          
            <div className="lg:w-[20%] sm:w-5 flex">
            {/* <Link to="/"> <img src={logo} alt="" className="w-30 h-20"></img></Link>
            <Link to="/" className="mt-5">Home</Link> */}
            </div>
            {isLoading ? (
          <div className=" w-60 h-80 mx-auto border border-black mt-40 p-10 ">
            <h1>Loading...</h1>
            <img src={load1} alt="" className="w-30 h-30 "></img>
          </div>
        ) : (
            <div className="w-[80%] mt-20 lg:flex">
            {data.map((item, index) => (
            <ShoeCard               
       key={index}
          fov={item.fov}
          campos={item.campos}
          dirpos={item.dirpos}
          dirint={item.dirint}
          title={item.title}
          model={item.model}
          desc={item.desc}
      />))}
            </div>)}
      
</div>

)}

export default Vans;
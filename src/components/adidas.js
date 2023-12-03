import {  useEffect, useState } from "react";
import React from "react";
// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
import "../App.css";
// import { Link } from "react-router-dom";
// import ShowCase3d from "./shoecase3D";
// import ModelLoader from "./modelLoader";
import ShoeCard from "./ShoeCard";
import load1 from "../images/load1.gif"
// import logo from "../images/logo.jpg"

function Adidas () {


  let data = [ {
    fov: 0.2,
    campos: [5, 2, 5],
    dirpos: [5, 40, 5],
    dirint: 10,
    title: "X CRAZYFAST FLEXIBLE GROUND BOOTS",
    model: "./adi5.glb",
    desc:"Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste."
  },
  {
    fov: 7,
    campos: [-2, 1, -2],
    dirpos: [5, 40, 5],
    dirint: 10,
    title: "RAYRUN SHOES",
    model: "./adi4.glb",
    desc:"They feel good from the minute you step in, thanks to the cushy midsole. The textile upper feels comfy and breathable, and the rubber outsole gives you plenty of grip for a confident stride."
  },
  {
    fov: 0.1,
    campos: [10, 5, 10],
    dirpos: [2.5, 8, 5],
    dirint: 2,
    title: "ADI ZOOM SHOES",
    model: "./adi3.glb",
    desc:"The adidas Zoom revolutionized running shoes and they're still innovating today. Speed is no longer the goal — though you can definitely zoom through the day in this pair. This time they're pushing the envelope in comfort and style. The futuristic design stands out while energy-returning Boost charges up your stride."
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
            </div> )}
      
</div>

)}

export default Adidas;
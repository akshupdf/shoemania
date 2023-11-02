import {  useEffect, useState } from "react";
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ShoeCard from "./ShoeCard";
import load1 from "../images/load1.gif"
import logo from "../images/logo.jpg"
function Nike () {

  let data = [ {
    fov: 3,
    campos: [12, 3, 12],
    dirpos: [5, 40, 5],
    dirint: 4,
    title: "Dunk Low Crazy Camo sneakers",
    model: "./air3.glb",
    desc:"Inspired by Nike's King of the Court streetball tournament from the early 2000s, the Dunk Low SE Crazy Camo fuses a modern look with vintage style. The pair features a leather upper with a camouflage print and other tournament-inspired details, while its foam midsole offers lightweight, responsive cushioning. To finish the look, the rubber outsole adds durability, traction and heritage Dunk style"
  },
  {
    fov: 15,
    campos: [10, 2, 10],
    dirpos: [5, 40, 5],
    dirint: 4,
    title: "Air Jordan 1 Retro High '85 OG 'Black White'",
    model: "./air1.glb",
    desc:"The Air Jordan 1 Retro High '85 OG 'Black White' also known as 'Panda,' sees an original colorway brought back by Jordan Brand trying to build it to the same specs as the 1985 OG. A simple two-tone leather upper mixes white and black across the shoe, with a black Swoosh complemented with a white Wings logo on the lateral profile. A Nike Air tongue tag arrives in black and white, matching the midsole and rubber outsole."
  },
  {
    fov: 0.2,
    campos: [10, 5, 10], 
    dirpos: [5, 40, 5],
    dirint: 4,
    title: "Air Jordan 1 Retro High OG SE 'Bubble Gum'",
    model: "./air2.glb",
    desc: "The Bubble Gum colorway features a striking blend of soft pastel tones, primarily pink, white, and black. This eye-catching combination not only adds a playful touch but also ensures versatility in styling. Whether you're heading out for a casual day or making a fashion statement, these sneakers are the perfect choice."
  }
  ]

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false); 
  }, []);


return(

<div className="w-full p-2 m-4 flex ">
     
            <div className="w-[20%] flex">
            <Link to="/"> <img src={logo} alt="" className="w-30 h-20"></img></Link>
            <Link to="/" className="mt-5">Home</Link>
            </div>
            {isLoading ? (
              <div className="w-60 h-80 mx-auto border border-black mt-40 p-10 ">
            <h1 className="text-xl">Loading...</h1>
            <img src={load1} alt="" className="w-30 h-30 "></img>
          </div>
        ) : (
            <div className="w-[80%] mt-10 flex">
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
            </div> ) }
      
</div>

)}

export default Nike;
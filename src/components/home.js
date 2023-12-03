import React, { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../App.css";
import ModelLoader from "./modelLoader";
import { Link } from "react-router-dom";


function Home () {

  let data = [ {
    fov: 0.6,
    campos: [0, 5, 5],
    dirpos: [2.5, 8, 5],
    dirint: 2,
    int: 0.5,
    title: "NIKE STAR RUNNER",
    model: "./niketc.glb",
    button : "Nike",
    link: "/nike",
    textclr:"black",
    bg: "https://getwallpapers.com/wallpaper/full/4/4/1/892673-gorgerous-white-3d-background-1920x1200-for-ios.jpg",
    desc: "The radiance lives on in the Nike, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine."
  },
  {
    fov: 5,
    campos: [0, 5, 5],
    dirpos: [2.5, 8, 5],
    dirint: 2,
    int: 0.5,
    title: "VANS BLUE CLASSIC",
    model: "./vansss.glb",
    button: "Vans",
    link : "/vans",
    textclr:"blue",
    desc:"The Old Skool, Vans classic skate shoe and the first to bare the iconic side stripe, is a low top lace-up with a durable canvas upper, padded tongue and lining, metal eyelets and Vans original Waffle Outsole.",
    bg:"https://img.freepik.com/premium-photo/close-up-black-blue-abstract-background-with-glowing-arrow-generative-ai_974539-1538.jpg?w=360"
  },
  {
    fov: 5,
    campos: [5, 1, 2],
    dirpos: [2.5, 8, 5],
    dirint: 2,
    int: 0.5,
    title: "OZELIA CASUALS",
    model: "./adi4.glb",
    button: "Adidas",
    link : "/adidas",
    bg:"  https://quietminimal.b-cdn.net/wp-content/uploads/2023/08/iphone-home-screen-wallpaper-3d-1_-39-.png",
    desc:"Archival inspiration from the '90s and bold weldings give these men's shoes a fluid, futuristic look. The synthetic upper fits snug like a glove. A cushioned midsole and Adiprene technology make every step feel good and supported. Classic 3-stripes are a throwback to heritage.",
    textclr: "#D2691E"
  }]

  const [load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(false); 
  }, []);


    return (
        <div className="mx-auto  overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg sm:w-80 lg:w-[100%]" style={{backgroundImage : `url("https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png")`}}>
        <div className="mt-40 h-screen">
            <h1 className="relative lg:text-8xl sm:text-6xl font-bold drop-shadow-2xl ml-20  text-gray-700 ">SHOEMANIA</h1>
            </div>
            
           
        

            {data.map((item, index) => (
                <div key={index} className="m-4 border-2 border-black rounded-xl">
            <div className="lg:flex lg:w-[100%] sm:w-80 mx-auto bg-cover bg-fixed  bg-no-repeat backdrop-blur" style={{backgroundImage :   `url(${item.bg})` }}>
                <div className="lg:w-[50%] absolute sm:w-10 lg:h-[100%] lg:text-4xl sm:text-xs bold  lg:p-10 sm:p-4 bg-white lg:mx-auto ">
              <div className="lg:w-[60vh]" style={{color : `${item.textclr}`}}>
                <h1 className="font-extrabold text-6xl mt-20 " >{item.title}</h1>
                <p className="text-lg mt-10 ">{item.desc}</p>
                <Link to={item.link} className="relative inline-block lg:text-lg group mt-5 lg:ml-12 sm:text-xs">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">{item.button}</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</Link>
                </div>
                </div>
                {
                  load  ?  (
              <div className="w-60 h-80 mx-auto border border-black mt-40 p-10 ">
            <h1 className="text-xl">Loading...</h1>
          
          </div>
        ) :  ( <div className="lg:h-[80vh] sm:h-[50vh] lg:w-[60%] sm:w-50  mt-20 ml-[40vh]">
        <Canvas camera={{ position: item.campos , fov: item.fov }}>
              <ambientLight intensity={item.int} />
              <directionalLight intensity={item.dirint} position={item.dirpos} />
              <ModelLoader src={item.model} />
              <OrbitControls enableZoom={true} autoRotate={false}/>
            </Canvas>
            
       
        </div>

                  )      }
              
            </div>
            <hr></hr> 
            </div>
            ))}
           
     
        <div>

        </div>
       

        </div>
    )
}

export default Home;
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../App.css";
import ModelLoader from "./modelLoader";
import { Link } from "react-router-dom";


function Home () {

  let data = [ {
    fov: 30,
    campos: [0, 5, 5],
    dirpos: [2.5, 8, 5],
    dirint: 2,
    int: 0.5,
    title: "Checkout Nike",
    model: "./air1.glb",
    button : "Nike",
    link: "/nike"
  },
  {
    fov: 8,
    campos: [0, 5, 5],
    dirpos: [2.5, 8, 5],
    dirint: 2,
    int: 0.5,
    title: "Checkout Vans",
    model: "./vans1.glb",
    button: "Vans",
    link : "/vans"
  },
  {
    fov: 1.5,
    campos: [-12, 2, -12],
    dirpos: [2.5, 8, 5],
    dirint: 2,
    int: 0.5,
    title: "Checkout Adidas",
    model: "./adi.glb",
    button: "Adidas",
    link : "/adidas"
  }]



    return (
        <div className="mx-auto  overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg sm:w-80 lg:w-[100%]" style={{backgroundImage : `url("https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png")`}}>
        <div className="mt-40">
            <h1 className="relative lg:text-8xl sm:text-6xl font-bold drop-shadow-2xl ml-20 italic text-white ">ShoeMania</h1>
            </div>
            
           
        <div className="h-[80vh] ">

        
            </div>

            {data.map((item, index) => (
                <div key={index}>
            <div className="lg:flex lg:w-[100%] sm:w-80 mx-auto bg-white ">
                <div className="lg:w-[30%] sm:w-10 lg:h-80 lg:text-4xl sm:text-xs bold italic lg:p-10 sm:p-4  lg:mx-auto mt-40">
                <h1>{item.title}</h1>
                <Link to={item.link} className="relative inline-block lg:text-lg group mt-5 lg:ml-12 sm:text-xs">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">{item.button}</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</Link>
                </div>
                <div className="lg:h-[80vh] sm:h-[50vh] lg:w-[50%] sm:w-50 hover:shadow-2xl m-4">
        <Canvas camera={{ position: item.campos , fov: item.fov }}>
              <ambientLight intensity={item.int} />
              <directionalLight intensity={item.dirint} position={item.dirpos} />
              <ModelLoader src={item.model} />
              <OrbitControls enableZoom={true} autoRotate={false}/>
            </Canvas>
            
       
        </div>
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
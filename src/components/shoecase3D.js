
import React, { useEffect, useState ,useRef} from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../App.css";
// import { Link } from "react-router-dom";


function ShowCase3d ({ onClose  , fov , campos , dirpos , dirint,title ,model , desc }) {
    const [isLoading, setIsLoading] = useState(true);
 
    const gltf = useLoader(GLTFLoader, model);
    const modelRef = useRef();
 
    useEffect(() => {
      setIsLoading(false); 
    }, []);



    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white  flex justify-center items-center " style={{ zIndex: 999 }}>
        <div className="bg-white p-4 max-w-8xl max-h-3xl overflow-y-auto rounded-lg " > 

<button
          className="absolute top-2 right-2 text-red-500 text-2xl"
          onClick={() => {
        onClose();
        window.location.reload(); 
      }}
        >
          X
        </button>
   
    <div className="lg:flex lg:w-[200vh] sm:[100vh]">
    <div className='lg:w-[40%] sm:w-[100%] lg:h-[80vh] sm:h-auto shadow-2xl pt-10 rounded-xl italic  mt-10 lg:mr-10 sm:mr-0' >
    {isLoading ? (
          <div className="text-center text-4xl">Loading...</div>
        ) : (
          
            <Canvas camera={{ position: campos, fov: fov  }}>
              <ambientLight intensity={2} />
              <directionalLight intensity={dirint} position={dirpos} />
            
              <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={0.1}
      rotation={[0, Math.PI / 2, 0]}
    />
    
              <OrbitControls enableZoom={true} />
            </Canvas>
          
        )}
    </div>
    <div className="lg:w-[50%] sm:w-[100%] h-[80vh]  shadow-2xl p-10 rounded-xl italic  mt-10 lg:ml-20 sm:ml-0 text-left" >
    <h1 className="text-3xl">{title}</h1>
    <p className="bold text-xl">Description</p>
    {
      desc ? ( desc) : (
        <ul>
    <li>Sole: Rubber</li>
    <li>Fit Type: Regular</li>
    <li>Shoe Width: Medium</li>
    <li>Breathable Material</li>
    </ul>
      )
    }
    
    <p className="bold text-xl mt-10">Offers :-</p>
    <div className="flex">
        <div className="border-black w-40 h-40 border p-2 m-2 "><h1 className="bold text-xl">Cashback</h1> <p>
        Get 5% back with ICICI Bank credit card for Prime members. </p></div>
        <div className="border-black w-40 h-40 border p-2 m-2"><h1 className="bold text-xl">Free Home Delivery</h1> <p>
        The product is eligible for Free delivery. </p></div>
        <div className="border-black w-40 h-40 border p-2 m-2"><h1 className="bold text-xl">Bank Offer</h1> <p>
        10% Instant Discount up to INR 500 on AU Bank Card . </p></div>
        <div className="border-black w-40 h-40 border p-2 m-2"><h1 className="bold text-xl">Partner Offers</h1>
        <p>Get GST invoice and save up to 28% .</p> </div>
    </div>
    </div>
    </div></div> </div>)
}

export default ShowCase3d;
import React, {  useState ,useRef} from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../App.css";
// import { Link } from "react-router-dom";
import ShowCase3d from "./shoecase3D";
// import * as THREE from 'three';

function ShoeCard ({fov , campos , dirpos , dirint,title ,model,desc} ) {

    const [showPopup, setShowPopup] = useState(false);
    const gltf = useLoader(GLTFLoader, model);
    const modelRef = useRef();

    // gltf.scene.traverse(child => {
    //   if (child.isMesh) {
    //     if (child.material.map) {
        
    //       const newTexture = new THREE.TextureLoader().load('images.jpeg'); // Load a new texture
    //       child.material.map = newTexture; // Assign the new texture
    //       child.material.needsPMREMUpdate = true; // Update the material
    //     }
    //   }
    // });

    const handleOpenPopup = () => {
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };
    return (
        <div className="w-full max-w-sm p-2 m-4 bg-white border border-gray-200 rounded-lg shadow dark:text-black dark:border-gray-700 overflow-hidden">
            <div className="w-auto h-[50vh]">
              <div className="w-[46vh] h-[40vh]  hover:shadow-2xl pt-10 rounded-xl italic ">
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
              </div>
            </div>
            <div className="px-5 pb-5 ">
              <div className="h-[10vh]">
                <h5 className="lg:text-xl sm:text-l font-semibold tracking-tight text-gray-900 dark:text-black">
                 {title}
                </h5>
              </div>
              <button  onClick={handleOpenPopup} className="relative inline-block px-4 py-2 font-medium group hover:cursor-pointer">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span className="relative text-black group-hover:text-white">View product</span>
</button>
              {/* <button onClick={handleOpenPopup}></button> */}
      {showPopup && <ShowCase3d
          onClose={handleClosePopup}
          fov={fov}
          campos={campos}
          dirpos={dirpos}
          dirint={dirint}
          title={title}
          model={model}
          desc={desc}
        />
      }
            
            </div>
</div>
    )

}

export default ShoeCard
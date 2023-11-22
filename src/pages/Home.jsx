import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import Loader from '../components/Loader' 

import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'

{/* <div classname="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
       </div> */}
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0,-6.5,-43];
    let rotation = [0.1,4.7,0 ]

    if (window.innerWidth < 768) {
      screenScale = [0.9,0.9,0.9];
      screenPosition = [0,-6.5,-43];
    } else {
      screenScale = [1,1,1];
    }
    return [ screenScale, screenPosition, rotation ]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5,1.5,1.5];
      screenPosition = [0,-1.5,0];
    } else {
      screenScale = [3,3,3];
      screenPosition = [0,-4,-4];
    }
    return [ screenScale, screenPosition];
  }

  const [ planeScale, planePosition] = adjustPlaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();


  return (
   <section className= "w-full h-screen relative">
    <Canvas className= "w-full h-screen bg-transparent"
     camera={{ near: 0.1, far : 1000}} >
      
    <Suspense fallback={<Loader />}>
    <directionalLight 
      position = {[1,1,1]} 
      intensity = {2}/> 
    <ambientLight 
      intensity= {0.5}/>
    <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
    <Bird />
    <Plane
      isRotating={isRotating}
      planeScale={planeScale}
      planePosition={planePosition}

    />
    <Sky isRotating={isRotating}/>
     <Island
     isRotating={isRotating}
     setIsRotating={setIsRotating}
     setCurrentStage={setCurrentStage}
     position={islandPosition}
     rotation={[0.1, 4.7077, 0]}
     scale={islandScale}
     />
      </Suspense>
     </Canvas>
       </section>
  )
}

export default Home
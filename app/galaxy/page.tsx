"use client"


import styles from './page.module.css'
import * as THREE from 'three'

import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements} from '@react-three/fiber'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { OrbitControls } from '@react-three/drei'
import { BackSide } from 'three'

import { useLoader } from '@react-three/fiber'







function Galaxy(props: any)  {
  
  const ref = useRef<THREE.Mesh>(null!)
  
    const texturebg =  useLoader(THREE.TextureLoader, './static/1.jpg')
  
    

  

  return (
  
    <mesh
      position={[0,0,0]}
      rotation={[Math.PI / 2, 0, 0]}
      ref={ref}
      >
      <sphereGeometry args={[800, 10, 10]} />
      <meshStandardMaterial map={texturebg} side={BackSide}  />
    </mesh>
  )
}


function Sun(props: any)  {
  
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
 
  
  
 
  
  useFrame((state, delta) => (ref.current.rotation.y += (delta*0.1*props.rot)))
  return (
     <>
 
       <mesh
       position={props.position}
       scale={1}
       onClick={(event) => { props.setId(props.id)}}
       onPointerOver={(event) => hover(true)}
       onPointerOut={(event) => hover(false)}>
       <sphereGeometry args={[6, 10, 10]} />
       <meshPhongMaterial color={props.factioncolor} opacity={hovered? 0.3: 0.1} transparent  />
     </mesh>
     <mesh
      rotation={[0,(Math.PI / 2 ), 0]}
      position={props.position}
      ref={ref}
      scale={props.scale}
      onClick={(event) => { props.setId(props.id)}}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshStandardMaterial map={props.texture}  />
    </mesh>
     </>
  )
}

export default function Home() {

  const [Id_, setId_] = useState(0)
  const red = useLoader(THREE.TextureLoader, './static/suns/sun.jpg')
  const azure = useLoader(THREE.TextureLoader, './static/suns/sunazure.jpg')
  const black = useLoader(THREE.TextureLoader, './static/suns/sunblack.jpg')
  const bluedark = useLoader(THREE.TextureLoader, './static/suns/sunbluedark.jpg')
  const blueinvert = useLoader(THREE.TextureLoader, './static/suns/sunbluei.jpg')
  const green = useLoader(THREE.TextureLoader, './static/suns/sunlightgreen.jpg')
  const yellow = useLoader(THREE.TextureLoader, './static/suns/sunlightyellow.jpg')
  const orange = useLoader(THREE.TextureLoader, './static/suns/sunorange.jpg')
  const white = useLoader(THREE.TextureLoader, './static/suns/sunwhite.jpg')



  return  (
    
    
    <div className={styles.main}>
      <Navbar/>
      <Sidebar id={Id_}/>
     <Canvas  camera={{ rotation:[30,0.3,0], position: [30, 60, 40]}}>
     <OrbitControls />
     
    <ambientLight />
   <Galaxy/>
    <Sun id={1} factioncolor={'yellow'} rot={1} scale={1} texture={red} setId={setId_} position={[10, 0, 0]} />
    <Sun id={2} factioncolor={'yellow'} rot={-1} scale={1.5} texture={azure} setId={setId_} position={[0, 0, 0]} />
    <Sun id={3} factioncolor={'yellow'} rot={-2} scale={0.5} texture={black} setId={setId_} position={[20,0, 10]} />
    <Sun id={4} factioncolor={'yellow'} rot={-3} scale={2} texture={bluedark} setId={setId_} position={[20,0, -10]} />
    <Sun id={5} factioncolor={'yellow'} rot={1} scale={1} texture={blueinvert} setId={setId_} position={[30,0, 15]} />
    <Sun id={6} factioncolor={'yellow'} rot={2} scale={1} texture={green} setId={setId_} position={[30,0, 0]} />
    <Sun id={7} factioncolor={'yellow'} rot={3} scale={1.5} texture={yellow} setId={setId_} position={[30,0, -15]} />
    <Sun id={8} factioncolor={'yellow'} rot={-1} scale={0.7} texture={white} setId={setId_} position={[40,0, 15]} />
    <Sun id={9} factioncolor={'yellow'} rot={4} scale={0.5} texture={orange} setId={setId_} position={[40,0, 0]} />
    <Sun id={10} factioncolor={'red'} rot={-2} scale={1.3} texture={blueinvert} setId={setId_} position={[40,0, -15]} />
    <Sun id={11} factioncolor={'red'} rot={-2} scale={0.8} texture={red} setId={setId_} position={[50,0, 10]} />
    <Sun id={12} factioncolor={'red'} rot={1} scale={1} texture={yellow} setId={setId_} position={[50,0, -10]} />
    <Sun id={13} factioncolor={'red'} rot={3} scale={2} texture={green} setId={setId_} position={[60,0, 0]} />
    <Sun id={14} factioncolor={'red'} rot={-1} scale={0.8} texture={red} setId={setId_} position={[70,0, 0]} />
    <Sun id={15} factioncolor={'red'} rot={-2} scale={1.2} texture={bluedark} setId={setId_} position={[35,0, 20]} />
    <Sun id={16} factioncolor={'red'} rot={2} scale={1} texture={azure} setId={setId_} position={[45,0, -20]} />

  </Canvas>,
    </div>
    
  
  ) 
}

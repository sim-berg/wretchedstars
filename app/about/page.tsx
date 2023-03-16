"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'


export default function Home() {




  return (
    <div className={styles.main}>
      <Navbar/>
      Hello worlds about
      <Link href='/galaxy'><button>Enter the Galaxy</button></Link>
    </div>
  )
}

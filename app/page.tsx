"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'



export default function Home() {




  return (
    <div className={styles.main}>
      <img className={styles.bg} src='./static/cool.jpg'/>
      <Link href='/galaxy'><button className={styles.button}>Enter the Galaxy</button></Link>
    </div>
  )
}

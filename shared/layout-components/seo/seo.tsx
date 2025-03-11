"use client"
import React, { useEffect } from 'react'

const Seo = ({ title }:any) => {
  useEffect(() => {
    document.title = `Ynex - ${title}`
  }, [])
  
  return (
    <>
    </>
  )
}

export default Seo;
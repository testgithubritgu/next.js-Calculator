"use client"

import Header from "./_compnonents/Header"

const About = async({searchParams}) => {
    console.log(await searchParams)
  return (
    <div>
      <Header/>
      <h1>this is About Page</h1>
    </div>
  )
}

export default About
"use client"
const About = async({searchParams}) => {
    console.log(await searchParams)
  return (
    <div>
      <h1>this is About Page</h1>
    </div>
  )
}

export default About
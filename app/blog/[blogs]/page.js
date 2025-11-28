import React from 'react'

const blogs = async({params}) => {
    const {blogs} = await params
  return (
    <div>
      <h1>{blogs}</h1>
    </div>
  )
}

export default blogs

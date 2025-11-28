import React from 'react'

const Comments = async({params}) => {
    const {blogs} = await params
  return (
    <div>
      <h1>good job {blogs}</h1>
    </div>
  )
}

export default Comments

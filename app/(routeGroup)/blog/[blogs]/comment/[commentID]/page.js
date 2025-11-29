import React from 'react'

const Comments = async({params}) => {
    const {blogs,commentID} = await params
  return (
    <div>
      <h1>this is {blogs} and the comment is {commentID}</h1>
    </div>
  )
}

export default Comments

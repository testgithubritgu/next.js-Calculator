import { notFound } from 'next/navigation'
import React from 'react'

const page = async({params}) => {
    const {slug} = await params

    // custom 404 page not found on conditions 
    if (!/^\d+$/.test(slug)){
      notFound()
    }
  return ( 
    <div>
      dynyamic {slug}
    </div>
  )
}

export default page

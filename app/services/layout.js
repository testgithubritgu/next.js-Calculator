import React from 'react'
export const metadata = {
    title: 'services | Calculator',
    
}
export default function layout({children}) {
  return (
    <div>
        <h1>header</h1>
          {children}
    </div>
  )
}

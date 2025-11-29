'use client'
import { usePathname } from 'next/navigation'

export default function () {
    const a = usePathname()
    console.log(a)
  return (
    <h1>
     this {a} is not found 
    </h1>
  )
}

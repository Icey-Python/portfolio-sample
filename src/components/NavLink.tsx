import React from 'react'
interface NavLinkProps {
   text: string
   className?:string
}
const NavLink = ({className,text}:NavLinkProps) => {
  return (
    <li className={`text-gray-200 hover:underline decoration-2 underline-offset-8 py-2 px-4 cursor-pointer transition duration-75 ${className}`}>{text}</li>
  )
}

export default NavLink

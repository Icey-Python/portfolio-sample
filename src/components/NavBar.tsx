import React from 'react'
import NavLink from './NavLink'
interface NavBarProps{
  path: string
  name?: string

}
const NavBar = ({path,name}:NavBarProps) => {
  return (
    <div>
    <ul className='flex justify-around bg-[#242424] backdrop-blur-md rounded-full py-2 px-2 mx-52 mt-4'>
    <NavLink text={"Hello"} className={"bg-purple-500 text-white font-bold rounded-full hover:bg-purple-700"}/>
    <NavLink text={"Services"}/>
    <NavLink text={"About"}/>
    <div className='flex justify-between items-center'>
    <img src={path} alt="Image" className='aspect-square w-10'/>
    <p className='text-purple-500 text-2xl font-extrabold'>{name}</p>
    </div>
    <NavLink text={"Resume"}/>
    <NavLink text={"Projects"}/>
    <NavLink text={"Contact"}/>
    </ul>
    </div>
  )
}

export default NavBar

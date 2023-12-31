import React, { useState } from 'react'
import "./Header.css"
import OutsideClickHandler from 'react-outside-click-handler'
import {BiMenuAltRight} from 'react-icons/bi'

const Header = () => {
    const [menuOpened,setMenuOpened] = useState(false)
    const getMenuStyles=(menuOpened)=>{
      if(document.documentElement.clientWidth<=800){
        return {right: !menuOpened &&"-100%"}
      }
    }
  
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddingsinnerWidth h-container'>
            <img src="./logo.png" alt="logo" width={100} />
            <OutsideClickHandler onOutsideClick={()=>setMenuOpened(false)}>
            <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
                <a href="">Residencies</a>
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href="">Get Sarted</a>
                <button className="button">
                    <a href="">contact</a>
                </button>
            </div>
            </OutsideClickHandler>
            <div className='menu-icon' onClick={()=>setMenuOpened((prev)=>!prev)}>
               <BiMenuAltRight size={30}/>
            </div>
        </div>
    </section>
  )
}

export default Header
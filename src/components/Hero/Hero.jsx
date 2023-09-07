import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className='padding innerWidth flexCenter hero-container'>
            {/*left side*/}  
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                        <motion.h1
                        initial={{y: "2rem",opacity: 0}}
                        animate={{y:0,opacity:1}}
                        transition={{duration:2,type:"spring"}}
                        >
                            Discover<br/> Most <br/> Suiable Property
                        </motion.h1>
                </div>
                <div className="flexColStart hero des">
                        <span className='SecondaryText'>Find a variety of property that suits your budget and needs</span>
                        <span className='SecondaryText'>Forget all the difficulty in finding the residency for you</span>
                </div>
                <div className="flexCenter search-bar"> 
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text"/>
                    <button className="button">Search</button>
                </div> 
                
            </div>
             {/*right side*/}
             <div className="flexCenter hero-right">
                <motion.div 
                className="image-container"
                initial={{x: "7rem",opacity: 0}}
                animate={{x:0,opacity:1}}
                transition={{duration:2,type:"spring"}}
                >
                    <img src="./hero-image.png" alt="" />
                </motion.div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero
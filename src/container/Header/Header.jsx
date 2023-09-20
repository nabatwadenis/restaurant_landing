import React from 'react'
import './Header.css'
import { images } from '../../constants'
import { SubHeading } from '../../components'
const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the New Flavour"/>
        <h1 className='app__header-h1'>The Key To Fine Dining</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>welcome to a world of refined dining excellence where
         all your dining fantasies are met with top notch customer services and 
         dishes that will have you coming for more</p>
        <button type="button" className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  )
}

export default Header
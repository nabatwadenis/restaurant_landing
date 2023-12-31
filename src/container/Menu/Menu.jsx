import React from 'react'
import './Menu.css'
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

const Menu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title="Menu that fits your pallete"/>
        <h1 className='headtext__cormorant'>Todays Specials</h1>
      </div>
      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
          <div className='app__specialMenu-menu_items'>
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))}
          </div>
        </div>
        <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt='menuimg'/>
        </div>
        <div className='app__specialMenu-menu_cocktail flex__center'>
          <p className='app__specialMenu-menu_heading'>Cocktails</p>
          <div className='app__specialMenu-menu_items'>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
            ))}
          </div>
        </div>
      </div>
      <div className='app__specialMenu-btn' >
        <button type='button' className='custom__button'>View More</button>
      </div> 
    </div>
  )
}

export default Menu
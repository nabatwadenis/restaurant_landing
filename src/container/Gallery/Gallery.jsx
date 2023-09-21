import React from 'react'
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsInstagram, BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import './Gallery.css'
import { useRef } from 'react';

const galleryImages = [ images.gallery01,images.gallery02, images.gallery03, images.gallery04]
const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) =>{
    const {current} = scrollRef;

    if(direction === 'left'){
      current.scrollleft -=300;
    }else{
      current.scrollleft +=300;
    }
  }
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram'/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>Lthis is he gallery potion of the code wher you gt to see 
        more of the apetizing cuisine in store</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <idiv className='app__galery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt='gallery'/>
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')}/>
        </div>
      </idiv>

    </div>
  )
}

export default Gallery
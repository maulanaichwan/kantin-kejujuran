import React, { useState } from 'react'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/outline'
import Image from 'next/image';
import addToCartImg from '../../public/undraw_add_to_cart_re_wrdo1.svg';
import shoppingImg from '../../public/undraw_shopping_app_flsj1.svg';
import transferMoneyImg from '../../public/undraw_transfer_money_re_6o1h1.svg';

const Slider = () => {
    const [indexSlide, setIndexSlide] = useState(1);
    
    const handlePrev = () => {
        indexSlide == 1 ? setIndexSlide(slides.length) : setIndexSlide(indexSlide - 1);
    }

    const handleNext = () => {
        indexSlide == slides.length ? setIndexSlide(1) : setIndexSlide(indexSlide + 1);
    }
    
    const slides = [
        {
            id: 1,
            image: addToCartImg,
            text: 'pilih jajanan',
        }, 
        {
            id: 2,
            image: transferMoneyImg,
            text: 'masukkan uang',
        },
        {
            id: 3,
            image: shoppingImg,
            text: 'beli jajanan'
        }
    ]
  return (
    <section className='slider'>
        <div className='slides-information'>
            {slides && slides.map((slide, id) => (
                <div className={`slide-information ${indexSlide == slide.id ? '' : 'hidden'}`} key={id}>
                    <div className='slide-image'>
                        <Image src={slide.image} alt={slide.text} objectFit='contain' height={'500'}/>
                    </div>
                    <h2 className='slide-text'>{slide.text}</h2>
                </div>
            ))}
        </div>
        <div className='slider-nav'>
            <ChevronLeftIcon className='arrow-left-slider' onClick={handlePrev}/> 
            <h3>{indexSlide}</h3>  
            <ChevronRightIcon className='arrow-right-slider' onClick={handleNext} />
        </div>
    </section>
  )
}

export default Slider
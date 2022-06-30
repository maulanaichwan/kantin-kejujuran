import React from 'react'
import Image from 'next/image'
import instaImg from '../../public/instagram-svgrepo-com1.svg';
import linkedinImg from '../../public/linkedin-svgrepo-com(2).svg';
import gmailImg from '../../public/gmail-svgrepo-com(2).svg';

const socialMedia = () => {
    const socmedImg = [
        {
            id: 1,
            image: instaImg,
            link: 'https://www.instagram.com/greensideofalan/',
        },
        {
            id: 2,
            image: linkedinImg,
            link: 'https://www.linkedin.com/in/maulanaichwan/'
        },
        {
            id: 3,
            image: gmailImg,
            link: 'mailto:maulana8.mm@gmail.com'
        },
    ]

  return (
    <div className='social-media-wrapper'>
        {socmedImg && socmedImg.map((icons) => {
            return (
                <a key={icons.id} href={icons.link} className="social-media-icons">
                    <Image src={icons.image} alt="social-media-img"/>
                </a>
            )
        })}
    </div>
  )
}

export default socialMedia
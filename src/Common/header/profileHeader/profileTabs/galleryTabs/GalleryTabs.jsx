import React from 'react';
import Image1 from '../../../../../images/media-40.jpg';
import Image2 from '../../../../../images/media-41.jpg';
import Image3 from '../../../../../images/media-42.jpg';
import Image4 from '../../../../../images/media-43.jpg';
import Image5 from '../../../../../images/media-44.jpg';
import Image6 from '../../../../../images/media-45.jpg';
import Image7 from '../../../../../images/media-46.jpg';
import Image8 from '../../../../../images/media-60.jpg';
import Image9 from '../../../../../images/media-26.jpg';
import Image10 from '../../../../../images/media-60.jpg';
import Image11 from '../../../../../images/media-32.jpg';
import Image12 from '../../../../../images/media-31.jpg';



function GalleryTabs() {
  return (
    <div className='grid grid-cols-12 sm:gap-x-6 gap-y-6 py-6 px-4'>
          <div className='xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12'>
            <img src={Image1} />
          </div>
          <div className='xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12'>
            <img src={Image2} />
          </div>
          <div className='xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12'>
            <img src={Image3} />
          </div>
          <div className='xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12'>
            <img src={Image4} />
          </div>
          <div className='xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12'>
            <img src={Image5} />
          </div>
          <div className='xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12'>
            <img src={Image6} />
          </div>
          <div className='xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12'>
            <img src={Image7} />
          </div>
          <div className='xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12'>
            <img src={Image8} />
          </div>
          <div className='xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12'>
            <img src={Image9} />
          </div>
          <div className='xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12'>
            <img src={Image10} className='h-[100%]'/>
          </div>
          <div className='xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12'>
            <img src={Image11} />
          </div>
          <div className='xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12'>
            <img src={Image12} />
          </div>
          
      
    </div>
  )
}

export default GalleryTabs

import React from 'react';
import media from '../../../../../images/media-17.jpg'
import media1 from '../../../../../images/media-18.jpg'
import media2 from '../../../../../images/3.png';
import media3 from '../../../../../images/media-59.jpg';
import media4 from '../../../../../images/media-60.jpg';
import media5 from '../../../../../images/media-61.jpg';
import media6 from '../../../../../images/media-26.jpg';
import media7 from '../../../../../images/media-29.jpg';




const ActivityTabs=()=> {
  return (
    <div className='p-4 bg-[#181C1F]' style={{borderRadius:'20px'}}>
      <div className='activityTabs'>
        <ul>
          <li className='mb-8'>
            <div className='flex justify-between'>
            <p class="mb-2 text-white"><b>You</b> Commented on <b>alexander taylor</b> post 
            <a class="text-secondary text-blue-600 ml-2" href="#">
              <u>#beautiful day</u></a>.
              </p>
              <span class="ltr:float-right rtl:float-left text-[.6875rem] text-white dark:text-white/50">24,Dec 2022 - 14:34</span>
            </div>
            <div className='flex gap-3'>
              <img src={media} style={{height:'60px',width:'80px',borderRadius:'10px'}}/>
              <img src={media1} style={{height:'60px',width:'80px',borderRadius:'10px'}}/>
            </div>
          </li>
          <li className='mb-8'>
          <div className='flex justify-between'>
          <p class="mb-2 text-white"><b>Json Smith </b>reacted to the post
              </p>
              <span class="ltr:float-right rtl:float-left text-[.6875rem] text-white dark:text-white/50">18,Dec 2022 - 12:26</span>
          </div>
          <p className='text-white dark:text-white/50 mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
          </p>
          </li>
          <li className='mb-8'>
          <div className='flex justify-between'>
          <p class="mb-2 text-white"><b>Alicia Keys  </b>shared a document with<>You</>
              </p>
              <span class="ltr:float-right rtl:float-left text-[.6875rem] text-white dark:text-white/50">18,Dec 2022 - 12:26</span>
          </div>
          <div className='flex gap-5 items-center'>
          <img src={media2} style={{height:'50px',width:'50px'}}/>
          <span class="text-[.6875rem] text-[#8c9097] dark:text-white/50">432.87KB</span>

          </div>
          </li>
          <li className='mb-8'>
          <div className='flex justify-between'>
          <p class="mb-2 text-white"><b>Melissa Blue  </b>liked your post<>travel excites.</>
              </p>
              <span class="ltr:float-right rtl:float-left text-[.6875rem] text-white dark:text-white/50">11,Dec 2022 - 11:18</span>
          </div>
          <p class="mb-2 text-white">you are already feeling the tense atmosphere of the video playing in the background</p>\
          <div className='flex gap-3'>
              <img src={media3} style={{height:'60px',width:'80px',borderRadius:'10px'}}/>
              <img src={media4} style={{height:'60px',width:'80px',borderRadius:'10px'}}/>
              <img src={media5} style={{height:'60px',width:'80px',borderRadius:'10px'}}/>

            </div>

          
          </li>
          <li className='mb-3'>
            <div className='flex justify-between'>
            <p class="mb-2 text-white"><b>You</b> Commented on <b>Peter Engola </b> post 
            <a class="text-secondary text-blue-600 ml-2" href="# ">
              <u>#Mother Nature</u></a>.
              </p>
              <span class="ltr:float-right rtl:float-left text-[.6875rem] text-white dark:text-white/50">24,Dec 2022 - 14:34</span>
            </div>
            <p className='text-white mb-2'>Technology id developing rapidly kepp uo your work </p>
            <div className='flex gap-3'>
              <img src={media6} style={{height:'60px',width:'80px',borderRadius:'10px'}}/>
              <img src={media7} style={{height:'60px',width:'80px',borderRadius:'10px'}}/>
            </div>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default ActivityTabs

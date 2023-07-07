import React, {useState} from 'react'
import DefaultAccordion from '../DefaultAccordion'

import price from "../../assets/images/icons/price.svg"
import calendar from "../../assets/images/icons/calendar.svg"
import persent from "../../assets/images/icons/persent.svg"
import parking from "../../assets/images/icons/parking.svg"
import mainImg from "../../assets/images/mainpage/garden_main.png"
import data from '../../db/accordionData'

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  return (
    <>
      <div className='flex -mt-1'>
        <div className='bg-main-color w-[90%] border-0 px-[120px]'>
            <div className='flex justify-between mt-[150px] mb-[96px]'>
              <h1 className='xl:text-[84px] text-[124px] capitalize text-white font-playfair-display'>giving the best <br /> just for you</h1>
              <div className='flex flex-col mt-12'>
              {
                data.map((item, index) => (
                     <DefaultAccordion 
                        key={item.id} 
                        item={item} 
                        isActiveIndex={index === activeIndex}
                        setActiveIndex={setActiveIndex}
                        sectionIndex = {index}
                        />
                  )
                )
              }

              </div>
            </div>
        </div>
        <div className='flex flex-col w-[10%] text-center bg-white pb-[80px] font-geologica font-light text-[14px]'>
          <div className='flex flex-col justify-center cursor-pointer py-[30px] gap-y-2 hover:bg-slate-200 transition duration-500 ease-in-out'>
          <img src={price} alt='price_image' className='max-w-[25px] mx-auto' />
          <span>Best Price <br /> Guarantee</span>
          </div>
          <div className='flex flex-col justify-center cursor-pointer border-t py-[30px] gap-y-2 hover:bg-slate-200 transition duration-500 ease-in-out'>
          <img src={calendar} alt='price_image' className='max-w-[25px] mx-auto' />
          <span>Instant <br /> Confirmation</span>
          </div>
          <div className='flex flex-col justify-center cursor-pointer border-t py-[30px] gap-y-2 hover:bg-slate-200 transition duration-500 ease-in-out'>
          <img src={persent} alt='price_image' className='max-w-[25px] mx-auto' />
          <span>No booking <br /> fee</span>
          </div>
          <div className='flex flex-col justify-center cursor-pointer border-t py-[30px] gap-y-2 hover:bg-slate-200 transition duration-500 ease-in-out'>
          <img src={parking} alt='price_image' className='max-w-[25px] mx-auto' />
          <span>Free <br /> parking</span>
          </div>
        </div>

      </div>
      <div className='w-full'>
              <img src={mainImg} alt='main_img' className='w-full'/>
      </div>
    </>
  )
}

export default Header
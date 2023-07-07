import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import './style.css'
import arrowRight from "../../assets/images/icons/arrow_right.svg";

const CustomSlider = ({data}) => {
  return (
    <Swiper
      navigation={true}
      // loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation]}
      className="mySwiper"  
      spaceBetween={50}
      slidesPerView={3}
    >
        {
            data.map((item, idx) => (
                <SwiperSlide key={idx}>
                    <img src={item.img_url}  alt="room_img"/>
                    <div className='flex flex-col px-2 gap-y-2'>
                        <h2 className='text-[34px] font-geologica capitalize'>{item.title}</h2>
                        <p>from <span className='text-[#CBAA5D] text-[20px]'>$ {item.price}/night</span></p>
                        <span>{item.area} m<sup>2</sup> | {item.guests} guests | free breakfast buffet</span>
                        <button className='uppercase flex flex-row items-center cursor-pointer font-geologica text-lg text-orange-color gap-4'>book now <img src={arrowRight} alt="right_img"/></button>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}

export default CustomSlider
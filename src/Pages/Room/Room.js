import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Card from "../../component/Card"

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import 'swiper/css/pagination';

import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

import roomDb from "../../db/roomDb"
import roomServiceDb from "../../db/roomServiceDb"

import door from "../../assets/images/room/icons/door.svg"
import bath from "../../assets/images/room/icons/bath.svg"
import tv from "../../assets/images/room/icons/tv.svg"
import drinks from "../../assets/images/room/icons/drinks.svg"
import frame from "../../assets/images/room/icons/Frame.svg"

const Room = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(undefined);
  return (
    <>
      <Navbar />
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        pagination={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper2"
      >
        { roomDb.map(({id, img_url, title, size, bed, guests, price}) => (
        <SwiperSlide key={id} className="h-4/5 relative">
          <img src={img_url} alt="room_img" className="w-full h-[500px] object-cover brightness-50"/>
          <div className="container px-[144px] absolute top-0 left-0">
            <h2 className="text-white text-[80px] font-playfair-display font-medium mt-[123px] mb-[35px] capitalize">{title}</h2>
            <div className="flex justify-between font-playfair-display text-white font-medium">
                <div>
                    <span className="text-[27px]">Size</span> <br />
                     <h3 className="text-[43px]">{size} Squares</h3>
                </div>
                <div>
                    <span className="text-[27px]">Bed</span> <br />
                     <h3 className="text-[43px] capitalize">{bed}</h3>
                </div>
                <div>
                    <span className="text-[27px]">guests</span> <br />
                     <h3 className="text-[43px]">{guests} Adult</h3>
                </div>
                <div>
                    <span className="text-[27px]">Star from</span> <br />
                     <h3 className="text-[43px]">$ {price} / Night</h3>
                </div>
            </div>
          </div>
        </SwiperSlide>
        ))
        }
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3 my-[20px]"
      >
        { 
        roomDb.map(({id, img_url}) => (
        <SwiperSlide key={id} className="cursor-pointer">
          <img src={img_url} alt="room_img"/>
        </SwiperSlide>
        ))

        }
      </Swiper>
        <div className="container">
            <div className="my-[60px] px-[144px]">
                <h3 className="text-[21px] text-[#8F583A] font-geologica font-light uppercase tracking-[2.1px] text-center">
                free-to-use
                </h3>
                <h2 className="text-[#443939] text-[56px] font-playfair-display justify-self-center font-semibold capitalize text-center">
                enjoy the following free services provided by our hotel
                </h2>
                <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce
                </p>
            </div>
            <div className="flex my-[132px] gap-1 justify-evenly flex-wrap">
                {
                  roomServiceDb.map(({id, img_url, description}) => (
                    <div key={id} className="w-[200px] xl:w-[180px] text-center">
                      <img src={img_url} alt="service_image" className="w-[50px] h-[50px] mx-auto" />
                      <h3 className="mt-[10px]">{description}</h3>
                    </div>

                  ))
                }
            </div>
            </div>

                
            <div className="w-full flex flex-col mb-[30px] border-[0.5px]  border-main-color">
                
                  <div className="grid grid-cols-7">
                    
                    <div className="border-[0.5px] col-span-3 border-main-color pl-[144px] py-[27px] pr-[27px]">
                      <div className="flex gap-4 items-center">
                        <img src={door} alt="door_image" />
                        <h3 className="text-[27px] font-geologica font-normal">In the room</h3>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="col-span-1">
                          <ul className="my-4 font-geologica text-lg font-light">
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>hanger</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>mosquito net</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>soundproofing</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>waste baskets</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>alarm</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>wardrobe</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>air conditioner</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>individual lockers</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>key entry</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>wake-up call service</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>carpet covering</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>elevator to access the upper floors</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-span-1">
                        <ul className="my-4 font-geologica text-lg font-light">
                        <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>bed sheets</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>protective barriers for children</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>Desktop</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>extra long beds (more than 2 meters)</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>air conditioners work within the same room</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>antibacterial hand gel</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>smoke detector</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>Upper floors can only be accessed by stairs</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>hanger</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>central heating</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>sofa</span>
                            </li>
                        </ul>
                        </div>

                      </div>
                    </div>
                    <div className="border-[0.5px] col-span-2 border-main-color py-[27px] pl-[40px]">
                    <div className="flex gap-4 items-center">
                        <img src={bath} alt="bath_image" />
                        <h3 className="text-[27px] font-geologica font-normal">In bathroom</h3>
                      </div>
                      <ul className="my-4 font-geologica text-lg font-light">
                      <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>toilet</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>bath</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>shower</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>personal hygiene products</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>robe</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>slippers</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>hair dryer</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>set of towels</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>shampoo</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>toilet paper</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>soap</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>Toothbrush</span>
                            </li>
                      </ul>
                    </div>
                    <div className="border-[0.5px] col-span-2 border-main-color pr-[144px] py-[27px] pl-[40px]">
                    <div className="flex gap-4 items-center">
                        <h3 className="text-[27px] font-geologica font-normal">Outdoors</h3>
                      </div>
                      <ul className="my-4 font-geologica text-lg font-light">
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>terrace</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>city view</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>beautiful view</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>garden view</span>
                            </li>
                      </ul>
                    </div>
                    </div>
                  
                  <div className="grid grid-cols-7">
                    <div className="border-[0.5px] border-main-color pl-[144px] py-[27px] col-span-3">
                    <div className="flex gap-4 items-center">
                        <img src={tv} alt="tv_image" />
                        <h3 className="text-[27px] font-geologica font-normal">Media and Entertainment</h3>
                      </div>
                      <ul className="my-4 font-geologica text-lg font-light">
                      <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>TV</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>satellite television</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>cable TV</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>board games and/or puzzles</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>computer</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>PS4 game console</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>game console - PS3</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>game console</span>
                            </li>
                      </ul>
                    </div>
                    <div className="border-[0.5px] border-main-color py-[27px]  pl-[40px] col-span-2">
                    <div className="flex gap-4 items-center">
                        <img src={drinks} alt="drinks_image" />
                        <h3 className="text-[27px] font-geologica font-normal">Food and drinks</h3>
                      </div>
                      <ul className="my-4 font-geologica text-lg font-light">
                      <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>electric kettle</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>coffee machine</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>fridge</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>mini bar</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>bottled water</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>dinner table</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>dinette</span>
                            </li>
                            <li className="flex gap-2">
                              <img src={frame} alt="frame_image" /> <span>high chair for child</span>
                            </li>
                      </ul>
                    </div>
                    <div className="border-[0.5px] border-main-color pr-[144px] py-[27px] pl-[40px] col-span-2"></div>
                  </div>
                </div>

                <div className="container px-[144px]">
            <h2 className="text-[#443939] mb-[90px] text-[56px] font-playfair-display justify-self-center font-semibold capitalize text-center">
                Other rooms
                </h2>

                <Swiper 
                  navigation={true} 
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={3}
                  className="my-8"
                >
                  <SwiperSlide>
                    <Card />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card />
                  </SwiperSlide>
                </Swiper>


        </div>


      <Footer />
    </>
  );
};

export default Room;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "../../component/Navbar";
import Header from "../../component/Header";

import aboutImg from "../../assets/images/mainpage/about.png";
import arrowRight from "../../assets/images/icons/arrow_right.svg";
import leftArrow from "../../assets/images/icons/left-arrow.svg";
import rightArrow from "../../assets/images/icons/right-arrow.svg";
import open_q from "../../assets/images/mainpage/open_q.svg";
import close_q from "../../assets/images/mainpage/close_q.svg";
import CustomSlider from "../../component/CustomSlider";
import sliderDB from "../../db/sliderDb";
import Footer from "../../component/Footer";

import testimonials from "../../db/testimonials";
import serviceDb from "../../db/serviceDb";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "./style.css";

const MainPage = () => {
  const [activeImg, setActiveImg] = useState(0);
  const toggleIndex = (idx) => {
    setActiveImg(idx);
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="container mx-auto px-[144px]">
        <div className="grid grid-cols-2 gap-x-16 my-[50px] py-[50px]">
          <div className="col-span-1">
            <h3 className="uppercase font-geologica text-[#8F583A] font-light my-[12px]">
              about us
            </h3>
            <h2 className="font-playfair-display xl:text-[28px] text-[34px] capitalize font-semibold text-[#443939] mb-[30px] pr-[125px]">
              providing our guest with unforgettable experiencess
            </h2>
            <p className="mb-[40px] font-geologica text-base text-smooth-color">
              Step into a world of endless enjoyment at our luxurious hotel,
              where every moment is an opportunity to indulge in the ultimate
              comfort and relaxation Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in volup
            </p>
            <button className="xl:py-[15px] py-[20px] xl:px-[61px] px-[71px] my-[20px] uppercase font-geologica bg-orange-color text-white hover:bg-[#8F583A] transition duration-500 ease-in-out">
              read more
            </button>
          </div>
          <div className="col-span-1 self-end">
            <div className="relative w-[500px] after:absolute after:content-[''] after:w-[500px] after:h-[330px] after:border-2 after:border-[#8F583A] after:border-solid after:left-[50px] after:-top-[50px] after:z-0">
              <img
                src={aboutImg}
                alt="about_image"
                className="w-full relative z-10"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h3 className="uppercase font-geologica text-[#8F583A] font-light my-[12px]">
              rooms & suitess
            </h3>
            <h2 className="font-playfair-display xl:text-[28px] text-[43px] capitalize font-semibold text-[#443939] mb-[30px] pr-[125px] w-[436px]">
              comfortable rooms just for you
            </h2>
          </div>

          <button className="uppercase flex flex-row items-center cursor-pointer font-geologica text-lg text-orange-color gap-4">
            view all rooms
            <img src={arrowRight} alt="right_img" className="w-[25px]" />
          </button>
        </div>

        <CustomSlider data={sliderDB} />
        <div className="flex flex-col justify-center text-center my-24">
          <h3 className="text-[21px] text-[#8F583A] font-geologica font-light uppercase">
            testimonials
          </h3>
          <h2 className="text-[#443939] text-[56px] font-playfair-display font-semibold capitalize">
            what our cilent’s say
          </h2>
          <Swiper
            pagination={{
              type: "fraction",
              currentClass: "currenPage",
              totalClass: "totalClass",
              renderFraction: function (currentClass, totalClass) {
                return `<div class='flex justify-center items-center gap-4 font-geologica'><img src='${leftArrow}' /><span class="${currentClass}"></span>
                      <div class="w-[70px] h-[1px] bg-orange-color"></div> 
                      <span class=" ${totalClass} "></span><img src='${rightArrow}' /></div>`;
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper w-full"
          >
            {testimonials.map(({ name, img_url, id, description, date }) => (
              <SwiperSlide key={id} className="flex flex-col my-8">
                <img src={img_url} alt="avatar_image" className="mx-auto" />
                <div className="flex my-8 px-[100px]">
                  <img src={open_q} alt="open_image" className="self-start" />
                  <p className="text-center py-10">{description}</p>
                  <img src={close_q} alt="close_image" className="self-end" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="my-10">
          <div>
            <h3 className="text-[21px] text-[#8F583A] text-center font-geologica font-light uppercase">
              top-star quality
            </h3>
            <div className="relative">
              <h2 className="text-[#443939] text-[56px] font-playfair-display text-center font-semibold capitalize">
                our awesome services
              </h2>
              <button className="uppercase absolute right-0 top-[25%] flex flex-row items-center justify-self-end cursor-pointer font-geologica text-lg text-orange-color mt-4 gap-4">
                see all services
                <img src={arrowRight} alt="right_img" className="w-[25px]" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-4 items-center justify-center">
            <div className="relative col-span-3 mb-12 w-[400px] after:absolute after:content-[''] after:w-[400px] after:h-[330px] after:border-2 after:border-[#8F583A] after:border-solid after:-left-[100px] after:-top-[50px] after:z-0">
              <img
                src={serviceDb[activeImg === null ? 0 : activeImg].img_url}
                alt="about_image"
                className="w-full relative z-10"
              />
              <div className="flex justify-center items-center gap-4 font-geologica mt-4">
                <img src={`${leftArrow}`} alt="left_image" />
                <span className="text-orange-color">
                  {activeImg === null ? 1 : activeImg + 1}
                </span>
                <div className="w-[70px] h-[1px] bg-orange-color"></div>
                <span className="">{serviceDb.length}</span>
                <img src={`${rightArrow}`} alt="right_image" />
              </div>
            </div>
            <div className="col-span-4 flex flex-col justify-center items-center">
              {serviceDb.map(({ id, description, icon, title }, idx) => (
                <div
                  className="flex py-[17px] border-2 my-4 border-[#D9D9D9] items-center justify-center hover:bg-main-color group"
                  onClick={() => toggleIndex(idx === id ? null : idx)}
                  key={idx}
                >
                  <div className="mx-[25px]">
                    <img
                      src={icon}
                      alt="service_image"
                      className="group-hover:fill-white service-img"
                    />
                  </div>
                  <div className="">
                    <h3 className="font-playfair-display text-[24px] font-medium text-main-color group-hover:text-white">
                      {title}
                    </h3>
                    <p className="text-lg text-[#989090] font-geologica font-light normal-case group-hover:text-white">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center my-8">
            <h3 className="text-[21px] text-[#8F583A] font-geologica font-light uppercase tracking-[2.1px]">
              newsletter
            </h3>
            <h2 className="text-[#443939] text-[56px] font-playfair-display justify-self-center font-semibold capitalize">
              our awesome services
            </h2>
            <p className="px-[200px] my-[30px]">
              Join our mailing list to receive exclusive offers, updates and
              news about Garden House hotel. Be the first to know about our
              promotions, events and special deals. Sign up now and stay
              connected with us.
            </p>
            <div className="px-[200px] xl:px-[120px] relative">
              <input
                type="mail"
                placeholder="Enter your email address..."
                className="w-full py-[37px] px-[50px] text-xl border-2 border-orange-color"
              />
              <button className=" absolute -top-[2px] right-[212px] xl:right-[132px] uppercase flex flex-row items-center justify-self-end cursor-pointer font-geologica text-lg text-white px-[45px] py-[25px] bg-orange-color mt-4 gap-4">
                sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;

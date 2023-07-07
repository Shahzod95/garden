import React, { useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

import header from "../../assets/images/About/header.png";
import img1 from "../../assets/images/About/Rectangle 131.png";
import img2 from "../../assets/images/About/Rectangle 11.png";
import img3 from "../../assets/images/About/phone_icon.svg";
import img4 from "../../assets/images/About/mail_icon.svg";
import img5 from "../../assets/images/About/Rectangle 141.png";

import Accordion from "../../component/Accordion";
import FacilitiesCard from "../../component/facilitiesCard";

import { accordion1, accordion2, facilitiesCards } from "../../db/about";

const Main = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <div className="bg-[#F9F9F9]">
            <Navbar />
            <section className="relative ">
                <p className="absolute capitalize text-white font-playfair-display font-medium text-[80px] leading-[112px] top-[230px] left-[293px]">
                    about us
                </p>
                <img src={header} alt="" />
            </section>
            <section className="py-[100px] px-[281px]">
                <p className="capitalize text-center text-[#443939] font-playfair-display font-medium text-[53px] leading-[74.2px] mb-[50px] px-[79px]">
                    providing our guest with unforgettable experiences to cherish
                </p>
                <p className="text-center text-[#444040] font-geologica font-light text-[18px] leading-[30.6px]">
                    Nestled in the heart of the city, our hotel offers an unparalleled experience with its close
                    proximity to the vibrant local market. But that's not all – we take it a step further by providing
                    awe-inspiring views of the city's unique lake from select rooms. You're in for a treat as you wake
                    up to the serene beauty of the glistening waters.
                </p>
            </section>
            <section className="flex bg-[#F5F5F5]">
                <img src={img1} alt="" />
                <div className="ml-[132px] max-w-[513px]">
                    <p className="uppercase font-geologica text-[#8F583A] text-[21px] leading-[26.25px] font-light mt-[69px]">
                        top-star quality
                    </p>
                    <p className="capitalize font-playfair-display text-[#443939] text-[53px] leading-[74.2px] font-medium mt-3">
                        why choos us?
                    </p>
                    {accordion1.map((item, index) => (
                        <Accordion
                            key={index}
                            item={item}
                            isActiveIndex={index === activeIndex}
                            setActiveIndex={setActiveIndex}
                            sectionIndex={index}
                        />
                    ))}
                </div>
                <div className="ml-auto mr-[47px] my-auto relative after:absolute after:content-[''] after:w-[445px] after:h-[333px] after:border-2 after:border-[#8F583A] after:border-solid after:left-[116px] after:-top-[45px] after:z-0">
                    <img src={img2} alt="about_image" className="w-full relative z-10" />
                </div>
            </section>
            <section className="py-[100px] mx-auto w-[1374px]">
                <p className="uppercase text-center font-geologica text-[#8F583A] text-[21px] leading-[26.25px] font-light">
                    facilities
                </p>
                <p className="capitalize text-center font-playfair-display text-[#443939] text-[53px] leading-[74.2px] font-medium mt-3 mb-[74px]">
                    core features
                </p>
                <div className="grid grid-cols-3">
                    {facilitiesCards.map((item, index) => (
                        <FacilitiesCard index={index} item={item} />
                    ))}
                </div>
            </section>
            <section className="w-[1330px] mx-auto pb-[100px]">
                <p className="uppercase text-center font-geologica text-[#8F583A] text-[21px] leading-[26.25px] font-light">
                    location
                </p>
                <p className="w-[731px] mx-auto capitalize text-center font-playfair-display text-[#443939] text-[53px] leading-[74.2px] font-medium mt-3 mb-[70px]">
                    find your way to Garden house hotel
                </p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.314545503249!2d65.38114331744384!3d40.1129932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f51c12b740ca7b3%3A0x8c8f104f32d1d2dd!2sGarden%20House!5e0!3m2!1suz!2s!4v1688686127040!5m2!1suz!2s"
                    width="1330px"
                    height="626px"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="mb-10"
                ></iframe>
                <p className="capitalize text-center font-geologica text-[#8F583A] text-[27px] leading-[33.75px] font-light mb-5">
                    M. tarobiy 122, Navoi 210109 uzbekistan
                </p>
                <div className="flex items-center justify-center gap-10">
                    <div className="bg-[#CBAA5D] rounded-[50%] p-[10px]">
                        <img src={img3} alt="" className="w-[30px]" />
                    </div>
                    <div className="bg-[#CBAA5D] rounded-[50%] p-[10px]">
                        <img src={img4} alt="" />
                    </div>
                </div>
            </section>
            <section className="flex bg-[#F5F5F5]">
                <img src={img5} alt="" />
                <div className="ml-[81px] mb-[75px] max-w-[860px]">
                    <p className="uppercase font-geologica text-[#8F583A] text-[21px] leading-[26.25px] font-light mt-[69px]">
                        need answers
                    </p>
                    <p className="capitalize font-playfair-display text-[#443939] text-[43px] leading-[60.2px] font-medium mt-3 mb-9">
                        have questions?
                    </p>
                    {accordion2.map((item, index) => (
                        <Accordion
                            key={index}
                            item={item}
                            isActiveIndex={index === activeIndex}
                            setActiveIndex={setActiveIndex}
                            sectionIndex={index}
                            border={true}
                            s_title=" text-[21px] leading-[26.25px]"
                            s_desc=" text-[17px] leading-[22.1px]"
                        />
                    ))}
                </div>
            </section>
            <div className="w-[842px] text-center my-[100px] mx-auto">
                <h3 className="text-[21px] text-[#8F583A] font-geologica font-light uppercase tracking-[2.1px]">
                    newsletter
                </h3>
                <h2 className="text-[#443939] text-[56px] font-playfair-display justify-self-center font-semibold capitalize">
                    join our mailing list
                </h2>
                <p className="w-[658px] mx-auto my-[30px] font-light font-geologica text-[17px] leading-[21.25px]">
                    Join our mailing list to receive exclusive offers, updates and news about Garden House hotel. Be the
                    first to know about our promotions, events and special deals. Sign up now and stay connected with
                    us.
                </p>
                <div className="relative">
                    <input
                        type="mail"
                        placeholder="Enter your email address..."
                        className="w-full py-[37px] px-[50px] text-xl border-2 border-orange-color"
                    />
                    <button className=" absolute -top-[2px] right-[12px] uppercase flex flex-row items-center justify-self-end cursor-pointer font-geologica text-lg text-white px-[45px] py-[25px] bg-orange-color mt-4 gap-4">
                        sign up
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;

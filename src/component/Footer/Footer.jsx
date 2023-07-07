import React from "react";
import logo from "../../assets/images/logo.png";
import ins from "../../assets/images/footer/instagram.png";
import fac from "../../assets/images/footer/facebook.png";
import you from "../../assets/images/footer/youtube.png";
import phone from "../../assets/images/footer/phone.png";
import mail from "../../assets/images/footer/mail.png";
import loc from "../../assets/images/footer/location.png";

const Footer = () => {
    return (
        <div className="bg-[#443939] pt-[51px] pb-7">
            <div className="container px-[144px]">

            <div className="text-[#848484] font-geologica font-light text-lg leading-[22.5px] grid grid-cols-8 gap-4 mb-[60px]">
                <div className="flex flex-col gap-y-4 col-span-2">
                    <img src={logo} alt="logo_image" className="w-[160px]" />
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
                    </p>
                    <div className="flex">
                        <div className="w-[40px] h-[40px] border border-[#848484] mr-5 flex items-center justify-center">
                            <img src={ins} alt="" />
                        </div>
                        <div className="w-[40px] h-[40px] border border-[#848484] mr-5 flex items-center justify-center">
                            <img src={fac} alt="" />
                        </div>
                        <div className="w-[40px] h-[40px] border border-[#848484] flex items-center justify-center">
                            <img src={you} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 col-span-2">
                    <p className="capitalize font-playfair-display font-semibold text-2xl leading-8 text-white mb-[30px]">
                        contact info
                    </p>
                    <div className="flex flex-row gap-4">
                        <img src={phone} alt="" className="w-[18px] h-[20px]" /> 
                        <span>+998-99-123-45-89</span>
                    </div>
                    <div className="flex flex-row gap-4">
                        <img src={mail} alt="" className="w-[18px] h-[20px]" /> 
                        <span>
                        garden_house@gmail.com

                        </span>
                    </div>
                    <div className="flex flex-row gap-4">
                        <img src={loc} alt=""  className="w-[18px] h-[20px]"/> 
                        <span>
                        M. tarobiy 122, Navoi 210109 uzbekistan

                        </span>
                    </div>
                </div>
                <div className="col-span-1">
                    <p className="capitalize font-playfair-display font-semibold text-2xl leading-8 text-white mb-[20px]">
                        services
                    </p>
                    <ul className="flex flex-col gap-2">
                        <li>General</li>
                        <li>Food and drinks</li>
                        <li>Transport</li>
                        <li>Reseption</li>
                        <li>Public Areas</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 col-span-3">
                    <p className="font-playfair-display font-semibold text-2xl leading-8 text-white">
                        Subscribe to newsletter
                    </p>
                    <div className="relative">
                        <input type="text" placeholder="Your email address" className="bg-inherit px-[20px] py-[18px] border border-[#848484] text-base w-full" />
                        <button type="button" className="py-[13px] px-[35px] bg-[#7D7D7D] text-white absolute top-[7px] right-[7px]">
                            Send
                        </button>
                    </div>
                    <p className="">Enter your email address for promotions and news</p>
                </div>
            </div>
            </div>
            <div className="border-t border-[#848484] mb-[22px]"></div>
            <div className="container px-[144px]">
            <p className="text-[#848484] font-geologica font-light text-[14px] leading-[17.5px]">
                Copyright &copy; 2023 garden house hotel
            </p>

            </div>
        </div>
    );
};

export default Footer;

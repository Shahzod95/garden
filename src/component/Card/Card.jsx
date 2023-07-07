import React from "react";
import img1 from "../../assets/images/rooms/Rectangle 56.png";
import img2 from "../../assets/images/rooms/Rectangle 137.png";
import show from "../../assets/images/rooms/shower-1-svgrepo-com 1.png";
import air from "../../assets/images/rooms/air-conditioner-svgrepo-com 1.png";
import bat from "../../assets/images/rooms/bath-svgrepo-com 1.png";
import heating from "../../assets/images/rooms/heating-device-for-winter-svgrepo-com 1.png";

const Card = ({
    img = img1,
    title = "Suite room",
    title_desc = "(One Bedroom Suite)",
    bed = "1 King bed",
    bulk = 32,
    guest = 2,
    shower = true,
    bath = true,
    heat = true,
    conditioner = true,
    price = 350,
}) => {
    return (
        <div className="">
            <div className="relative">
                <img src={img2} alt="" className="absolute bottom-0 left-[50%] transform -translate-x-1/2" />
                <img src={img1} alt="" />
            </div>
            <p className="mt-[30px] font-geologica text-[#443939] text-[27px] xl:text-xl leading-[38px]">
                {title} <span className="text-lg leading-[25px]">{title_desc}</span>
            </p>
            <p className="mt-[14px] font-geologica text-[#000000] text-[21px] xl:text-xl leading-[26.25px]">
                {bed}
                <div className="mx-[11.32px] my-[4px] inline-block w-[4.95px] h-[4.95px] rounded-[50%] bg-[#8F583A]"></div>
                {bulk} m<sup>2</sup>
                <div className="mx-[11.32px] my-[4px] inline-block w-[4.95px] h-[4.95px] rounded-[50%] bg-[#8F583A]"></div>
                {guest + (guest <= 1 ? " guest" : " guests")}
            </p>
            <div className="border-t border-[#DDDDDD] mt-[30px] mb-[16px]"></div>
            <div className="grid gap-4 grid-flow-col font-geologica font-light text-[17px] xl:text-sm leading-[21.25px] text-center text-[#000000]">
                <div>
                    <img src={show} alt="" className="mx-auto mb-2 xl:w-[30px] w-[40px]" />
                    <p>Shower</p>
                </div>
                <div>
                    <img src={bat} alt="" className="mx-auto mb-2 xl:w-[30px] w-[40px]" />
                    <p>Bath</p>
                </div>
                <div>
                    <img src={heating} alt="" className="mx-auto mb-2 xl:w-[30px] w-[40px]" />
                    <p>Heating</p>
                </div>
                <div>
                    <img src={air} alt="" className="mx-auto mb-2 xl:w-[30px] w-[40px]" />
                    <p>Air conditioner</p>
                </div>
            </div>
            <div className="border-t border-[#DDDDDD] mt-[28px] mb-[12px]"></div>
            <div className="flex justify-between">
                <p className="font-geologica font-light text-[17px] leading-[21.25px] flex items-center">
                    from <span className="text-[21px] xl:text-xl leading-[26.25px] text-[#CBAA5D] ml-2">$_{price}/night</span>
                </p>
                    <button
                        type="button"
                        className="uppercase font-normal text-[#CBAA5D] border-[#CBAA5D] border text-base xl:text-sm py-[8px] xl:py-[6px] px-[18px] xl:px-[14px] hover:bg-orange-color hover:text-white transtion ease-in-out duration-700"
                    >
                        book now
                    </button>
            </div>
        </div>
    );
};

export default Card;

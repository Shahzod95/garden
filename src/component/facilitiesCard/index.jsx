import React from "react";

const Index = ({ index, item }) => {
    return (
        <div className="max-w-[433px] relative bg-[#F5F5F5] px-[50px] pt-[34px] pb-[57px] m-[15px]">
            <p className="absolute right-0 -top-[10px] font-geologica text-[#E6E6E6] text-[87px] leading-[108.75px] font-bold">
                {(index < 9 ? "0" : "") + (index + 1)}
            </p>
            <img src={item.icon} alt="" className="mb-[22px]" />
            <p className="capitalize font-geologica text-[#443939] text-[34px] leading-[47.6px] font-medium mb-5">
                {item.title}
            </p>
            <p className="font-geologica text-[#000000] text-[17px] leading-[23.8px] font-light">{item.description}</p>
        </div>
    );
};

export default Index;

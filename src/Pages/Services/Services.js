import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import servicePage from "../../db/servicePage";

import clock from "../../assets/images/services/clock.svg";
import extra_bed from "../../assets/images/services/extra_bed.svg";
import pets from "../../assets/images/services/pets.svg";

import servis1 from "../../assets/images/services/imgs/servis1.png"
import servis2 from "../../assets/images/services/imgs/servis2.png"
import servis3 from "../../assets/images/services/imgs/servis3.png"
import servis4 from "../../assets/images/services/imgs/servis4.png"

import drink from "../../assets/images/services/drink.svg"
import home from "../../assets/images/services/home.svg"
import dry from "../../assets/images/services/dry.svg"
import room_service from "../../assets/images/services/room_service.svg"

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="flex font-geologica">
        <div className="relative">
          <img src={servis1} alt="servvis_image" />
          <div className="absolute top-1/3 left-[30%] w-[150px] text-white">
            <img src={drink} alt="drink_image" className="mx-auto w-[80px]"/>
            <h2 className="text-center uppercase mt-4">Restaurant and Bar</h2>
          </div>
        </div>
        <div className="relative">
        <img src={servis2} alt="servvis_image" />
          <div className="absolute top-1/3 left-[30%] w-[150px] text-white">
            <img src={home} alt="drink_image" className="mx-auto"/>
            <h2 className="text-center uppercase mt-4">kids' club playgroundsr</h2>
          </div>
        </div>
        <div className="relative">
        <img src={servis3} alt="servvis_image" />
          <div className="absolute top-1/3 left-[30%] w-[150px] text-white">
            <img src={dry} alt="drink_image" className="mx-auto" />
            <h2 className="text-center uppercase mt-4">Laundry Dry cleaning</h2>
          </div>
        </div>
        <div className="relative">
        <img src={servis4} alt="servvis_image" />
          <div className="absolute top-1/3 left-[30%] w-[150px] text-white">
            <img src={room_service} alt="drink_image" className="mx-auto"/>
            <h2 className="text-center uppercase mt-4">Accommodation Services</h2>
          </div>
        </div>
      </div>
      <div className="container px-[144px]">
        <h3 className="text-[21px] text-[#8F583A] text-center mt-[84px]  font-geologica font-light uppercase tracking-[2.1px]">
          luxury service
        </h3>
        <h2 className="text-[#443939] mb-[84px]  text-center  text-[56px] font-playfair-display justify-self-center font-semibold capitalize">
          the perfect base for you
        </h2>

        <div className="my-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
          {servicePage.map(({ id, icon, title, free }) => (
            <div key={id} className="text-center">
              <img
                src={icon}
                alt="service_image"
                className="mx-auto w-[80px] h-[80px]"
              />
              <h3 className="capitalize my-4">{title}</h3>
              {free !== "" ? (
                <span className="text-orange-color">{free}</span>
              ) : undefined}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#F5F5F5] py-[55px] my-8">
        <div className="container px-[144px]">
          <h3 className="text-[21px] text-[#8F583A] text-center  font-geologica font-light uppercase tracking-[2.1px]">
            warning service
          </h3>
          <h2 className="text-[#443939] mb-[84px]  text-center  text-[56px] font-playfair-display justify-self-center font-semibold capitalize">
            Important information
          </h2>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <img
                src={clock}
                alt="clock_image"
                className="w-[110px] mx-auto"
              />
              <div className="flex justify-between gap-4">
                <div className="flex flex-col">
                  <h3 className="text-xl mt-4 font-geologica font-normal">
                    Check in
                  </h3>
                  <p className="text-[#848484] text-base font-geologica">
                    from 12:00-23:59
                  </p>
                  <span className="text-orange-color">for free</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl mt-4 font-geologica font-normal">
                    Check out
                  </h3>
                  <p className="text-[#848484] text-base font-geologica">
                    from 12:00-23:59
                  </p>
                  <span className="text-orange-color">for free</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <img
                src={extra_bed}
                alt="extra_bed_image"
                className="w-[90px] mx-auto"
              />
              <h3 className="text-center text-xl mt-4 font-geologica font-normal">
                Extra beds
              </h3>
              <p className="text-[#848484] text-base font-geologica">
                all children 0 - 12 years old{" "}
                <span className="text-orange-color">$ 10</span>
              </p>
              <p className="text-[#848484] text-base font-geologica">
                children over 12 or adults{" "}
                <span className="text-orange-color ml-2">$ 15</span>
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <img src={pets} alt="pets_image" className="w-[90px] mx-auto" />
              <h3 className="text-center text-xl mt-4 font-geologica font-normal">
                Pets
              </h3>
              <p className="text-[#848484] text-base font-geologica">
                pets are not allowed
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;

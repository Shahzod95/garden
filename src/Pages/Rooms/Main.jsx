import React from "react";
import Navbar from "../../component/Navbar";
import Card from "../../component/Card/Card";

import headImg from "../../assets/images/rooms/Rectangle 40.png";
import img from "../../assets/images/rooms/Rectangle 56.png";
import Footer from "../../component/Footer";

const data = {
    img: img,
    title: "Suite room",
    title_desc: "(One Bedroom Suite)",
    bed: "1 King bed",
    bulk: 32,
    guest: 2,
    shower: true,
    bath: true,
    heat: true,
    conditioner: true,
    price: 350,
};

const Main = () => {
    return (
        <div>
            <Navbar />
            <section className="relative">
                <p className="absolute left-[7.2vw] top-[38.6%] text-white font-playfair-display font-medium text-[80px] leading-[112px] capitalize">
                    comfortable rooms just for you
                </p>
                <img src={headImg} alt="" />
            </section>
            <section className="py-[100px]">
                <div className="container px-[144px]">
                <div className="grid grid-cols-3 gap-y-[80px] gap-x-8">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Main;

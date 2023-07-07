import { useState } from "react";
import logo from "../../assets/images/logo.png";
import {Link} from "react-router-dom"

const languages = [
  {
    id: 0,
    name: "en",
  },
  {
    id: 1,
    name: "ru",
  },
  {
    id: 2,
    name: "uz",
  },
];

const Navbar = () => {
  const [activeIndex, setLangActive] = useState(0);

  const handleActive = (index) => {
    setLangActive(index);
  };

  return (
    <div className="grid xl:text-base text-xl font-geologica mb-0 border-0">
      <div className="flex items-center justify-between py-[30px] px-[120px] max-w-[90%] bg-main-color">
        <img
          src={logo}
          alt="garden-house-logo_image"
          className="cursor-pointer xl:max-w-[138px] max-w-[168px]"
        />
        <ul className="flex  text-white ">
          <Link to="/" className="mr-[58px] cursor-pointer hover:text-orange-color transition duration-500 ease-in-out">
            Home
          </Link>
          <Link to="/services" className="mr-[58px] cursor-pointer hover:text-orange-color transition duration-500 ease-in-out">
            Services
          </Link>
          <Link to="/about" className="mr-[58px] cursor-pointer hover:text-orange-color transition duration-500 ease-in-out">
            About
          </Link>
          <Link to="/rooms" className="cursor-pointer hover:text-orange-color transition duration-500 ease-in-out">
            Rooms
          </Link>
        </ul>
        <a href="tel:+998991234589" className="text-orange-color">
          +998-99-123-45-89
        </a>
        <div>
          <ul className="flex text-white gap-2">
            {languages.map(({ id, name, active }, idx) => (
              <li
                key={id}
                className={`${
                  activeIndex === idx ? "active" : ""
                } cursor-pointer uppercase`}
                onClick={() => handleActive(idx)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-[10%]">
        <Link to="/rooms/room" className="absolute xl:py-[15px] py-[20px] xl:px-[61px] px-[71px] right-0 top-[34px] bg-orange-color text-white">
          BOOKING
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

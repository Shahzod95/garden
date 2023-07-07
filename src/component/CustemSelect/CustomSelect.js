import {useState} from "react";
import Select from "react-select";

function CustomSelect({ fixedNavbar, className }) {
    const [language, setLanguage] = useState({
        value: "en",
      label: (
        <span className={"flex items-center justify-center gap-2"}>
          <span className={"text-[0.9rem] font-mukta text-white"}>EN</span>
        </span>
      ),
      });

      const updateLang = (e) => {
        console.log(e.label);
        setLanguage({ value: e.value, label: e.label });
      };
    
    
  const styles = {
    control: (baseStyles) => ({
      ...baseStyles,
      border: "none",
      outline: "none",
      background: "transparent",
      cursor: "pointer",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      color: !fixedNavbar ? "#FFFFFFB2" : "#000000B2",
      padding: 0,
    }),
    singleValue: (provided, state) => {

      return {
        ...provided,
        paddingLeft: 30,
        // color: !fixedNavbar ? "#FFFFFFB2" : "#000000B2",
        // "& > span > span": {
        //   display: !fixedNavbar ? "none" : "inline-block",
        // },
      };
    },
    menu: (baseStyles) => ({
      ...baseStyles,
      width: "80px",
    }),
  };

  const options = [
    {
      value: "en",
      label: (
        <span className={"flex items-center justify-center gap-2"}>
          <span className={"text-[0.9rem] font-mukta text-white"}>EN</span>
        </span>
      ),
    },
    {
      value: "uz",
      label: (
        <span className={"flex items-center justify-center gap-2"}>
          <span className={"text-[0.9rem] font-mukta text-white"}>UZ</span>
        </span>
      ),
    },
    {
      value: "ru",
      label: (
        <span className={"flex items-center justify-center gap-2"}>
          <span className={"text-[0.9rem] font-mukta text-white"}>RU</span>
        </span>
      ),
    },
  ];

  return (
    <>
      <Select
        styles={styles}
        className={className}
        onChange={(item) => updateLang(item)}
        defaultValue={language}
        components={{
          IndicatorSeparator: () => null,
        }}
        isSearchable={false}
        options={options}
      />
    </>
  );
}

export default CustomSelect;

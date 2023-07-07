import RightIcon from "../../assets/images/About/Vector.png";
import BottomIcon from "../../assets/images/About/Vector1.png";

const Accordion = ({
    item,
    isActiveIndex,
    setActiveIndex,
    sectionIndex,
    border = false,
    s_title = " text-[34px] leading-[42.5px]",
    s_desc = " text-[17px] leading-[22.1px]",
}) => {
    const toggleSection = () => {
        const nextIndex = isActiveIndex ? null : sectionIndex;
        setActiveIndex(nextIndex);
    };
    return (
        <div className={border ? "border border-[#CBAA5D] p-5 mb-4" : ""}>
            <div className="flex items-center py-2.5 xl:text-xl text-2xl font-geologica " onClick={toggleSection}>
                {isActiveIndex ? (
                    <img src={BottomIcon} alt="bottom_imaage" />
                ) : (
                    <img src={RightIcon} alt="rigth_image" />
                )}
                <h2 className={"ml-5 text-[#443939] font-geologica font-light" + s_title}>{item.title}</h2>
            </div>
            {isActiveIndex ? (
                <p className={"text-[#848484] font-geologica font-light my-3" + s_desc}>{item.description}</p>
            ) : undefined}
        </div>
    );
};

export default Accordion;

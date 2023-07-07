import RightIcon from '../../assets/images/icons/right.svg'
import BottomIcon from '../../assets/images/icons/bottom.svg'

const DefaultAccordion = ({item, isActiveIndex, setActiveIndex, sectionIndex}) => {
   const toggleSection = () => {
      const nextIndex = isActiveIndex ? null : sectionIndex
      setActiveIndex(nextIndex)
   }
  return (
    <div className="xl:w-[267px] w-[327px]">
      <div className="flex justify-between py-2.5 xl:text-xl text-2xl font-geologica border-b-2" onClick={toggleSection}>
        <h2 className="text-white" >{item.title}</h2>
        {isActiveIndex ? <img src={BottomIcon} alt="bottom_imaage" /> : <img src={RightIcon} alt="rigth_image" />}
      </div>
      { isActiveIndex ? <p className='text-white font-geologica xl:text-base text-lg my-4'>{item.description}</p> : undefined}
    </div>
  )
}
  
export default DefaultAccordion
import service1 from "../assets/images/mainpage/service1.png"
import accom from "../assets/images/mainpage/icons/accom.svg"
import park1 from "../assets/images/mainpage/icons/park1.svg"
import drink from "../assets/images/mainpage/icons/drink1.svg"
import cleaning from "../assets/images/mainpage/icons/cleaning.svg"

const serviceDb = [
    {
        id:1,
        title:"Accommodation Services",
        img_url: service1,
        icon: accom,
        description:`Core services related to guest rooms, such as room cleaning, linen and towel changes, wake-up calls, and room service.`,
    },
    {
        id:2,
        title:"Special Services for Families and Children:",
        img_url: service1,
        icon: park1,
        description:`Children's playground, kids' club, children television networks, shared kitchen, terrace`,
    },
    {
        id:3,
        title:"Entertainment and Recreation Services:",
        img_url: service1,
        icon: drink,
        description:`Restaurant, Room service, Bar, Buffet breakfast served at the bar, sports facilities, fitness classes,`,
    },
    {
        id:4,
        title:"Laundry and Dry Cleaning Services:",
        img_url: service1,
        icon: cleaning,
        description:`Laundry and dry cleaning services for guests, ensuring clean and fresh clothing throughout their stay.`,
    },
]

export default serviceDb
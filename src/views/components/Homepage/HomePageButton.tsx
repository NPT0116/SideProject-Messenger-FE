import { Link } from "react-router-dom"

interface IHomePageButton{
    name?: string,
    id?: string,
    href:string
}

const HomePageButton: React.FC<IHomePageButton> = ({name, id, href}) => {
    return (
        <div id={id} className="relative flex flex-row justify-between  items-center bg-gray-400 w-[130px] rounded-full">
            <div className="w-full h-[40px]">
                <Link to={href} className="flex justify-center items-center bg-green-300 w-full h-full rounded-full font-montserrat pr-[36px]">{name}</Link>
            </div>
            <div className="absolute right-0 bg-gray-600 w-[40px] h-[40px] rounded-full border-white border-2">
            </div>
        </div>
    )
}
export default HomePageButton
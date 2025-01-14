import { PATH } from "../../configs/path"
import { Link } from "react-router-dom"

const Header:React.FC = () => {
    return (
        <div className="items-center bg-green-500 font-bold w-full h-full">
            <ul className="flex flex-row justify-around items-center text-center w-full h-full">
                <li className="hover:underline"><Link to={PATH.HOME}>Home</Link></li>
                <li className="hover:underline"><Link to={PATH.LOGIN.path}>Login</Link></li>
                <li className="hover:underline"><Link to={PATH.REGISTER.path}>Register</Link></li>
            </ul>
        </div>
    )
}
export default Header
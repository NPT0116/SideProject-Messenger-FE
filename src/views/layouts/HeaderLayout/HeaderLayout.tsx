import Header from "../../partials/Header"
import { Outlet } from "react-router-dom"
const HeaderLayout:React.FC = () => {
    return (
        <div>
            <div className="w-[100vw] h-[10vh]">
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
export default HeaderLayout
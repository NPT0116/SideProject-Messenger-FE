import { Route, Routes } from "react-router-dom";
import { PATH } from "../configs/path";
import RegisterPage from "../views/pages/RegisterPage/RegisterPage";
import LoginPage from "../views/pages/LoginPage/LoginPage";
import HomePage from "../views/pages/HomePage/HomePage";
import HeaderLayout from "../views/layouts/HeaderLayout/HeaderLayout";
const AppRoutes:React.FC = () => {
    return (
        <div>
            <Routes>
                {/* Routes with header */}
                <Route element={<HeaderLayout/>}>
                    <Route path={PATH.HOME} element={<HomePage />}></Route>
                </Route>

                {/* Routes without header */}
                <Route path={PATH.HOME} element={<HomePage />}></Route>
                <Route path={PATH.LOGIN.path} element={<LoginPage />}></Route>
                <Route path={PATH.REGISTER.path} element={<RegisterPage />}></Route>
            </Routes>
        </div>
    )
}
export default AppRoutes
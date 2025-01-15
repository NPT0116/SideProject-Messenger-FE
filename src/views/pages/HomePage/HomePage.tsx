import HomePageButton from "../../components/Homepage/HomePageButton"
import HomePageCard from "../../components/Homepage/HomePageCard"
import HomePageMemberAvatar from "../../components/Homepage/HomePageMemberAvatar"

const HomePage: React.FC = () => {
    return (
        <div className="h-[100vh] flex flex-row justify-center items-center overflow-hidden bg-no-repeat bg-cover bg-[url('https://i.pinimg.com/736x/30/41/2e/30412e4af495b14c58b1374b50aad1f1.jpg')]">
            <div id="homepage-left-col-container" className="w-3/5 h-full flex justify-center items-center  px-5">
                <div className="w-full  flex flex-col justify-center items-center gap-8">
                    <div id="homepage-title" className="w-full font-museo text-9xl">Textsenger</div>
                    <div id="homepage-description" className="flex justify-center font-montserrat text-xl px-5">
                        Textsenger is an advanced messaging app that not only connects you with friends and
                        family but also leverages the power of AI to enhance your communication experience.
                    </div>
                    {/* <div id="homepage-image" className="mx-5 w-full h-[150px] bg-gray-500 rounded-3xl">
                        <img className="object-cover w-full h-full rounded-3xl" src="https://i.pinimg.com/736x/d9/7d/8c/d97d8c3bacf10278d1878377f82c7251.jpg" alt="" />
                    </div> */}
                    
                    <div id="homepage-navbar-container" className="w-full gap-6 flex flex-row justify-start items-center px-10">
                        <HomePageButton name="Login" id="login" href="/login"></HomePageButton>
                        <HomePageButton name="Register" id="register" href="/register"></HomePageButton>
                    </div>
                </div>
            </div>

            <div id="homepage-right-col-container" className="w-2/5 h-full grid grid-rows-4 grid-cols-2 gap-4  p-5">
                <HomePageCard rowSpan={4} colSpan={2} bgUrl="https://i.pinimg.com/736x/b7/e2/8c/b7e28c4ac119f68ba37512cdb70494b7.jpg"/>
                <HomePageCard rowSpan={2} colSpan={1} bgUrl="https://i.pinimg.com/736x/02/0d/21/020d215f2b5a241caf8a7df2cc46618f.jpg"/>
                {/* <HomePageCard rowSpan={1} colSpan={1} bgUrl="https://i.pinimg.com/736x/b2/4d/67/b24d67e8e21d1f661b9ec0751f74d15d.jpg"/> */}
                <div className="w-full h-full flex justify-center items-center font-montserrat text-center text-md italic font-semibold">
                    "The AI continuously learns from your interactions, improving suggestions and features over time."
                </div>
                <HomePageCard rowSpan={2} colSpan={1} bgUrl="https://i.pinimg.com/736x/4e/76/04/4e7604d7bd8144e758632b23272cbb72.jpg"/>
                <div className="rounded-lg">
                    <div className="w-full h-2/3 flex flex-row justify-center items-center gap-1">
                        <HomePageMemberAvatar imgUrl="https://i.pinimg.com/736x/bd/02/29/bd02295427ca4ba32faf1598ff5bfcbb.jpg"/>
                        <HomePageMemberAvatar imgUrl="https://i.pinimg.com/736x/35/0f/c2/350fc22290398026b584384c393ea9db.jpg"/>
                        <HomePageMemberAvatar imgUrl="https://i.pinimg.com/736x/12/c7/11/12c711305c22649a4559c33fce28f2bb.jpg"/>
                        <HomePageMemberAvatar imgUrl="https://i.pinimg.com/736x/a2/29/52/a229522e27c69f0cbb54e0598e4846b2.jpg"/>
                    </div>
                    <div className="w-full h-1/3 text-center text-[14px] font-montserrat italic text-white font-semi">"Many hands make light work."</div>
                </div>

            </div>
        </div>
    )
}
export default HomePage
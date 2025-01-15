import HomePageButton from "../../components/Homepage/HomePageButton"
import MovingCard from "../../components/Homepage/MovingCard"

const HomePage: React.FC = () => {
    return (
        <div className="h-[100vh] flex flex-row justify-center items-center overflow-hidden">
            <div id="homepage-left-col-container" className="w-3/5 h-full flex justify-center items-center bg-blue-500 px-5">
                <div className="w-full bg-red-400 flex flex-col justify-center items-center gap-8">
                    <div id="homepage-title" className="w-full font-museo text-9xl">Textsenger</div>
                    <div id="homepage-description" className="flex justify-center font-montserrat text-xl">
                        Textsenger is an advanced messaging app that not only connects you with friends and
                        family but also leverages the power of AI to enhance your communication experience.
                    </div>
                    <div id="homepage-image" className="mx-5 w-full h-[150px] bg-gray-500 rounded-3xl">
                        {/* <img width={500} height={100} className="object-contain w-full h-20" src="https://danangfantasticity.com/wp-content/uploads/2018/10/cau-rong-top-20-cay-cau-ky-quai-nhat-the-gioi-theo-boredom-therapy-02.jpg" alt="" /> */}
                    </div>
                    <div id="homepage-navbar-container" className="w-full gap-6 flex flex-row justify-start items-center bg-blue-100 px-10">
                        <HomePageButton name="Login" id="login" href="/login"></HomePageButton>
                        <HomePageButton name="Register" id="register" href="/register"></HomePageButton>

                    </div>
                </div>
            </div>
            <div id="homepage-right-col-container" className="relative w-2/5  flex flex-row  bg-yellow-500 px-5">
                <div id="rc-1" className="relative bottom-20 w-full h-full flex flex-col justify-center items-center gap-5">
                    <MovingCard></MovingCard>
                    <MovingCard></MovingCard>
                    <MovingCard></MovingCard>
                </div>
                <div id="rc-2" className="relative top-20 w-full h-full flex flex-col justify-center items-center gap-5">
                    <MovingCard></MovingCard>
                    <MovingCard></MovingCard>
                    <MovingCard></MovingCard>
                </div>
            </div>
        </div>
    )
}
export default HomePage
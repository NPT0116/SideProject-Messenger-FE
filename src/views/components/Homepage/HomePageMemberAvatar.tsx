interface IHomePageMemberAvatar {
    imgUrl?:string
}


const HomePageMemberAvatar: React.FC<IHomePageMemberAvatar> = ({imgUrl}) => {
    return (
        <div className="w-[50px] h-[50px] rounded-full bg-green-500 hover:scale-105 transition-all duration-300">
            <img src={imgUrl} alt=""className="w-full h-full object-cover border-2 border-black rounded-full" />
        </div>
    )
}

export default HomePageMemberAvatar;
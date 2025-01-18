interface IHomePageCard {
    rowSpan?: number,
    colSpan?: number,
    bgUrl?: string
}


const HomepageCard: React.FC<IHomePageCard> = ({ rowSpan = 2, colSpan = 2, bgUrl }) => {
    console.log(bgUrl)
    return (
        <div className={`w-full h-full rounded-xl bg-green-800 text-center row-span-${rowSpan} col-span-${colSpan}`}>
            {bgUrl && <img src={bgUrl} className="w-full h-full object-cover rounded-xl shadow-xl" />}
        </div>
    )
}
export default HomepageCard
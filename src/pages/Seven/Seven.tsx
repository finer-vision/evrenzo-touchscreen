import { motion } from "framer-motion"
import { useContext } from "react"
import Disclaimer from "../../components/Disclaimer";
import Superscript from "../../components/Superscript";
import SlideContext from "../../contexts/SlideContext"

export default () => {
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-black p-48 pb-12">
            <header className="flex justify-between text-gray-700">
                <h1 className="text-5x text-primary w-[1640px]">
                Three times weekly dosing means EVRENZO free days
                </h1>
                <Disclaimer/>
            </header>
            <section className="flex flex-col items-center grow gap-20 text-3x">
                <div className="flex justify-center items-center w-full mt-20">
                    <div className="w-[1688px] flex flex-col grow gap-20">
                        <h2>EVRENZO is taken three times a week on non-consecutive days<Superscript>1</Superscript></h2>
                        <img className="w-[2177px]" src="./images/7img1.png" alt="" />
                        <p className="w-[2148px]">Three times weekly dosing reduces the pill burden compared to daily administration, and gives patients 4 treatment-free days every week.<Superscript>1</Superscript></p>
                    </div>
                </div>
            </section>
            <footer className="flex justify-between items-center gap-20 text-1x text-start relative z-10 mt-20">
                <ul>
                    <li>1. EVRENZO EU SmPC, September 2022.</li>
                </ul>
            </footer>
        </motion.article>
    )
}
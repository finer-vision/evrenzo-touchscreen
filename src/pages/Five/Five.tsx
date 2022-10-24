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
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-black p-48 pb-0">
            <header className="flex justify-between text-gray-700">
                <h1 className="text-5x text-primary w-[1640px]">
                Reduce their use of IV iron
                </h1>
                <Disclaimer/>
            </header>
            <section className="flex flex-col items-center gap-20 text-3x -mt-20">
                <div className="flex justify-center items-center w-full">
                    <div className="w-[1688px] flex flex-col grow gap-10">
                        <h2>Fewer NDD patients on EVRENZO were treated with IV iron than those treated with ESA<Superscript>1</Superscript></h2>
                        <img className="w-full" src="./images/5img1.png" alt="" />
                    </div>
                </div>
            </section>
            <footer className="flex justify-between items-center gap-20 text-1x text-start relative z-10 mt-10">
                <ul>
                <li>1. Barratt J et al. Nephrol Dial Transplant. 2021;36(9):1616–1628.</li>
                <li>2. Barratt J et al. Nephrol Dial Transplant. 2021;36(9):1616–1628 (Supplement).</li>
                <li>3. EVRENZO EU SmPC, September 2022.</li>
                </ul>
            </footer>
        </motion.article>
    )
}
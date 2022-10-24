import { motion } from "framer-motion"
import { useContext } from "react"
import SlideContext from "../../contexts/SlideContext"

export default () => {
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-black p-48 pb-12">
            <header className="flex justify-between text-gray-700">
                <h1 className="text-5x text-primary">
                Help patients not on dialysis reach their Hb goals
                </h1>
                <div className="flex flex-col gap-5 text-1x w-[800px] text-left">
                    <p>
                    This information is intended for international audiences.
                    </p>
                    <p>
                    EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE UNITED STATES
                    </p>
                </div>
            </header>
            <section className="flex flex-colitems-center gap-20 text-3x">
                <div className="flex justify-center items-center w-full">
                    <div className="w-[1688px] flex flex-col grow gap-20">
                        <p>Patients treated with EVRENZO achieved and maintained target Hb levels1</p>
                        <img className="w-full" src="./images/4img1.svg" alt="" />
                    </div>
                    <img className="h-[550px] ml-20" src="./images/4img2.svg" alt="" />
                </div>
            </section>
            <footer className="flex justify-between items-center gap-20 text-x text-start font-semibold relative z-10 mt-20">
                <ul>
                    <li>1. EVRENZO EU SmPC, September 2022.</li>
                    <li>2. Barratt J et al. Nephrol Dial Transplant. 2021;36(9):1616–1628.</li>
                </ul>
            </footer>
        </motion.article>
    )
}
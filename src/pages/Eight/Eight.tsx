import { motion } from "framer-motion"
import { useContext } from "react"
import Disclaimer from "../../components/Disclaimer";
import SlideContext from "../../contexts/SlideContext"

export default () => {
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-black p-48 pb-12">
            <header className="flex justify-between text-gray-700">
                <h1 className="text-5x text-primary w-[1700px] flex flex-col">
                    <span>On top of their anaemia.</span>
                    <span>At home with their treatment</span>
                </h1>
                <Disclaimer/>
            </header>
            <section className="flex flex-col items-center grow gap-20 text-3x">
                <div className="flex justify-start items-start w-full mt-20">
                    <div className="w-[1688px] flex flex-col grow gap-20">
                        <h2>EEVRENZO can help adult patients with anaemia of CKD:</h2>
                        <img className="w-[1450px]" src="./images/8img1.png" alt="" />
                    </div>
                    <img className="w-[1450px]" src="./images/8img2.png" alt="" />
                </div>
            </section>
            <footer className="flex justify-between items-center gap-20 text-x text-start relative z-10">
                <ul>
                    <li>1. EVRENZO EU SmPC, September 2022.</li>
                    <li>2. Pollock C et al. Kidney International Reports. 2021;6(4):S108.</li>
                    <li>3. Akizawa T et al. J Am Soc Nephrol. 2020;31(7):1628–1639.</li>
                </ul>
            </footer>
        </motion.article>
    )
}
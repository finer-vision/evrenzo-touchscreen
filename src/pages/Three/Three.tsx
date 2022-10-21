import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useContext } from "react"
import SlideContext from "../../contexts/SlideContext"

export default () => {
    const navigate = useNavigate();
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-black p-48 pb-12">
            <header className="flex justify-between text-gray-700">
                <h1 className="text-5x text-primary">
                A new way of working
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
            <section className="flex flex-col flex-grow items-center gap-20 text-3x">
                <div className="flex justify-between w-full">
                    <div className="w-[1688px] flex flex-col gap-20">
                        <p>EVRENZO harnesses the HIF pathway, mimicking hypoxia1,2</p>
                        <img className="w-full" src="./images/3img1.svg" alt="" />
                        <p>By reversibly inhibiting HIF-PH, EVRENZO stimulates the increase of endogenous EPO levels, regulation of iron transporter proteins and a reduction of hepcidin1,2</p>
                    </div>
                    <div className="flex flex-col flex-grow">
                        <p className="w-9/12">EVRENZO promotes a coordinated erythropoietic response1–3</p>
                        <img className="h-[1200px]" src="./images/3img2.svg" alt="" />
                    </div>
                </div>
            </section>
            <footer className="flex justify-between items-center gap-20 text-x text-start font-semibold relative z-10">
                <ul>
                    <li>1. Del Vecchio L, Locatelli F. Expert Opin Investig Drugs. 2018;27(1):125–133.</li>
                    <li>2. EVRENZO EU SmPC, July 2022.</li>
                    <li>3. Koury MJ, Haase VH. Nat Rev Nephrol. 2015;11:394–410.</li>
                </ul>
            </footer>
        </motion.article>
    )
}
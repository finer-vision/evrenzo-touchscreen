import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useContext } from "react"
import SlideContext from "../../contexts/SlideContext"
import Disclaimer from "../../components/Disclaimer"
import Superscript from "../../components/Superscript"

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
                An innovative way of working
                </h1>
                <Disclaimer/>
            </header>
            <section className="flex flex-col flex-grow items-center gap-20 text-3x">
                <div className="flex justify-between w-full">
                    <div className="w-3/4 flex flex-col gap-20">
                        <h2>EVRENZO harnesses the HIF pathway, mimicking hypoxia<Superscript>1,2</Superscript></h2>
                        <img className="w-full" src="./images/3img1.png" alt="" />
                        <p className="w-[1650px]">By reversibly inhibiting HIF-PH, EVRENZO stimulates the increase of endogenous EPO levels, regulation of iron transporter proteins and a reduction of hepcidin<Superscript>1,2</Superscript></p>
                        <ul className="text-2x">
                            <li>1. Del Vecchio L, Locatelli F. Expert Opin Investig Drugs. 2018;27(1):125–133.</li>
                            <li>2. EVRENZO EU SmPC, September 2022.</li>
                            <li>3. Koury MJ, Haase VH. Nat Rev Nephrol. 2015;11:394–410.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col flex-grow">
                        <h2 className="w-9/12 mb-20">EVRENZO promotes a coordinated erythropoietic response<Superscript>1-3</Superscript></h2>
                        <img className="translate-x-40 h-[1200px]" src="./images/3img2.png" alt="" />
                    </div>
                </div>
            </section>
        </motion.article>
    )
}
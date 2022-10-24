import { useNavigate } from "react-router-dom"
import ButtonStart from "../../components/ButtonStart"
import { AnimateSharedLayout, motion } from "framer-motion"
import { useContext } from "react"
import SlideContext from "../../contexts/SlideContext"
import Box from "./Box"
import Disclaimer from "../../components/Disclaimer"

export default () => {
    const navigate = useNavigate();
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-black p-48 pb-12 text-center font-bold">
            <header className="flex justify-end text-gray-700">
                <h1 
                className="text-5x mr-[235px] text-primary font-bold-ext">
                    Overview of <span className="text-green1">EVRENZO</span>
                </h1>
                <Disclaimer/>
            </header>
            <section className="flex flex-col flex-grow items-center gap-20 text-1x">
                <p className="text-3x w-[1200px] font-bold-ext">Where do you want to explore? Touch a button to find out more</p>
                <div className="flex gap-10">
                    <AnimateSharedLayout>
                        <Box 
                            className="before:bg-green2"
                            to="/3">
                            How EVRENZO works
                        </Box>
                        <Box 
                        className="before:bg-green1"
                        to="/4">
                            EVRENZO helps patients to achieve and maintain their target Hb levels1
                        </Box>
                        <Box 
                        className="before:bg-pink1"
                        to="/5">
                            Less use of IV iron compared with ESA1–3
                        </Box>
                        <Box 
                        className="before:bg-blue1"
                        to="/6">
                            Cardiovascular safety and tolerability profiles1
                        </Box>
                        <Box 
                        className="before:bg-purple1"
                        to="/7">
                            Convenience of three times weekly dosing1,4
                        </Box>
                        <Box 
                        className="before:bg-blue2"
                        to="/8">
                            An oral treatment that’s convenient for patients to take1,4
                        </Box>
                    </AnimateSharedLayout>
                </div>
                <ButtonStart className="before:bg-primary" onClick={() => navigate("/10")}>Check your knowledge</ButtonStart>
            </section>
            <footer className="font-reg flex justify-between items-center gap-20 text-x text-start relative z-10">
                <ul>
                    <li>1. EVRENZO EU SmPC, September 2022.</li>
                    <li>2. Barratt J et al. Nephrol Dial Transplant. 2021;36(9):1616–1628.</li>
                    <li>3. Barratt J et al. Adv Ther. 2021;38:5345–5360.</li>
                    <li>4. Akizawa T et al. J Am Soc Nephrol. 2020;31(7):1628–1639.</li>
                </ul>
                <p className="text-6xl text-gray-700 font-bold-ext w-[1040px]">
                Ask an Astellas representative for more information
                </p>
            </footer>
        </motion.article>
    )
}
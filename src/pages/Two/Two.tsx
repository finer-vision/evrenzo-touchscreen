import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ButtonStart from "../../components/ButtonStart"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import { createContext, useContext } from "react"
import SlideContext from "../../contexts/SlideContext"
import Box from "./Box"

export const currentBoxContext = createContext<[string | null, React.Dispatch<React.SetStateAction<string | null>>]>([null, () => {}])

export default () => {
    const navigate = useNavigate();
    const [slideDirection] = useContext(SlideContext);
    const [currentBox, setCurrentBox] = useState<string | null>(null);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-black p-48 pb-12 text-center">
            <header className="flex justify-end text-gray-700">
                <h1 className="text-5x mr-[430px]">
                    Overview of <span className="text-primary">EVRENZO</span>
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
            <section className="flex flex-col flex-grow items-center gap-20 text-1x">
                <p className="text-3x w-[1000px]">Where do you want to explore? Touch a button to find out more</p>
                <div className="flex gap-10">
                    <AnimateSharedLayout>
                        <currentBoxContext.Provider value={[currentBox, setCurrentBox]}>
                        <Box 
                            className="before:bg-green2"
                            title="How EVRENZO works">

                        </Box>
                        <Box 
                        className="before:bg-green1"
                        title="EVRENZO helps patients to achieve and maintain their target Hb levels1">

                        </Box>
                        <Box 
                        className="before:bg-pink1"
                        title="Less use of IV iron compared with ESA1–3">

                        </Box>
                        <Box 
                        className="before:bg-blue1"
                        title="Cardiovascular safety and tolerability profiles1">

                        </Box>
                        <Box 
                        className="before:bg-purple1"
                        title="Convenience of three times weekly dosing1,4">

                        </Box>
                        <Box 
                        className="before:bg-blue2"
                        title="An oral treatment that’s convenient for patients to take1,4">

                        </Box>
                        </currentBoxContext.Provider>
                    </AnimateSharedLayout>
                </div>
                <ButtonStart onClick={() => navigate("/3")}>Check your knowledge</ButtonStart>
                <AnimatePresence>
                    {currentBox && <motion.div 
                    onClick={() => setCurrentBox(null)}
                    initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                    transition={{duration: 0.3}}
                    className="w-screen h-screen absolute top-0 left-0 bg-black/50"></motion.div>}
                </AnimatePresence>
            </section>
            <footer className="flex justify-between items-center gap-20 text-x text-start font-semibold relative z-10">
                <ul>
                    <li>1. EVRENZO EU SmPC, July 2022.</li>
                    <li>2. Barratt J et al. Nephrol Dial Transplant. 2021;36(9):1616–1628.</li>
                    <li>3. Barratt J et al. Adv Ther. 2021;38:5345–5360.</li>
                    <li>4. Akizawa T et al. J Am Soc Nephrol. 2020;31(7):1628–1639.</li>
                </ul>
                <p className="text-6xl text-gray-700">
                Ask an Astellas representative for more information
                </p>
            </footer>
        </motion.article>
    )
}
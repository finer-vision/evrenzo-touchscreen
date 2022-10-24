import { motion } from "framer-motion"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ButtonStart from "../../components/ButtonStart"
import Disclaimer from "../../components/Disclaimer"
import SlideContext, { left } from "../../contexts/SlideContext"
import useLocalStorage from "../../hooks/useLocalStorage"

export default () => {
    const [slideDirection, setSlideDirection] = useContext(SlideContext)
    const navigate = useNavigate()
    const [score, setScore] = useLocalStorage('score', 0)
    
    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/bg.png)`}}
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-black p-48 pb-0">
            <header className="flex justify-between text-gray-700">
                <h1 className="text-5x text-primary w-[1640px]">
                Knowledge check
                </h1>
                <Disclaimer/>
            </header>
            <section className="flex flex-col items-center justify-center gap-20 text-3x grow">
                <div className="flex justify-center items-center w-full">
                    <div className="flex flex-col grow gap-10">
                        <p className="font-bold-ext text-5x w-[1406px] leading-[100px]">
                            You answered {score} out of 6 questions correctly.
                        </p>
                        <p>Thank you for taking part in this knowledge check. </p>
                    </div>
                    <div className="max-w-[1612px] flex flex-col grow gap-10">
                        <img className="mt-20" src="./images/8img2.png" alt="" />
                    </div>
                </div>
                <ButtonStart
                className="mt-40"
                onClick={() => {
                    setSlideDirection(left)
                    navigate("/")
                }}>End</ButtonStart>
            </section>
            <footer className="flex justify-between items-center gap-20 text-1x text-start relative z-10 mt-10">
                <img className="w-[1048px] mb-20" src="./images/11img1.png" alt="" />
            </footer>
        </motion.article>
    )
}
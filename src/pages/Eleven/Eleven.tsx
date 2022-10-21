import { motion } from "framer-motion"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ButtonStart from "../../components/ButtonStart"
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
        className="absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-black p-48 pb-12">
            <img src="./images/11.svg" alt="" />
            <p className="absolute top-[52rem] left-[17rem] text-8xl w-[1600px]">You answered {score} out of 6 questions correctly.</p>
            <ButtonStart className="absolute bottom-96 left-2/4 -translate-x-2/4"
            onClick={() => {
                setSlideDirection(left)
                navigate("/")
            }}>End</ButtonStart>
        </motion.article>
    )
}
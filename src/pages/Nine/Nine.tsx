import { motion } from "framer-motion"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import ButtonStart from "../../components/ButtonStart";
import SlideContext from "../../contexts/SlideContext"

export default () => {
    const [slideDirection] = useContext(SlideContext);
    const navigate = useNavigate();
    
    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/bg.png)`}}
        className="absolute flex items-center flex-col w-full h-full bg-cover bg-fixed bg-center text-black p-48 pb-12">
            <img className="w-full" src="./images/9header.svg" alt="" />
            <div className="text-2xx text-center w-[1930px] gap-20 h-full -translate-y-40 flex flex-col items-center justify-center">
                <h1 className="text-5x">Are you on top of EVRENZO?</h1>
                <p>Take part in the EVRENZO knowledge check – a brief series of questions to help you assess your understanding of this innovative treatment.</p>
                <p>The answers to these questions can be found in the touchscreen presentation. There is no prize for answering the knowledge check questions.</p>
                <ButtonStart className="mt-10" onClick={() => (navigate('/10'))}/>
            </div>
        </motion.article>
    )
}
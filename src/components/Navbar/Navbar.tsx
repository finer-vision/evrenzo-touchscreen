import ButtonNavbar from "./ButtonNavbar"
import { useNavigate, useParams } from "react-router-dom"
import { createContext, useContext, useState } from "react"
import SlideContext, { left, right } from "../../contexts/SlideContext"
import { motion } from "framer-motion"
import { AnswerContext, QuestionContext } from "../../pages/Pages"
import questions from "../../pages/Ten/questions.json"

export default () => {
    const [slideDirection, setSlideDirection] = useContext(SlideContext)
    const navigate = useNavigate()
    const { page } = useParams()
    const [question, setQuestion] = useContext(QuestionContext)
    const [answer, setAnswer] = useContext(AnswerContext)

    const isFirstPage = page === "0"
    const isLastPage = page === "10"

    return (
        <motion.nav
        exit={{ opacity: 0}}
        className="absolute bottom-0 right-20 flex gap-2 z-50 h-[200px]">
            {page !== "11" && page !== "10" && !isFirstPage && <ButtonNavbar onClick={() => {
                setSlideDirection(left)
                setTimeout(() => {
                    navigate(`/${Number(page!)-1}`)
                }, 100);
            }}>
                <img className="h-[70px]" src="./images/navbar-left.svg" alt="left" />
            </ButtonNavbar>}
            {page !== "11" && page !== "10" && !isLastPage && <ButtonNavbar onClick={() => {
                setSlideDirection(right)
                setTimeout(() => {
                    navigate(`/${Number(page!)+1}`)
                }, 100);
            }}>
                <img className="h-[70px]" src="./images/navbar-right.svg" alt="right" />
            </ButtonNavbar>}
            {(page === "10" && answer !== null) && <ButtonNavbar onClick={() => {
                if(question + 1 !== questions.length) {
                    setAnswer(null)
                    setQuestion(question+1)
                } else {
                    setSlideDirection(right)
                    setTimeout(() => {
                        navigate(`/${Number(page!)+1}`)
                    }, 100);
                }
            }}>
                <img className="h-[70px]" src="./images/navbar-right.svg" alt="right" />
            </ButtonNavbar>}
            <ButtonNavbar onClick={() => {
                setSlideDirection(left)
                setTimeout(() => {
                    navigate(`/1`)
                }, 100);
            }}>
                <img className="h-[70px]" src="./images/navbar-home.svg" alt="home" />
            </ButtonNavbar>
        </motion.nav>
    )
}
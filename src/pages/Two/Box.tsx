import { motion } from "framer-motion"
import { useContext } from "react"
import { currentBoxContext } from "./Two"

interface BoxProps {
    title: string,
    children?: React.ReactNode,
    className?: string,
    line?: 'bottom' | 'right' | 'bottom-right'
}

export default ({children, className, title, line}: BoxProps) => {
    const [currentBox, setCurrentBox] = useContext(currentBoxContext);
    const show = title === currentBox;

    return (
        <>
            <motion.div 
            onClick={() => {
                setCurrentBox(title)
            }}
            layout
            animate={show 
                ? {
                width: 1980,
                height: 1210,
                zIndex: 50
            }
                : {
                width: 512,
                height: 720,
                transitionEnd: {
                    zIndex: 0,
                },
            }}
            transition={{
                duration: .3
            }}
            className={`${show ? 'absolute z-50 left-[24%] top-[20%] border-bottom-right-cut2' : 'relative left-[unset] max-w-[512px] max-h-[720px] border-bottom-right-cut'} p-16 text-white aspect-square ${className || 'after:bg-white'}`}>
                {!show && 
                <>
                    <motion.div 
                    initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                    className="w-full h-full flex items-center justify-center z-10 relative">
                        <h3 className="text-white text-xx">{title}</h3>
                    </motion.div>
                    {line === "bottom" && <Line className="-bottom-20 left-2/4 -translate-x-2/4 h-20 w-1"/>}
                    {line === "right" && <Line className="-right-20 top-2/4 -translate-y-2/4 h-1 w-20"/>}
                    {line === "bottom-right" && <Line className="-bottom-[4.9rem] right-0 -translate-x-2/4 h-40 w-1 -rotate-45 z-0"/>}
                </>}
                {show && <>
                    <button 
                        onClick={(e) => {e.stopPropagation(); setCurrentBox(null)}}
                        className="absolute top-10 right-10 z-20">
                        <img src="./images/close.svg" alt="close" />
                    </button>
                    <div className="w-full h-full flex flex-col gap-5 items-center justify-center z-10 relative">
                        <motion.h3 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="text-5xl">{title}</motion.h3>
                        <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                        className="max-w-[523px] text-center z-10 relative">
                            {children}
                        </motion.p>
                    </div>
                </>}
            </motion.div>
            {show && <div></div>}

        </>
    )
}


const Line = ({className}: {className: string} ) => {
    return (
        <motion.div 
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.3
                }
            }} 
            className={`absolute bg-black z-10 ${className}`}/>
    )
}
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

interface BoxProps {
    children?: React.ReactNode,
    className?: string,
    to: string
}

export default ({children, className, to}: BoxProps) => {
    const navigate = useNavigate()

    return (
        <>
            <motion.div 
            onClick={() => {
                navigate(to)
            }}
            className={`relative flex items-center justify-center left-[unset] max-w-[512px] min-h-[720px] border-bottom-right-cut p-16 text-white aspect-square ${className || 'after:bg-white'}`}>
                <span
                className="relative z-50 text-2xx text-start leading-[3.3rem]">
                    {children}
                </span>
            </motion.div>
        </>
    )
}
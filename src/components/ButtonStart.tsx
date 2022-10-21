import { useContext } from "react";
import SlideContext, { right } from "../contexts/SlideContext";

export default ({onClick, className, children}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    const [slideDirection, setSlideDirection] = useContext(SlideContext);

    return (
        <div className={`flex flex-col items-center gap-20 ${className}`}>
            <button onClick={(e) => {
                setSlideDirection(right)
                setTimeout(() => {
                    onClick!(e)
                }, 100);
            }}  className="relative text-white">
                <div className="bg-primary w-[1152px] h-48 -skew-x-[20deg]"></div>
                <span className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-6xl w-full">{children ? children : "Start"}</span>
            </button>
        </div>
    )
}
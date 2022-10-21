export default ({onClick, children}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    return (
        <div className="flex flex-col items-center gap-10 h-[200px]">
            <button onClick={onClick}  className="relative text-white">
                <div className="bg-[#004c2f] aspect-square h-[200px] -skew-x-[20deg]"></div>
                <span className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-3xl">{children}</span>
            </button>
        </div>
    )
}
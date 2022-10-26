export default ({children, className}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => {
    return <span className={"inline-block text-4xl -translate-y-5 " + className}>{children}</span>
}
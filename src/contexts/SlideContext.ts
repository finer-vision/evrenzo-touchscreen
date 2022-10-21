import { createContext } from "react";

export const right = {
    initial: {
        x: "100vw",
        transition: {
            duration: 0.4
        }
    },
    animate: {
        x: "0",
        transition: {
            duration: 0.4
        }
    },
    exit: {
        x: "-100vw",
        transition: {
            duration: 0.4
        }
    },
}

export const left = {
    initial: {
        x: "-100vw",
        transition: {
            duration: 0.4
        }
    },
    animate: {
        x: "0",
        transition: {
            duration: 0.4
        }
    },
    exit: {
        x: "100vw",
        transition: {
            duration: 0.4
        }
    },
}

export default createContext<any>(null);
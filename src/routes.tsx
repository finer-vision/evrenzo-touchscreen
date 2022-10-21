import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import SlideContext, { left } from "./contexts/SlideContext";
import One from "./pages/One/One";
import Pages from "./pages/Pages";

export default () => {
  const location = useLocation();
  const [slideDirection, setSlideDirection] = useState(left)

  return (
    <SlideContext.Provider value={[slideDirection, setSlideDirection]}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<One/>}/>
          <Route path="/:page" element={<Pages/>}/>
        </Routes>
      </AnimatePresence>
    </SlideContext.Provider>
  )
}
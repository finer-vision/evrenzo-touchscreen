import { useNavigate } from "react-router-dom"
import ButtonStart from "../../components/ButtonStart"
import { motion } from "framer-motion"
import { useContext } from "react"
import SlideContext from "../../contexts/SlideContext"

export default () => {
    const navigate = useNavigate();
    const [slideDirection] = useContext(SlideContext);

    return (
        <motion.article 
        variants={slideDirection} exit="exit" animate="animate" initial="initial"
        style={{ backgroundImage: `url(./images/ss.png)`}}
        className="bottom-mask absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-white p-48 pb-12 text-center">
            <header className="flex justify-between text-gray-700">
                <div className="flex flex-col text-left gap-14 w-[500px]">
                    <img 
                        className="w-[614px] h-[200px]"
                        src="./images/Logo2.svg" alt="logo" />
                    <p className="text-1x">
                        This information is intended for international audiences.
                    </p>
                    <p className="text-2x">
                        EVRENZO (roxadustat) IS NOT APPROVED FOR USE IN THE UNITED STATES
                    </p>
                </div>
                <p className="text-4x text-center w-[1900px]">
                    EVRENZOTM is a first-in-class HIF-PHI1 that harnesses the HIF pathway2,3 to mimic the effects of hypoxia3 as at high altitude
                </p>
                <img 
                    className="w-[614px] h-[200px]"
                    src="./images/Logo3.svg" alt="logo" />
            </header>
            <section className="flex flex-col flex-grow justify-end items-center gap-10 text-1x">
                <div>
                <p>This information is intended for international Healthcare Professionals and was created by Astellas Pharma Inc.</p>
                <p>EVRENZO (roxadustat) has marketing authorisations in Japan, the European Union (EU)
and the United Kingdom (UK), Turkey, Russia, South Africa, Egypt, UAE and Kuwait.</p>
                </div>
<p>By clicking “start” you confirm that you are a Healthcare Professional</p>
                <ButtonStart onClick={() => navigate("/2")}/>
            </section>
            <footer className="flex flex-col justify-end gap-20 text-1x text-start font-semibold relative z-10">
                <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-5">
                        <p>This medication is subject to additional monitoring.</p>
                        <p>EVRENZO™ is only available by prescription.</p>
                        <ul>
                            <li>1. Sanghani NS, Haase VH. Adv Chronic Kidney Dis. 2019;26(4):253–266.</li>
                            <li>2. EVRENZO EU SmPC, July 2022.</li>
                            <li>3. Del Vecchio L, LocateIIi F. Expert Opin Investig Drugs. 2018;27(1):125–133.</li>
                        </ul>
                        <div className="text-x">
                            <p>Astellas and the flying star logo are registered trademarks of Astellas Pharma Inc.</p>
                            <p>© October 2022 Astellas Pharma Inc. or its affiliates. </p>
                            <p>All trademarks are the property of their respective owners.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-[1500px]">
                        <p>
                        In the EU, EVRENZO (roxadustat) is indicated for treatment of adult patients with symptomatic anaemia associated with chronic kidney disease (CKD).2
                        </p>
                        <p>
                        Prescribing information may vary. Please refer to your local prescribing information.
                        </p>
                        <p>
                        EVZ-NL-EVZ-2022-00019
Date of preparation: October 2022    Date of expiry: October 2024
                        </p>
                    </div>
                </div>
            </footer>
        </motion.article>
    )
}
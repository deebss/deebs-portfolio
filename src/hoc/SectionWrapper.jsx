import {staggerContainer} from "../utils/motion.js";
import {styles} from "../styles.js";
import {motion} from "framer-motion";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section variants={staggerContainer()} initial={'hidden'} whileInView={'show'} viewPort={{ once: true, amount: 0.25 }} className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <span className={'hash-span'} id={idName}></span>
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper

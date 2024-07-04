import React from 'react'
import PortCard from '../PortfolioCard/PortCard'
import cardDataPort from "../../Components/PortfolioCard/cardDataPort";
import IntroServicesCmp from '../IntroServicesCmp/IntroServices';
import Button from '../ButtonNew/Button';
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1
    }
}



const ServiceSection = () => {
    return (
        <div className="serviceIntro landingContainer  min-h-[100vh] w-[100%] py-[20px] flex flex-col gap-[30px]">
            <IntroServicesCmp />
            <motion.div whileInView="visible" initial="hidden" variants={container} className="flex justify-evenly flex-wrap items-center">
                {cardDataPort.map((data) => (
                    <motion.div variants={item}>
                        <PortCard data={data} />
                    </motion.div>
                ))}
            </motion.div>
            <div className="flex justify-center">
                <Button text=" More Services" link="/services" />
            </div>
        </div>

    )
}

export default ServiceSection
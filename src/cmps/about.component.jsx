import { motion, useAnimation, Variants } from "framer-motion"

const textAnimate = {
    offscreen: { y: 200, opacity: 0 },
    onscreen: {
        y: 0,
        transition: { type: "spring", bounce: 0.3, duration: 3 }, opacity: 1
    }
}

export function About() {

    return (
        <article>
            <div className="image-container">
                <img src="https://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1674418833/portrait/Yariv_fozoql.jpg" alt="" />
            </div>
            <motion.div
                className="text-container"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:false,amount:0.2}}
                transition={{staggerChildren:0.5}}
                >
                <motion.div
                    className="text-container"
                    variants={textAnimate}
                    style={{marginBottom:"25px"}}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut placeat, nemo ad nisi adipisci magnam. Aliquam dignissimos esse doloribus, nam veniam nostrum delectus in consectetur eveniet aspernatur pariatur quibusdam enim!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut placeat, nemo ad nisi adipisci magnam. Aliquam dignissimos esse doloribus, nam veniam nostrum delectus in consectetur eveniet aspernatur pariatur quibusdam enim!
                </motion.div>
                <motion.div
                    className="text-container"
                    variants={textAnimate}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut placeat, nemo ad nisi adipisci magnam. Aliquam dignissimos esse doloribus, nam veniam nostrum delectus in consectetur eveniet aspernatur pariatur quibusdam enim!
                </motion.div>
            </motion.div>
            {/* <div className="text-container">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut placeat, nemo ad nisi adipisci magnam. Aliquam dignissimos esse doloribus, nam veniam nostrum delectus in consectetur eveniet aspernatur pariatur quibusdam enim!</div> */}
        </article>
    )

}
import { motion, useAnimation, Variants, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { useState } from "react"

const textAnimate = {
    offscreen: { y: 200, opacity: 0 },
    onscreen: {
        y: 0,
        transition: { type: "spring", bounce: 0.3, duration: 3 }, opacity: 1
    }
}



export function About() {

    const [currentImg, setCurrentImg] = useState("https://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1674418833/portrait/Yariv_fozoql.jpg")
    const [imgInterval, setImgInterval] = useState(null)
    const [srcImgsCurrentIdx, setSrcImgsCurrentIdx] = useState(0)
    const [isHover, setIsHover] = useState(false)


    let interval
    const srcImgs = ["http://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379708/link-imgs/%D7%9E%D7%90%D7%99_%D7%95%D7%99%D7%90%D7%99%D7%A8-155_rslqdw.jpg",
        "https://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379204/carousel-imgs/%D7%93%D7%99%D7%9F_%D7%95%D7%90%D7%91%D7%99%D7%91_%D7%94%D7%96%D7%95%D7%92%D7%99%D7%95%D7%AA-143_ui1gck.jpg",
        "https://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379186/carousel-imgs/%D7%A1%D7%91%D7%99%D7%95%D7%9F_%D7%95%D7%98%D7%9C-200_t2vshg.jpg"]

    const setImgIndx = () => {
        if (!isHover) return
        interval = setInterval(() => {
            if (srcImgsCurrentIdx === srcImgs.length - 1) {
                setSrcImgsCurrentIdx(0)
                setCurrentImg(srcImgs[srcImgsCurrentIdx])
                return
            }
            // imageRef.current.src = srcImgs[(srcImgsCurrentIdx)]
            setSrcImgsCurrentIdx(srcImgsCurrentIdx => srcImgsCurrentIdx + 1)
            setCurrentImg(srcImgs[srcImgsCurrentIdx])

            // if (srcImgsCurrentIdx === srcImgs.length - 1) return setSrcImgsCurrentIdx(0)
        }, 2500)
        console.log(srcImgsCurrentIdx);
    }

    useEffect(() => {
        console.log(srcImgsCurrentIdx);
        setImgIndx()

        return () => { clearInterval(interval) }
        // const interval = setInterval((srcImgsCurrentIdx) => {
        //     if (!isHover) return
        //     console.log('ssss');
        //         // console.log(srcImgsCurrentIdx);
        //         setSrcImgsCurrentIdx(srcImgsCurrentIdx => srcImgsCurrentIdx)
        //     // imageRef.current.src = srcImgs[(srcImgsCurrentIdx)]
        //     setImgIndx()
        //     // if (srcImgsCurrentIdx === srcImgs.length - 1) return setSrcImgsCurrentIdx(0)
        // }, 2000)
    })
    // const changeImages = () => {
    //     console.log('ssssssssss');
    //     // let srcImgs = ["http://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379708/link-imgs/%D7%9E%D7%90%D7%99_%D7%95%D7%99%D7%90%D7%99%D7%A8-155_rslqdw.jpg",
    //     //     "https://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379204/carousel-imgs/%D7%93%D7%99%D7%9F_%D7%95%D7%90%D7%91%D7%99%D7%91_%D7%94%D7%96%D7%95%D7%92%D7%99%D7%95%D7%AA-143_ui1gck.jpg",
    //     //     "https://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379186/carousel-imgs/%D7%A1%D7%91%D7%99%D7%95%D7%9F_%D7%95%D7%98%D7%9C-200_t2vshg.jpg"]
    //     setInterval(() => {
    //         let srcImgs = ["http://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379708/link-imgs/%D7%9E%D7%90%D7%99_%D7%95%D7%99%D7%90%D7%99%D7%A8-155_rslqdw.jpg",
    //             "https://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379204/carousel-imgs/%D7%93%D7%99%D7%9F_%D7%95%D7%90%D7%91%D7%99%D7%91_%D7%94%D7%96%D7%95%D7%92%D7%99%D7%95%D7%AA-143_ui1gck.jpg",
    //             "https://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379186/carousel-imgs/%D7%A1%D7%91%D7%99%D7%95%D7%9F_%D7%95%D7%98%D7%9C-200_t2vshg.jpg"]
    //         console.log('!!!!!!');
    //         imageRef.current.src = srcImgs[(srcImgsCurrentIdx)]
    //         setImgIndx()
    //         // if (srcImgsCurrentIdx === srcImgs.length - 1) return setSrcImgsCurrentIdx(0)
    //         console.log(srcImgsCurrentIdx);
    //     }, 2000)
    //     // setImgInterval(imgInterval)
    // }

    return (
        <article>
            <div className="image-container">
              <AnimatePresence >
                    <motion.img
                        key={currentImg}
                        src={currentImg}
                        initial={{ x: 15, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x:-50, opacity: 0, transition: { duration: 0.3 } }}
                        transition={{ delay: 0.4, duration: .8 }}
                        onMouseOver={() => { setIsHover(true) }} onMouseLeave={() => setIsHover(false)}
                    />
                    {/* <img onMouseOver={() => { setIsHover(true) }} onMouseLeave={() => setIsHover(false)} src={currentImg} alt="" /> */}
                </AnimatePresence>
            </div>
            <motion.div
                className="text-container"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ staggerChildren: 0.5 }}
            >
                <motion.div
                    className="text-container"
                    variants={textAnimate}
                    style={{ marginBottom: "25px" }}
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
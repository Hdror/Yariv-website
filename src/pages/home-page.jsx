import { useEffect, useState } from "react"

import { getAllImages } from "../services/cloudinary/images.service";
import { ImgCarousel } from "../cmps/carousel"
import { About } from "../cmps/about.component";

import spinner from "../assets/svg/spinner.svg"

export function HomePage() {

    const [imgs, setImages] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         // await getAllImages()
    //         setImages(await getAllImages())
    //     })()
    // }, [])

    return (<section className="home-page">
        {/* {!imgs.length &&
            <img src={spinner} alt="" />
        } */}
        <div className="carousel-container">
            <ImgCarousel />
        </div>
        <About />
    </section>
    )
}
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export function ImgCarousel() {

    const items = [
        <img style={{ height: "600px", objectFit: "cover" }} src="http://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379708/link-imgs/%D7%9E%D7%90%D7%99_%D7%95%D7%99%D7%90%D7%99%D7%A8-155_rslqdw.jpg" alt='' />,
        <img style={{ height: "600px", objectFit: "cover" }} src="https://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379204/carousel-imgs/%D7%93%D7%99%D7%9F_%D7%95%D7%90%D7%91%D7%99%D7%91_%D7%94%D7%96%D7%95%D7%92%D7%99%D7%95%D7%AA-143_ui1gck.jpg" alt='' />,
        <img style={{ height: "600px", objectFit: "cover" }} src="https://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379186/carousel-imgs/%D7%A1%D7%91%D7%99%D7%95%D7%9F_%D7%95%D7%98%D7%9C-200_t2vshg.jpg" alt='' />,
        <img style={{ height: "600px", objectFit: "cover" }} src="https://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379185/carousel-imgs/%D7%A6%D7%99%D7%9C%D7%95%D7%9E%D7%99_%D7%94%D7%96%D7%95%D7%92%D7%99%D7%95%D7%AA-16_t0fnj3.jpg" alt='' />,
        <img style={{ height: "600px", objectFit: "cover" }} src="https://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379185/carousel-imgs/%D7%9E%D7%90%D7%99_%D7%95%D7%92%D7%99%D7%9017_fo7rff.jpg" alt='' />,
        <img style={{ height: "600px", objectFit: "cover" }} src="https://res.cloudinary.com/dqihtdtoa/image/upload/c_crop,g_auto:faces,h_3000,w_6000/v1673379185/carousel-imgs/%D7%93%D7%99%D7%9F_%D7%95%D7%90%D7%91%D7%99%D7%91_%D7%94%D7%96%D7%95%D7%92%D7%99%D7%95%D7%AA-69_tw3kzz.jpg" alt='' />,
    ]

    return (
        <Carousel style={{ borderRadius: "10px" }} autoPlay={true}
            activeIndicatorIconButtonProps={{
                style: { color: 'white' }
            }}>
            {items.map((item, idx) => <Item key={idx} item={item} />)}
        </Carousel>
    )

}
function Item(props) {
    return (
        <Paper>
            {props.item}
        </Paper>
    )
}

import Slider from "react-slick";
import Slide from "./Slide";
import projects from "config/projects"
const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return <section id="main-carousel">
        <Slider {...settings}>
            {projects.map((p, idx) => <Slide
                key={idx}
                {...p}
            />)}
        </Slider>
    </section>
}
export default Carousel;
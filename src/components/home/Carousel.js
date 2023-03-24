import Slider from "react-slick";
import proj1 from "assets/files/projects/proj1.png";
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
            <div className="carousel-item">
                <img
                    src={proj1}
                    alt="project 1"
                />
            </div>
            <div className="carousel-item">
                <img
                    src={proj1}
                    alt="project 2"
                />
            </div>
        </Slider>
    </section>
}
export default Carousel;
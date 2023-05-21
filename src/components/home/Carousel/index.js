import Slider from "react-slick";
import proj1 from "assets/files/projects/research-1.png";
import Slide from "./Slide";

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
    const projects = [
        {
            name: "ریسرچ",
            tags: ["تصمیم یار بورس", "تیمی", "شرکت آسا"],
            link: "https://research.agah.com/",
            img: proj1
        },
        // {
        //     name: "هیلاپی",
        //     tags: ["پرداخت یار", "تیمی", "شرکت هیلاوس"],
        //     link: "https://hillapay.ir/"
        // }
    ];
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
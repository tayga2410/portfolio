import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./portfolio.css";
import internship from "../../img/internship.png";
import lifetour from "../../img/lifetour.png";
import fitness from "../../img/fitness.png";
import drink2go from "../../img/drink2go.png";
import sedona from "../../img/sedona.png";

export default function PortfolioSection() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Portfolio</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
            <h3 className="portfolio__swiper-title">Internship Project</h3>
          <a
            href="https://tayga2410.github.io/internship-project/"
            target="_blank"
          >
            <img
              className="portfolio__image"
              src={internship}
              alt="internship project"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <h3 className="portfolio__swiper-title">Lifetour Project</h3>
          <a
            href="https://tayga2410.github.io/lifetour-project/"
            target="_blank"
          >
            <img
              className="portfolio__image"
              src={lifetour}
              alt="tour company project"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <h3 className="portfolio__swiper-title">Fitness Project</h3>
          <a
            href="https://tayga2410.github.io/fitness-project/"
            target="_blank"
          >
            <img
              className="portfolio__image"
              src={fitness}
              alt="fitness project"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <h3 className="portfolio__swiper-title">Drink2go Project</h3>
          <a
            href="https://tayga2410.github.io/drink2go-project/"
            target="_blank"
          >
            <img
              className="portfolio__image"
              src={drink2go}
              alt="coffeeshop project"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <h3 className="portfolio__swiper-title">Sedona Project</h3>
          <a href="https://tayga2410.github.io/sedona-project/" target="_blank">
            <img
              className="portfolio__image"
              src={sedona}
              alt="hotel project"
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "./portfolio.css";
import internship from "../../img/internship.png";
import lifetour from "../../img/lifetour.png";
import fitness from "../../img/fitness.png";
import drink2go from "../../img/drink2go.png";
import sedona from "../../img/sedona.png";
import { useTranslation } from "react-i18next";

export default function PortfolioSection() {
  const { t } = useTranslation()

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">{t("Portfolio")}</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
            <h3 className="portfolio__swiper-title">{t("Internship Project")}</h3>
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
        <h3 className="portfolio__swiper-title">{t("Lifetour Project")}</h3>
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
        <h3 className="portfolio__swiper-title">{t("Fitness Project")}</h3>
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
        <h3 className="portfolio__swiper-title">{t("Drink2go Project")}</h3>
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
        <h3 className="portfolio__swiper-title">{t("Sedona Project")}</h3>
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

import { ClientItem } from "./ClientItem";

export const Client = () => {
  return (
    <>
      <section id="clients" className="clients section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
            <script type="application/json" className="swiper-config">
              {`{
                    "loop": true,
                    "speed": 600,
                    "autoplay": {
                      "delay": 5000
                    },
                    "slidesPerView": "auto",
                    "pagination": {
                      "el": ".swiper-pagination",
                      "type": "bullets",
                      "clickable": true
                    },
                    "breakpoints": {
                      "320": {
                        "slidesPerView": 2,
                        "spaceBetween": 40
                      },
                      "480": {
                        "slidesPerView": 3,
                        "spaceBetween": 60
                      },
                      "640": {
                        "slidesPerView": 4,
                        "spaceBetween": 80
                      },
                      "992": {
                        "slidesPerView": 6,
                        "spaceBetween": 120
                      }
                    }
                  }`}
            </script>
            <div className="swiper-wrapper align-items-center">
              {/* Client Item */}
              <ClientItem />
              <ClientItem />
              <ClientItem />
              <ClientItem />
              <ClientItem />
              <ClientItem />
              {/* End Client Item */}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};
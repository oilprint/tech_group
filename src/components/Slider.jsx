import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { decor } from '../assets/icons';

const Slider = ({ testimonials }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={true}
        navigation={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper max-w-full md:pt-[30px] pt-0 sm:mt-0 -mt-5 ">
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={`card flex-1 flex flex-col justify-between items-center px-10 py-[60px] mx-auto `}>
              <blockquote className="flex flex-col justify-between h-full">
                <div>
                  <img className="mb-10" src={decor} alt="icon" width={42} height={27} />
                  <p className="mb-10 leading-[1.8] text-lg">{item.text}</p>
                </div>
                <div className="flex gap-4 flex-start">
                  <img
                    className="block rounded-full object-cover w-[64px] h-[64px]  border-2 border-accent"
                    src={item.userPhoto}
                    alt={item.studentName}
                    width={64}
                    height={64}
                  />
                  <div>
                    <p className="text-2xl mb-1">{item.studentName}</p>
                    <p className="opacity-50">{item.course}</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;

import styled from "styled-components";
import ProjectCard from "../Components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
import "./swiper.scss";

export default function Projects() {
  return (
    <StyledMain>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={100}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        // effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: false,
        // }}
        rewind={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
      </Swiper>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  position: relative;
  z-index: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--light-color);
  box-sizing: border-box;
  border-left: 6px solid var(--dark-color);
  border-right: 6px solid var(--dark-color);
`;

// External Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from "@mui/material/Stack";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Components
import ProjectItem from "../projectItem";
import InnerTitle from "../InnerTitle";
// Image
import dots from '../../../public/images/dot-corner.png'
import GlobalBtn from "../GlobalBtn";


const ProjectSec = ({ locale }) => {
    const options = {
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        dir: locale === 'en' ? "ltr" : "rtl",
        pagination: {
            clickable: true
        },
        modules: [Navigation],
        navigation:{
            clickable: true,
        },
        loop: true,
    }

    return (
        <Box pt={10} pb={10} className="project-setion" sx={{ backgroundImage: `url(${dots.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right' }}>
            <Container>
                <InnerTitle title="Featured Projects" align="left" />

                <Swiper className="newSwiper" style={{ marginBottom: '30px' }} {...options}>
                    <SwiperSlide>
                        <ProjectItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectItem />
                    </SwiperSlide>
                </Swiper>

                <Stack display="block" textAlign="center">
                    <GlobalBtn variant="contained" href="/" title="View All Projects" />
                </Stack>
            </Container>
        </Box>
    )
}
export default ProjectSec;
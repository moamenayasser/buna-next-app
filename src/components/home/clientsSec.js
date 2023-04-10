// External Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// MUI
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
// Internal Imports
import Image from "next/image";
import Link from "next/link";


const clientsImg = [
    {
        id: 1,
        img: "/images/clients/baytur.webp",
        name: "Clients",
    },
    {
        id: 2,
        img: "/images/clients/aou.webp",
        name: "Clients",
    },
    {
        id: 3,
        img: "/images/clients/hec.webp",
        name: "Clients",
    },
    {
        id: 5,
        img: "/images/clients/dac.webp",
        name: "Clients",
    },
    {
        id: 6,
        img: "/images/clients/buna.webp",
        name: "Clients",
    },
    {
        id: 7,
        img: "/images/clients/cdms.webp",
        name: "Clients",
    },
    {
        id: 8,
        img: "/images/clients/sumou.webp",
        name: "Clients",
    },
];

const ClientsSec = ({ locale }) => {
    const options = {
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
        // loop: {true},
        modules: [Autoplay, Navigation],
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,

        },
        dir: locale === 'en' ? "ltr" : "rtl",
    }

    return (
        <Box pt={5} pb={2} bgcolor="#fff" position="relative" zIndex={9} margin="0 auto 0px" sx={{
            "&:before": {
                position: 'absolute',
                content: '""',
                width: '100%',
                height: '50%',
                left: 0,
                top: 0,
                backgroundColor: '#f5f5f5',
            },
            "&:after": {
                position: 'absolute',
                content: '""',
                width: '100%',
                height: '50%',
                left: 0,
                bottom: 0,
                backgroundColor: '#000',
            }
        }}>
            <div style={{ backgroundColor: "#fff" ,width:"80%", zIndex: 99, position: 'relative', padding: '35px 0 10px', margin: 'auto' }}>
                <Swiper className="newSwiper" style={{ marginBottom: '30px' }} {...options}>
                    {clientsImg?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link href="/">
                                {/* <Box sx={{ "& img":{filter: 'grayscale(1)', transition: '.5s ease'}, "&:hover":{ "& img":{filter: 'grayscale(0)'}}}}></Box> */}
                                <Box>
                                    <div className="card-img" style={{ marginTop: '15px', width: '130px', height: '80px', margin: 'auto' }}>
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            width={150}
                                            height={100}
                                            style={{
                                                objectFit: "contain",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </div>
                                </Box>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Box>
    );
};
export default ClientsSec;
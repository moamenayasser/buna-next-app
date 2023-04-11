// Internal Imports
import Image from "next/image";
// MUI
import { Box, Container, Typography, styled } from "@mui/material";
// Components
import InnerTitle from "../InnerTitle";
import GlobalBtn from "../GlobalBtn";
// Image
import banner from '/public/images/03.jpg'

const CrossedSec = styled(Box)(({ theme }) => ({
    "& figure": {
        width: '66.666667%',
        height: '500px',
        marginLeft: 0,
        marginRight: 'auto',
        position: 'relative',
        overflow: 'hidden',

        "&:hover": {
            "& img": {
                transform: 'scale(1.2)'
            }
        },
    },
    "& .caption": {
        left: 'auto',
        right: 0,
        background: '#fff',
        padding: '5% 4% 5% 4%',
        position: 'absolute',
        border: '1px solid rgba(0,0,0,0.2)',
        top: '50%',
        width: '50%',
        transform: 'translate(0, -50%)',

        [theme.breakpoints.down('md')]: {
            width: '100%',
            position: 'relative',
        }
    },
    [theme.breakpoints.down('md')]: {
        "& figure": {
            width: '100%',
            height: '350px'
        },
        "& .caption":{
            transform: 'unset'
        }
    },
}));

const CertificateSec = () => {
    return (
        <CrossedSec pt={6} pb={6} bgcolor="#F5F5F5">
            <Container>
                <div className="projects" style={{ position: 'relative' }}>
                    <figure>
                        <Image src={banner.src} alt="Certificate" fill style={{ objectFit: 'cover', transition: 'all 0.5s', }} />
                    </figure>
                    <div className="caption" >
                        <InnerTitle title="Certificate" color="#000" />

                        <Typography variant="body1" component="p" pb={6} color="#000">
                            BUNA's vision is brought to fruition by overcoming challenges and achieving incredible milestones. These certifications speak for our ethics, integrity, and dedication in the work we do.
                        </Typography>
                        <GlobalBtn title="All Certificates" href="/" variant="outlined" />
                    </div>
                </div>
            </Container>
        </CrossedSec>
    )
}
export default CertificateSec;
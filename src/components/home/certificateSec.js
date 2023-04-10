// Internal Imports
import Image from "next/image";
// MUI
import { Box, Container, Typography, styled } from "@mui/material";
// Components
import InnerTitle from "../InnerTitle";
import GlobalBtn from "../GlobalBtn";
// Image
import banner from '/public/images/03.jpg'

const CrossedSec = styled(Box)({
    "& figure":{
        width: '66.666667%', 
        marginLeft: 0, 
        marginRight: 'auto',

        "&:hover":{
            "& img":{
                transform:'scale(0.98)'
            }
        }
    }
})

const CertificateSec = () => {
    return (
        <CrossedSec>
            <Container>
                <div className="projects" style={{ position: 'relative'}}>
                    <figure>
                        <Image src={banner.src} alt="Certificate" width={600} height={500} style={{ objectFit: 'cover', width: '100%', height: '100%', transition: 'all 0.5s', }} />
                    </figure>
                    <div className="caption" style={{left: 'auto',right: 0, background: '#fff', padding: '5% 4% 5% 4%',position: 'absolute', top: '50%', width: '50%', transform: 'translate(0, -50%)'}}>
                        <InnerTitle title="Certificate" color="#000" />

                        <Typography variant="body1" component="p" pb={6} color="#000">
                            TAAM’s vision is brought to fruition by overcoming challenges and achieving incredible milestones. These certifications speak for our ethics, integrity, and dedication in the work we do.
                        </Typography>
                        <GlobalBtn title="All Certificates" href="/" variant="outlined" />
                    </div>
                </div>

                {/* <Grid item xs={12} md={7} sx={{ overflow: 'hidden', "&:hover": { "& img": { transform: 'scale(1.1)' } } }}>
                    <Image src={banner.src} alt="Certificate" width={600} height={500}
                        style={{ objectFit: 'cover', width: '100%', height: '100%', transition: 'all 0.5s', }} />
                </Grid>

                <Grid item xs={12} md={5} sx={{ position: "relative" }}>
                    <div style={{ padding: '50px', backgroundColor: '#000' }}>
                        <InnerTitle title="Certificate" color="#fff" />

                        <Typography variant="body1" component="p" pb={6} color="#fff">
                            TAAM’s vision is brought to fruition by overcoming challenges and achieving incredible milestones. These certifications speak for our ethics, integrity, and dedication in the work we do.
                        </Typography>
                        <GlobalBtn title="All Certificates" href="/" variant="outlined" />
                    </div>
                </Grid> */}
            </Container>
        </CrossedSec>
    )
}
export default CertificateSec;
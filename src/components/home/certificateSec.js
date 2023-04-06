// Internal Imports
import Image from "next/image";
// MUI
import { Box, Grid, Typography } from "@mui/material";
// Components
import InnerTitle from "../InnerTitle";
import GlobalBtn from "../GlobalBtn";
// Image
import banner from '/public/images/03.jpg'


const CertificateSec = () => {
    return (
        <Box>
            <Grid container alignItems="center">
                <Grid item xs={12} md={7} sx={{ overflow: 'hidden', "&:hover":{ "& img":{transform: 'scale(1.1)'}}}}>
                    <Image src={banner.src} alt="Certificate" width={600} height={500} 
                    style={{  objectFit: 'cover', width: '100%' ,  height: '100%' , transition: 'all 0.5s',  }} />
                </Grid>

                <Grid item xs={12} md={5} sx={{ position: "relative" }}>
                    <div style={{ padding: '50px', backgroundColor: '#000'}}>
                        <InnerTitle title="Certificate" color="#fff" />

                        <Typography variant="body1" component="p" pb={6} color="#fff">
                            TAAM’s vision is brought to fruition by overcoming challenges and achieving incredible milestones. These certifications speak for our ethics, integrity, and dedication in the work we do.
                        </Typography>
                        <GlobalBtn title="All Certificates" href="/" variant="outlined" />
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}
export default CertificateSec;
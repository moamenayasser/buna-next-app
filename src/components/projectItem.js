// Internal Imports
import Image from "next/image";
// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material";
import Link from "next/link";


const PorjectCard = styled(Box)(({ theme }) => ({
    marginBottom: '50px',
    position: 'relative',
    overflow: 'hidden',
    "& .project-media": {
        height: '400px',
        position: 'relative',

        "& img": {
            transition: 'all .5s',
            filter: 'brightness(100%)',
        },
    },
    "& .project-content": {
        margin: '-200px 20px 90px',
        padding: '30px 20px',
        backgroundColor: '#fff',
        borderRadius: 0,
        border: '1px solid rgba(0,0,0,0.2)',
        boxShadow: '1px solid rgba(0,0,0,0.2)',
        overflow: 'hidden',
        transition: '.2s cubic-bezier(.3, .58, .55, 1)',
        bottom: '-90px',
        position: 'relative',

        "& .project-title": {
            "&:hover": {
                color: theme.palette.secondary.main
            }
        },
        "& .divider": {
            width: '100%',
            minHeight: '1px',
            backgroundColor: 'rgba(0,0,0,0.04)',
            marginTop: '10px',
            marginBottom: '15px',
        },
        "& .link-btn": {
            display: 'inline-block',
            marginTop: '5px',
            position: 'relative',
            paddingBottom: '1px',
            marginBottom: '-1px',
            borderBottom: '1px solid #0000004a',
            color: '#000',
            fontSize: '16px',
            fontWeight: 600,

            "&:before": {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: '-1px',
                width: 0,
                height: '1px',
                backgroundColor: theme.palette.secondary.main,
                transition: 'all ease 0.4s',
            },

            "&:hover": {
                color: theme.palette.secondary.main,
                "&:before": {
                    width: '100%'
                }
            }
        },
    },
    "&:hover": {
        "& img": {
            transform: 'scale(1.09, 1.09)',
            filter: 'brightness(75%)',
            transition: 'all 1s ease',
        },
        "& .project-content": {
            bottom: '5px'
        }
    },
}))

const ProjectItem = () => {
    return (
        <PorjectCard>
            <div className="project-media" style={{ position: 'relative', overflow: 'hidden' }}>
                <Image src="/images/news1.jpg" alt="Projects" width={300} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="project-content">
                <Link href="/">
                    <Typography component="h5" variant="h4" className="project-title">Factory renovation architecture works</Typography>
                </Link>
                <div className="divider"></div>
                {/* <Typography component="p" variant="p" truncate={2}>Company kaya nisl ullamcorper the duru metu enna lophare mavna busnini viventa the ornare ipsuma. Curabitur magna pentesue the miss tenis vitae.</Typography> */}
                <Link href="/" className="link-btn">
                    Read More
                </Link>
            </div>
        </PorjectCard>
    )
}
export default ProjectItem;
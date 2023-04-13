// Internal Imports
import Image from 'next/image';
// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';

const InnerBanner = ({title , locale}) =>{
    return(
        <Box width="100%" height="400px" position="relative" display="flex" alignItems="center">
            <Image src="/images/14.jpg" alt="Banner" fill style={{ objectFit: 'cover'}} />
            <Container fixed style={{ zIndex: 9 , marginTop: '70px' }}>
                <Typography component="h1" variant="h1">About</Typography>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Home
                        </Link>
                        <Typography color="text.primary">About</Typography>
                    </Breadcrumbs>
            </Container>
        </Box>
    )
}
export default InnerBanner;
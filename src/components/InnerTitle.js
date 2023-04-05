import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const InnerTitle = ({ title, subtitle }) => {
    return (
        <Stack mb={3}>
            <Typography component="span" variant="subtitle1" color="primary" pl={6} position="relative"
                sx={{
                    "&:before": {
                        content: '""',
                        width: '40px',
                        height: '1px',
                        background: '#11584b',
                        position: 'absolute',
                        left: 0,
                        top: '40%',
                    }
                }}>{subtitle}</Typography>
            <Typography component="h1" variant="h2" color="secondary" pt={1} pb={3}>{title} </Typography>
        </Stack>
    )
}
export default InnerTitle;
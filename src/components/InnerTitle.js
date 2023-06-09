// MUI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const InnerTitle = ({ title , color , locale }) => {
    return (
        <Stack mb={3} position="relative" sx={{
            "&:before": {
                content: '""',
                position: 'absolute',
                display: 'block',
                width: "50px",
                height: '3px',
                backgroundColor: '#10584d',
                top: "-6px",
                transform: 'translateY(-50%)',
                left: 0
            }
        }}>
            <Typography component="h1" variant="h2" pt={1} pb={0} color={color}>{title} </Typography>
        </Stack>
    )
}
export default InnerTitle;
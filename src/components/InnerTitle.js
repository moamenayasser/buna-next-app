// MUI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const InnerTitle = ({ title, align , color}) => {
    return (
        <Stack mb={3} position="relative" textAlign={align} sx={{
            "&:before": {
                content: '""',
                position: 'absolute',
                display: 'block',
                width: "50px",
                height: '3px',
                backgroundColor: '#10584d',
                top: "-6px",
                transform: 'translateY(-50%)',
                left: `{${align === 'left'} ? '48%' : '50%'}`
            }
        }}>
            <Typography component="h1" variant="h2" color={color} pt={1} pb={3}>{title} </Typography>
        </Stack>
    )
}
export default InnerTitle;
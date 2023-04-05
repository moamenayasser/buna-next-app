// Internal Imports
import Link from "next/link";
// MUI
import Button from "@mui/material/Button";


const GlobalBtn = (props) => {
    const { variant , href , title} = props;

    return (
        <Button component={Link} href={href} variant={variant} sx={{ width: 'fit-content'}}>
            {title}
        </Button>
    )
}
export default GlobalBtn;
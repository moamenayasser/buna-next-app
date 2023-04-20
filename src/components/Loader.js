import { styled } from "@mui/material";


const LoaderBox = styled('div')({
    width: '100%',
    height: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 9999,
    overflow: 'hidden',
    "& .loading-pic": {
        width: '100%',
        position: 'absolute',
        top: '50%',
        zIndex: 99999,
        textAlign: 'center',
        transform: 'translateY(-50%)',
    },
    "& .cssload-thecube": {
        width: '73px',
        height: '73px',
        margin: '0 auto',
        marginTop: '49px',
        position: 'relative',
        transform: 'rotateZ(45deg)',
        "& .cssload-cube": {
            float: 'left',
            width: '50%',
            height: '50%',
            position: 'relative',
            transform: 'cssload-fold-thecube(1.1)',
            "&:before": {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                animation: 'cssload-fold-thecube 2.76s infinite linear both',
                transformOrigin: '100% 100%',
            },

            "&.cssload-cube.cssload-c1": {
                transform: 'scale(1.1) rotateZ(0deg)',
            },
            "&.cssload-cube.cssload-c2": { 
                transform : 'scale(1.1) rotateZ(90deg)',
                "&:before":{
                    animationDelay: '0.35s',
                },
            },
            "&.cssload-cube.cssload-c3": { 
                transform : 'scale(1.1) rotateZ(180deg)',
                "&:before":{
                    animationDelay: '0.69s',
                },
            },
            "&.cssload-cube.cssload-c4": { 
                transform : 'scale(1.1) rotateZ(270deg)',
                "&:before":{
                    animationDelay: '1.4s',
                },
            },
            
        }
    },
})

const Loader = () => {
    return (
        <LoaderBox>
            {/* <div className="loading-box"></div> */}
            <div className="loading-pic">
                <div className="cssload-thecube">
                    <div className="cssload-cube cssload-c1"></div>
                    <div className="cssload-cube cssload-c2"></div>
                    <div className="cssload-cube cssload-c4"></div>
                    <div className="cssload-cube cssload-c3"></div>
                </div>
            </div>
        </LoaderBox>
    )
}
export default Loader;
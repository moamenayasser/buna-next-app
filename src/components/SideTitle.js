

export const SideTitle = ({ title , locale }) => {
    const style = {
        display: 'inline-block',
        fontSize: '10vw',
        lineHeight: '120px',
        fontWeight: 400,
        transform: locale === "en" ? 'rotate(270deg)' : 'rotate(90deg)',
        position: 'absolute',
        right: locale === "en" ? "50px" : "" ,
        left: locale === "en" ? "" : "50px" ,
        top: 0,
        whiteSpace: 'nowrap',
        transformOrigin: locale === "en" ? "center right" : "center left",
        color: '#fff',
        WebkitTextFillColor: 'rgba(0,0,0,0)',
        WebkitTextStrokeWidth: '1px',
        WebkitTextStrokeColor: '#10584b',
        opacity: '.1',
    }

    return (
        <div className="side-title">
            <strong style={style}>{title}</strong>
        </div>
    )
}

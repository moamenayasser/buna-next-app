

export const SideTitle = ({ title }) => {
    const style = {
        display: 'inline-block',
        fontSize: '10vw',
        lineHeight: '120px',
        fontWeight: 400,
        transform: 'rotate(270deg)',
        position: 'absolute',
        right: '80px',
        top: 0,
        whiteSpace: 'nowrap',
        transformOrigin: 'center right',
        color: '#fff',
        WebkitTextFillColor: 'rgba(0,0,0,0)',
        WebkitTextStrokeWidth: '1px',
        WebkitTextStrokeColor: '#10584b',
        opacity: '.1',

        '@media and (max-width: 768px)': {
            display: 'none'
        }
    }

    return (
        <div className="side-title">
            <strong style={style}>{title}</strong>
        </div>
    )
}

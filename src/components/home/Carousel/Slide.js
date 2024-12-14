const Slide = ({
    name,
    link,
    ltr,
    img,
    tags
}) => {
    return <div className="carousel-item">
        <img
            src={img}
            alt={name}
            height={200}
        />
        <div className="info">
            <a href={link}>{name}</a>
            <span className="tags">
                {
                    tags.map(t => <span>
                        {t}
                    </span>)
                }
            </span>
        </div>
    </div>
}
export default Slide;
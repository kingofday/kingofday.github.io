import { useTranslation } from "react-i18next";

const Slide = ({ name, link, ltr, img, tags }) => {
  const { t } = useTranslation();
  return (
    <div className="carousel-item">
      <img src={img} alt={t(name)} height={200} />
      <div className="info">
        <a href={link}>{t(name)}</a>
        <span className="tags">
          {tags.map((tag) => (
            <span>{t(tag)}</span>
          ))}
        </span>
      </div>
    </div>
  );
};
export default Slide;

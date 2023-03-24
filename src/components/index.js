import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import CustomIcon from "components/shared/CustomIcon";
import "assets/styles/index.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    const { t } = useTranslation();
    return <>
        <header>
            <h1>{t("شهروز بذرافشان")}</h1>
            <a href="tel:+989334188184" className="btn-call" role={"button"} title={t("تماس")}>
                <CustomIcon size={20} name={"IoCallOutline"} />
            </a>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            {t("برنامه نویسی مهارتیست که با تلاش بدست می اید ، با تجربه قوی تر میشود و با مطالعه روزمره بروز می ماند")}
        </footer>

    </>
}
export default App;
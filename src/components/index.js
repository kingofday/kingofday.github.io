import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import CustomIcon from "components/shared/CustomIcon";
import "assets/styles/index.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Container, createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";

const App = () => {
    const { t } = useTranslation();
    const theme = createTheme({
        typography: {
            fontFamily: 'Vazir, Arial',
        }
    });
    return <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="header">
                <h1 className="hx"><Avatar src={process.env.PUBLIC_URL + "/logo192.png"}/>{t("شهروز بذرافشان")}</h1>
                <a href="tel:+9809334188184" className="btn-call" role={"button"} title={t("تماس")}>
                    <CustomIcon size={20} name={"IoCallOutline"} />
                </a>
            </Container>
            <Container component={"main"}>
                <Outlet />
            </Container>
            <Container container spacing={2} component="footer">
                {t("برنامه نویسی مهارتیست که با تلاش بدست می اید ، با تجربه قوی تر میشود و با مطالعه روزمره بروز می ماند")}
            </Container>
        </ThemeProvider>;
}
export default App;
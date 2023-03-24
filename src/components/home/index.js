import { Avatar, Box, Chip, Divider, Typography } from "@mui/material";
import CustomIcon from "components/shared/CustomIcon";
import { useTranslation } from "react-i18next";
import Carousel from "./Carousel";

const Home = () => {
    const { t } = useTranslation();
    return <>
        <Carousel />
        <section>
            <ul className="contacts">
                <li className="socials">
                    <a
                        className="social"
                        role={"button"}
                        href="tel:+9809334188184"
                    >
                        <CustomIcon name={"IoCallOutline"} />
                        09334188184
                    </a>
                    <a
                        className="social"
                        role={"button"}
                        href="mailto:shahrooz.bazrafshan@gmail.com"
                    >
                        <CustomIcon name={"IoMailOutline"} />
                        shahrooz.bazrafshan@gmail.com
                    </a>
                    <a
                        className="social"
                        role={"button"}
                        href="https://www.linkedin.com/in/bazrafshan/"
                    >
                        <CustomIcon name={"IoLogoLinkedin"} />
                        LinkedIn
                    </a>
                    <a
                        className="social"
                        role={"button"}
                        href="https://www.linkedin.com/in/bazrafshan/"
                    >
                        <CustomIcon name={"IoLogoLinkedin"} />
                        StackOverflow
                    </a>
                </li>
            </ul>

        </section>
        <section>
            <Typography textAlign={"justify"} variant="body1" gutterBottom>
                {t("بنده شهروز بذارفشان، با اخرین مدرک تحصیلی فوق لیسانس نرم افزار، از سال 1393 مشغول برنامه نویسی تحت وب در حوره فرانت، بک و گاهی موبایل هستم. از این حرفه لذت میبرم و تا کنون توانسته ام در حوزه های مختلف با موفقیت رضایت صاحبان پروژه را کسب کنم و درحال حاضر بصورت ریموت مشغول هستم، طبیعتا برخلاف خیلی ها که در حوزه تحصیلی خود فعالیت نمی کنند، برنامه نویسی را از دانشگاه شروع کردم و پس از پایان تحصیلات وارد عرصه کار و بازار شدم. هم اکنون پس از چندین سال کار و تلاش، در حوزه های مختلف و شرکت های مختلف تجربه کار داشته ام که در بخش دیگر به تفصیل آنهارا بازگو خواهم نمود")}
            </Typography>
        </section>
        <section>
            <Divider textAlign="left"><h2>{t("مهارت ها")}</h2></Divider>
            <Box flexWrap={"wrap"} display={"flex"} justifyContent={"space-between"} gap="0.625rem">
                <Chip label="Html" color="primary" variant="outlined" />
                <Chip label="Css" color="primary" variant="outlined" />
                <Chip label="Java Script" color="primary" variant="outlined" />
                <Chip label="Node.js" color="primary" variant="outlined" />
                <Chip label="React" color="primary" variant="outlined" />
                <Chip label="Next.js" color="primary" variant="outlined" />
                <Chip label="Web Socket" color="primary" variant="outlined" />
                <Chip label="Material UI/Antd/Bootstrap etc" color="primary" variant="outlined" />
                <Chip label=".Net Core" color="primary" variant="outlined" />
                <Chip label="C#" color="primary" variant="outlined" />
                <Chip label="Sql Server" color="primary" variant="outlined" />
                <Chip label="Solid" color="primary" variant="outlined" />
                <Chip label="Dry" color="primary" variant="outlined" />
                <Chip label="Test" color="primary" variant="outlined" />
                <Chip label="Design Patterns" color="primary" variant="outlined" />
            </Box>
        </section>
    </>
}
export default Home;
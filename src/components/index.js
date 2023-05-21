import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from "react-router-dom";
import CustomIcon from "components/shared/CustomIcon";
import "assets/styles/index.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppBar, Avatar, Box, Container, createTheme, CssBaseline, Typography, IconButton, Menu, MenuItem, ThemeProvider, Toolbar, Tooltip, Button } from "@mui/material";
import routes from "config/routes";
import { useState } from "react";

const App = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const nav = useNavigate();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(anchorElNav?null:event.currentTarget);
    };

    const handleCloseNavMenu = (path) => {
        console.log("path",path)
        if (path) {
            nav(path)
        }
        setAnchorElNav(null);
    };

    const { t } = useTranslation();
    const theme = createTheme({
        typography: {
            fontFamily: 'Vazir, Arial',
        }
    });
    const pages = [{ path: routes.projects, label: t("پروژه ها") }, { path: routes.about, label: t("درباره من") }];
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
            <Container>
                <Avatar sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={process.env.PUBLIC_URL + "/logo192.png"} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        ml: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Kingofday
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <CustomIcon size={25} name={"IoMenu"} />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.path} onClick={() => handleCloseNavMenu(page.path)}>
                                <Typography textAlign="center">{page.label}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                {/* <Avatar sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} src={process.env.PUBLIC_URL + "/logo192.png"} /> */}
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Kingofday
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page.path}
                            onClick={()=> handleCloseNavMenu(page.path)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page.label}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <IconButton sx={{ p: 0 }}>
                        <a href="tel:+9809334188184" className="btn-call" role={"button"} title={t("تماس")}>
                            <CustomIcon size={20} name={"IoCallOutline"} />
                        </a>
                    </IconButton>
                </Box>
            </Container>
        </AppBar>
        <Container component={"main"}>
            <Outlet />
        </Container>
        <footer>
            <Container container spacing={2}>
                {t("برنامه نویسی مهارتیست که با تلاش بدست می اید ، با تجربه قوی تر میشود و با مطالعه روزمره بروز می ماند")}
            </Container>
        </footer>
    </ThemeProvider>;
}
export default App;
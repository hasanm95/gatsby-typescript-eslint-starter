import React from "react";
import theme from "@theme";
import { ThemeProvider, Global, css } from "@theme/utils";
import { GlobalCSS } from "@assets/css/style";
import BootstrapCSS from "@assets/css/bootstrap.css";
import Header from "./header";
import Footer from "./footer";

const Layout: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <div className="wrapper">
                <Global styles={css(BootstrapCSS)} />
                <GlobalCSS />
                <Header />
                {children}
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default Layout;

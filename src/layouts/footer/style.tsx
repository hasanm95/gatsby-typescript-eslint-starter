import styled, { device } from "@theme/utils";
import BackgroundImage from "gatsby-background-image";
import { Box } from "theme-ui";
import Anchor from "@shared/anchor";

export const FooterWrap = styled.footer`
    ${device.large} {
        .container {
            max-width: 100% !important;
        }
    }

    ${device.xxlarge} {
        .container {
            max-width: 1520px !important;
        }
    }
`;

export const FooterTop = styled(BackgroundImage)`
    background-color: #f4faff !important;
    color: #384a5f;
    background-repeat: no-repeat;
    background-position: bottom right !important;
    background-size: auto !important;
    padding: 77px 0 35px;
    ${device.medium} {
        padding: 96px 0 55px;
    }
    ${device.medium} {
        padding: 115px 0 75px;
    }
`;

export const FooterBottom = styled.div`
    background-color: #1f252c;
    padding: 14px 0;
`;

export const FooterWidget = styled(Box)``;

export const FooterWidgetTitle = styled.h2`
    font-size: 23px;
    margin-bottom: 38px;
    ${device.xlarge} {
        margin-bottom: 50px;
    }
    ${device.xxlarge} {
        font-size: 29px;
    }
`;

export const TextWidget = styled.div`
    p {
        font-size: 16px;
    }
`;

export const FooterMenu = styled.ul``;

export const FooterMenuItem = styled.li`
    &:not(:last-of-type) {
        margin-bottom: 16px;
    }
`;

export const FooterMenuLink = styled(Anchor)`
    font-size: 16px;
`;

export const NewsletterWidget = styled.div`
    p {
        font-size: 16px;
        margin-bottom: 25px;
    }
`;

export const NewsletterBtn = styled.a`
    background-color: rgb(62, 100, 175);
    width: 160px;
    height: 42px;
    font-size: 14px;
    color: #fff;
    line-height: 42px;
    padding: 0;
    border: none;
    border-radius: 35px;
    display: block;
    text-align: center;
`;

export const CopyrightText = styled.p`
    color: #f4faff;
    font-size: 16px;
    padding-bottom: 15px;
    ${device.medium} {
        padding: 0;
    }
`;

import styled, { CreateStyled } from "@emotion/styled";

export type Theme = {
    colors: {
        [x: string]: string;
    };
    fontSize: {
        body: string;
        h1: string[];
        h2: string[];
        h3: string[];
        h4: string[];
        h5: string[];
        h6: string[];
    };
    fonts: {
        body: string;
        heading: string;
    };
    fontWeights: {
        body: number;
        heading: number;
    };
    lineHeights: {
        body: number;
        heading: number;
    };
    radii: {
        [x: string]: string;
    };
    shadows: {
        default: string;
        sm: string;
        lg: string;
    };
    breakpoints: string[];
    transition: string;
    text: {
        caps: {
            textTransform: string;
        };
        small: {
            fontSize: string;
            fontWeight: number;
        };
        body: {
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            color: string;
            fontSize: string;
        };
    };
    heading: {
        mainTitle: {
            color: string;
            fontSize: string[];
        };
        h2: {
            fontSize: string[];
        };
        h3: {
            fontSize: string[];
        };
        h4: {
            fontSize: string[];
        };
        h5: {
            fontSize: string[];
        };
    };
};

export default styled as CreateStyled<Theme>;

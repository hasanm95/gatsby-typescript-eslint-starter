import { Theme } from "@theme/styled";

const theme: Theme = {
    colors: {
        primary: "#5E60E7",
        text: "#6C6B6B",
        heading: "#414141",
        border: "#E0E0E0",
        secondary: "#4054b2",
        background: "whitesmoke",
        hover: "#3f41e2",
        shark: "#929496",
        silver: "#ababab",
        nevada: "#63696a",
        white: "#ffffff",
        black: "#000000",
        success: "#61ce70",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#f8f9fa",
        boulder: "#7a7a7a",
        shaft: "#333333",
        orange: "#ff6600",
        red: "#FF0000",
        alabaster: "#fafafa",
        mystic: "#e1e8ed",
    },
    fontSize: {
        body: "16px",
        h1: ["18px", "20px", "24px", "30px"],
        h2: ["23px", "26px", "28px"],
        h3: ["22px", "24px"],
        h4: ["20px", "22px"],
        h5: ["18px", "20px"],
        h6: ["16px", "18px"],
    },
    fonts: {
        body: `'Montserrat', sans-serif`,
        heading: `'Montserrat', sans-serif`,
    },
    fontWeights: {
        body: 400,
        heading: 600,
    },
    lineHeights: {
        body: 2,
        heading: 1.35,
    },
    radii: {
        default: "4px",
        sm: "3px",
        md: "6px",
        lg: "8px",
        round: "50%",
        pill: "500px",
    },
    shadows: {
        default: "0 0 12px 3px rgba(0, 0, 0, 0.06)",
        sm: "0px -1px 1px 0px rgba(0,0,0, .2)",
        lg: "0 1rem 3rem rgba(0, 0, 0, .175)",
    },
    breakpoints: ["576px", "768px", "992px", "1200px", "1400px"],
    transition: "all 0.4s ease 0s",
    text: {
        caps: {
            textTransform: "uppercase",
        },
        small: {
            fontSize: "14px",
            fontWeight: 600,
        },
        body: {
            fontFamily: "body",
            lineHeight: "body",
            fontWeight: "body",
            color: "text",
            fontSize: "body",
        },
    },
    heading: {
        mainTitle: {
            color: "shaft",
            fontSize: ["22px", "", "27px"],
        },
        h2: {
            fontSize: ["23px", "26px", "28px"],
        },
        h3: {
            fontSize: ["22px", "24px"],
        },
        h4: {
            fontSize: ["18px", "20px"],
        },
        h5: {
            fontSize: ["16px", "18px"],
        },
    },
};

export default theme;

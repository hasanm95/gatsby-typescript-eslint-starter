/* eslint-disable prettier/prettier */
const config = require("./config/config");

module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: {
        title: config.title,
        titleTemplate: config.titleTemplate,
        description: config.description,
        image: config.image,
        siteLanguage: config.siteLanguage,
        author: config.author,
        siteUrl: `${config.siteUrl}${config.pathPrefix}`,
        canonical: config.canonical,
        twitterUsername: config.twitterUsername,
        keywords: config.keywords,
    },
    plugins: [
        "gatsby-plugin-typescript",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-typescript",
        "gatsby-plugin-theme-ui",
        "gatsby-plugin-emotion",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/data/`,
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: config.title,
                short_name: config.shortName,
                theme_color: config.themeColor,
                background_color: config.backgroundColor,
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: config.favicon,
                icons: [
                    {
                        src: "/icons/icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-128x128.png",
                        sizes: "128x128",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-152x152.png",
                        sizes: "152x152",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};

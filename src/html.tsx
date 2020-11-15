/* eslint-disable */
import React from "react";

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {props.headComponents}

                <link
                    rel="preconnect"
                    href="https://www.google-analytics.com/"
                />
                <link
                    rel="dns-prefetch"
                    href="https://www.google-analytics.com/"
                />

                <link
                    rel="dns-prefetch"
                    href="https://www.googletagmanager.com"
                />

                <link
                    rel="preload"
                    href="https://www.googletagmanager.com/gtag/js"
                    as="script"
                />

                <script
                    src="https://www.googletagmanager.com/gtag/js?id=UA-132749328-1"
                    async
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `  window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                      
                        gtag('config', 'UA-132749328-1');`,
                    }}
                    defer
                />
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}

            </body>
        </html>
    );
}

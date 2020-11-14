import React, { memo } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type Image = {
    src: string | undefined;
    width: number | undefined;
    height: number | undefined;
};

type IProps = {
    description?: string | undefined;
    lang?: string | undefined;
    title?: string | undefined;
    titleTemplate?: string | undefined;
    image?: Image | undefined;
    pathname: string;
    canonical?: string | undefined;
    nextPage?: string | undefined | null;
    prevPage?: string | undefined | null;
    rootPath?: string | undefined;
    isBlogPost?: boolean | undefined;
};

const SEO: React.FC<IProps> = ({
    description,
    lang,
    image: metaImage,
    title,
    titleTemplate,
    pathname,
    canonical,
    nextPage,
    prevPage,
    rootPath,
    isBlogPost,
}: IProps) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        keywords
                        siteUrl
                        canonical
                        siteLanguage
                        image
                        titleTemplate
                        twitterUsername
                    }
                    buildTime
                }
            }
        `
    );

    // let pageUrl: string;
    // const path = pathname.replace(/^\/|\/$/g, "");
    const template = titleTemplate || site.siteMetadata.title;
    const metaDescription = description || site.siteMetadata.description;
    const language = lang || site.siteMetadata.siteLanguage;
    const siteUrl = site.siteMetadata.siteUrl.replace(/\/$/, "");
    const bannerImage =
        metaImage && metaImage.src
            ? `${siteUrl}${metaImage.src}`
            : `${siteUrl}/${site.siteMetadata.image}`;
    const canonicalLink = canonical || site.siteMetadata.canonical;
    const imgWidth = metaImage?.width ? metaImage.width : 800;
    const imgHeight = metaImage?.height ? metaImage.height : 600;
    // pageUrl = `${siteUrl}/${path}`;
    // pageUrl = pageUrl.replace(/^\/+/g, "");
    const rootUrl = siteUrl + rootPath;
    const prevLink = prevPage && prevPage !== null && rootUrl + prevPage;
    const nextLink = nextPage && nextPage !== null && rootUrl + nextPage;
    let siteTitle: string;
    if (pathname === "/") {
        siteTitle = site.siteMetadata.titleTemplate;
    } else {
        siteTitle = `${title} - ${template}`;
    }

    const schemaOrgWebPage = {
        "@context": "http://schema.org",
    };

    return (
        <Helmet
            htmlAttributes={{
                language,
            }}
        >
            {/* General tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="image" content={bannerImage} />
            <link rel="canonical" href={canonicalLink} />
            {prevLink && <link rel="prev" href={prevLink} />}
            {nextLink && <link rel="next" href={nextLink} />}

            {/* OpenGraph tags */}
            <meta property="og:locale" content={language} />
            {isBlogPost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalLink} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={bannerImage} />
            <meta property="og:image:width" content={`${imgWidth}px`} />
            <meta property="og:image:height" content={`${imgHeight}px`} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:creator"
                content={site.siteMetadata.twitterUsername}
            />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={bannerImage} />

            <script type="application/ld+json">
                {JSON.stringify(schemaOrgWebPage)}
            </script>
        </Helmet>
    );
};

SEO.defaultProps = {
    lang: `en`,
    description: ``,
};

export default memo(SEO);

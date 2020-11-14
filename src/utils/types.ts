/* eslint-disable @typescript-eslint/ban-types */
import { Link } from "gatsby";

export type GetRenderComponentProps<T> = T extends
    | React.ComponentType
    | typeof Link
    ? React.ComponentProps<T>
    : T extends "a"
    ? React.HTMLProps<T>
    : {};

export interface FluidObject {
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
    base64?: string;
    tracedSVG?: string;
    srcWebp?: string;
    srcSetWebp?: string;
    media?: string;
}

export interface FixedObject {
    width: number;
    height: number;
    src: string;
    srcSet: string;
    base64?: string;
    tracedSVG?: string;
    srcWebp?: string;
    srcSetWebp?: string;
    media?: string;
}

export interface SX {
    [x: string]: unknown;
}

export interface CSS {
    [x: string]: unknown;
}

export interface ButtonType {
    text: string;
    link: string;
}

export interface PaginationType {
    currentPage: number;
    numberOfPages: number;
}

export interface Category {
    name: string;
    slug: string;
}

export interface Tag {
    name: string;
    slug: string;
}

export interface Template {
    title: string;
    slug: string;
    bootstrap_preview_link: string;
    categories: {
        nodes: Category[];
    };
    featuredImage?: {
        node: {
            localFile: {
                childImageSharp: {
                    fluid: FluidObject;
                };
            };
        };
    };
}

export interface SubmenuType {
    label: string;
    url: string;
}

export interface MenuType {
    label: string;
    url: string;
    parentId: null | string;
    childItems: {
        nodes?: SubmenuType[] | undefined;
    };
}

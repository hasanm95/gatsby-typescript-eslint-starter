/* eslint-disable prettier/prettier */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// declare module "*.png";
// declare module "*.jpg";
// declare module "*.svg";
// declare module "*.gif";
// declare module "*.eot";
// declare module "*.ttf";
// declare module "*.woff";
// declare module "*.css";

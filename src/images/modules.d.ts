// allow imports of images
declare module '*.jpg' {
  const url: string;
  export default url;
}

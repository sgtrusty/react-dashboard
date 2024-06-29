'use client'
 
// const EXTERNAL_DOMAIN = "https://knowyourgg.surge.sh";

export default function myImageLoader({ src, width, quality }) {
  // let domain = process.env.DEVEL_DOMAIN ?? EXTERNAL_DOMAIN;
  // return `${comain}${src}?w=${width}&q=${quality || 75}`
  return `${src}?w=${width}&q=${quality || 75}`
}
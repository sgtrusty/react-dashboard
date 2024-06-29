'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://knowyourgg.surge.sh/${src}?w=${width}&q=${quality || 75}`
}
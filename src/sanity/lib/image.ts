import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

// High-quality full-size image for viewing
export const urlForFullSize = (source: SanityImageSource, maxWidth: number = 2400) => {
  return builder
    .image(source)
    .width(maxWidth)
    .auto('format')
    .fit('max')
    .quality(95)
    .url()
}

// Enhanced image URL generator with WebP support and optimizations
export const urlForImage = (source: SanityImageSource) => {
  return builder.image(source).auto('format').fit('max')
}

// Optimized image for blog thumbnails
export const urlForThumbnail = (source: SanityImageSource, width: number = 400, height: number = 300) => {
  return builder
    .image(source)
    .width(width)
    .height(height)
    .auto('format') // Automatically serves WebP when supported
    .fit('crop')
    .quality(85)
    .url()
}

// Optimized image for blog featured images
export const urlForFeatured = (source: SanityImageSource, width: number = 1200, height: number = 675) => {
  return builder
    .image(source)
    .width(width)
    .height(height)
    .auto('format') // Automatically serves WebP when supported
    .fit('crop')
    .quality(90)
    .url()
}

// Optimized image for author avatars
export const urlForAvatar = (source: SanityImageSource, size: number = 48) => {
  return builder
    .image(source)
    .width(size)
    .height(size)
    .auto('format') // Automatically serves WebP when supported
    .fit('crop')
    .quality(85)
    .url()
}

// General purpose optimized image with custom dimensions
export const urlForOptimized = (
  source: SanityImageSource, 
  options: {
    width?: number
    height?: number
    quality?: number
    fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
    format?: 'auto' | 'jpg' | 'png' | 'webp'
  } = {}
) => {
  const {
    width,
    height,
    quality = 85,
    fit = 'crop',
    format = 'auto'
  } = options

  let imageBuilder = builder.image(source)

  if (width) imageBuilder = imageBuilder.width(width)
  if (height) imageBuilder = imageBuilder.height(height)
  
  if (format === 'auto') {
    imageBuilder = imageBuilder.auto('format')
  } else {
    imageBuilder = imageBuilder.format(format)
  }
  
  return imageBuilder
    .fit(fit)
    .quality(quality)
    .url()
}

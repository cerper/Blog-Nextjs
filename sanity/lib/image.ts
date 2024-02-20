import createImageUrlBuilder from '@sanity/image-url'
import {Image} from 'sanity'
import {client} from '../../app/lib/sanity'

import React from 'react'

import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export const urlForImage = (source: Image) => {
  return builder.image(source).auto('format').fit('max')
}

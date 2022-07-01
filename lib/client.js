import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '8srjky13',
    dataset: 'production',
    apiVersion: '2022-06-30',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
})

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);
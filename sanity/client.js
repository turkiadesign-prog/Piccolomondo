import {createClient} from 'https://esm.sh/@sanity/client'

export const sanityClient = createClient({
  projectId: 'ob9d80dz',
  dataset: 'production',
  apiVersion: '2026-08-24',
  useCdn: true,
})
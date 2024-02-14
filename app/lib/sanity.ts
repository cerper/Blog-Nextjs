import { createClient } from '@sanity/client'

export const client = createClient({
  apiVersion: '2024-07-02',
  dataset: 'production',
  projectId: 'kjzfajbu',
  useCdn: false,
})

export const dynamic = 'force-dynamic'

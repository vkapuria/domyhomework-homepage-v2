import { OpenPanel } from '@openpanel/nextjs'

export const op = new OpenPanel({
  clientId: '0cfa62f6-4319-4a9d-a6ab-d4be6eab6975',
  clientSecret: process.env.OPENPANEL_SECRET_KEY,
  trackScreenViews: true,
  trackOutgoingLinks: true,
  trackAttributes: true,
})

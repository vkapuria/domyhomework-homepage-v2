import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Academic Writing & Homework Help | DoMyHomework.co',
  description: 'Browse our complete range of academic services including essay writing, homework help, research papers, and subject-specific tutoring across all academic levels.',
  keywords: 'academic services, homework help services, essay writing services, tutoring services, assignment help',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
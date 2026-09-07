import { notFound } from 'next/navigation'
import { PROJECTS, getProjectBySlug } from '@/constants/projects'
import ProjectPageClient from './client'

interface ProjectPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectPageClient project={project} />
}

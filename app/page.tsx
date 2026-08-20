'use client'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  PROJECTS,
  SOCIAL_LINKS,
  EDUCATION,
  CERTIFICATIONS,
} from './data'
import { useState } from 'react'

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const SECTION_VARIANTS_REDUCED = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const SECTION_TRANSITION = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1] as const,
}

const EXPAND_TRANSITION = {
  type: 'spring' as const,
  bounce: 0,
  duration: 0.35,
}

export default function Personal() {
  const [expandedEducationIds, setExpandedEducationIds] = useState<Set<string>>(new Set())
  const [expandedCertificationIds, setExpandedCertificationIds] = useState<Set<string>>(new Set())
  const [expandedWorkIds, setExpandedWorkIds] = useState<Set<string>>(new Set())
  const [expandedProjectIds, setExpandedProjectIds] = useState<Set<string>>(new Set())

  const shouldReduceMotion = useReducedMotion()
  const variants = shouldReduceMotion ? SECTION_VARIANTS_REDUCED : SECTION_VARIANTS
  const expandTransition = shouldReduceMotion ? { duration: 0 } : EXPAND_TRANSITION

  const toggle = (setter: React.Dispatch<React.SetStateAction<Set<string>>>, id: string) => {
    setter(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <main className="space-y-24 pb-24">
      {/* Work Experience */}
      <motion.section
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={SECTION_TRANSITION}
      >
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--apple-text)]">
          Work Experience
        </h2>
        <div className="flex flex-col gap-4">
          {WORK_EXPERIENCE.map((job) => (
            <div
              key={job.id}
              className="apple-card cursor-pointer p-5"
              onClick={() => toggle(setExpandedWorkIds, job.id)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 flex-1 gap-3">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="mt-0.5 size-9 shrink-0 rounded-lg object-contain bg-[var(--apple-bg-secondary)] p-1.5"
                  />
                  <div className="min-w-0">
                    <h3 className="text-[17px] font-medium text-[var(--apple-text)]">
                      {job.title}
                    </h3>
                    <p className="text-[15px] text-[var(--apple-text-secondary)]">
                      {job.company}
                    </p>
                  </div>
                </div>
                <p className="shrink-0 text-[13px] text-[var(--apple-text-secondary)]">
                  {job.start} – {job.end}
                </p>
              </div>
              <AnimatePresence>
                {expandedWorkIds.has(job.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={expandTransition}
                    className="mt-4 space-y-4 overflow-hidden"
                  >
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-2.5 text-[15px] text-[var(--apple-text-secondary)]">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--apple-accent)]" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {job.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-[var(--apple-bg-secondary)] px-3 py-1 text-[12px] font-medium text-[var(--apple-text-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={SECTION_TRANSITION}
      >
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--apple-text)]">
          Education
        </h2>
        <div className="flex flex-col gap-4">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="apple-card cursor-pointer p-5"
              onClick={() => toggle(setExpandedEducationIds, edu.id)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 flex-1 gap-3">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="mt-0.5 size-9 shrink-0 rounded-lg object-contain bg-[var(--apple-bg-secondary)] p-1.5"
                  />
                  <div className="min-w-0">
                    <h3 className="text-[17px] font-medium text-[var(--apple-text)]">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-[15px] text-[var(--apple-text-secondary)]">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <p className="shrink-0 text-[13px] text-[var(--apple-text-secondary)]">
                  {edu.start} – {edu.end}
                </p>
              </div>
              <AnimatePresence>
                {expandedEducationIds.has(edu.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={expandTransition}
                    className="mt-4 space-y-3 overflow-hidden"
                  >
                    <p className="text-[15px] text-[var(--apple-text-secondary)]">
                      GPA: {edu.gpa}
                    </p>
                    <ul className="space-y-1.5">
                      {edu.courses.map((course, i) => (
                        <li key={i} className="flex gap-2.5 text-[15px] text-[var(--apple-text-secondary)]">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--apple-accent)]" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Blog */}
      <motion.section
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={SECTION_TRANSITION}
      >
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--apple-text)]">
          Blog
        </h2>
        <div className="flex flex-col gap-1">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-xl bg-[var(--apple-accent)]/10 dark:bg-[var(--apple-accent)]/15"
            transition={{ type: 'spring', bounce: 0, duration: 0.25 }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="relative block rounded-xl px-4 py-4"
                href={post.link}
                data-id={post.uid}
              >
                <h3 className="text-[17px] font-medium text-[var(--apple-text)]">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="mt-0.5 text-[15px] text-[var(--apple-text-secondary)]">
                    {post.description}
                  </p>
                )}
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={SECTION_TRANSITION}
      >
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--apple-text)]">
          Certifications
        </h2>
        <div className="flex flex-col gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="apple-card cursor-pointer p-5"
              onClick={() => toggle(setExpandedCertificationIds, cert.id)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-[17px] font-medium text-[var(--apple-text)]">
                    {cert.name}
                  </h3>
                  <p className="text-[15px] text-[var(--apple-text-secondary)]">
                    {cert.issuer}
                  </p>
                </div>
                <p className="shrink-0 text-[13px] text-[var(--apple-text-secondary)]">
                  {cert.date}
                </p>
              </div>
              <AnimatePresence>
                {expandedCertificationIds.has(cert.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={expandTransition}
                    className="mt-4 space-y-3 overflow-hidden"
                  >
                    {cert.description && (
                      <p className="text-[15px] text-[var(--apple-text-secondary)]">
                        {cert.description}
                      </p>
                    )}
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[15px] font-medium text-[var(--apple-accent)] transition-opacity hover:opacity-70"
                    >
                      View Certificate →
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={SECTION_TRANSITION}
      >
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--apple-text)]">
          Selected Projects
        </h2>
        <div className="flex flex-col gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="apple-card cursor-pointer p-5"
              onClick={() => toggle(setExpandedProjectIds, project.id)}
            >
              <div>
                <h3 className="text-[17px] font-medium text-[var(--apple-text)]">
                  {project.name}
                </h3>
                <p className="text-[15px] text-[var(--apple-text-secondary)]">
                  {project.description}
                </p>
              </div>
              <AnimatePresence>
                {expandedProjectIds.has(project.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={expandTransition}
                    className="mt-4 space-y-4 overflow-hidden"
                  >
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex gap-2.5 text-[15px] text-[var(--apple-text-secondary)]">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--apple-accent)]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-[var(--apple-bg-secondary)] px-3 py-1 text-[12px] font-medium text-[var(--apple-text-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-1">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-medium text-[var(--apple-accent)] transition-opacity hover:opacity-70"
                      >
                        View Project →
                      </a>
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[15px] font-medium text-[var(--apple-accent)] transition-opacity hover:opacity-70"
                        >
                          View Paper →
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={SECTION_TRANSITION}
      >
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--apple-text)]">
          Connect
        </h2>
        <p className="mb-5 text-[17px] text-[var(--apple-text-secondary)]">
          Feel free to reach out at{' '}
          <a
            className="font-medium text-[var(--apple-accent)] transition-opacity hover:opacity-70"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--apple-bg-secondary)] px-4 py-2 text-[14px] font-medium text-[var(--apple-text)] transition-all duration-200 hover:bg-[var(--apple-accent)] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.section>
    </main>
  )
}

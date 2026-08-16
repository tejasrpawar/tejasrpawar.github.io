'use client'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
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

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

// §14 Reduced motion — a gentle, non-vestibular cross-fade (no travel, no blur).
const VARIANTS_SECTION_REDUCED = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// §4 Behavior over animation — a critically damped spring (no overshoot) settles
// section reveals naturally instead of a fixed-duration tween.
const TRANSITION_SECTION = {
  type: 'spring' as const,
  bounce: 0,
  duration: 0.5,
}

const TRANSITION_SECTION_REDUCED = {
  duration: 0.2,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-[background-color,color,transform] duration-200 ease-out hover:bg-zinc-950 hover:text-zinc-50 active:scale-[0.96] dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const [expandedEducationIds, setExpandedEducationIds] = useState<Set<string>>(new Set())
  const [expandedCertificationIds, setExpandedCertificationIds] = useState<Set<string>>(new Set())
  const [expandedWorkIds, setExpandedWorkIds] = useState<Set<string>>(new Set())
  const [expandedProjectIds, setExpandedProjectIds] = useState<Set<string>>(new Set())

  const toggleEducation = (id: string) => {
    setExpandedEducationIds(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const toggleCertification = (id: string) => {
    setExpandedCertificationIds(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const toggleWork = (id: string) => {
    setExpandedWorkIds(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const toggleProject = (id: string) => {
    setExpandedProjectIds(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  // §14 Honor the OS "reduce motion" setting: swap spring travel + blur for a
  // plain cross-fade, and expand/collapse instantly rather than animating.
  const shouldReduceMotion = useReducedMotion()
  const variantsSection = shouldReduceMotion
    ? VARIANTS_SECTION_REDUCED
    : VARIANTS_SECTION
  const transitionSection = shouldReduceMotion
    ? TRANSITION_SECTION_REDUCED
    : TRANSITION_SECTION
  const transitionExpand = shouldReduceMotion
    ? { duration: 0 }
    : { type: 'spring' as const, bounce: 0, duration: 0.3 }

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={variantsSection}
        transition={transitionSection}
      >
      </motion.section>

      <motion.section
        variants={variantsSection}
        transition={transitionSection}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <div
              key={job.id}
              className="group relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] transition-[transform,box-shadow] duration-200 ease-out will-change-transform hover:shadow-[0_8px_30px_rgb(0_0_0/0.06)] active:scale-[0.985] dark:bg-zinc-600/30 dark:hover:shadow-[0_8px_30px_rgb(0_0_0/0.35)]"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div 
                className="relative h-full w-full cursor-pointer select-none rounded-[15px] bg-white p-4 dark:bg-zinc-950"
                onClick={() => toggleWork(job.id)}
              >
                <div className="relative flex w-full flex-row items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="shrink-0 whitespace-nowrap text-xs text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
                <AnimatePresence>
                  {expandedWorkIds.has(job.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={transitionExpand}
                      className="mt-3 space-y-4 overflow-hidden"
                    >
                      <div>
                        <p className="mb-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                          Key Responsibilities:
                        </p>
                        <ul className="space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex gap-2">
                              <span
                                aria-hidden="true"
                                className="mt-2 size-1 shrink-0 rounded-full bg-current opacity-40"
                              />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                          Technologies:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={variantsSection}
        transition={transitionSection}
      >
        <h3 className="mb-5 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-2">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="group relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] transition-[transform,box-shadow] duration-200 ease-out will-change-transform hover:shadow-[0_8px_30px_rgb(0_0_0/0.06)] active:scale-[0.985] dark:bg-zinc-600/30 dark:hover:shadow-[0_8px_30px_rgb(0_0_0/0.35)]"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div 
                className="relative h-full w-full cursor-pointer select-none rounded-[15px] bg-white p-4 dark:bg-zinc-950"
                onClick={() => toggleEducation(edu.id)}
              >
                <div className="relative flex w-full flex-row items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-normal dark:text-zinc-100">
                      {edu.degree} in {edu.field}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {edu.institution}
                    </p>
                  </div>
                  <p className="shrink-0 whitespace-nowrap text-xs text-zinc-600 dark:text-zinc-400">
                    {edu.start} - {edu.end}
                  </p>
                </div>
                <AnimatePresence>
                  {expandedEducationIds.has(edu.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={transitionExpand}
                      className="mt-3 space-y-2 overflow-hidden"
                    >
                      <p className="text-zinc-500 dark:text-zinc-400">
                        GPA: {edu.gpa}
                      </p>
                      <div>
                        <p className="mb-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                          Key Courses:
                        </p>
                        <ul className="space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                          {edu.courses.map((course, index) => (
                            <li key={index} className="flex gap-2">
                              <span
                                aria-hidden="true"
                                className="mt-2 size-1 shrink-0 rounded-full bg-current opacity-40"
                              />
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={variantsSection}
        transition={transitionSection}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="flex flex-col space-y-2">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] transition-[transform,box-shadow] duration-200 ease-out will-change-transform hover:shadow-[0_8px_30px_rgb(0_0_0/0.06)] active:scale-[0.985] dark:bg-zinc-600/30 dark:hover:shadow-[0_8px_30px_rgb(0_0_0/0.35)]"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div 
                className="relative h-full w-full cursor-pointer select-none rounded-[15px] bg-white p-4 dark:bg-zinc-950"
                onClick={() => toggleProject(project.id)}
              >
                <div className="relative flex w-full flex-row items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-normal dark:text-zinc-100">
                      {project.name}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {project.description}
                    </p>
                    <AnimatePresence>
                      {expandedProjectIds.has(project.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={transitionExpand}
                          className="mt-2 space-y-4 overflow-hidden"
                        >
                          <div>
                            <p className="mb-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                              Key Features:
                            </p>
                            <ul className="space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                              {project.features.map((feature, index) => (
                                <li key={index} className="flex gap-2">
                                  <span
                                    aria-hidden="true"
                                    className="mt-2 size-1 shrink-0 rounded-full bg-current opacity-40"
                                  />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="mb-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                              Technologies:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              View Project →
                            </a>
                            {project.video && (
                              <a
                                href={project.video}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                              >
                                View Paper →
                              </a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={variantsSection}
        transition={transitionSection}
      >
        <h3 className="mb-5 text-lg font-medium">Certifications</h3>
        <div className="flex flex-col space-y-2">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="group relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] transition-[transform,box-shadow] duration-200 ease-out will-change-transform hover:shadow-[0_8px_30px_rgb(0_0_0/0.06)] active:scale-[0.985] dark:bg-zinc-600/30 dark:hover:shadow-[0_8px_30px_rgb(0_0_0/0.35)]"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div 
                className="relative h-full w-full cursor-pointer select-none rounded-[15px] bg-white p-4 dark:bg-zinc-950"
                onClick={() => toggleCertification(cert.id)}
              >
                <div className="relative flex w-full flex-row items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-normal dark:text-zinc-100">
                      {cert.name}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {cert.issuer}
                    </p>
                  </div>
                  <p className="shrink-0 whitespace-nowrap text-xs text-zinc-600 dark:text-zinc-400">
                    {cert.date}
                  </p>
                </div>
                <AnimatePresence>
                  {expandedCertificationIds.has(cert.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={transitionExpand}
                      className="mt-3 space-y-2 overflow-hidden"
                    >
                      <p className="text-zinc-500 dark:text-zinc-400">
                        {cert.description}
                      </p>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        View Certificate →
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={variantsSection}
        transition={transitionSection}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={variantsSection}
        transition={transitionSection}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}

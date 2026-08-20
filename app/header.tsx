'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { Magnetic } from '@/components/ui/magnetic'
import { motion, useScroll, useTransform } from 'motion/react'

export function Header() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -30])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85])

  return (
    <motion.header className="mb-16" style={{ y, opacity }}>
      <div className="flex items-start justify-between">
        <div>
          <Link href="/" className="text-3xl font-semibold tracking-tight text-[var(--apple-text)]">
            Tejas Ramesh Pawar
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="mt-1 text-[17px] text-[var(--apple-text-secondary)]"
            delay={0.5}
          >
            Software Engineer
          </TextEffect>
          <p className="mt-1 text-[13px] text-[var(--apple-text-secondary)]">
            Bellevue, WA, USA
          </p>
        </div>
        <div className="flex items-center gap-2.5 mt-1">
          <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
            <a
              href="https://www.linkedin.com/in/tejasrpawar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[var(--apple-bg-secondary)] px-4 py-2 text-[14px] font-medium text-[var(--apple-text)] transition-all duration-200 hover:bg-[var(--apple-accent)] hover:text-white"
            >
              LinkedIn
            </a>
          </Magnetic>
          <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-pill"
            >
              Resume
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.header>
  )
}

'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, BookOpenText } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': 'var(--editable-page-bg, #fffaf3)', '--editable-footer-text': 'var(--editable-page-text, #241915)' } as CSSProperties
  const siteName = globalContent.site.name
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.25fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg border border-[var(--editable-border)] bg-white">
              <img src="/favicon.png?v=20260413" alt={siteName} className="h-8 w-8 object-contain" />
            </span>
            <span>
              <span className="block text-lg font-black tracking-tight">{siteName}</span>
              <span className="block text-[11px] font-black uppercase tracking-[0.14em] opacity-55">{globalContent.footer.tagline}</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 opacity-70">{globalContent.footer.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Explore</h3>
          <div className="mt-4 grid gap-2">
            {globalContent.footer.columns[0].links.map((link) => (
              <Link key={`${link.href}-${link.label}`} href={link.href} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                <BookOpenText className="h-3.5 w-3.5" /> {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Site</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold opacity-75 hover:opacity-100">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold opacity-75 hover:opacity-100">Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-bold opacity-55">
        &copy; {year} {siteName}. {globalContent.footer.bottomNote}
      </div>
    </footer>
  )
}

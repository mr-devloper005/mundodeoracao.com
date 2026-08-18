'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, UserPlus, LogIn, X } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { editablePalette as pal } from '@/editable/layouts/design-contract'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const pathname = usePathname()
  const siteName = globalContent.site.name
  const activePath = mounted ? pathname : ''
  const navItems = useMemo(
    () => [...globalContent.nav.primaryLinks],
    []
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b ${pal.border} ${pal.pageBg} ${pal.pageText} shadow-sm backdrop-blur-2xl`}>
      <nav className="mx-auto flex min-h-[74px] w-full max-w-[1180px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <img src="/favicon.png?v=20260413" alt={siteName} className="h-11 w-11 shrink-0 object-contain" />
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[210px] truncate text-base font-extrabold tracking-tight">{siteName}</span>
            <span className="block max-w-[210px] truncate text-[11px] font-bold uppercase tracking-[0.14em] opacity-55">{globalContent.nav.tagline}</span>
          </span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-center md:flex">
          <label className={`relative flex w-full max-w-md items-center rounded-md border ${pal.border} ${pal.surfaceBg} px-3 py-2.5`}>
            <Search className="h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold outline-none placeholder:text-current/45" />
          </label>
        </form>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = activePath === item.href || activePath.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-md px-3.5 py-2 text-sm font-extrabold transition ${active ? `${pal.darkBg} ${pal.darkText}` : 'hover:bg-black/5'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link href="/login" className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-extrabold hover:bg-black/5 sm:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
          <Link href="/signup" className={`hidden items-center gap-2 rounded-md ${pal.darkBg} px-4 py-2.5 text-sm font-extrabold text-white shadow-sm sm:inline-flex`}><UserPlus className="h-4 w-4" /> Sign up</Link>
          <button type="button" onClick={() => setOpen((value) => !value)} className={`rounded-md border ${pal.border} ${pal.surfaceBg} p-2 lg:hidden`} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className={`border-t ${pal.border} ${pal.pageBg} px-4 py-4 lg:hidden`}>
          <form action="/search" className={`mb-4 flex rounded-md border ${pal.border} ${pal.surfaceBg} px-3 py-2`}>
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'Contact', href: '/contact' }].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`rounded-lg border ${pal.border} ${pal.surfaceBg} px-4 py-3 text-sm font-extrabold`}>
                {item.label}
              </Link>
            ))}
            {session ? (
              <button type="button" onClick={() => { logout(); setOpen(false) }} className={`rounded-md ${pal.darkBg} px-4 py-3 text-left text-sm font-extrabold text-white`}>Logout {session.name}</button>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)} className={`rounded-md border ${pal.border} ${pal.surfaceBg} px-4 py-3 text-sm font-extrabold`}>Login</Link>
                <Link href="/signup" onClick={() => setOpen(false)} className={`rounded-md ${pal.darkBg} px-4 py-3 text-sm font-extrabold text-white`}>Sign up</Link>
              </>
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}

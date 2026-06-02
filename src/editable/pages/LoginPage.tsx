import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpenCheck, History, SearchCheck } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { globalContent } from '@/editable/content/global.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: 'Local login page for this public site.' })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#fff7ee)] text-[var(--editable-page-text,#2f1d16)]">
        <section className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-[1180px] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.88fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] opacity-55">Member access</p>
            <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">Welcome back to {globalContent.site.name}.</h1>
            <p className="mt-6 max-w-lg text-sm leading-8 opacity-70">Sign in to return to the article desk, keep your reading flow familiar, and see account-aware navigation across the site.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                [BookOpenCheck, 'Continue reading'],
                [SearchCheck, 'Search faster'],
                [History, 'Return cleanly'],
              ].map(([Icon, label]) => (
                <div key={label as string} className="rounded-lg border border-[var(--editable-border)] bg-white p-4 text-sm font-black shadow-sm">
                  <Icon className="mb-3 h-5 w-5 text-[var(--slot4-accent)]" />
                  {label as string}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[var(--editable-border)] bg-white p-6 shadow-[0_18px_50px_rgba(16,36,31,0.10)] sm:p-8">
            <h2 className="text-2xl font-black tracking-[-0.04em]">Login</h2>
            <p className="mt-2 text-sm leading-6 opacity-65">Use your local test account to update the header from login actions to your name and logout.</p>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm opacity-70">New here? <Link href="/signup" className="font-black underline-offset-4 hover:underline">Create an account</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}

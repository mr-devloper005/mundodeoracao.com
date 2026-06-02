import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpenText, PenLine, UserRoundCheck } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { globalContent } from '@/editable/content/global.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: 'Local signup page for this public site.' })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#fff4e4)] text-[var(--editable-page-text,#2f1d16)]">
        <section className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-[1180px] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
          <div className="rounded-lg border border-[var(--editable-border)] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.10)] sm:p-8">
            <h1 className="text-3xl font-black tracking-tight">Create your reader account</h1>
            <p className="mt-2 text-sm leading-6 opacity-65">Your account is browser-local for this UI, so you can test the signed-in header and article flow immediately.</p>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm opacity-70">Already have an account? <Link href="/login" className="font-black underline-offset-4 hover:underline">Login</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] opacity-55">Join {globalContent.site.name}</p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">A cleaner account entry for article readers.</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 opacity-70">Create a simple local account, then the navbar changes from login and signup actions to your name and logout button.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                [BookOpenText, 'Article-first'],
                [PenLine, 'Contributor ready'],
                [UserRoundCheck, 'Signed-in state'],
              ].map(([Icon, label]) => (
                <div key={label as string} className="rounded-lg border border-[var(--editable-border)] bg-white p-4 text-sm font-black shadow-sm">
                  <Icon className="mb-3 h-5 w-5 text-[var(--slot4-accent)]" />
                  {label as string}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}

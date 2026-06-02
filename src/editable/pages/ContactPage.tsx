'use client'

import { BookOpenText, MessageSquareText, PenLine, ShieldCheck } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: PenLine, title: 'Article submissions', body: 'Pitch essays, explainers, how-to guides, and opinion pieces that deserve a clearer reading surface.' },
    { icon: ShieldCheck, title: 'Corrections and updates', body: 'Send factual corrections, outdated details, author notes, or publication questions for existing articles.' },
    { icon: MessageSquareText, title: 'Reader and partnership support', body: 'Reach out about collaborations, sponsored article ideas, reader feedback, or editorial workflow questions.' },
  ]

  return (
    <EditableSiteShell>
      <main className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-lg border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 text-xl font-black">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[var(--editable-border)] bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <BookOpenText className="h-6 w-6 text-[var(--slot4-accent)]" />
              <h2 className="text-2xl font-black">{pagesContent.contact.formTitle}</h2>
            </div>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}

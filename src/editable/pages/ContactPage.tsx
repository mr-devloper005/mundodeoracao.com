'use client'

import { BookOpenText, MessageSquareText, PenLine, ShieldCheck } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'

export default function ContactPage() {
  const lanes = [
    { icon: PenLine, title: 'Article submissions', body: 'Pitch essays, explainers, how-to guides, and opinion pieces that deserve a clearer reading surface.' },
    { icon: ShieldCheck, title: 'Corrections and updates', body: 'Send factual corrections, outdated details, author notes, or publication questions for existing articles.' },
    { icon: MessageSquareText, title: 'Reader and partnership support', body: 'Reach out about collaborations, sponsored article ideas, reader feedback, or editorial workflow questions.' },
  ]

  return (
    <EditableSiteShell>
      <main className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className={dc.type.eyebrow + ' opacity-70'}>{pagesContent.contact.eyebrow}</p>
            <h1 className={dc.type.heroTitle + ' mt-4'}>{pagesContent.contact.title}</h1>
            <p className={`mt-5 max-w-2xl text-sm leading-8 ${pal.mutedText}`}>{pagesContent.contact.description}</p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className={`${dc.surface.card} p-5`}>
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 text-xl font-extrabold">{lane.title}</h2>
                  <p className={`mt-2 text-sm leading-7 ${pal.mutedText}`}>{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${dc.surface.card} p-6`}>
            <div className="mb-5 flex items-center gap-3">
              <BookOpenText className={`h-6 w-6 ${pal.accentText}`} />
              <h2 className="text-2xl font-extrabold">{pagesContent.contact.formTitle}</h2>
            </div>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}

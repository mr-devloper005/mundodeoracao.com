import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className={`${dc.shell.sectionY} px-4 sm:px-6 lg:px-8`}>
        <section className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <article className={`${dc.surface.card} p-7 lg:p-10`}>
            <p className={dc.type.eyebrow + ' opacity-55'}>{pagesContent.about.badge}</p>
            <h1 className={dc.type.heroTitle + ' mt-5'}>About {globalContent.site.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 opacity-70">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 opacity-75">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className={`${dc.surface.card} p-6`}>
                <h2 className="text-xl font-extrabold tracking-[-0.04em]">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 opacity-70">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}

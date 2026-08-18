import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function getExcerpt(post?: SitePost | null, limit = 130) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function MiniPoster({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className={`group block w-[230px] shrink-0 ${dc.motion.fade}`}>
      <article className="relative overflow-hidden rounded-lg border border-black/[0.07] bg-[var(--slot4-surface-bg)] p-2 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_70px_rgba(0,0,0,0.14)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.72)_100%)]" />
          <span className="absolute left-3 top-3 rounded-md bg-white/92 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--slot4-page-text)] shadow-sm">
            Read
          </span>
          <h3 className="absolute bottom-3 left-3 right-3 line-clamp-3 text-base font-extrabold leading-tight tracking-[-0.03em] text-white drop-shadow-sm">
            {post.title}
          </h3>
        </div>
      </article>
    </Link>
  )
}

function FeatureTile({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const style = index % 3
  if (style === 0) {
    return (
      <Link href={href} className="group relative min-h-[360px] overflow-hidden rounded-lg bg-[var(--slot4-dark-bg)] p-5 text-white shadow-[0_18px_70px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-1">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.78))]" />
        <div className="relative z-10 flex min-h-[320px] flex-col justify-end">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/70">Featured</p>
          <h3 className="mt-3 line-clamp-3 text-3xl font-extrabold leading-[0.98] tracking-[-0.06em]">{post.title}</h3>
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/76">{getExcerpt(post, 110)}</p>
        </div>
      </Link>
    )
  }
  if (style === 1) {
    return (
      <Link href={href} className={`group grid overflow-hidden rounded-lg border ${pal.border} bg-[var(--slot4-surface-bg)] shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 md:grid-cols-[0.82fr_1fr]`}>
        <div className="relative min-h-[190px] bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        </div>
        <div className="p-6">
          <p className={`text-[11px] font-extrabold uppercase tracking-[0.26em] ${pal.accentText}`}>Spotlight {index + 1}</p>
          <h3 className="mt-4 line-clamp-3 text-2xl font-extrabold leading-tight tracking-[-0.05em] text-[var(--slot4-page-text)]">{post.title}</h3>
          <p className={`mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 135)}</p>
        </div>
      </Link>
    )
  }
  return (
    <Link href={href} className={`group relative overflow-hidden rounded-lg border ${pal.border} bg-[var(--slot4-accent-soft)] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1`}>
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-md bg-white/55" />
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-sm">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      </div>
      <p className={`mt-8 text-[11px] font-extrabold uppercase tracking-[0.26em] ${pal.accentText}`}>Deep read</p>
      <h3 className="mt-3 line-clamp-4 text-2xl font-extrabold leading-tight tracking-[-0.05em] text-[var(--slot4-page-text)]">{post.title}</h3>
      <p className={`mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 125)}</p>
    </Link>
  )
}

function WideStoryCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group grid gap-4 overflow-hidden rounded-lg border ${pal.border} bg-[var(--slot4-surface-bg)] p-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_70px_rgba(0,0,0,0.14)] sm:grid-cols-[150px_minmax(0,1fr)]`}>
      <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-[var(--slot4-media-bg)] sm:aspect-square">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute bottom-3 left-3 rounded-md bg-black/72 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur">
          Pick {index + 1}
        </span>
      </div>
      <div className="min-w-0 py-2 pr-2">
        <p className={`text-[11px] font-extrabold uppercase tracking-[0.24em] ${pal.accentText}`}>Editor's lane</p>
        <h3 className="mt-2 line-clamp-2 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[var(--slot4-page-text)]">{post.title}</h3>
        <p className={`mt-3 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 145)}</p>
      </div>
    </Link>
  )
}

function IndexPill({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group relative overflow-hidden rounded-lg border ${pal.border} bg-[var(--slot4-surface-bg)] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_70px_rgba(0,0,0,0.14)]`}>
      <span className="absolute -right-6 -top-6 h-20 w-20 rounded-md bg-[var(--slot4-accent-soft)] opacity-70 transition group-hover:scale-125" />
      <p className={`relative text-[11px] font-extrabold uppercase tracking-[0.26em] ${pal.accentText}`}>No. {String(index + 1).padStart(2, '0')}</p>
      <h3 className="relative mt-3 line-clamp-3 text-xl font-extrabold leading-tight tracking-[-0.04em] text-[var(--slot4-page-text)]">{post.title}</h3>
      <p className={`relative mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 120)}</p>
      <span className="relative mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--slot4-page-text)] opacity-70">
        Open <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

function Rail({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`${dc.layout.rail} ${className}`}>{children}</div>
}

export function EditableHomeHero({ primaryTask, primaryRoute }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Come for the ${taskLabel(primaryTask).toLowerCase()}. Stay for the connection.`
  return (
    <section className={`${pal.creamBg} relative overflow-hidden border-b border-black/[0.06]`}>
      <div className="relative mx-auto grid max-w-[1180px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-16">
        <div>
          <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{pagesContent.home.hero.badge}</p>
          <h1 className={`${dc.type.heroTitle} mt-4 max-w-xl`}>{heroTitle}</h1>
          <p className={`mt-5 max-w-xl text-base leading-8 ${pal.mutedText} sm:text-lg`}>{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryRoute} className={dc.button.primary}>Browse {taskLabel(primaryTask).toLowerCase()} <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact" className={dc.button.secondary}>Contact us</Link>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg border border-black/[0.08] bg-[var(--slot4-surface-bg)] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <div className="rounded-md bg-[var(--slot4-accent-fill)] p-6 text-white">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/80">Featured on {globalContent.site.name}</p>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{pagesContent.home.hero.featureCardTitle}</h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/82">{pagesContent.home.hero.featureCardDescription}</p>
              <form action="/search" className="mt-6 flex rounded-md bg-[var(--slot4-surface-bg)] p-1.5 text-[var(--slot4-page-text)]">
                <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold outline-none" />
                <button className="inline-flex items-center gap-2 rounded-md bg-[var(--slot4-dark-bg)] px-4 py-2.5 text-sm font-extrabold text-white"><Search className="h-4 w-4" /> Search</button>
              </form>
            </div>
            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/[0.08] bg-[var(--slot4-accent-soft)] p-4">
                <p className={`text-xs font-extrabold uppercase tracking-[0.16em] ${pal.accentText}`}>For readers</p>
                <p className="mt-2 text-sm font-bold leading-6">Cleaner article discovery, useful summaries, and steady page rhythm.</p>
              </div>
              <div className="rounded-md border border-black/[0.08] bg-[var(--slot4-gray)] p-4">
                <p className={`text-xs font-extrabold uppercase tracking-[0.16em] ${pal.accentText}`}>For writers</p>
                <p className="mt-2 text-sm font-bold leading-6">Article presentation that gives headlines and excerpts room to work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 12)
  if (!railPosts.length) return null
  return (
    <section className={`${pal.warmBg} relative border-t border-black/[0.06]`}>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-[linear-gradient(to_bottom,transparent,#ffffff)]" />
      <div className="relative mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className={dc.type.sectionTitle}>Trending now</h2>
          <Link href={primaryRoute} className="hidden text-sm font-semibold text-[var(--slot4-accent)] hover:underline sm:inline">See all</Link>
        </div>
        <Rail className="mt-8">
          {railPosts.map((post) => <MiniPoster key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
        </Rail>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(0, 8)
  if (!featured.length) return null
  return (
    <section className={`${pal.lavenderBg} relative overflow-hidden`}>
      <div className="relative mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Must-read {taskLabel(primaryTask).toLowerCase()}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.slice(0, 6).map((post, index) => (
            <FeatureTile key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const categoryPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(8)
  const feature = categoryPosts[0] || posts[0]
  const picks = categoryPosts.slice(1, 5)
  const indexPosts = categoryPosts.slice(5, 13)
  return (
    <section className={pal.grayBg}>
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <h2 className={dc.type.sectionTitle}>All the topics. All the voices.</h2>
          <p className={`mt-4 max-w-md text-base leading-8 ${pal.mutedText}`}>Find your next article faster. Browse clear sections, useful summaries, and posts arranged for reading rather than endless scrolling.</p>
          <form action="/search" className="mt-8 flex max-w-md rounded-md border border-black/[0.08] bg-[var(--slot4-surface-bg)] p-2 shadow-sm">
            <input name="q" placeholder="Search posts" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />
            <button className="inline-flex items-center gap-2 rounded-md bg-black px-5 py-3 text-sm font-semibold text-white"><Search className="h-4 w-4" /> Search</button>
          </form>
        </div>
        <div className="grid gap-4">
          {picks.map((post, index) => <WideStoryCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
      {feature ? (
        <div className="mx-auto grid max-w-[1180px] gap-8 px-4 pb-14 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:px-8">
          <Link href={postHref(primaryTask, feature, primaryRoute)} className="group relative min-h-[420px] overflow-hidden rounded-lg bg-black text-white shadow-[0_18px_70px_rgba(0,0,0,0.14)]">
            <img src={getEditablePostImage(feature)} alt={feature.title} className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.74))]" />
            <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">Featured stream</p>
              <h3 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{feature.title}</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/78">{getExcerpt(feature, 180)}</p>
            </div>
          </Link>
          <div className="grid gap-4 sm:grid-cols-2">
            {indexPosts.map((post, index) => <IndexPill key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>
      ) : null}
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className={`${pal.panelBg} relative scroll-mt-24 overflow-hidden border-t border-black/[0.06]`}>
      <div className="relative mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Where useful articles meet the right readers</h2>
          <p className={`mt-4 text-lg ${pal.mutedText}`}>Explore fresh updates, practical guides, and thoughtful articles across a calmer publishing surface.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4"><Link href="/contact" className={dc.button.primary}>Contact us</Link></div>
        </div>
      </div>
    </section>
  )
}

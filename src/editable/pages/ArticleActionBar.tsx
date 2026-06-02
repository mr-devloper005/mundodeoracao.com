'use client'

import { useEffect, useState } from 'react'
import { Bookmark, Check, Heart, MessageCircle, Share2 } from 'lucide-react'

type ArticleActionBarProps = {
  slug: string
  title: string
}

export function ArticleActionBar({ slug, title }: ArticleActionBarProps) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [shared, setShared] = useState(false)

  useEffect(() => {
    setLiked(window.localStorage.getItem(`article-liked:${slug}`) === 'true')
    setSaved(window.localStorage.getItem(`article-saved:${slug}`) === 'true')
  }, [slug])

  const toggleLiked = () => {
    const next = !liked
    setLiked(next)
    window.localStorage.setItem(`article-liked:${slug}`, String(next))
  }

  const toggleSaved = () => {
    const next = !saved
    setSaved(next)
    window.localStorage.setItem(`article-saved:${slug}`, String(next))
  }

  const scrollToComments = () => {
    document.getElementById('article-comments')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const shareArticle = async () => {
    const url = window.location.href
    if (navigator.share) {
      await navigator.share({ title, url })
    } else {
      await navigator.clipboard.writeText(url)
      setShared(true)
      window.setTimeout(() => setShared(false), 1800)
    }
  }

  return (
    <div className="sticky bottom-5 z-20 mx-auto mt-10 flex w-fit items-center gap-1 rounded-full border border-white/10 bg-[var(--slot4-dark-bg)] p-2 text-white shadow-[0_20px_48px_rgba(23,32,42,0.28)]">
      <button type="button" onClick={toggleLiked} aria-pressed={liked} className="inline-flex h-10 min-w-10 items-center justify-center gap-2 rounded-full px-3 text-sm font-black transition hover:bg-white/10" aria-label={liked ? 'Unlike article' : 'Like article'}>
        <Heart className={`h-4 w-4 ${liked ? 'fill-current text-[#ff7a3d]' : ''}`} />
        <span>{liked ? '1' : '0'}</span>
      </button>
      <button type="button" onClick={scrollToComments} className="inline-flex h-10 min-w-10 items-center justify-center gap-2 rounded-full px-3 text-sm font-black transition hover:bg-white/10" aria-label="Jump to comments">
        <MessageCircle className="h-4 w-4" />
        <span>0</span>
      </button>
      <button type="button" onClick={toggleSaved} aria-pressed={saved} className="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10" aria-label={saved ? 'Remove bookmark' : 'Bookmark article'}>
        <Bookmark className={`h-4 w-4 ${saved ? 'fill-current text-[#ff7a3d]' : ''}`} />
      </button>
      <button type="button" onClick={shareArticle} className="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10" aria-label="Share article">
        {shared ? <Check className="h-4 w-4 text-[#78d6c6]" /> : <Share2 className="h-4 w-4" />}
      </button>
    </div>
  )
}

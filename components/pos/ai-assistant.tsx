'use client'

import { ArrowRight, Sparkles, X } from 'lucide-react'

interface AIAssistantProps { open: boolean; onClose: () => void }

export function AIAssistant({ open, onClose }: AIAssistantProps) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-40 flex items-end justify-end bg-[#10231d]/20 p-0 backdrop-blur-sm sm:p-6" onClick={onClose}>
      <section onClick={(event) => event.stopPropagation()} className="w-full max-w-[430px] rounded-t-[28px] bg-[#fbfbf8] p-6 shadow-2xl sm:rounded-[28px]">
        <div className="flex items-start justify-between"><div className="flex items-center gap-3"><div className="ai-orb size-11"><Sparkles size={20} /></div><div><p className="text-xs font-bold uppercase tracking-[.14em] text-[#b0714d]">mori AI concierge</p><h2 className="font-serif text-2xl tracking-[-.04em]">Let&apos;s find your flavor</h2></div></div><button onClick={onClose} className="rounded-full bg-[#eef0eb] p-2" aria-label="Close assistant"><X size={17} /></button></div>
        <div className="mt-7 rounded-2xl rounded-tl-sm bg-[#f0e5d5] p-4 text-sm leading-6 text-[#58483a]">Hi there. I&apos;d recommend our <strong>Matcha Cloud</strong> if you want something smooth and refreshing, or <strong>Iced Oat Latte</strong> for a cozy classic.</div><div className="mt-5 flex flex-wrap gap-2"><button className="rounded-full border border-[#ded6ca] bg-white px-3 py-2 text-xs font-semibold text-[#725b48]">Something not too sweet</button><button className="rounded-full border border-[#ded6ca] bg-white px-3 py-2 text-xs font-semibold text-[#725b48]">Pair with my coffee</button></div><div className="mt-6 flex items-center gap-2 rounded-2xl border border-[#e1e3dc] bg-white px-4 py-3 text-sm text-[#a0a59e]"><input className="w-full bg-transparent outline-none" placeholder="Ask anything about our menu..." /><button className="rounded-xl bg-[#183f35] p-2 text-white" aria-label="Ask AI"><ArrowRight size={16} /></button></div>
      </section>
    </div>
  )
}


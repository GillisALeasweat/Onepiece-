import React, { useState } from 'react';
import { THEORY_SECTIONS, TheorySection } from '../data/theoryData';
import { BookOpen, Bookmark, Copy, Check, ChevronRight, Search, Sparkles } from 'lucide-react';

interface ChapterReaderProps {
  onToggleBookmark: (sectionId: string) => void;
  bookmarkedIds: Set<string>;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  onToggleBookmark,
  bookmarkedIds
}) => {
  const [selectedId, setSelectedId] = useState<string>(THEORY_SECTIONS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedQuote, setCopiedQuote] = useState<string | null>(null);

  const filteredSections = THEORY_SECTIONS.filter((sec) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      sec.title.toLowerCase().includes(q) ||
      sec.subtitle.toLowerCase().includes(q) ||
      sec.summary.toLowerCase().includes(q) ||
      sec.deepProse.some((p) => p.toLowerCase().includes(q))
    );
  });

  const activeSection = THEORY_SECTIONS.find((s) => s.id === selectedId) || THEORY_SECTIONS[0];
  const isBookmarked = bookmarkedIds.has(activeSection.id);

  const handleCopyQuote = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedQuote(text);
    setTimeout(() => setCopiedQuote(null), 2000);
  };

  return (
    <section id="chapter-reader" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
          <span>ARCHIVAL READING ROOM · 体系的論文詳説</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          全9章・大考察録 本文アーカイブ
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          各章の詳細な論証、作中の伏線・エピソードとの整合性、および原文テキストを閲覧・引用できます。
        </p>
      </div>

      {/* Main Grid: Left Chapter Navigation Sidebar + Right Long-form Reading Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Navigation Sidebar */}
        <div className="lg:col-span-4 bg-stone-900/80 border border-stone-800 rounded-2xl p-4 sticky top-20">
          {/* Search Box */}
          <div className="relative mb-3">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="考察内キーワード検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-stone-950 border border-stone-800 rounded-lg text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>

          <div className="text-[11px] uppercase font-mono text-stone-500 px-2 py-1 flex justify-between">
            <span>目次一覧 (9 CHAPTERS)</span>
            <span>{filteredSections.length} 件</span>
          </div>

          <div className="space-y-1 max-h-[520px] overflow-y-auto pr-1 mt-1">
            {filteredSections.map((sec) => {
              const isSelected = sec.id === selectedId;
              const hasBookmark = bookmarkedIds.has(sec.id);
              return (
                <button
                  key={sec.id}
                  onClick={() => setSelectedId(sec.id)}
                  className={`w-full p-2.5 rounded-lg text-left transition-all flex items-start justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-amber-950/40 text-amber-200 border border-amber-500/40 shadow-sm'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-400 font-mono mb-0.5">
                      <span>CH.{sec.number}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{sec.category}</span>
                    </div>
                    <div className="text-xs font-serif-jp font-semibold text-stone-200 truncate">
                      {sec.title}
                    </div>
                  </div>
                  {hasBookmark && (
                    <Bookmark className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-1 fill-amber-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Long-Form Reading Canvas */}
        <div className="lg:col-span-8 bg-stone-900/60 border border-stone-800 rounded-2xl p-6 sm:p-10 shadow-xl">
          {/* Chapter Header */}
          <div className="pb-6 border-b border-stone-800 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
                <span>CHAPTER {activeSection.number}</span>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span>{activeSection.category}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onToggleBookmark(activeSection.id)}
                  className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 cursor-pointer border ${
                    isBookmarked
                      ? 'bg-amber-950/60 text-amber-300 border-amber-500/50'
                      : 'bg-stone-900 text-stone-400 border-stone-700 hover:text-stone-200'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400' : ''}`} />
                  <span>{isBookmarked ? 'ブックマーク中' : '栞を挟む'}</span>
                </button>

                <button
                  onClick={() => handleCopyQuote(`【${activeSection.title}】\n${activeSection.summary}`)}
                  className="px-3 py-1 rounded text-xs bg-stone-900 text-stone-400 border border-stone-700 hover:text-stone-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="要約テキストをコピー"
                >
                  {copiedQuote ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedQuote ? 'コピー完了' : '要約をコピー'}</span>
                </button>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif-jp font-bold text-stone-100 leading-tight mb-2">
              {activeSection.title}
            </h3>
            <p className="text-sm font-serif-jp italic text-amber-300/80">
              {activeSection.subtitle}
            </p>
          </div>

          {/* Section Summary Lead Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-amber-950/20 border border-amber-900/40 mb-8">
            <span className="text-[11px] font-mono text-amber-400 uppercase font-semibold block mb-1">
              論述の要点（SUMMARY）
            </span>
            <p className="text-xs sm:text-sm text-stone-200 font-sans-jp leading-relaxed">
              {activeSection.summary}
            </p>
          </div>

          {/* Key Bullet Claims */}
          <div className="space-y-4 mb-10">
            <h4 className="text-xs uppercase font-mono text-stone-400 font-semibold tracking-wider">
              本論の論理的柱
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {activeSection.keyPoints.map((pt, i) => (
                <div key={i} className="p-4 rounded-xl bg-stone-950/60 border border-stone-800">
                  <span className="text-xs font-bold text-amber-200 block mb-1 font-serif-jp">
                    {pt.heading}
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
                    {pt.description}
                  </p>
                  {pt.quote && (
                    <div className="mt-2 pt-2 border-t border-stone-850 text-xs font-serif-jp italic text-amber-400/90">
                      {pt.quote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Deep Long-Form Narrative Prose with Drop Cap */}
          <div className="mb-10 space-y-4 font-serif-jp text-sm sm:text-base text-stone-300 leading-relaxed sm:leading-loose">
            <h4 className="text-xs uppercase font-mono text-stone-400 font-semibold tracking-wider font-sans">
              詳細論説本文
            </h4>
            {activeSection.deepProse.map((paragraph, idx) => (
              <p
                key={idx}
                className={idx === 0 ? "first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-300 first-letter:float-left first-letter:mr-2.5 first-letter:mt-0.5" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Canonical Parallels (原作との符合・伏線) */}
          <div className="pt-6 border-t border-stone-800">
            <h4 className="text-xs uppercase font-mono text-cyan-400 font-semibold tracking-wider mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>原作エピソードとの符号・伏線対応</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeSection.canonicalParallels.map((parallel, pIdx) => (
                <div key={pIdx} className="p-3.5 rounded-lg bg-stone-950/70 border border-stone-800 text-xs">
                  <div className="flex items-center justify-between text-[11px] text-cyan-300 font-mono mb-1">
                    <span className="font-bold">{parallel.event}</span>
                    <span className="text-stone-500">{parallel.chapterOrArc}</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed font-sans-jp">
                    {parallel.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Compass, Waves, Sun, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onScrollToExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToExplore }) => {
  return (
    <section id="top" className="relative w-full overflow-hidden border-b border-stone-800">
      {/* Background Hero Image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_sunken_daichi_1791208047397.jpg"
          alt="800年前に水没した古代の巨大な陸地 Daichi の海底遺跡"
          className="w-full h-full object-cover object-center filter brightness-65 saturate-90 scale-105 transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/90 via-transparent to-[#0b0f19]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          {/* Unboxed editorial category metadata */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400/90 font-medium mb-4">
            <span>THE GRAND THEORY ARCHIVE</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>全9章 体系的考察</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>空白の100年解明録</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-jp font-bold text-stone-100 tracking-tight leading-tight sm:leading-tight mb-6">
            陸地の水没と、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
              太陽の夜明け。
            </span>
          </h1>

          <div className="relative pl-4 border-l-2 border-amber-500/60 my-6">
            <p className="text-base sm:text-lg text-stone-300 font-serif-jp italic leading-relaxed">
              「かつて存在した『巨大な陸地（Daichi）』を、イム様が兵器で水没させた。<br className="hidden sm:inline" />
              『海』とは人々を分断するための檻であり、『ひとつなぎの大秘宝』とは海水を抜く巨大な栓である——」
            </p>
          </div>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl mb-8 font-sans-jp">
            古代兵器の生死、巨人族の神話的混血構造、フィガーランド家と傀儡天竜人、
            正統なDaichiと実験体Double、そしてイム様の負の永久機関を飢え死にさせるニカの「笑い」。
            物語が向かう究極の結末「世界最大の宴」までを網羅する、本格考察アーカイブ。
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onScrollToExplore}
              className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-stone-950" />
              <span>全9章の考察録を読み解く</span>
            </button>

            <a
              href="#drain-simulation"
              className="px-5 py-3 rounded-lg bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700/80 text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Waves className="w-4 h-4 text-cyan-400" />
              <span>大排水シミュレーターへ</span>
            </a>
          </div>
        </div>

        {/* 3-Core Highlights Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 pt-8 border-t border-stone-800/80">
          <div className="p-4 rounded-lg bg-stone-900/60 border border-stone-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
              <Waves className="w-4 h-4" />
              <span>物理的構造の真実</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              海面上昇200mによって沈められた大地。ワンピースの物理的正体は「海水を抜く巨大な排水栓」。
            </p>
          </div>

          <div className="p-4 rounded-lg bg-stone-900/60 border border-stone-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold mb-1">
              <Sparkles className="w-4 h-4" />
              <span>支配の永久機関</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              民衆の絶望・怒り（負の感情）を糧にするイム様。天竜人は民の憎悪を一手に受ける「肉の盾（デコイ）」。
            </p>
          </div>

          <div className="p-4 rounded-lg bg-stone-900/60 border border-stone-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-1">
              <Sun className="w-4 h-4" />
              <span>絶対カウンターとしての笑い</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              怒りを笑いに置換し、悪魔の食糧（負の感情）を完全ゼロ化。復元された大地で世界最大の宴へ。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

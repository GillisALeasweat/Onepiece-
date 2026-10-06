import React, { useState } from 'react';
import { Moon, Sun, Cpu, Flame, ShieldAlert, Sparkles, ArrowRight, RefreshCw, AlertTriangle, Layers } from 'lucide-react';

export const LunarCivilizationTechMatrix: React.FC = () => {
  const [techMode, setTechMode] = useState<'peace' | 'weapon'>('weapon');

  return (
    <section id="lunar-technology" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
          <span>THE LUNAR LEGACY & ORIGINAL SIN · 月の文明と原罪</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          「テクノロジーの伝道者」としての月の文明と、<br className="hidden sm:inline" />
          イム様による「兵器への転用」という最初の罪
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          エネルの扉絵連載で描かれた『月の古代都市ビルカ』。
          資源不足によって青い星へ降り立った月の民がもたらしたのは、世界を豊かにするための<span className="text-cyan-300 font-semibold">善意の「技術供与」</span>でした。
          しかし、陸で虐げられていた復讐者イム様は、その平和の科学を<span className="text-rose-400 font-semibold">「世界を沈める破壊兵器」</span>へと歪めて転用したのです。
        </p>
      </div>

      {/* 2-Way Branching Paradigm: Peace vs Weaponization */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Left: Path of Light (Ancient Kingdom) */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-cyan-950/20 via-stone-900 to-stone-950 border border-cyan-800/40 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-4">
              <div className="flex items-center gap-2">
                <Moon className="w-5 h-5 text-cyan-400" />
                <span className="text-xs uppercase font-mono text-cyan-400 font-semibold">PATH OF LIGHT · 本来の意図</span>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-700/50">
                善意の技術供与
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100 mb-3">
              巨大な王国の繁栄と共生
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-jp mb-6">
              月からもたらされた無限エネルギー、自律型ロボット、遺伝子（血統因子）の知識。
              本来は人間や神々（Daichiの住民）の暮らしを豊かにし、飢餓や病を根絶するための「知恵の贈り物」でした。
              ベガパンクが語った「900年前の高度な巨大な王国」の文明基盤は、すべてこの月の科学に支えられていました。
            </p>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="p-3 bg-stone-950/80 rounded-lg border border-stone-850">
                <span className="text-cyan-300 font-bold block mb-1">無限の自然エネルギー（ウラノス・天候調和）</span>
                大気を循環させ、太陽の光と風を豊かに循環させるクリーンエネルギー。
              </div>
              <div className="p-3 bg-stone-950/80 rounded-lg border border-stone-850">
                <span className="text-cyan-300 font-bold block mb-1">生態系との対話と共生（ポセイドン・ノア）</span>
                海王類と心を通わせ、巨大な舟ノアで世界中の命を運ぶ愛の調和技術。
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-cyan-900/40 text-[11px] text-cyan-300 font-mono">
            ※Dr.ベガパンクの回想「科学そのものに善悪はない」
          </div>
        </div>

        {/* Right: Path of Darkness (Imu's Original Sin) */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-rose-950/20 via-stone-900 to-stone-950 border border-rose-800/40 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-4">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-rose-400" />
                <span className="text-xs uppercase font-mono text-rose-400 font-semibold">PATH OF WRATH · 最初の罪</span>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-700/50">
                イム様による兵器転用
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100 mb-3">
              復讐者による「兵器化」の始祖
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-jp mb-6">
              豊かな陸の神々や人々に虐げられていたイム様は、個人の力では神々に抗えませんでした。
              そこでイム様が目をつけたのが、月からもたらされた純粋な工作力とエネルギー技術でした。
              イム様はその科学を「大地を破壊し世界を海へ沈めるための殺戮兵器（プルトン等）」へと最初に歪めて転用したのです。
            </p>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="p-3 bg-stone-950/80 rounded-lg border border-stone-850">
                <span className="text-rose-400 font-bold block mb-1">死の人工戦艦プルトンの建造</span>
                島一つを跡形もなく消し去り、大地を粉砕して海水を流入させる世界水没兵器。
              </div>
              <div className="p-3 bg-stone-950/80 rounded-lg border border-stone-850">
                <span className="text-rose-400 font-bold block mb-1">悪魔の実回収システムの開発</span>
                散らばる神々の力を重力で捕獲し、多重格納兵器として管理する技術の歪曲。
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-rose-900/40 text-[11px] text-rose-300 font-mono">
            ※800年間繰り返される「平和の科学が虐殺の道具へ変貌する悲劇」
          </div>
        </div>
      </div>

      {/* The 800-Year Echo: Vegapunk's Mother Flame Comparison */}
      <div className="p-6 sm:p-10 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-2xl">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-3">
          <RefreshCw className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span>THE 800-YEAR REPETITION · ベガパンクの慟哭と歴史のリフレイン</span>
        </div>

        <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100 mb-6">
          800年前と現代の完全一致：マザーフレイムの悲劇
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 800 Years Ago */}
          <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-3">
            <span className="text-xs font-bold text-cyan-400 font-mono uppercase">800年前（空白の100年）</span>
            <h4 className="text-base font-bold text-stone-100 font-serif-jp">
              月の無限エネルギー ➔ 古代兵器（大地水没）
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
              月の民がもたらした純粋な動力源を、イム様と20の王が「世界を沈める兵器」のエネルギーとして悪用。
              科学者が意図しなかった地球規模の大殺戮へと転用された。
            </p>
          </div>

          {/* Present Era */}
          <div className="p-5 rounded-2xl bg-stone-950 border border-amber-900/50 space-y-3">
            <span className="text-xs font-bold text-amber-400 font-mono uppercase">現代（エッグヘッド編）</span>
            <h4 className="text-base font-bold text-stone-100 font-serif-jp">
              マザーフレイム ➔ ルルシア王国消滅
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
              ベガパンクが「世界中の人々に無償のエネルギーを行き渡らせる」ために開発した融合炉マザーフレイムを、
              イム様が古代兵器ウラノスの動力源として横取りし、一瞬でルルシアを消滅させた。
            </p>
          </div>
        </div>

        {/* Vegapunk's Lament Callout */}
        <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-amber-950/20 via-stone-950 to-stone-950 border border-amber-500/30">
          <p className="text-xs sm:text-sm text-stone-200 font-serif-jp italic leading-relaxed">
            「科学そのものに善悪はない…!! 人を救う火も、人を焼く火も、同じ火なのじゃ…!!」<br />
            ——ベガパンクが遺言放送で世界に語ったこの告白こそ、800年前に月の文明が地球にもたらしたテクノロジーが、
            <strong className="text-amber-300 ml-1">「復讐者イム様の手によって死の兵器へと歪められた原罪」</strong>の告発そのものでした。
          </p>
        </div>
      </div>
    </section>
  );
};

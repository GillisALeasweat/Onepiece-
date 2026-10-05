import React, { useState } from 'react';
import { GitBranch, ShieldAlert, Sun, Users, Flame } from 'lucide-react';

export const BloodlineLokiViewer: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<'giants' | 'oars' | 'loki'>('loki');

  return (
    <section id="giants-and-bloodline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
          <span>CHAPTER 03 · 古代の血統構造</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          「神と人間のハーフ」としての巨人族と、<br className="hidden sm:inline" />
          エルバフ・ロキ王子の真意
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          なぜ巨人族だけが数百年を生き、規格外の巨躯と人間と同じ感情・知性を持つのか？
          ギリシャ神話において巨人が神と人間の交わりから生まれたように、巨人族はかつての大地で起きた「神々（ルナリア族等）」と「人間（陸の住人）」の混血（ハーフ）でした。
        </p>
      </div>

      {/* Interactive Genealogy Hierarchy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Genealogy Tree Visual */}
        <div className="lg:col-span-6 bg-stone-900/80 border border-stone-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-6 flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-amber-400" />
            <span>血統分岐ダイアグラム</span>
          </h3>

          {/* Root Ancestors */}
          <div className="grid grid-cols-2 gap-4 pb-6 border-b border-stone-800">
            <div className="p-4 rounded-xl bg-stone-950/80 border border-amber-900/40">
              <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold mb-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>古代の神々</span>
              </div>
              <p className="text-[11px] text-stone-400">ルナリア族等（火・剛力・異常な生命力）</p>
            </div>

            <div className="p-4 rounded-xl bg-stone-950/80 border border-cyan-900/40">
              <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-bold mb-1">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>陸の人間</span>
              </div>
              <p className="text-[11px] text-stone-400">Daichiの住人（知性・情緒・文化の継承）</p>
            </div>
          </div>

          {/* Interbreeding Arrow */}
          <div className="flex justify-center my-3 text-stone-500 text-xs font-mono">
            ↓ 800年以上前の交配・混血（神話構造）
          </div>

          {/* First Tier: Giants */}
          <div className="space-y-3">
            <button
              onClick={() => setActiveBranch('giants')}
              className={`w-full p-4 rounded-xl text-left transition-all border flex items-center justify-between cursor-pointer ${
                activeBranch === 'giants'
                  ? 'bg-amber-950/30 border-amber-500/50 shadow-md'
                  : 'bg-stone-950/40 border-stone-800 hover:border-stone-700'
              }`}
            >
              <div>
                <span className="text-xs text-stone-400 block">基本種（安定混血）</span>
                <span className="text-sm font-bold text-stone-100 font-serif-jp">エルバフの巨人族（ドリー、ブロギー他）</span>
                <p className="text-[11px] text-stone-400 mt-0.5">神の巨躯と寿命（約300年） ＋ 人間の心と文化</p>
              </div>
              <span className="text-xs text-amber-400/80">詳細 »</span>
            </button>

            {/* Second Tier: Oars Ancient Giants */}
            <button
              onClick={() => setActiveBranch('oars')}
              className={`w-full p-4 rounded-xl text-left transition-all border flex items-center justify-between cursor-pointer ${
                activeBranch === 'oars'
                  ? 'bg-amber-950/30 border-amber-500/50 shadow-md'
                  : 'bg-stone-950/40 border-stone-800 hover:border-stone-700'
              }`}
            >
              <div>
                <span className="text-xs text-stone-400 block">亜種・神の形質濃厚</span>
                <span className="text-sm font-bold text-stone-100 font-serif-jp">古代巨人族・オーズ一族</span>
                <p className="text-[11px] text-stone-400 mt-0.5">異形の頭部（角）・数倍の体躯・国引きの怪力</p>
              </div>
              <span className="text-xs text-amber-400/80">詳細 »</span>
            </button>

            {/* Third Tier: Loki Prince */}
            <button
              onClick={() => setActiveBranch('loki')}
              className={`w-full p-4 rounded-xl text-left transition-all border-2 flex items-center justify-between cursor-pointer ${
                activeBranch === 'loki'
                  ? 'bg-amber-950/50 border-amber-400 shadow-lg shadow-amber-500/10'
                  : 'bg-stone-950/60 border-amber-900/40 hover:border-amber-700'
              }`}
            >
              <div>
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>王家の特異点（完全な先祖返り）</span>
                </div>
                <span className="text-base font-bold text-stone-100 font-serif-jp">エルバフ王子・ロキ</span>
                <p className="text-[11px] text-stone-300 mt-0.5">神の血が超濃厚に濃縮発現。世界政府が恐れる生ける神話</p>
              </div>
              <span className="text-xs font-bold text-amber-300">注目 »</span>
            </button>
          </div>
        </div>

        {/* Right Column: Deep Explanation Panel */}
        <div className="lg:col-span-6 space-y-4">
          {activeBranch === 'loki' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-950/30 to-stone-900 border border-amber-700/50 shadow-xl">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Sun className="w-4 h-4" />
                <span>ロキ王子の真意と存在意義</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100 mb-4">
                なぜ世界政府・イム様はロキに手を出せないのか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed space-y-3 font-sans-jp mb-4">
                エルバフの王家に生まれたロキは、数百年・数千年に一度現れる<strong className="text-amber-200">「神の血が超濃厚に発現した完全な先祖返り」</strong>です。
                彼が放つ圧倒的な威圧感と異質さは、世界政府が軍事力や海軍でエルバフを屈服させることが不可能な根本原因となっています。
              </p>
              <div className="p-4 bg-stone-950/80 rounded-xl border border-stone-800 text-xs text-stone-300 space-y-2">
                <p className="font-semibold text-amber-300">なぜエルバフにニカ信仰（太陽の神）が残るのか？</p>
                <p className="leading-relaxed">
                  巨人族の祖先が古代の大地（Daichi）で神々と人間として共に生きていたため、彼らのDNAには「太陽の神ニカ」の記憶が生々しく刻まれています。
                  ロキが鎖に縛られながらもニカを待望し、ルフィと接触したことは、神と人間の盟約が再び動き出す合図です。
                </p>
              </div>
            </div>
          )}

          {activeBranch === 'oars' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/90 border border-stone-800 shadow-xl">
              <span className="text-xs font-semibold text-stone-400 block mb-1">古代巨人族</span>
              <h3 className="text-xl font-serif-jp font-bold text-stone-100 mb-3">
                オーズ一族：神の血が濃く残った「国引きの亜種」
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                魔人オーズやオーズJr.に見られる特徴的な「角」と「通常の巨人の3倍近い巨躯」。
                これはルナリア族など太古の角を持つ神々の遺伝的特徴が強く表出した先祖返りの形態です。
                「国引き」という島々を移動させる伝説も、かつて水没させられた大地（Daichi）を繋ぎ止めようとした古代の営みの痕跡と考えられます。
              </p>
            </div>
          )}

          {activeBranch === 'giants' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/90 border border-stone-800 shadow-xl">
              <span className="text-xs font-semibold text-stone-400 block mb-1">基本構造</span>
              <h3 className="text-xl font-serif-jp font-bold text-stone-100 mb-3">
                半神半人としての精神性と誇り
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                純粋な神でもなく、脆弱な人間でもない。神の寿命と体躯を持ちながら人間の知性と情緒を持つ巨人族は、
                誇り高く戦い、大地と太陽の恩恵を何よりも重んじます。
                世界政府がパンクハザード等で巨人の再現（子供の巨大化実験）に狂奔したのは、この「神と人間のハイブリッド」が持つ絶対的な生命力への恐怖と憧憬ゆえでした。
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Eye, Shield, UserCheck, Skull, ArrowDown, Sparkles } from 'lucide-react';

export const FigarlandHierarchy: React.FC = () => {
  return (
    <section id="figarland-structure" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
          <span>CHAPTER 04 · 傀儡と血統の真実</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          天竜人の真実とフィガーランド家（傀儡の構造）
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          なぜ天竜人は頭にカプセル（泡）を被り、常軌を逸した愚行を繰り返すのか？
          彼らは元々「陸（Daichi）」に生きていた人間であり、イム様が真の姿を隠蔽するために作り上げた<span className="text-amber-300 font-semibold">「肉の盾（デコイ）」</span>でした。
        </p>
      </div>

      {/* 3-Tier Puppet Architecture Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Tier Diagram */}
        <div className="lg:col-span-7 bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">
            支配ピラミッド：人形遣いと肉の盾
          </div>

          {/* Top: Imu */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-stone-950 via-rose-950/30 to-stone-950 border border-rose-900/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-rose-400 animate-pulse" />
              <div>
                <span className="text-xs text-rose-400 font-semibold">虚の玉座の主</span>
                <h4 className="text-base sm:text-lg font-bold text-stone-100 font-serif-jp">イム様（真の独裁者）</h4>
              </div>
            </div>
            <span className="text-[11px] text-stone-400 font-mono">黒幕／負の感情の捕食者</span>
          </div>

          <div className="flex justify-center -my-2 text-rose-500/70">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Middle: Figarland & God's Knights */}
          <div className="p-5 rounded-xl bg-stone-950/80 border border-amber-500/40 relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                Figure（人形・傀儡）の地
              </span>
              <span className="text-[10px] bg-amber-950/80 text-amber-200 border border-amber-800/60 px-2 py-0.5 rounded">
                現場監督・監視役
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-stone-100 font-serif-jp mb-1">
              フィガーランド家（神の騎士団）
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
              イム様の直接の糸で操られる「人形の親玉」。他の人形たち（一般天竜人）が暴走した際に処刑・統制する役目を担う。
            </p>
          </div>

          <div className="flex justify-center -my-2 text-amber-500/70">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Bottom: Decoy Celestial Dragons */}
          <div className="p-5 rounded-xl bg-stone-950/50 border border-stone-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider">
                隔離された実験体
              </span>
              <span className="text-[10px] bg-stone-900 text-stone-400 border border-stone-700 px-2 py-0.5 rounded">
                肉の盾（デコイ）
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-stone-200 font-serif-jp mb-1">
              天竜人（20の王の末裔）
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed font-sans-jp">
              気泡カプセルで隔離され、特権を与えられて愚行を繰り返す。民衆の憎悪を一手に集めることで、
              真の支配者であるイム様の存在から世界中の目を逸らす「標的の防波堤」。
            </p>
          </div>
        </div>

        {/* Shanks Special Analysis Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-stone-900 via-amber-950/20 to-stone-900 border border-amber-600/40 shadow-xl">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>運命を拒絶した赤髪</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100 mb-3">
              なぜシャンクスは「Dの意志」を継いだのか？
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed space-y-3 font-sans-jp mb-4">
              天竜人トップの「フィガーランド家」の赤ん坊としてゴッドバレーで拾われたシャンクス。
              本来なら世界を操る傀儡（Figure）の首領となる血筋でした。
            </p>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="p-3 bg-stone-950/80 rounded-lg border border-stone-800">
                <span className="text-amber-300 font-bold block mb-1">1. 天竜人の元々のルーツ＝陸の人間（D）</span>
                20の王たちも元々は太古のDaichiに生きた人間。シャンクスの血の奥底にも「Daichiの記憶」が眠っていた。
              </div>

              <div className="p-3 bg-stone-950/80 rounded-lg border border-stone-800">
                <span className="text-amber-300 font-bold block mb-1">2. ロジャーが与えた自由の教育</span>
                ロジャーは赤ん坊のシャンクスにDaichiの人間の魂を感じ取り、人形劇の舞台から引き離して育てた。
              </div>

              <div className="p-3 bg-stone-950/80 rounded-lg border border-stone-800">
                <span className="text-amber-300 font-bold block mb-1">3. 傀儡を拒み、世界の栓を抜く者の導き手に</span>
                イム様に踊らされる道を捨て、真の解放者（ルフィ）に己の腕と麦わら帽子を託した。
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-amber-900/50 text-[11px] text-amber-200/80 italic font-serif-jp">
            「人形として生きるか、世界を繋ぐ海賊として死ぬか——シャンクスが選んだのは、かつての大地の夜明けだった。」
          </div>
        </div>
      </div>
    </section>
  );
};

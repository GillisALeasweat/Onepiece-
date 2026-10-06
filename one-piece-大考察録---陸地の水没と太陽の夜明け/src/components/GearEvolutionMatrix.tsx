import React, { useState } from 'react';
import { Flame, Sparkles, Smile, Zap, Heart, ShieldAlert, ArrowRight, Sun, Skull } from 'lucide-react';

export const GearEvolutionMatrix: React.FC = () => {
  const [selectedGear, setSelectedGear] = useState<'gear2' | 'gear4' | 'gear5'>('gear5');

  const gearData = {
    gear2: {
      name: 'ギア2 ＆ ギア3',
      arc: 'エニエス・ロビー編',
      trigger: '「誰も失いたくない」という絶望と激怒',
      triggerDetail: '青キジに惨敗し、ロビンが世界政府に奪われ、仲間を永遠に失うことへの極限の恐怖と理不尽に対する激怒。',
      expression: '命削りの変身・血流加速と肉体の酷使',
      expressionDetail: '自らの寿命をすり減らしてでも仲間を取り戻すための、肉体強化・速度と質量による直接突破。',
      output: '純粋な身体能力強化・力づくの奪還',
      appearance: '蒸気を噴き上げる紅潮した肉体／骨風船による巨大打撃',
      counterType: '正面突破（怒りを動力源に肉体を極限酷使）',
      icon: Zap,
      color: 'text-amber-400',
      borderColor: 'border-amber-800/60',
      bgColor: 'bg-amber-950/20'
    },
    gear4: {
      name: 'ギア4（バウンドマン / スネイクマン）',
      arc: 'ドレスローザ編 / ホールケーキアイランド編 / ワノ国編',
      trigger: '人々の尊厳の蹂躙と飢餓への「ぶち壊してやる」という真っ直ぐな激怒',
      triggerDetail: 'ドフラミンゴが国民を鳥かごで操り人形にし、カイドウとおろちがワノ国を毒海にして民衆を飢えさせたことへの底知れぬ怒り。',
      expression: '怒髪天を突く仁王像・鬼の形相',
      expressionDetail: '怒りの感情がそのまま黒光りする武装色覇気と筋力に直結。「力による圧砕」として外へ噴出。',
      output: '力による圧砕・圧倒的暴力と威圧',
      appearance: '歌舞伎の隈取り、目を吊り上げた仁王像の威容、弾み続ける巨躯',
      counterType: '怒りの直結噴出（相手の暴力に対し、より強大な暴力で粉砕）',
      icon: Flame,
      color: 'text-rose-400',
      borderColor: 'border-rose-800/60',
      bgColor: 'bg-rose-950/20'
    },
    gear5: {
      name: 'ギア5（太陽の神ニカ）',
      arc: 'ワノ国・鬼ヶ島決戦〜エッグヘッド編',
      trigger: '命を絶たれ、約束を果たせなくなる直前の極限の無念と激怒',
      triggerDetail: 'CP0の理不尽な横槍によって不本意な死を迎え、お玉に腹いっぱい飯を食わせる約束を破らされる直前の極限の憤怒（トリガーは過去と全く同じ！）。',
      expression: '怒りを「解放のドラム」と「陽気な笑い」へと流し込む感情置換',
      expressionDetail: '自我（怒り）を保持したまま、エネルギーをニカの性質に注ぎ込み、憎悪を爆笑と可笑しさへ180度反転。',
      output: '最高峰の可笑しさと笑い・敵の理不尽のギャグ化',
      appearance: '純白の髪と衣、ドンドットットのドラムビート、跳ね回り笑い転げる自由な姿',
      counterType: '概念的兵糧攻め（惨劇をギャグに上書きし、悪魔の負の燃料をゼロ化）',
      icon: Sun,
      color: 'text-amber-300',
      borderColor: 'border-amber-400',
      bgColor: 'bg-amber-950/40'
    }
  };

  const current = gearData[selectedGear];

  return (
    <section id="gear-evolution" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
          <span>CHAPTER 08 · DEEP ANALYSIS · 変身の系譜学</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          ギア変身の歴史に見る「怒り」と「ルフィの自我」
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          ルフィの変身トリガーは、ギア2からギア5まで一貫して<span className="text-rose-400 font-semibold">「理不尽への激怒（ルフィの自我）」</span>でした。
          ギア4までは怒りがそのまま鬼の形相と力による圧砕として現れていたのに対し、
          ギア5ではトリガーは同じ激怒でありながら、到達点だけが<span className="text-amber-300 font-semibold">「最高峰の可笑しさと笑い」</span>へと昇華されています。
        </p>
      </div>

      {/* 3-Gear Chronological Navigation Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {(['gear2', 'gear4', 'gear5'] as const).map((gearKey) => {
          const item = gearData[gearKey];
          const isSelected = selectedGear === gearKey;
          const Icon = item.icon;
          return (
            <button
              key={gearKey}
              onClick={() => setSelectedGear(gearKey)}
              className={`p-5 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? `${item.bgColor} ${item.borderColor} shadow-lg ring-1 ring-amber-400/50`
                  : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">{item.arc}</span>
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <h3 className="text-base sm:text-lg font-bold font-serif-jp text-stone-100 mb-1">{item.name}</h3>
                <p className="text-xs text-stone-400 line-clamp-2 font-sans-jp">{item.trigger}</p>
              </div>
              <div className="mt-4 pt-2 border-t border-stone-800 flex items-center justify-between text-[11px]">
                <span className="text-stone-400">アウトプット：</span>
                <span className={`font-semibold ${item.color} truncate max-w-[150px]`}>{item.output}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Focused Gear Deep Comparison Board */}
      <div className={`p-6 sm:p-8 rounded-2xl border ${current.borderColor} ${current.bgColor} mb-12 shadow-xl`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800 mb-6">
          <div>
            <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">{current.arc}</span>
            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100">{current.name}</h3>
          </div>
          <span className="px-3 py-1 rounded bg-stone-950/80 text-stone-300 border border-stone-800 text-xs font-semibold self-start sm:self-auto">
            {current.counterType}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          {/* Left: Trigger */}
          <div className="p-5 rounded-xl bg-stone-950/80 border border-stone-850 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold uppercase tracking-wider text-xs">
              <Flame className="w-4 h-4" />
              <span>変身のトリガー（ルフィの自我）</span>
            </div>
            <h4 className="text-stone-100 font-serif-jp font-bold text-sm sm:text-base">{current.trigger}</h4>
            <p className="text-stone-300 leading-relaxed font-sans-jp text-xs">{current.triggerDetail}</p>
          </div>

          {/* Right: Expression & Output */}
          <div className="p-5 rounded-xl bg-stone-950/80 border border-stone-850 space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-wider text-xs">
              <Sun className="w-4 h-4" />
              <span>変身後のアウトプット（到達点）</span>
            </div>
            <h4 className="text-stone-100 font-serif-jp font-bold text-sm sm:text-base">{current.output}</h4>
            <p className="text-stone-300 leading-relaxed font-sans-jp text-xs">{current.expressionDetail}</p>
          </div>
        </div>

        {/* Visual & Philosophical Description */}
        <div className="mt-6 p-4 rounded-xl bg-stone-950/60 border border-stone-800 text-xs text-stone-300 flex items-start gap-3">
          <span className="text-stone-400 font-mono shrink-0">容姿と本質：</span>
          <span className="font-serif-jp text-stone-200">{current.appearance}</span>
        </div>
      </div>

      {/* The 3-Step Pipeline: Trigger -> Transform -> Output */}
      <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/90 border border-stone-800 shadow-xl">
        <div className="text-xs uppercase font-mono text-amber-400 font-semibold mb-2">
          THE TRANSCENDENT MECHANISM · 感情転換の3段階パイプライン
        </div>
        <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100 mb-6">
          「怒り」をトリガーにしつつ、到達点が「笑い」に昇華した凄み
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {/* Step 1 */}
          <div className="p-5 rounded-xl bg-stone-950 border border-rose-900/40 relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-rose-400 uppercase">PHASE 01 · 始動</span>
              <Flame className="w-4 h-4 text-rose-400" />
            </div>
            <h4 className="text-sm font-bold text-stone-100 font-serif-jp mb-1">
              トリガー（ルフィの自我）
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
              目の前の悲劇や理不尽に対する激怒。<br />
              これはギア2からギア5まで一切変わらない、ルフィという人間の根本。
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-xl bg-stone-950 border border-amber-900/40 relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-amber-400 uppercase">PHASE 02 · 転換</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <h4 className="text-sm font-bold text-stone-100 font-serif-jp mb-1">
              転換（ニカの性質）
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
              激怒のエネルギーを、ニカの持つ「解放のドラム」と「陽気な笑い」の器の中にそのまま流し込む。
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-xl bg-stone-950 border border-amber-500/50 relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-amber-300 uppercase">PHASE 03 · 到達点</span>
              <Smile className="w-4 h-4 text-amber-300" />
            </div>
            <h4 className="text-sm font-bold text-stone-100 font-serif-jp mb-1">
              到達点（ギア5）
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
              憎しみの殴り合いではなく、敵の理不尽そのものをバカバカしいギャグに変えて無力化・解放する。
            </p>
          </div>
        </div>

        {/* Contrast Breakdown: Gear 4 vs Gear 5 */}
        <div className="mt-8 pt-6 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/30">
            <span className="text-rose-400 font-bold block mb-1">ギア4までの到達点：【怒りの直接噴出】</span>
            怒りがそのまま鬼の形相（仁王像）となり、筋肉と武装色で敵を圧砕する。しかし、負の感情を食らう悪魔（イム様）に対しては、怒りは更なる燃料を与えてしまう。
          </div>
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30">
            <span className="text-amber-300 font-bold block mb-1">ギア5の到達点：【笑いへの完全昇華】</span>
            激怒をトリガーとしながらも、アウトプットを爆笑とギャグに反転。理不尽をコント化して負の感情をゼロにし、悪魔の永久機関を餓死させる絶対の勝利条件。
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ShieldAlert, Compass, Sparkles, MessageSquare, Anchor, Sun, ArrowRight, Eye, Key } from 'lucide-react';

export const PirateKingPropagandaMatrix: React.FC = () => {
  const [activePerspective, setActivePerspective] = useState<'government' | 'roger' | 'luffy'>('roger');

  const perspectives = {
    government: {
      title: '世界政府・イム様の意図',
      role: '「大地の解放者」から「海の罪人」へのすり替え',
      definition: '「海という檻の中の悪党どもの頂点（大罪人）」',
      strategy: 'ラフテルに到達し世界の真実（陸地水没）を知ったロジャー。彼をそのままにすれば民衆が「本来の大地」を求めて反乱を起こす。そのため「海賊王」という悪党のレッテルを貼り、偉業を「単なる財宝強奪の暴挙」として矮小化・プロパガンダした。',
      icon: Eye,
      color: 'text-rose-400',
      border: 'border-rose-800/60',
      bg: 'bg-rose-950/20',
      quote: '「奴は全財産を手に入れた凶悪な海賊の王だ。決して思想に惑わされるな」'
    },
    roger: {
      title: 'ゴールド・ロジャーの策略',
      role: '政府のプロパガンダを逆手に取った「世紀のトラップ」',
      definition: '「次の時代を世界の栓（ラフテル）へ誘導する撒き餌」',
      strategy: '「おれは海賊王なんて呼ばれちゃいねェよ」と苦笑しつつ、政府が作った偽りの称号を処刑台で完璧に逆利用。「海賊王の遺産（この世の全て）」をエサに全世界の人間を海へ解き放ち、イム様が守ろうとした海の世界そのものをラフテルへの進軍路に変えた。',
      icon: Key,
      color: 'text-amber-400',
      border: 'border-amber-500/50',
      bg: 'bg-amber-950/30',
      quote: '「おれの財宝か？ 欲しけりゃくれてやる… 探せ！ この世の全てをそこに置いてきた！」'
    },
    luffy: {
      title: 'モンキー・D・ルフィの到達点',
      role: '世界の栓を抜き、海という檻を終わらせる「真の自由」',
      definition: '「支配なんかしねェ。この海で一番自由な奴」',
      strategy: '名声や支配には一切興味を示さず、己の自由と友の笑顔のために進む。ラフテルで世界の栓を抜き、海という檻を物理的に終わらせ、復元された広大な大地で全人類と手を繋ぐ「世界最大の宴」を完成させる。',
      icon: Sun,
      color: 'text-amber-300',
      border: 'border-amber-400',
      bg: 'bg-amber-950/40',
      quote: '「支配なんかしねェよ。この海で一番自由な奴が、海賊王だ！」'
    }
  };

  const current = perspectives[activePerspective];

  return (
    <section id="pirate-king-truth" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
          <span>POLITICAL SEMANTICS · 言語支配と逆転の策略</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          「海賊王」というレッテルの真実：<br className="hidden sm:inline" />
          政府のプロパガンダと、ロジャーの世紀の罠
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          イム様と世界政府にとって最も恐ろしかったのは、<span className="text-rose-400 font-semibold">「世界の栓を抜いて大地を復活させる者」</span>の出現でした。
          世界政府は真実の漏洩を防ぐためロジャーに「海賊王（海の悪党の頂点）」という悪のレッテルを貼りましたが、
          ロジャーはその看板を逆手に取り、全世界をラフテルへ誘導する<span className="text-amber-300 font-semibold">最大の撒き餌（トラップ）</span>に変えたのです。
        </p>
      </div>

      {/* 3-Perspective Comparative Navigation Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {(['government', 'roger', 'luffy'] as const).map((key) => {
          const item = perspectives[key];
          const isSelected = activePerspective === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setActivePerspective(key)}
              className={`p-5 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? `${item.bg} ${item.border} shadow-lg ring-1 ring-amber-400/50`
                  : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">PERSPECTIVE</span>
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <h3 className="text-base sm:text-lg font-bold font-serif-jp text-stone-100 mb-1">{item.title}</h3>
                <p className="text-xs text-stone-400 line-clamp-2 font-sans-jp">{item.role}</p>
              </div>
              <div className="mt-4 pt-2 border-t border-stone-800 flex items-center justify-between text-[11px]">
                <span className="text-stone-400">定義：</span>
                <span className={`font-semibold ${item.color} truncate max-w-[170px]`}>{item.definition}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Focused Perspective Showcase Board */}
      <div className={`p-6 sm:p-8 rounded-2xl border ${current.border} ${current.bg} mb-12 shadow-xl`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800 mb-6">
          <div>
            <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">{current.title}</span>
            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100">{current.role}</h3>
          </div>
          <div className="p-2 rounded-lg bg-stone-950/80 border border-stone-800 text-xs text-stone-200 font-serif-jp italic max-w-md">
            {current.quote}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-mono uppercase text-stone-400 font-semibold mb-1">
              戦略と深層の意図
            </h4>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans-jp">
              {current.strategy}
            </p>
          </div>
        </div>
      </div>

      {/* The 3-Way Hegemony Matrix */}
      <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/80 border border-stone-800 shadow-xl">
        <div className="text-xs uppercase font-mono text-amber-400 font-semibold mb-2">
          THE TRIANGULAR CONFLICT · 「海賊王」を巡る3者の宿命の相克
        </div>
        <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100 mb-6">
          イム様が仕掛け、ロジャーが罠に変え、ルフィが完成させる
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-stone-950 border border-rose-900/40">
            <span className="text-rose-400 font-bold block text-xs mb-1 font-serif-jp">1. イム様（世界政府）</span>
            <span className="text-xs text-stone-300 font-semibold block mb-2">【海賊王＝悪のレッテル】</span>
            <p className="text-xs text-stone-400 leading-relaxed font-sans-jp">
              世界を海に閉じ込め、大地の真実を知った者を「海の凶悪犯」に仕立て上げて支配を永続させようとした。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-950 border border-amber-900/40">
            <span className="text-amber-400 font-bold block text-xs mb-1 font-serif-jp">2. ゴールド・ロジャー</span>
            <span className="text-xs text-stone-300 font-semibold block mb-2">【海賊王＝時代への撒き餌】</span>
            <p className="text-xs text-stone-400 leading-relaxed font-sans-jp">
              偽りの称号を逆手に取り、自分の処刑台を大舞台にして次の世代（世界の栓抜き）をラフテルへ誘導した。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-950 border border-amber-500/50">
            <span className="text-amber-300 font-bold block text-xs mb-1 font-serif-jp">3. モンキー・D・ルフィ</span>
            <span className="text-xs text-stone-300 font-semibold block mb-2">【海賊王＝一番自由な奴】</span>
            <p className="text-xs text-stone-400 leading-relaxed font-sans-jp">
              世界の栓を抜き、海という檻を終わらせ、復元された大地の上で全人類と手を繋ぐ「世界最大の宴」を完成させる。
            </p>
          </div>
        </div>

        {/* Conclusion Quote */}
        <div className="mt-6 pt-4 border-t border-stone-850 text-xs sm:text-sm text-stone-300 font-serif-jp leading-relaxed">
          <strong className="text-amber-300">考察の真髄：</strong>
          イム様が「海の世界」を守るために作った「海賊王」というプロパガンダそのものが、
          ロジャーの機転によって、最終的に「海を終わらせ、陸を取り戻す者（ルフィ）」を引き寄せるための最大の推進力となった。
          支配者の言葉を解放の兵器へと塗り替える——これぞまさに『Dの意志』の真骨頂なのです。
        </div>
      </div>
    </section>
  );
};

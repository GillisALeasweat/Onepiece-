import React, { useState } from 'react';
import { 
  Flame, Sparkles, Smile, ShieldAlert, Zap, HeartCrack, Sun, 
  RotateCw, RefreshCw, Skull, ArrowRight, Eye, Shield, Users 
} from 'lucide-react';

export const ImuEngineAndNikaCounter: React.FC = () => {
  const [battleMode, setBattleMode] = useState<'rage' | 'nika'>('nika');
  const [activeLoopStep, setActiveLoopStep] = useState<number>(0);

  const loopSteps = [
    {
      step: 1,
      title: '虚の玉座のイム様：統治と命令',
      actor: 'イム様（復讐者）',
      action: '天竜人に絶対特権を与え、下々民（一般人）に対する無制限の虐待・搾取を容認・放任',
      detail: '自らはパンゲア城奥深くに身を隠し、下々の怒りが自分に直接向かない構造を敷く。',
      icon: Eye,
      color: 'text-rose-400',
      borderColor: 'border-rose-800/60',
      bgColor: 'bg-rose-950/20'
    },
    {
      step: 2,
      title: '肉の盾（フィギュア）：天竜人の横暴',
      actor: '天竜人（20の王の末裔）',
      action: '下々民を奴隷化し、理不尽な虐殺・差別・略奪の限りを尽くす',
      detail: '頭にカプセルを被った愚物として振る舞い、世界中の民衆からのヘイト（憎悪）を一手に集める防波堤（デコイ）。',
      icon: Shield,
      color: 'text-amber-400',
      borderColor: 'border-amber-800/60',
      bgColor: 'bg-amber-950/20'
    },
    {
      step: 3,
      title: '絶望と怒りの生成：民衆の苦悶',
      actor: '世界中の民衆（被支配層）',
      action: '天竜人に対する激しい怨嗟・理不尽への怒り・絶望という負の感情が永遠に湧き出す',
      detail: '天上金による飢餓、ゴッドバレーの人間狩り、奴隷制度により、地球規模で絶望エネルギーが自動生産される。',
      icon: Users,
      color: 'text-purple-400',
      borderColor: 'border-purple-800/60',
      bgColor: 'bg-purple-950/20'
    },
    {
      step: 4,
      title: '永久機関の完成：主食の吸い上げと不老維持',
      actor: 'イム様（悪魔の力）',
      action: '民衆から溢れ出る負の感情を主食（エネルギー）として吸い上げ、800年間不老不死を維持',
      detail: '食料が絶え間なく供給されるため、悪魔の力は常に満タン。支配システムが自律循環（永久機関）する。',
      icon: RotateCw,
      color: 'text-rose-300',
      borderColor: 'border-rose-500/60',
      bgColor: 'bg-rose-950/30'
    }
  ];

  return (
    <section id="imu-and-nika" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Chapter Lead Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
          <span>CHAPTER 07 & 08 · 悪魔の永久機関 vs 絶対カウンター</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          イム様の「負の感情の永久機関」と、<br className="hidden sm:inline" />
          ニカ（ルフィ）の「笑いとおふざけ」の真実
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          イム様とは、かつて豊かな陸の世界で排除された<span className="text-rose-400 font-semibold">「復讐者」</span>でした。
          世界を地獄の海へ沈めた後、イム様は天竜人を「肉の盾」として民衆を痛めつけさせ、
          永遠に湧き出る負の感情（怒り・絶望）を主食として吸い上げる<span className="text-amber-300 font-semibold">「自作自演の支配プラント」</span>を構築したのです。
        </p>
      </div>

      {/* Visual Contrast: Imu vs Nika Art Panoramas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Imu Art Box */}
        <div className="relative rounded-2xl overflow-hidden border border-rose-950/80 bg-stone-950 group">
          <img
            src="/src/assets/images/imu_shadow_throne_1791208079969.jpg"
            alt="虚の玉座の前に佇むイム様の影と黒い蝶"
            className="w-full h-64 object-cover object-center filter brightness-80 contrast-110 group-hover:scale-102 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-[10px] uppercase font-mono text-rose-400 tracking-wider">NEGATIVE EMOTION HARVESTER</span>
            <h3 className="text-lg font-bold font-serif-jp text-stone-100">イム様：負の感情を食らう復讐者</h3>
            <p className="text-xs text-stone-400 mt-1 font-sans-jp">
              陸へのコンプレックスから世界を水没させ、民衆の怒りと絶望を主食として吸い上げ続ける真の独裁者
            </p>
          </div>
        </div>

        {/* Nika Art Box */}
        <div className="relative rounded-2xl overflow-hidden border border-amber-500/40 bg-stone-950 group">
          <img
            src="/src/assets/images/nika_liberation_dawn_1791208069452.jpg"
            alt="満月と夜明けの空をバックに笑い踊る太陽の神ニカのシルエット"
            className="w-full h-64 object-cover object-center filter brightness-95 contrast-105 group-hover:scale-102 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-[10px] uppercase font-mono text-amber-300 tracking-wider">ABSOLUTE FUEL COUNTER</span>
            <h3 className="text-lg font-bold font-serif-jp text-stone-100">ニカ（ルフィ）：怒りを笑いに変える太陽</h3>
            <p className="text-xs text-amber-200/80 mt-1 font-sans-jp">
              理不尽への激怒をバカバカしい笑いとおふざけへ置換し、悪魔への燃料供給を完全ゼロ遮断
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: 復讐者としてのイム様：始まりの負の感情 */}
      <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-stone-900/70 border border-stone-800">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-3">
          <Skull className="w-4 h-4" />
          <span>GENESIS OF THE REVENGER · 復讐者としてのイム様</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100 mb-4">
          始まりの負の感情：なぜイム様は世界を沈めたのか？
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-850 space-y-2">
            <span className="text-xs font-bold text-rose-400 font-mono block">01. 排除と強烈なコンプレックス</span>
            <p className="text-stone-300 leading-relaxed font-sans-jp">
              イム様自身が元々は「太古の陸（Daichi）の豊かな神々や人々に虐げられたり、排除されたりした存在（復讐者）」。
              光り輝く巨大な王国の外側で味わった屈辱と孤独が、すべての始まりでした。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-850 space-y-2">
            <span className="text-xs font-bold text-rose-400 font-mono block">02. 自己増殖する悪魔のトリガー</span>
            <p className="text-stone-300 leading-relaxed font-sans-jp">
              「自分を拒絶した陸（Daichi）への激しい憎悪と嫉妬」という極大の負の感情こそが、
              自らの内に眠る悪魔の力を覚醒・自己肥大化させる最初のトリガーとなりました。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-850 space-y-2">
            <span className="text-xs font-bold text-rose-400 font-mono block">03. 復讐の実行と完成</span>
            <p className="text-stone-300 leading-relaxed font-sans-jp">
              「自分が憎んだ豊かな陸地をすべて海（地獄）に沈めてやる」という復讐の実行。
              生き残りを狭い孤島に閉じ込め、自らは世界の最高峰（パンゲア城・虚の玉座）から見下ろすことで復讐を完遂したのです。
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: 「負の感情」の永久機関（支配システム）の構築 */}
      <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-800 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1">
              <RefreshCw className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>THE PERPETUAL EMOTION HARVESTER · 800年の自作自演支配システム</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100">
              「負の感情」の永久機関：なぜ天竜人は肉の盾（フィギュア）なのか？
            </h3>
          </div>

          <div className="text-xs text-stone-400">
            下のステップをクリックして循環構造を確認
          </div>
        </div>

        {/* 4-Step Interactive Loop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {loopSteps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeLoopStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveLoopStep(idx)}
                className={`p-4 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? `${step.bgColor} ${step.borderColor} shadow-lg ring-1 ring-amber-400/50`
                    : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-stone-500 uppercase">STEP 0{step.step}</span>
                    <Icon className={`w-4 h-4 ${step.color}`} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold font-serif-jp text-stone-200 mb-1">{step.title}</h4>
                  <span className={`text-[11px] font-semibold block mb-2 ${step.color}`}>{step.actor}</span>
                </div>
                <div className="text-[10px] text-stone-400 mt-2 flex items-center gap-1 font-mono">
                  <span>詳細を展開</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Spotlight */}
        <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
            <span>フォーカス：STEP 0{loopSteps[activeLoopStep].step} · {loopSteps[activeLoopStep].title}</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans-jp mb-2">
            <strong className="text-stone-100">【メカニズム】</strong> {loopSteps[activeLoopStep].action}
          </p>
          <p className="text-xs text-stone-400 leading-relaxed font-serif-jp">
            <strong className="text-stone-300">【システムの真意】</strong> {loopSteps[activeLoopStep].detail}
          </p>
        </div>

        {/* Systemic Truth Callout: The Self-staged Despair Factory */}
        <div className="p-5 rounded-xl bg-gradient-to-r from-rose-950/30 via-stone-900 to-amber-950/30 border border-amber-900/40">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-stone-300 leading-relaxed font-serif-jp">
              <span className="font-bold text-amber-200 block mb-1">
                「世界の貧困も差別も、統治の不手際ではなく、イム様の食料を絶やさないための自作自演」
              </span>
              天竜人の横暴に民衆が怒り、絶望する。その負の感情がイム様のエネルギー（主食）となり、800年間の不老不死と世界支配を維持する。
              平和で平等な世界が訪れればイム様は餓死してしまうため、世界政府は意図的に「絶望」を量産し続けてきたのです。
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Interactive Simulator: Attack Mechanics Comparison */}
      <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/90 border border-stone-800 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-800 mb-6">
          <div>
            <h3 className="text-lg font-bold font-serif-jp text-stone-100">
              戦闘感情シミュレーション：悪魔の燃料供給ループ
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              攻撃時の「感情エネルギー」の違いによるイム様（悪魔）への影響を比較
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-950 rounded-lg border border-stone-800">
            <button
              onClick={() => setBattleMode('rage')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                battleMode === 'rage'
                  ? 'bg-rose-950/80 text-rose-200 border border-rose-700/60 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <HeartCrack className="w-3.5 h-3.5" />
              <span>正攻法の激怒・復讐心</span>
            </button>
            <button
              onClick={() => setBattleMode('nika')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                battleMode === 'nika'
                  ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Smile className="w-3.5 h-3.5" />
              <span>ニカの笑い・おふざけ</span>
            </button>
          </div>
        </div>

        {/* Dynamic Simulation Output */}
        {battleMode === 'rage' ? (
          <div className="space-y-6 animate-fadeIn">
            {/* Energy Meter: Full Negative Fuel */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-rose-400 flex items-center gap-1">
                  <Flame className="w-4 h-4" />
                  イム様への負の感情エネルギー供給量
                </span>
                <span className="text-rose-300 font-mono">100% (極大燃料供給中・永久機関加速)</span>
              </div>
              <div className="w-full h-3 bg-stone-950 rounded-full overflow-hidden border border-rose-900/40">
                <div className="h-full bg-gradient-to-r from-rose-600 to-red-500 w-full animate-pulse" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-stone-950/80 rounded-xl border border-rose-900/30">
                <span className="text-rose-400 font-bold block mb-1">1. 反逆者の心理状態</span>
                惨劇に対する激しい怒り、仲間を奪われた絶望、イム様への殺意。
              </div>
              <div className="p-4 bg-stone-950/80 rounded-xl border border-rose-900/30">
                <span className="text-rose-400 font-bold block mb-1">2. 悪魔の反応</span>
                「怒り」「憎悪」を最高の主食として貪り食い、傷が瞬時に再生しさらに禍々しく肥大化。
              </div>
              <div className="p-4 bg-stone-950/80 rounded-xl border border-rose-900/30">
                <span className="text-rose-400 font-bold block mb-1">3. 戦況の結末</span>
                怒れば怒るほどイム様を強化する無限ループ。永久機関が完成し自滅に追い込まれる。
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fadeIn">
            {/* Energy Meter: Zero Negative Fuel */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-amber-400 flex items-center gap-1">
                  <Sun className="w-4 h-4" />
                  イム様への負の感情エネルギー供給量
                </span>
                <span className="text-emerald-400 font-mono">0% (完全遮断・兵糧攻め)</span>
              </div>
              <div className="w-full h-3 bg-stone-950 rounded-full overflow-hidden border border-amber-900/40">
                <div className="h-full bg-emerald-500 w-0 transition-all duration-700" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-stone-950/80 rounded-xl border border-amber-500/30">
                <span className="text-amber-300 font-bold block mb-1">1. ルフィの感情置換</span>
                理不尽に激怒しながらも、自我を保ったまま怒りを「爆笑とおふざけ」へと意識的に変換。
              </div>
              <div className="p-4 bg-stone-950/80 rounded-xl border border-amber-500/30">
                <span className="text-amber-300 font-bold block mb-1">2. 戦闘のギャグ化</span>
                敵の恐ろしい攻撃をゴムで跳ね返し、縄跳びにし、目玉を飛び出させ、空間ごと笑いの渦へ巻き込む。
              </div>
              <div className="p-4 bg-stone-950/80 rounded-xl border border-amber-500/30">
                <span className="text-amber-300 font-bold block mb-1">3. 悪魔の餓死と自壊</span>
                負の感情がゼロになり、イム様の生命力供給が完全停止。永久機関が崩壊し自滅する。
              </div>
            </div>
          </div>
        )}

        {/* Tactical Epiphany Summary */}
        <div className="mt-6 p-4 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-300 font-serif-jp leading-relaxed">
          <strong className="text-amber-300">考察の結論：</strong>
          ルフィのギア5が「アニメのカートゥーン描写」であることは、少年漫画の単なるギャグではありません。
          悪魔が800年間維持してきた「絶望の支配システム」の心臓を、物理の破壊ではなく<strong className="text-amber-200">「笑いによる概念的兵糧攻め」</strong>で破壊するための、究極かつ唯一の戦術なのです。
        </div>
      </div>
    </section>
  );
};

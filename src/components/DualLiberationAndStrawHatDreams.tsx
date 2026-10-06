import React, { useState } from 'react';
import { 
  Sparkles, Sword, Smile, Waves, Compass, 
  Map, Heart, Globe, Utensils, Music, Anchor, 
  CheckCircle2, ArrowRight, ShieldCheck, Sun, Mountain
} from 'lucide-react';

export const DualLiberationAndStrawHatDreams: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dual_strike' | 'cartoon_logic' | 'zoro_redline' | 'crew_dreams'>('dual_strike');
  const [selectedCrew, setSelectedCrew] = useState<string>('sanji');

  // Straw Hat Crew Dreams Fulfillment Matrix
  const crewDreams = [
    {
      id: 'sanji',
      name: 'サンジ',
      dream: 'オールブルー（All Blue）の発見',
      icon: Utensils,
      color: 'text-cyan-400',
      border: 'border-cyan-800/60',
      bg: 'bg-cyan-950/30',
      trigger: '【レッドライン崩壊 ✕ 海水適正化】',
      fulfillment: '東西南北の4つの海（東の海・西の海・南の海・北の海）を隔てていた巨大な赤い壁（レッドライン）が消滅し、海水の栓抜きによって海流が一体化。世界中の魚が泳ぎ交う「真のオールブルー」が目の前に出現する。ゼフの信じた海が現実となる。'
    },
    {
      id: 'nami',
      name: 'ナミ',
      dream: '全世界の海図（世界地図）を描くこと',
      icon: Map,
      color: 'text-amber-400',
      border: 'border-amber-800/60',
      bg: 'bg-amber-950/30',
      trigger: '【カームベルトと境界線の消滅】',
      fulfillment: '世界政府が敷いた人為的な境界線（グランドライン・カームベルト・レッドライン）が消え去り、800年ぶりに姿を現した「ひとつなぎの大陸（ONE PIECE）」の真の輪郭を記録。世界で初めて「この星のありのままの真の姿」を描いた地図が完成する。'
    },
    {
      id: 'brook',
      name: 'ブルック',
      dream: '双子岬のラブーンとの再会',
      icon: Music,
      color: 'text-purple-400',
      border: 'border-purple-800/60',
      bg: 'bg-purple-950/30',
      trigger: '【リヴァース・マウンテンの消滅】',
      fulfillment: '50年間ルンバー海賊団の船員たちとラブーンを隔てていた「越えられない絶壁（レッドライン）」が、ゾロの一閃によって物理的に崩壊。サニー号は遠回りの世界一周ではなく、穏やかな海を一直線に泳ぎ進み、正面からラブーンの待つ岬へ到達する。'
    },
    {
      id: 'robin',
      name: 'ニコ・ロビン',
      dream: '真の歴史の本文（リオ・ポーネグリフ）の解読',
      icon: Compass,
      color: 'text-emerald-400',
      border: 'border-emerald-800/60',
      bg: 'bg-emerald-950/30',
      trigger: '【沈んでいた大地の露呈】',
      fulfillment: '海水を排水したことで、海底200メートルに沈められていた古代都市群や神話の神殿が太陽の下に一挙に姿を現す。ポーネグリフに刻まれた言葉と、目の前に広がる大地の遺構が完全に合致し、オハラの学者たちが求めた「世界の真実」が白日の下に晒される。'
    },
    {
      id: 'franky',
      name: 'フランキー',
      dream: '夢の船（サニー号）で世界の海を巡り届けること',
      icon: Anchor,
      color: 'text-blue-400',
      border: 'border-blue-800/60',
      bg: 'bg-blue-950/30',
      trigger: '【障害物のない一つなぎの航路】',
      fulfillment: '宝樹アダムで造られたサニー号が、あらゆる海を乗り越え、世界の栓を抜き壁を壊した瞬間に立ち会う。世界の果て（ラフテル）に到達し、分断の消えた平和な海を誇らしげに航海し続けることで、師トムの「造った船に男はドンと胸を張れ」を完全体現。'
    },
    {
      id: 'chopper',
      name: 'トニートニー・チョッパー',
      dream: '何でも治せる医者（万能薬）になること',
      icon: Heart,
      color: 'text-rose-400',
      border: 'border-rose-800/60',
      bg: 'bg-rose-950/30',
      trigger: '【世界中の生態系と薬草の統合】',
      fulfillment: '過酷な気候分断（冬島・夏島・春島・秋島などの極端な局所気候）が、超大陸の復活に伴い正常な循環を取り戻す。孤立した島々でしか手に入らなかった未知の薬草が陸路で繋がり、全人類を病の恐怖から救う「真の万能医療ネットワーク」が完成する。'
    },
    {
      id: 'jinbe',
      name: 'ジンベエ',
      dream: '魚人族の真の解放と太陽の下での共生',
      icon: Waves,
      color: 'text-teal-400',
      border: 'border-teal-800/60',
      bg: 'bg-teal-950/30',
      trigger: '【約束の舟ノアの浮上】',
      fulfillment: '海底1万メートルに押し込められていた魚人島。古代兵器ポセイドン（海王類）と巨船ノアにより、全魚人・人魚が真の太陽が輝く地上（超大陸の海岸）へと移住。ルフィとゾロが消滅させたレッドラインの跡地で、人類と種族の壁を越えて手を取り合う。'
    },
    {
      id: 'usopp',
      name: 'ウソップ',
      dream: '勇敢なる海の戦士になること',
      icon: ShieldCheck,
      color: 'text-yellow-400',
      border: 'border-yellow-800/60',
      bg: 'bg-yellow-950/30',
      trigger: '【世界を救った大英雄】',
      fulfillment: 'エルバフの巨人族たちが誇る「誇り高き戦士」の精神を宿し、世界を恐怖で支配していた800年の悪魔の檻を壊す最終決戦で、仲間たちと共に命を張って勝利。シロップ村で語っていた無数の「ホラ（嘘）」が、世界を救った伝説の叙事詩としてすべて現実に変わる。'
    },
    {
      id: 'luffy',
      name: 'モンキー・D・ルフィ',
      dream: '【夢の果て】世界中のやつら全員とでけェ宴を開くこと！',
      icon: Sun,
      color: 'text-amber-300',
      border: 'border-amber-500/70',
      bg: 'bg-amber-950/50',
      trigger: '【ONE PIECEの完成】',
      fulfillment: '海賊王になった後に待つ本当の夢。海の栓を抜き、赤い壁を砕き、境界線の消えた巨大な大陸「Daichi」で、海賊も海軍も魚人も巨人も天竜人の奴隷だった者たちも、全員が笑って腹いっぱい肉を食い、酒を飲み交わす「世界最大の宴」。幼少期にロジャーと同じ言葉を語った、あきれるほど無邪気な夢が100%実現する。'
    }
  ];

  const currentCrewData = crewDreams.find(c => c.id === selectedCrew) || crewDreams[0];

  return (
    <section id="dual-liberation" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Chapter Lead Header */}
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>THE GRAND CLIMAX MECHANISM · 縦の解放（ルフィ） ✕ 横の解放（ゾロ）</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif-jp font-bold text-stone-100 tracking-tight leading-tight mb-4">
          風呂の栓の「キュッポーン！」と、<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-cyan-400">
            ゾロのレッドライン両断が導く「一味の全夢同時完結」
          </span>
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          なぜラフテルには最高にコミカルな「風呂の栓」が待っているのか？
          なぜギア5（ニカ）はドタバタアニメで巨大化しなければならなかったのか？
          そして、ゾロが最後に斬る「世界で最も硬い壁」とは何なのか？
          両翼の二大看板による「縦と横の一撃」が放たれた瞬間、麦わらの一味全員の夢が同時に成就する壮大な演出設計を解き明かします。
        </p>
      </div>

      {/* Main Mode Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-stone-800 pb-4">
        <button
          onClick={() => setActiveTab('dual_strike')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'dual_strike'
              ? 'bg-amber-950/40 border border-amber-500/80 text-amber-300 shadow-md'
              : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-stone-200'
          }`}
        >
          【二大看板】縦の解放 ✕ 横の解放
        </button>
        <button
          onClick={() => setActiveTab('cartoon_logic')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'cartoon_logic'
              ? 'bg-amber-950/40 border border-amber-500/80 text-amber-300 shadow-md'
              : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-stone-200'
          }`}
        >
          【ニカ演出】カートゥーン巨大化の必然性
        </button>
        <button
          onClick={() => setActiveTab('zoro_redline')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'zoro_redline'
              ? 'bg-amber-950/40 border border-amber-500/80 text-amber-300 shadow-md'
              : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-stone-200'
          }`}
        >
          【大剣豪の極致】レッドライン両断の系譜
        </button>
        <button
          onClick={() => setActiveTab('crew_dreams')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'crew_dreams'
              ? 'bg-amber-950/40 border border-amber-500/80 text-amber-300 shadow-md'
              : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-stone-200'
          }`}
        >
          【奇跡の合致】一味全9名の夢・同時達成
        </button>
      </div>

      {/* TAB 1: DUAL STRIKE (VERTICAL & HORIZONTAL LIBERATION) */}
      {activeTab === 'dual_strike' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Vertical Strike (Luffy) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-amber-950/30 via-stone-950 to-stone-950 border border-amber-500/70 space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-stone-850">
                <div className="flex items-center gap-2.5">
                  <Smile className="w-6 h-6 text-amber-400" />
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                    VERTICAL LIBERATION · 縦の解放（深度）
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-amber-950 text-amber-300 border border-amber-800/80">
                  ルフィ（太陽の神ニカ）
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif-jp text-stone-100">
                ラフテルの超巨大な風呂の栓を「キュッポーン！」
              </h3>

              <div className="p-4 bg-stone-900/80 rounded-2xl border border-stone-800 space-y-2 text-xs sm:text-sm text-stone-300 font-sans-jp leading-relaxed">
                <p>
                  世界最深部に鎮座する「海水の水位を保ち続けてきた元凶」。それは難解な超科学装置などではなく、
                  誰が見ても思わず吹き出してしまう<strong className="text-amber-300">「超巨大な風呂（コルク）の栓」</strong>でした。
                </p>
                <p>
                  ギガント（巨神化）で雲を突き抜ける巨大さになったルフィが、両手で栓を掴んで「ん〜〜〜〜…キュッポーン！！」と引っこ抜く。
                  海水がエニエス・ロビーやルルシアの大穴（地球空洞）へ一気に引き込まれ、800年の「水の檻」が消滅します。
                </p>
              </div>

              <div className="space-y-2 text-xs text-amber-200/90 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>【破壊対象】：海という名の檻（深度200mの水没状態）</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>【もたらす結果】：太古の超大陸「Daichi」の浮上・海水の正常化</span>
                </div>
              </div>
            </div>

            {/* Right Column: Horizontal Strike (Zoro) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-emerald-950/30 via-stone-950 to-stone-950 border border-emerald-500/70 space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-stone-850">
                <div className="flex items-center gap-2.5">
                  <Sword className="w-6 h-6 text-emerald-400" />
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                    HORIZONTAL LIBERATION · 横の解放（水平）
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800/80">
                  ゾロ（世界一の大剣豪）
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif-jp text-stone-100">
                万物の呼吸による「赤い土の大陸（レッドライン）」一閃両断
              </h3>

              <div className="p-4 bg-stone-900/80 rounded-2xl border border-stone-800 space-y-2 text-xs sm:text-sm text-stone-300 font-sans-jp leading-relaxed">
                <p>
                  世界を東西南北に物理的に分断し、天竜人が君臨する不条理の象徴「レッドライン（赤い土の大陸）」。
                  鋼鉄（Mr.1）、超巨大石像（ピーカ）、龍の鱗（カイドウ）を斬り抜けてきたゾロが、
                  最後に万物の呼吸で斬る対象こそがこの<strong className="text-emerald-300">「世界で最も硬く巨大な土の壁」</strong>です。
                </p>
                <p>
                  ミホークをも超えた世界一の剣豪の一撃が、マリージョア直下の赤い壁を垂直に両断。
                  海を遮っていた物理的障壁が崩壊し、4つの海が交じり合います。
                </p>
              </div>

              <div className="space-y-2 text-xs text-emerald-200/90 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>【破壊対象】：世界を分断する赤い土の壁（レッドライン）</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>【もたらす結果】：4つの海の合流（All Blue）と境界のない世界</span>
                </div>
              </div>
            </div>
          </div>

          {/* Synthesis Banner */}
          <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 text-center space-y-2 shadow-inner">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              THE CONVERGENCE OF TWO TITANS · 二大看板の合致
            </span>
            <p className="text-sm sm:text-base text-stone-200 font-serif-jp font-bold">
              「縦の解放（水の檻消滅）」 ✕ 「横の解放（土の壁消滅）」 ＝ 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-cyan-300 ml-2">
                物理的にひとつなぎになった世界「ONE PIECE」の誕生
              </span>
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: CARTOON & GEAR 5 LOGIC */}
      {activeTab === 'cartoon_logic' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-stone-950 border border-stone-850 space-y-3">
              <span className="text-xs font-mono text-amber-400 font-bold">REASON 01</span>
              <h4 className="text-base font-bold font-serif-jp text-stone-100">
                読者のリアリティラインを慣らす「チュートリアル」
              </h4>
              <p className="text-xs text-stone-300 font-sans-jp leading-relaxed">
                もしそれまで超シリアスなバトル漫画だったのに、最後のラフテルで突然「ルフィが風呂の栓を抜いて海を干上がらせた」としたら、読者は「えっ…ギャグ？」と冷めてしまいます。
                だからこそ尾田先生は、ワノ国編のギア5で「目が飛び出る」「カイドウで縄跳びをする」「雷を掴む」というドタバタ劇を描き、読者の許容度（リアリティライン）を完全にカートゥーンへとシフトさせたのです。
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-stone-950 border border-stone-850 space-y-3">
              <span className="text-xs font-mono text-amber-400 font-bold">REASON 02</span>
              <h4 className="text-base font-bold font-serif-jp text-stone-100">
                無意識の「ギガント（巨神化）」という身体的必然
              </h4>
              <p className="text-xs text-stone-300 font-sans-jp leading-relaxed">
                鬼ヶ島屋上やエッグヘッドでルフィが見せた「巨大化（ギガント）」。
                これは読者へのサービスではなく、ラフテルの海底に鎮座する「直径数百メートルの巨大な栓」を両手で掴み上げるために、ルフィ自身が巨大な神のサイズになれるという**物理的要件の伏線**でした。
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-stone-950 border border-stone-850 space-y-3">
              <span className="text-xs font-mono text-amber-400 font-bold">REASON 03</span>
              <h4 className="text-base font-bold font-serif-jp text-stone-100">
                ロジャーの涙の大爆笑（Laugh Tale）との完全合致
              </h4>
              <p className="text-xs text-stone-300 font-sans-jp leading-relaxed">
                800年の歴史の真実を追い求め、命懸けで辿り着いた最深部。
                そこに待っていたのが、あまりにもバカバカしい「ただのお風呂の栓」だった。
                「世界を縛り付けていた悪魔の檻が、こんなアホみたいな仕掛けだったのか！」とロジャーたちは腹を抱えて涙を流して笑い、島に「笑い話（Laugh Tale）」と名付けたのです。
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-900/40 text-xs sm:text-sm text-amber-200/90 font-serif-jp leading-relaxed">
            <strong>【ロジャーの「早すぎた」の真意】：</strong>
            ロジャーたちが栓を抜けなかったのは、力が足りなかったからではありません。
            その栓は「ゴムのように伸び、巨大化できるニカ（ジョイボーイの覚醒者）」と、海王類を従えるポセイドン（しらほし）が揃っていなければ抜けないように設計されていたからこそ、「おれたちは早すぎたんだ」と納得して笑顔で去っていったのです。
          </div>
        </div>
      )}

      {/* TAB 3: ZORO REDLINE CUTTING */}
      {activeTab === 'zoro_redline' && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-stone-950 border border-stone-800 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold font-serif-jp text-stone-100">
              ミホークの斬撃スケール提示と、ゾロの「斬るべき対象」の進化
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-sans-jp leading-relaxed">
              劇場版『STAMPEDE』で藤虎が落とした超巨大隕石を、ミホークは言葉もなく一瞬で粉々に切り刻みました。
              なぜ尾田先生はあのような規格外の斬撃をミホークに見せさせたのか？
              それは、**「世界一の大剣豪が最終的に斬るべき対象は、小山や軍艦レベルではなく、大陸規模の岩塊である」**という基準（スケール合わせ）を読者に提示するためでした。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-850 text-xs">
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <span className="text-emerald-400 font-mono font-bold block mb-1">STAGE 1: 鋼鉄</span>
                <strong className="text-stone-200">Mr.1（ダズ・ボーネス）</strong>
                <p className="text-stone-400 mt-1">万物の呼吸を掴み、斬れぬものを斬る境地へ。</p>
              </div>
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <span className="text-emerald-400 font-mono font-bold block mb-1">STAGE 2: 超巨大石像</span>
                <strong className="text-stone-200">ピーカ（岩石同化）</strong>
                <p className="text-stone-400 mt-1">三・千・世・界で山ほどある巨石を空中で両断。</p>
              </div>
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <span className="text-emerald-400 font-mono font-bold block mb-1">STAGE 3: 幻獣の皮膚</span>
                <strong className="text-stone-200">カイドウ ＆ キング</strong>
                <p className="text-stone-400 mt-1">閻魔の覇気を解放し、閻王三刀流で神の肉体を切り裂く。</p>
              </div>
              <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-700/60">
                <span className="text-emerald-300 font-mono font-bold block mb-1">FINAL: 世界の壁</span>
                <strong className="text-emerald-100">赤い土の大陸（レッドライン）</strong>
                <p className="text-emerald-200 mt-1">万物の呼吸の極致。世界を分断する最大の壁を両断。</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: STRAW HAT CREW DREAMS SYNCHRONICITY MATRIX */}
      {activeTab === 'crew_dreams' && (
        <div className="space-y-8">
          {/* Crew Buttons Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
            {crewDreams.map((crew) => {
              const isSelected = selectedCrew === crew.id;
              const Icon = crew.icon;
              return (
                <button
                  key={crew.id}
                  onClick={() => setSelectedCrew(crew.id)}
                  className={`p-3 rounded-2xl text-center transition-all border flex flex-col items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 border-amber-500 shadow-lg ring-1 ring-amber-400/50'
                      : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-1.5 ${crew.color}`} />
                  <span className="text-xs font-bold font-serif-jp text-stone-100 block">
                    {crew.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Card for Selected Crew Member */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${currentCrewData.border} ${currentCrewData.bg} shadow-2xl space-y-4`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800/80 gap-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-stone-950/80 border border-stone-750">
                  <currentCrewData.icon className={`w-6 h-6 ${currentCrewData.color}`} />
                </div>
                <div>
                  <span className="text-xs font-mono text-stone-400 uppercase font-semibold">
                    STRAW HAT DREAM ACCOMPLISHMENT · 夢の成就
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-jp text-stone-100">
                    {currentCrewData.name}：{currentCrewData.dream}
                  </h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-stone-950 border border-stone-700 text-stone-200">
                {currentCrewData.trigger}
              </span>
            </div>

            <p className="text-stone-200 text-sm sm:text-base leading-relaxed font-sans-jp bg-stone-950/60 p-4 rounded-xl border border-stone-800/80">
              {currentCrewData.fulfillment}
            </p>
          </div>

          {/* The Miracle of Synchronicity */}
          <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-2 text-xs sm:text-sm text-stone-300 font-sans-jp leading-relaxed shadow-inner">
            <h4 className="text-amber-300 font-bold font-serif-jp text-sm sm:text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>【奇跡のシンクロニシティ：なぜすべての夢が同時に叶うのか】</span>
            </h4>
            <p>
              従来の考察では、「サンジのオールブルーは叶っても、ナミの世界地図やブルックのラブーン再会はどうなるのか？」という個別のパズルとして議論されていました。
            </p>
            <p>
              しかし、本考察の**「ルフィの栓抜き（縦の解放）」と「ゾロのレッドライン両断（横の解放）」**という2つの物理的一撃を置くことで、
              水の檻が引くと同時に土の壁が砕け散り、**麦わらの一味全9名の夢が、たったひとつの瞬間の中にドミノ倒しのように完全に同時完結する**という、鳥肌が止まらない作劇の奇跡が証明されます。
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

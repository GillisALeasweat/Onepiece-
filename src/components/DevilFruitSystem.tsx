import React, { useState } from 'react';
import { Database, Magnet, Layers, Crosshair, ShieldAlert, FileText, CheckCircle2, Lock, AlertTriangle, Eye } from 'lucide-react';

export const DevilFruitSystem: React.FC = () => {
  const [activeEvidence, setActiveEvidence] = useState<'cp9' | 'whoswho' | 'opeope' | 'vegapunk'>('whoswho');

  const evidenceData = {
    cp9: {
      id: 'cp9',
      title: 'CP9への「褒賞」という名の体内固定・生体管理',
      arc: 'エニエス・ロビー編',
      keyFigure: 'スパンダム ＆ CP9（ルッチ、カク、カリファ）',
      detail: 'スパンダムがCP9に「世界のどこかで手に入れた」とウシウシの実やアワアワの実を渡した。形式上は暗殺部隊の兵力強化だが、実質は「野に放たせておくと危険な（意志を持って逃げる）実を、政府の忠実な駒に食べさせて体内に固定・管理（実質的封印）する」という国家管理手段。',
      dangerLevel: '管理レベル：高（忠誠心の高い組織への配備）',
      icon: Lock,
      color: 'text-amber-400'
    },
    whoswho: {
      id: 'whoswho',
      title: '「ゴムゴムの実（ニカ）」護送失敗によるフーズ・フーの失脚',
      arc: 'ワノ国編（12年前のゴッド・インシデント）',
      keyFigure: '元CP9フーズ・フー ＆ 赤髪海賊団',
      detail: '元CP9トップクラスだったフーズ・フーが政府の護送船でゴムゴムの実を運ぶ超重要任務に就いていたが、シャンクスに強奪された。たかが「実を一つ奪われただけ」にもかかわらず、即座に投獄され人生を狂わされる異常すぎる厳罰が下された。これは政府にとって「ニカの回収」がいかに最優先・絶対命題であったかの動かぬ証拠。',
      dangerLevel: '管理レベル：最重要警戒（太陽の神の抹殺と封印）',
      icon: ShieldAlert,
      color: 'text-rose-400'
    },
    opeope: {
      id: 'opeope',
      title: 'オペオペの実（50億ベリー裏取引）と海軍最高幹部の総動員',
      arc: 'ドレスローザ編（ロー過去回想）',
      keyFigure: '海軍元帥センゴク ＆ 大参謀おつる ＆ 海賊ダイエー',
      detail: '海軍は海賊からオペオペの実を四皇懸賞金クラスの「50億ベリー」という巨額で裏取引しようとした。現場には海軍本部トップクラスが総出で介入。オペオペの実が持つ「不老手術」の権能を他人に渡さず、イム様と世界政府の支配基盤として独占管理することが至上命令だった。',
      dangerLevel: '管理レベル：国家機密級（不老不死の独占）',
      icon: Eye,
      color: 'text-cyan-400'
    },
    vegapunk: {
      id: 'vegapunk',
      title: 'ベガパンクへの「悪魔の実再現・人工悪魔の実」研究命令',
      arc: 'パンクハザード編〜エッグヘッド編',
      keyFigure: 'Dr.ベガパンク ＆ 世界政府・五老星',
      detail: '世界政府は莫大な予算を与え、悪魔の実の伝達条件の解明や血統因子による人工悪魔の実（モモの助の桃色龍、グリーンブラッド）を研究させた。野に散らばる「本物の神の力（天然の実）」を世界中から回収・封印しつつ、自分たちの手で制御可能な「人造の実（兵器）」で世界を支配する計画。',
      dangerLevel: '管理レベル：兵器代替（天然実の回収と人工兵器化）',
      icon: Database,
      color: 'text-purple-400'
    }
  };

  const current = evidenceData[activeEvidence];

  return (
    <section id="devil-fruit-system" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">
          <span>CHAPTER 06 · 国家機密兵器工学</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          政府の悪魔の実回収システム：<br className="hidden sm:inline" />
          ヤミヤミ × ケロベロスと「4大国家管理プロトコル」
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          悪魔の実（特に神の力）は、世界政府にとって<span className="text-rose-400 font-semibold">「絶対に野放しにしてはならない最重要危険物」</span>です。
          海軍やCPが世界中を捜索し、奪われた者は投獄・処刑され、手に入れた実は忠実な部下の体内に固定する——
          作中に散りばめられた4大エピソードから、世界政府の異常な悪魔の実管理網を解明します。
        </p>
      </div>

      {/* Part 1: The Mechanical Pipeline (Capture, Storage, Heist) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {/* Step 1: Capture Engine */}
        <div className="p-6 rounded-2xl bg-stone-900/90 border border-purple-900/50 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase font-mono text-purple-400">STAGE 01 · 捕獲機構</span>
              <Magnet className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold font-serif-jp text-stone-100 mb-2">ヤミヤミの実（吸引と無効化）</h3>
            <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
              散らばる悪魔の実を重力で確実に引き寄せ、触れた瞬間に能力者の実体を強制固定・無効化する特殊な捕獲回収ツール。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-purple-300/80">
            ※痛みを倍加して受ける欠陥＝回収専用機用に設計されていた証拠
          </div>
        </div>

        {/* Step 2: Storage Multi-core */}
        <div className="p-6 rounded-2xl bg-stone-900/90 border border-amber-900/50 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase font-mono text-amber-400">STAGE 02 · 格納構造</span>
              <Layers className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold font-serif-jp text-stone-100 mb-2">多重構造（ケロベロス／異形肉体）</h3>
            <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
              通常の人体は二つで爆散する。政府の機密文書に存在した「複数頭・複数心臓の生体構造を利用した能力並列格納プロトコル」。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-amber-300/80">
            ※黒ひげの三連ドクロ旗、眠らない身体、人の倍の人生と符合
          </div>
        </div>

        {/* Step 3: Heist and Hunt */}
        <div className="p-6 rounded-2xl bg-stone-900/90 border border-rose-900/50 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase font-mono text-rose-400">STAGE 03 · 知識強奪</span>
              <Crosshair className="w-5 h-5 text-rose-400" />
            </div>
            <h3 className="text-lg font-bold font-serif-jp text-stone-100 mb-2">黒ひげによるマニュアル横取り</h3>
            <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
              政府の実験体（Double）だったティーチは、極秘兵器マニュアルを熟知。サッチを殺害して実を奪い、新世界で「能力者狩り」を開始。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-rose-300/80">
            ※マリンフォードの黒布の中で行われたのは、政府開発の回収儀式の実行
          </div>
        </div>
      </div>

      {/* Part 2: The 4 Canonical Pillars of Government Retrieval Protocol */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-[#0e1322] border border-stone-800 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-800 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold mb-1">
              <FileText className="w-4 h-4" />
              <span>THE 4 CANONICAL PILLARS · 政府の悪魔の実回収プロトコル（作中の動かぬ4大証拠）</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100">
              なぜ政府は実の回収・護送・管理に異常な執着を見せるのか？
            </h3>
          </div>
          <span className="text-xs text-stone-500">下のタブで4大エピソードを検証</span>
        </div>

        {/* 4 Pillar Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {(['cp9', 'whoswho', 'opeope', 'vegapunk'] as const).map((key) => {
            const item = evidenceData[key];
            const isSelected = activeEvidence === key;
            const Icon = item.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveEvidence(key)}
                className={`p-4 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-purple-950/40 border-purple-500/60 shadow-lg ring-1 ring-purple-400/50'
                    : 'bg-stone-950/60 border-stone-850 hover:border-stone-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-stone-400 uppercase">{item.arc.split('（')[0]}</span>
                    <Icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <h4 className="text-xs font-bold font-serif-jp text-stone-100 mb-1">{item.title}</h4>
                </div>
                <div className="mt-3 text-[10px] text-stone-400 font-mono">
                  {item.keyFigure.split('＆')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Evidence Spotlight Card */}
        <div className="p-6 rounded-2xl bg-stone-950/90 border border-purple-900/40 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-850">
            <div>
              <span className="text-[11px] font-mono text-purple-400 uppercase">{current.arc}</span>
              <h4 className="text-lg sm:text-xl font-serif-jp font-bold text-stone-100">{current.title}</h4>
            </div>
            <span className="px-3 py-1 rounded bg-stone-900 text-amber-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
              {current.dangerLevel}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-stone-900/60 rounded-lg border border-stone-800">
              <span className="text-stone-400 block mb-0.5 font-mono">主要関係者：</span>
              <span className="font-semibold text-stone-200">{current.keyFigure}</span>
            </div>
            <div className="sm:col-span-2 p-3 bg-stone-900/60 rounded-lg border border-stone-800">
              <span className="text-stone-400 block mb-0.5 font-mono">政府の目的：</span>
              <span className="text-stone-200 leading-relaxed font-sans-jp">{current.detail}</span>
            </div>
          </div>
        </div>

        {/* Systemic Summary Callout */}
        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-purple-950/30 to-stone-950 border border-purple-800/40 text-xs sm:text-sm text-stone-200 font-serif-jp leading-relaxed">
          <strong className="text-purple-300 block mb-1">【悪魔の実管理網の鉄の掟】</strong>
          1. 悪魔の実（特に神の実・不老の実）は世界政府にとって絶対に野放しにしてはいけない最重要危険物。<br />
          2. 海軍や暗殺機関CPは、その実を世界中から捜索・護送・管理するために血眼になっている。<br />
          3. 護送に失敗した者は即刻投獄・処刑レベルの厳罰を受ける（フーズ・フーの悲劇）。<br />
          4. 外部の野盗や民衆の手に渡る前に、政府の忠実な駒（CP9）の体内に固定・封印し、自らはベガパンクに命じて人工兵器として複製・支配を完成させようとした。
        </div>
      </div>
    </section>
  );
};

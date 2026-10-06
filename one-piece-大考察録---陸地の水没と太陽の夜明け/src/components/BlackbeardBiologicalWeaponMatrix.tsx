import React, { useState } from 'react';
import { 
  Skull, Dna, Disc, Moon, Eye, AlertOctagon, 
  Sparkles, CheckCircle2, ChevronRight, Layers, Flame, 
  Activity, ShieldAlert, Cpu, HeartPulse, Zap
} from 'lucide-react';

export const BlackbeardBiologicalWeaponMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'history' | 'mysteries'>('blueprint');
  const [selectedPart, setSelectedPart] = useState<number>(0);

  // The 3-Piece Biological Weapon Architecture
  const blueprintParts = [
    {
      id: 'chimera',
      title: '第1パーツ：器のキメラ化（多重スロット）',
      subtitle: '悪魔の実「2つで爆散」のルールを突破する多重肉体',
      icon: Dna,
      badgeColor: 'border-emerald-500/70 text-emerald-300 bg-emerald-950/40',
      description: '通常、悪魔の実を2つ食べると体が爆散して絶命する世界の絶対法則。これに対し、古代／政府の技術者は複数の魂・心臓・遺伝子を人工的に縫合（キメラ化）し、多重能力を維持できる器を創り出した。',
      details: [
        '【拒絶反応の抑制】：血統因子の改変により、複数の悪魔の実の魂が同一肉体内で反発・自壊するのを防ぐ多層構造。',
        '【マルコの証言】：「体の構造が“異形”なんだよい。それがこの結果（グラグラの実の併用）を生んだのか…？」という伏線の物理的真相。',
        '【不眠の代償】：複数の器が常時稼働するため、代謝負荷が異常に高く、生命維持の負担が通常の何倍にも達する。'
      ]
    },
    {
      id: 'cerberus',
      title: '第2パーツ：ベースOS「ヒトヒトの実 モデル“ケルベロス”」',
      subtitle: '3つの心臓・人格を統合安定化させる幻獣種の基盤因子',
      icon: Skull,
      badgeColor: 'border-amber-500/70 text-amber-300 bg-amber-950/40',
      description: '地獄の番犬「ケルベロス」は3つの頭（心臓／人格）を持つ。その幻獣種の因子を肉体の基盤（OS）として組み込むことで、「3人分の能力の器（スロット）」を安定して維持・並行運用できる基盤構造を確立した。',
      details: [
        '【3重人格・3心臓システム】：スロット①＝ケルベロス（基盤OS）、スロット②＝ヤミヤミの実（回収機）、スロット③＝グラグラの実（破壊兵器）。',
        '【3連ドクロ旗の象徴】：黒ひげ海賊団の海賊旗に刻まれた異例の「3つの髑髏」は、彼自身が「自分が3つの器を持つケルベロス実験体」であることを自覚している証。',
        '【シャンクスへの傷】：まだ無名だった頃のティーチがシャンクスの左目に刻んだ爪痕のような3本傷。ケルベロスの獣性を発露させた物理的痕跡。'
      ]
    },
    {
      id: 'yamiyami',
      title: '第3パーツ：回収ドライブ「ヤミヤミの実」',
      subtitle: '他者の能力（願い）を引きずり出し吸い上げる回収エンジン',
      icon: Disc,
      badgeColor: 'border-purple-500/70 text-purple-300 bg-purple-950/40',
      description: '悪魔の実の力を「闇の引力で引きずり出し、無効化し、死体から直接奪い取る」という、まさに能力回収機構（吸引機・掃除機）そのものの機能を持つ唯一無二の実。',
      details: [
        '【能力者狩りの根幹】：マリンフォードで白ひげに黒布を被せ、グラグラの能力を瞬時に吸引・抽出できたのは、ヤミヤミの実の回収ドライブが稼働したため。',
        '【痛み2倍の欠陥】：光すら吸い込む引力のため、物理的ダメージや痛みを常人の2倍引き込んでしまう。「実験兵器」特有の粗削りな仕様。',
        '【神の力の吸い上げ】：ベガパンクの「人の願い＝悪魔の実」論の裏で、世界政府が渇望した「反抗者の神性・願いを全て吸い上げて無力化する」兵器の心臓部。'
      ]
    }
  ];

  // 3 Enigmas Forensics
  const mysteries = [
    {
      number: '01',
      title: '「眠らない（眠れない）」という狂気と悲劇',
      icon: Moon,
      tag: '睡眠不全のシステム的真相',
      forensic: 'ドラム王国でルフィとゾロが聞いた「雪国の人は寝たら死ぬ」という噂。そしてバギーが幼少期に語った「あいつは生まれてこの方、一度も寝たことがない」。本来の人間は脳と身体を休めるために睡眠（休止状態）が必要だが、キメラ化されたティーチの肉体は、3つの心臓・人格が代わる代わる主導権を握り、あるいは常時お互いを監視・負荷分散し続けている。そのため「脳と身体がシステムとして休止状態（睡眠）に入ることができない」。“眠らない”のではなく、“一生眠ることが許されない体に改造された”という、政府の人体実験が生んだ悲劇的な異形。'
    },
    {
      number: '02',
      title: 'ルフィとゾロが直感した「あいつ『ら』だ」の正体',
      icon: Eye,
      tag: 'モックタウンでの複数人感知',
      forensic: 'モックタウンの酒場の外で初めてティーチに出会った際、ナミの「あいつ、何か知ってるのかな？」という言葉に対し、ルフィとゾロは同時に「あいつじゃねェ」「あいつ『ら』だ……たぶん」と訂正した。野性の直感と見聞色の原初的資質に優れる2人は、目の前に立つ大男の皮一枚の下で、複数の魂・心臓・人格（繋ぎ合わされた器たち）が蠢いている異様な気配を生理的に感知していた。'
    },
    {
      number: '03',
      title: '白ひげの宣告「ロジャーの待ってる男はお前じゃねぇ」',
      icon: ShieldAlert,
      tag: '偽りのD（Double）の看破',
      forensic: '頂上戦争の死に際、白ひげがティーチに告げた決定的な言葉。ティーチは「D」の名を持ちながら、死の危機に直面すると「待て親父！息子だぞ！」と無様に命乞いをして怯え切った。ロジャーやルフィのように「死を前に笑う正統なD（Daichi）」と異なり、ティーチは大地の記憶を持たず、政府の実験室で造られた「Double（二重実験体）」に過ぎない。白ひげはその魂の偽物性を瞬時に見抜いていた。'
    }
  ];

  return (
    <section id="blackbeard-weapon" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Chapter Lead Header */}
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-semibold mb-3">
          <Cpu className="w-4 h-4 text-purple-400" />
          <span>BIOLOGICAL WEAPON FORENSICS · 悪魔の実回収兵器コード「DOUBLE」</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif-jp font-bold text-stone-100 tracking-tight leading-tight mb-4">
          黒ひげは「能力回収・蓄積生物兵器」だった：<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-400 to-amber-300">
            キメラ多重肉体 × ケルベロスOS × ヤミヤミ回収ドライブ
          </span>
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          ベガパンクが語った「悪魔の実＝人々の願い」という真実。その裏で世界政府が喉から手が出るほど欲したのが、
          <span className="text-purple-300 font-semibold">「敵の願い（能力）を根こそぎ奪い、兵器として自陣に回収・再利用するシステム」</span>でした。
          世界政府が造り出し、凍結されたプロジェクトの生き残り——それがマーシャル・D・ティーチという異形の正体です。
        </p>
      </div>

      {/* Navigation Mode Tabs */}
      <div className="flex items-center gap-2 mb-8 border-b border-stone-800 pb-4">
        <button
          onClick={() => setActiveTab('blueprint')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'blueprint'
              ? 'bg-purple-950/40 border border-purple-500/80 text-purple-300 shadow-md'
              : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-stone-200'
          }`}
        >
          【設計図】3大構成要素の兵器構造
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'history'
              ? 'bg-purple-950/40 border border-purple-500/80 text-purple-300 shadow-md'
              : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-stone-200'
          }`}
        >
          【経緯】計画凍結と数十年の執念
        </button>
        <button
          onClick={() => setActiveTab('mysteries')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'mysteries'
              ? 'bg-purple-950/40 border border-purple-500/80 text-purple-300 shadow-md'
              : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-stone-200'
          }`}
        >
          【伏線回収】眠れない狂気・あいつらだ
        </button>
      </div>

      {/* TAB 1: 3-PIECE BIOLOGICAL BLUEPRINT */}
      {activeTab === 'blueprint' && (
        <div className="space-y-8">
          {/* Component Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blueprintParts.map((part, index) => {
              const Icon = part.icon;
              const isSelected = selectedPart === index;
              return (
                <button
                  key={part.id}
                  onClick={() => setSelectedPart(index)}
                  className={`p-5 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 border-purple-500 shadow-lg ring-1 ring-purple-400/40'
                      : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-stone-400 uppercase font-bold">COMPONENT 0{index + 1}</span>
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-base font-bold font-serif-jp text-stone-100 mb-1">
                    {part.title.split('：')[1]}
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2">
                    {part.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector for Selected Component */}
          {(() => {
            const current = blueprintParts[selectedPart];
            const Icon = current.icon;
            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-stone-950 via-purple-950/20 to-stone-950 border border-purple-800/60 shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-purple-950/60 border border-purple-700">
                      <Icon className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-purple-400 uppercase font-bold">
                        BIO-MECHANISM SPECIFICATION
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif-jp text-stone-100">
                        {current.title}
                      </h3>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${current.badgeColor}`}>
                    {current.subtitle}
                  </span>
                </div>

                <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6 font-sans-jp bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                  {current.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {current.details.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-stone-900/80 border border-stone-850 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-purple-300 font-bold font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                        <span>SPEC DETAIL 0{idx + 1}</span>
                      </div>
                      <p className="text-xs text-stone-300 font-sans-jp leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Integrated Equation Diagram */}
          <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-inner">
            <div className="flex-1">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase block mb-1">
                【能力回収生物兵器の完成等式】
              </span>
              <p className="text-xs sm:text-sm text-stone-300 font-sans-jp">
                <strong className="text-emerald-300">① 器のキメラ化</strong> ＋ 
                <strong className="text-amber-300"> ② ケルベロスOS（3スロット）</strong> ＋ 
                <strong className="text-purple-300"> ③ ヤミヤミの実（回収ドライブ）</strong> 
                ＝ <span className="text-rose-400 font-bold">世界中の神の力（願い）を吸い上げる完全兵器</span>
              </p>
            </div>
            <div className="shrink-0 px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-700/60 text-xs font-mono text-purple-200">
              STATUS: ラストパーツ奪還完了
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: FROZEN PROJECT & DECADES OF OBSESSION */}
      {activeTab === 'history' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Government's Failure & Freeze */}
            <div className="p-6 sm:p-8 rounded-3xl bg-stone-950 border border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase pb-3 border-b border-stone-850">
                <AlertOctagon className="w-4 h-4 text-rose-400" />
                <span>PHASE 01 · 核の欠落によるプロジェクト凍結</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif-jp text-stone-100">
                世界政府の手元になかった「ヤミヤミの実」
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-sans-jp leading-relaxed">
                世界政府（あるいは古代の技術者）は、肉体のキメラ化とベースOS（ケルベロスの因子）の移植までには成功しました。
                しかし、この生物兵器を駆動させるために不可欠な心臓部——**「ヤミヤミの実（回収ドライブ）」**が政府の管理下になく、行方不明となってしまったのです。
              </p>
              <div className="p-3.5 bg-rose-950/20 rounded-xl border border-rose-900/40 text-xs text-rose-200 leading-relaxed font-sans-jp">
                回収ドライブがなければ、ただの「眠れない不完全な異形」に過ぎない。政府はこの開発プロジェクトを失敗作として破棄・凍結しました。
              </div>
            </div>

            {/* Teach's Obsession & The Fourth Division Commander Murder */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-stone-950 via-purple-950/20 to-stone-950 border border-purple-800/60 space-y-4">
              <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold uppercase pb-3 border-b border-stone-850">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>PHASE 02 · ティーチの生存証明とラストパーツ強奪</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif-jp text-stone-100">
                白ひげ海賊団での数十年の潜伏とサッチ殺害
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-sans-jp leading-relaxed">
                ティーチは、自分が何のために造られたのか、なぜ一生眠ることができないのかという「出生の真実」を完全に理解していました。
                彼にとってヤミヤミの実とは単なる強い能力ではなく、**「自分が完全な存在（兵器／世界の王）として覚醒するための最後の鍵」**でした。
              </p>
              <div className="p-3.5 bg-purple-950/40 rounded-xl border border-purple-700/60 text-xs text-purple-200 leading-relaxed font-sans-jp">
                サッチがヤミヤミの実を手に入れた瞬間、躊躇なく殺害した理由。それは欲望ではなく、「自らの存在理由を完成させるための絶対の宿命」だったからです。
              </div>
            </div>
          </div>

          {/* Timeline of the Weapon's Awakening */}
          <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-4 shadow-inner">
            <h4 className="text-sm font-bold font-serif-jp text-amber-300 uppercase font-mono">
              【能力回収兵器としての覚醒プロセス】
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-850">
                <span className="text-stone-400 font-mono block mb-1">STEP 1: 潜伏期</span>
                <strong className="text-stone-200">白ひげの船で20年以上</strong>
                <p className="text-stone-400 mt-1">目立たずヤミヤミの実が世に出現するのをひたすら待機。</p>
              </div>
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-850">
                <span className="text-purple-400 font-mono block mb-1">STEP 2: ラストパーツ装着</span>
                <strong className="text-purple-200">サッチ殺害＆実の捕食</strong>
                <p className="text-stone-400 mt-1">回収ドライブを体内に取り込み、兵器の基本機能がオンライン化。</p>
              </div>
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-850">
                <span className="text-amber-400 font-mono block mb-1">STEP 3: 初の実戦吸引</span>
                <strong className="text-amber-200">白ひげからグラグラ抽出</strong>
                <p className="text-stone-400 mt-1">黒布の中で回収ドライブを稼働させ、世界最強の破壊力をスロット③へ充填。</p>
              </div>
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-850">
                <span className="text-rose-400 font-mono block mb-1">STEP 4: 軍団全体へ拡張</span>
                <strong className="text-rose-200">能力者狩りの組織化</strong>
                <p className="text-stone-400 mt-1">吸い上げた能力を自らの幹部たちへ再配分する「能力兵器工場」へ進化。</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 3 ENIGMAS FORENSICS */}
      {activeTab === 'mysteries' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mysteries.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.number} className="p-6 rounded-3xl bg-stone-950 border border-stone-800 flex flex-col justify-between space-y-4 shadow-xl">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-stone-850 mb-3">
                      <span className="text-xs font-mono text-purple-400 font-bold uppercase">CASE {m.number}</span>
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-900 text-amber-300 border border-stone-750 block w-fit mb-2">
                      {m.tag}
                    </span>
                    <h3 className="text-base font-bold font-serif-jp text-stone-100 mb-3">
                      {m.title}
                    </h3>
                    <p className="text-xs text-stone-300 font-sans-jp leading-relaxed">
                      {m.forensic}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deep Insight Callout */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/30 via-stone-900 to-stone-950 border border-purple-600/40 space-y-2">
            <h4 className="text-amber-300 font-bold text-sm sm:text-base font-serif-jp flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>【結論：神話と兵器の激突】ニカ（太陽の解放） vs ティーチ（能力の監獄）</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-jp">
              ルフィ（ニカ）が「人々の願いと自由を解き放ち、世界をひとつに繋ぐ解放の戦士」であるのに対し、
              ティーチは「人々の願い（悪魔の実）をすべて闇の中に吸い込んで独占し、世界を私物化するために造られた回収兵器」です。
              最終章で激突する2人の戦いは、単なる海賊同士の覇権争いではなく、<strong className="text-stone-100">「願いの解放」vs「願いの収奪」という、神話と兵器の究極のイデオロギー闘争</strong>なのです。
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

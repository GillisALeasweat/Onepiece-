import React, { useState } from 'react';
import { Wind, Anchor, Skull, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export const AncientWeaponsMatrix: React.FC = () => {
  const [selectedWeapon, setSelectedWeapon] = useState<'uranus' | 'poseidon' | 'pluton'>('pluton');

  const weapons = [
    {
      id: 'uranus' as const,
      name: 'ウラノス',
      epithet: '天帝（天空神）',
      side: '陸側（巨大な王国）',
      sideType: 'life',
      attribute: '天・大気・古代エネルギー',
      nature: '自然の生の力（無公害エネルギー・大気循環）',
      form: '古代の大気循環装置／太陽エネルギー炉',
      icon: Wind,
      color: 'text-amber-300',
      borderColor: 'border-amber-500/30',
      bgColor: 'bg-amber-950/20',
      description: 'かつての大地を照らし、クリーンな無尽蔵のエネルギーで天候と自然環境を豊かに保っていた大気の力。エッグヘッドでベガパンクが再現した「マザーフレイム」は、この失われた天の火の模倣に過ぎない。',
      status: '世界政府（イム様）が一部を掌握し、ルルシア消滅などの殺戮に歪めて悪用'
    },
    {
      id: 'poseidon' as const,
      name: 'ポセイドン',
      epithet: '海神',
      side: '陸側（共存の盟友）',
      sideType: 'life',
      attribute: '海・巨大生態系',
      nature: '生物との愛ある対話・生命の共生',
      form: '生きた人魚の王女（しらほし）',
      icon: Anchor,
      color: 'text-cyan-300',
      borderColor: 'border-cyan-500/30',
      bgColor: 'bg-cyan-950/20',
      description: '海王類と心を通わせ、世界を滅ぼすのではなく「守り、運ぶ」ための力。排水時に巨船ノアを地上へと牽引し、深海の同胞たちを太陽の下へ連れ出すための不可欠な生命の架け橋。',
      status: 'リュウグウ王国（しらほし姫）の中に覚醒。ルフィと心を通わせる'
    },
    {
      id: 'pluton' as const,
      name: 'プルトン',
      epithet: '冥王（冥府・死者の国）',
      side: '政府側（イム様・20の王）が建造',
      sideType: 'death',
      attribute: '冥府・破壊・世界水没',
      nature: '唯一の「死の人工兵器」',
      form: '島一つを消し去る巨大戦艦（設計図が存在）',
      icon: Skull,
      color: 'text-rose-400',
      borderColor: 'border-rose-500/40',
      bgColor: 'bg-rose-950/20',
      description: '三柱の中で唯一、ギリシャ神話の冥府（死者の世界）の名を冠し、唯一「人間の設計図」が存在する冷酷な殺戮兵器。イム様が大地を打ち砕き世界を水没させるために造らせた。終戦時、光月家が命懸けで奪い、ワノ国深奥に封印した。',
      status: 'ワノ国地下深くに水没封印。「開国＝壁の破壊」によってのみ再出現'
    }
  ];

  const current = weapons.find(w => w.id === selectedWeapon)!;

  return (
    <section id="ancient-weapons" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Editorial context & mural image */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            <span>CHAPTER 02 · 古代兵器の本質</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
            「生の営み（陸側）」vs<br />
            「死の人工物（政府側）」
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-6 font-sans-jp">
            なぜポセイドンは「生き物」であり、プルトンだけが「設計図のある戦艦」なのか？<br />
            三柱の古代兵器は同列の兵器群ではありません。天と海は自然の生の調和であり、
            冥府の名を持つプルトンのみが、イム様が世界を沈めるために造らせた冷酷な死の人工物だったのです。
          </p>

          {/* Mural Artifact Frame */}
          <div className="rounded-xl overflow-hidden border border-stone-800 bg-stone-900/60 shadow-lg">
            <img
              src="/src/assets/images/ancient_weapons_triad_1791208059642.jpg"
              alt="三柱の古代兵器を描いた古代神殿の石板レリーフ"
              className="w-full h-56 object-cover object-center filter brightness-90 contrast-105"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-stone-950/80 border-t border-stone-800/80">
              <p className="text-[11px] font-serif-jp text-stone-400 italic">
                Fig. 1 - 古代レリーフ壁画：天空の調和（ウラノス）、海獣との対話（ポセイドン）、地下に封じられた戦艦（プルトン）
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Weapon Selector & Deep Dive */}
        <div className="lg:col-span-7 space-y-6">
          {/* Segmented selector tabs */}
          <div className="grid grid-cols-3 gap-2 p-1.5 bg-stone-900 rounded-xl border border-stone-800">
            {weapons.map((w) => {
              const Icon = w.icon;
              const isSelected = selectedWeapon === w.id;
              return (
                <button
                  key={w.id}
                  onClick={() => setSelectedWeapon(w.id)}
                  className={`py-3 px-3 rounded-lg text-left transition-all flex flex-col items-start gap-1 cursor-pointer ${
                    isSelected
                      ? 'bg-stone-800 text-stone-100 shadow-md border border-stone-700'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Icon className={`w-4 h-4 ${w.color}`} />
                    <span className="text-xs sm:text-sm font-bold font-serif-jp">{w.name}</span>
                  </div>
                  <span className="text-[10px] text-stone-400 truncate w-full">
                    {w.epithet}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Focused Weapon Card */}
          <div className={`p-6 sm:p-8 rounded-2xl border ${current.borderColor} ${current.bgColor} transition-all`}>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs tracking-wider uppercase font-semibold text-stone-400">
                  {current.attribute}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100 flex items-center gap-2">
                  <span>{current.name}</span>
                  <span className="text-sm font-normal text-stone-400">({current.epithet})</span>
                </h3>
              </div>

              {/* Life vs Death Badge */}
              <div className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 ${
                current.sideType === 'life'
                  ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-700/50'
                  : 'bg-rose-950/60 text-rose-300 border border-rose-700/50'
              }`}>
                {current.sideType === 'life' ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>生の営み（自然・共生）</span>
                  </>
                ) : (
                  <>
                    <Skull className="w-3.5 h-3.5" />
                    <span>死の人工物（政府側が建造）</span>
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-xs">
              <div className="p-3 bg-stone-900/60 rounded border border-stone-800">
                <span className="text-stone-400 block mb-1">所属陣営・出自</span>
                <span className="font-semibold text-stone-200">{current.side}</span>
              </div>
              <div className="p-3 bg-stone-900/60 rounded border border-stone-800">
                <span className="text-stone-400 block mb-1">存在形態</span>
                <span className="font-semibold text-stone-200">{current.form}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
                  兵器の根底にある本質
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-jp">
                  {current.description}
                </p>
              </div>

              <div className="p-3 bg-stone-950/80 rounded border border-stone-800">
                <span className="text-[11px] font-semibold text-amber-400 block mb-0.5">
                  現在の所在と物語上の鍵
                </span>
                <span className="text-xs text-stone-300 leading-relaxed">
                  {current.status}
                </span>
              </div>
            </div>

            {/* Special Highlight for Pluton and Wano's Sacrificial Sealing */}
            {current.id === 'pluton' && (
              <div className="mt-6 pt-4 border-t border-rose-900/40">
                <div className="flex items-start gap-2 text-rose-300 text-xs">
                  <Shield className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold">光月家が命懸けで奪った理由：</span>
                    <p className="text-stone-300 mt-0.5 leading-relaxed">
                      プルトンは巨大な王国の兵器ではなく、政府が世界を海に沈めるために造ったもの。
                      敗戦時、光月家は二度と世界を沈めさせないためにプルトンを強奪し、自らの国を沈めてまで地下深くに封印しました。
                      モモの助が「まだ開国してはならん」と躊躇したのは、この死の怪物を出す時期を慎重に見定めているからです。
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

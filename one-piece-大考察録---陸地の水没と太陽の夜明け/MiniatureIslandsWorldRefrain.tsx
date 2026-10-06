import React, { useState } from 'react';
import { 
  Globe, ShieldAlert, Sparkles, MapPin, Hammer, Sun, 
  Layers, CloudRain, Feather, Factory, Compass, ArrowRight 
} from 'lucide-react';

export const MiniatureIslandsWorldRefrain: React.FC = () => {
  const [selectedIsland, setSelectedIsland] = useState<'alabasta' | 'skypiea' | 'dressrosa' | 'wano'>('dressrosa');

  const islands = {
    alabasta: {
      name: 'アラバスタ王国',
      enemy: 'クロコダイル（七武海）',
      enemyRole: '英雄を装う「偽りの支配者」',
      victim: 'ネフェルタリ家 ＆ 国民',
      stolen: '雨（大地の恵み）の強奪と降雨操作',
      mechanism: 'ダンスパウダーで国土の雨を奪い、民衆と国王軍を疑心暗鬼にさせて内乱（分断）を誘発。',
      cageDestroyed: '地下神殿の天井を突き破り、クロコダイルを地上へ打ち上げ、恵みの雨を国中に降らせる',
      icon: CloudRain,
      color: 'text-amber-400',
      border: 'border-amber-700/50',
      bg: 'bg-amber-950/20',
      worldParallel: 'イム様が大地を水没させ、自然の恵みを分断した構造の縮図'
    },
    skypiea: {
      name: '空島（スカイピア）',
      enemy: '神（ゴッド）・エネル',
      enemyRole: '雷の恐怖で君臨する「偽りの神」',
      victim: 'ガン・フォール ＆ シャンディア（先住民族）',
      stolen: '聖地（アッパーヤード）＝「奪われた本来の大地（Daichi）」',
      mechanism: '400年前に突き上げられた地上の一部「大地（Vearth）」を神の住処として強奪し、先住民を追放。',
      cageDestroyed: '巨大な豆の木を登り、エネルの雷雲（デスピア）を吹き飛ばし、天と地を繋ぐ黄金の鐘を鳴り響かせる',
      icon: Feather,
      color: 'text-cyan-300',
      border: 'border-cyan-700/50',
      bg: 'bg-cyan-950/20',
      worldParallel: 'かつての大地（Daichi）を奪い、自らを「神」と自称したイム様と天竜人の縮図'
    },
    dressrosa: {
      name: 'ドレスローザ',
      enemy: 'ドンキホーテ・ドフラミンゴ',
      enemyRole: '糸で民を操る「傀儡の支配者」',
      victim: 'リク王家 ＆ トンタッタ ＆ オモチャに変えられた国民',
      stolen: '人々の尊厳、本来の王位、そして「歴史と記憶」',
      mechanism: 'ホビホビの力で反逆者をオモチャに変えて記憶から消去（歴史の隠蔽）。糸で国王を操り暴君に仕立て上げる。',
      cageDestroyed: '島全体を閉ざし収縮する「鳥カゴ（逃げ場なき檻）」を、ドフラミンゴを粉砕することで完全消滅させ、太陽の光を取り戻す',
      icon: Layers,
      color: 'text-rose-400',
      border: 'border-rose-700/50',
      bg: 'bg-rose-950/20',
      worldParallel: '天竜人を傀儡（フィギュア）にし、空白の100年（記憶）を抹消したイム様の支配構造の完全な相似形'
    },
    wano: {
      name: 'ワノ国',
      enemy: '黒炭オロチ ＆ 百獣のカイドウ',
      enemyRole: '武力と私怨で国土を汚染した「侵略と簒奪の支配者」',
      victim: '光月家 ＆ 赤鞘九人男 ＆ 飢餓に喘ぐ国民',
      stolen: '清浄な水源、自然の農地、開かれた未来',
      mechanism: '武器工場による毒水と汚染。雨水で満たされた旧ワノ国を封印し、民衆を極貧とSMILE（偽りの笑い）で縛る。',
      cageDestroyed: '鬼ヶ島を空中で支え落下の危機を防ぎつつ、カイドウを地底マグマへ叩き落とし、20年閉ざされた天の闇を払う',
      icon: Factory,
      color: 'text-purple-400',
      border: 'border-purple-700/50',
      bg: 'bg-purple-950/20',
      worldParallel: '水没した大地の上に築かれ、死の兵器プルトンを地下に抱える地球物理構造の相似形'
    }
  };

  const current = islands[selectedIsland];

  return (
    <section id="miniature-world" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
          <span>THE FRACTAL WORLD PATTERN · 物語のフラクタル構造</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          すべての島で描かれてきた「ミニチュア版・世界の歴史」と、<br className="hidden sm:inline" />
          檻をぶち破るルフィの軌跡
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          ワンピースの各編で描かれる島々の悲劇は、単なる独立したエピソードではありません。
          すべては<span className="text-amber-300 font-semibold">「800年前にイム様が世界全体に対して行ったことのミニチュア（縮小再現）」</span>であり、
          ルフィの解決方法も一貫して<span className="text-rose-400 font-semibold">「その島を閉じ込める支配の檻や壁をぶち破ること」</span>だったのです。
        </p>
      </div>

      {/* Part 1: Miniature Island Comparator */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase text-stone-400 font-semibold">
            4大エピソードに見る「侵略者 vs 本来の民」の縮図
          </span>
          <span className="text-xs text-stone-500 hidden sm:inline">タブを切り替えて各島の相似構造を確認</span>
        </div>

        {/* Island Selectors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {(['alabasta', 'skypiea', 'dressrosa', 'wano'] as const).map((key) => {
            const island = islands[key];
            const isSelected = selectedIsland === key;
            const Icon = island.icon;
            return (
              <button
                key={key}
                onClick={() => setSelectedIsland(key)}
                className={`p-4 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? `${island.bg} ${island.border} shadow-lg ring-1 ring-amber-400/50`
                    : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-4 h-4 ${island.color}`} />
                    <span className="text-[10px] font-mono text-stone-500 uppercase">ISLAND</span>
                  </div>
                  <h3 className="text-sm font-bold font-serif-jp text-stone-100">{island.name}</h3>
                </div>
                <div className="mt-3 text-[11px] text-stone-400 truncate">
                  敵：{island.enemy.split('（')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Island Deep Breakdown vs World Parallel */}
        <div className={`p-6 sm:p-8 rounded-2xl border ${current.border} ${current.bg} shadow-xl`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800 mb-6">
            <div>
              <span className="text-xs font-mono text-stone-400 uppercase">CASE STUDY · {current.name}</span>
              <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100">
                {current.name}の構造的悲劇
              </h3>
            </div>
            <div className="p-2 rounded-lg bg-stone-950/80 border border-stone-800 text-xs text-amber-300 font-semibold self-start sm:self-auto">
              【地球規模の相似形】{current.worldParallel}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm mb-6">
            {/* Colon 1: Invader */}
            <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-850 space-y-1">
              <span className="text-rose-400 font-bold block text-xs uppercase font-mono">偽りの王・侵略者</span>
              <h4 className="font-bold text-stone-100 font-serif-jp">{current.enemy}</h4>
              <p className="text-stone-400 text-xs leading-relaxed">{current.enemyRole}</p>
            </div>

            {/* Colon 2: Stolen Land & People */}
            <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-850 space-y-1">
              <span className="text-amber-400 font-bold block text-xs uppercase font-mono">奪われた本来の支配者・民</span>
              <h4 className="font-bold text-stone-100 font-serif-jp">{current.victim}</h4>
              <p className="text-stone-400 text-xs leading-relaxed">{current.stolen}</p>
            </div>

            {/* Colon 3: Mechanism of Division */}
            <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-850 space-y-1">
              <span className="text-cyan-400 font-bold block text-xs uppercase font-mono">分断と隠蔽の手法</span>
              <p className="text-stone-300 text-xs leading-relaxed">{current.mechanism}</p>
            </div>
          </div>

          {/* Cage Destruction */}
          <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 flex items-start gap-3">
            <Hammer className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-stone-200 font-sans-jp leading-relaxed">
              <strong className="text-amber-300 block mb-0.5 font-serif-jp">【ルフィがぶち破った檻と解放】</strong>
              {current.cageDestroyed}
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: The Macro Conclusion - Breaking the Cage of the Earth */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-[#0d1424] border border-amber-500/40 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-300 font-bold mb-3">
            <Globe className="w-4 h-4" />
            <span>THE ULTIMATE DESTINY · 最終章への必然的帰着</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-jp font-bold text-stone-100 leading-tight mb-4">
            「支配の檻をぶち破る」——<br />
            地球スケール版としての最終章
          </h3>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-jp mb-6">
            各章の決着の瞬間を振り返ると、ルフィは常に敵個人を倒すだけでなく、
            <strong className="text-stone-100">「その島を閉じ込めていた物理的な檻や支配の象徴」</strong>を粉砕してきました。
          </p>

          {/* 4 Iconic Cage Breakages */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-xs">
            <div className="p-3.5 bg-stone-950/80 rounded-xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1 font-serif-jp">アーロンパーク</span>
              ナミを縛り付けた「測量室（支配と呪縛の象徴）」ごと建物を真っ二つに叩き折る。
            </div>

            <div className="p-3.5 bg-stone-950/80 rounded-xl border border-stone-800">
              <span className="text-cyan-400 font-bold block mb-1 font-serif-jp">スカイピア</span>
              黄金の鐘を鳴らし、雲の上と下の地上に「自分たちの声（存在）」を届けて隔絶を破壊。
            </div>

            <div className="p-3.5 bg-stone-950/80 rounded-xl border border-stone-800">
              <span className="text-rose-400 font-bold block mb-1 font-serif-jp">ドレスローザ</span>
              島全体を閉じ込めていた「鳥カゴ（逃げ場なき檻）」を粉砕し、天の光を取り戻す。
            </div>
          </div>

          {/* Climax Epiphany Box */}
          <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/50 text-xs sm:text-sm text-amber-100 font-serif-jp leading-relaxed">
            <span className="font-bold text-amber-300 block mb-1 text-base">
              「世界の栓を抜き、海という檻をぶち破り、大地と太陽の青空を取り戻す」
            </span>
            最終章でルフィが成し遂げる世界の解放は、突拍子もない新設定ではありません。<br />
            イーストブルーのアーロンパークから始まり、アラバスタ、空島、ドレスローザ、ワノ国でルフィがやってきた
            <strong className="text-amber-200 underline decoration-amber-400 ml-1">「檻の破壊と太陽の奪還」の地球スケール版（最終完成形）</strong>そのものなのです。
          </div>
        </div>
      </div>
    </section>
  );
};

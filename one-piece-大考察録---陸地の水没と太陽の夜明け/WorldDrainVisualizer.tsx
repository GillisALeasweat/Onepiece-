import React, { useState } from 'react';
import { Waves, ArrowDownCircle, Sun, AlertTriangle, Eye, ShieldAlert } from 'lucide-react';

export const WorldDrainVisualizer: React.FC = () => {
  const [waterLevel, setWaterLevel] = useState<number>(200); // 200m is submerged, 0m is fully drained
  const [activeHotspot, setActiveHotspot] = useState<string | null>('plug');

  const isDrained = waterLevel <= 50;

  return (
    <section id="drain-simulation" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
          <span>CHAPTER 01 · 物理構造シミュレーター</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          「陸地（Daichi）」の水没と、世界の巨大な栓
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          世界政府にとって「海」とは自然景観ではなく、人々を島々に孤立させ支配するための<span className="text-cyan-300 font-medium">『液体の檻』</span>でした。
          下のスライダーで海水を抜き去り、かつて沈められた巨大な陸地の全貌と真の『オールブルー』の姿を観察してください。
        </p>
      </div>

      {/* Control Bar & State Segmented Button */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-6 mb-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-800">
          <div>
            <div className="text-xs uppercase tracking-wider text-stone-400 font-medium mb-1">
              世界海面標高シミュレーション
            </div>
            <div className="text-xl sm:text-2xl font-serif-jp font-bold flex items-center gap-3">
              <span className={waterLevel > 100 ? "text-cyan-400" : "text-amber-400"}>
                {waterLevel === 0 ? "海面 0m (Daichi完全復元)" : `海面 +${waterLevel}m (${waterLevel >= 150 ? '世界水没・海の檻' : '排水進行中'})`}
              </span>
              <span className="text-xs font-sans px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                {isDrained ? '大地解放フェーズ' : '世界政府統治下'}
              </span>
            </div>
          </div>

          {/* Quick preset buttons */}
          <div className="flex items-center gap-2 p-1 bg-stone-950 rounded-lg border border-stone-800 self-start md:self-auto">
            <button
              onClick={() => setWaterLevel(200)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                waterLevel === 200 
                  ? 'bg-cyan-900/60 text-cyan-200 border border-cyan-700/50' 
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              現在：海抜+200m（檻）
            </button>
            <button
              onClick={() => setWaterLevel(100)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                waterLevel === 100 
                  ? 'bg-amber-900/60 text-amber-200 border border-amber-700/50' 
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              排水中：海抜+100m
            </button>
            <button
              onClick={() => setWaterLevel(0)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                waterLevel === 0 
                  ? 'bg-amber-500 text-stone-950 font-semibold' 
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              栓開放：海抜0m（Daichi復活）
            </button>
          </div>
        </div>

        {/* Interactive Slider */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-stone-400 mb-2">
            <span>Daichi復活（本来の世界）</span>
            <span className="font-mono text-cyan-400">水深スライダー調整：{waterLevel}m</span>
            <span>現在（200m上昇した水没世界）</span>
          </div>
          <input
            type="range"
            min={0}
            max={200}
            value={waterLevel}
            onChange={(e) => setWaterLevel(Number(e.target.value))}
            className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>
      </div>

      {/* Cross-section Physical Canvas */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-stone-800 bg-[#070b14] min-h-[440px] p-4 sm:p-8 flex flex-col justify-between">
        {/* Dynamic Sky & Sea Atmosphere */}
        <div 
          className="absolute inset-x-0 top-0 transition-all duration-700 pointer-events-none"
          style={{
            height: `${Math.max(12, 100 - (waterLevel / 200) * 60)}%`,
            background: isDrained
              ? 'linear-gradient(180deg, #0e2a4a 0%, #1a4d7c 50%, #d97706 100%)'
              : 'linear-gradient(180deg, #080d1a 0%, #0d1a2d 100%)',
            opacity: 0.85
          }}
        />

        {/* Dynamic Water Volume */}
        <div
          className="absolute inset-x-0 bottom-0 transition-all duration-700 pointer-events-none"
          style={{
            height: `${(waterLevel / 200) * 65}%`,
            background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.35) 0%, rgba(14, 116, 144, 0.75) 40%, rgba(8, 51, 68, 0.95) 100%)',
            borderTop: waterLevel > 0 ? '2px solid rgba(103, 232, 249, 0.6)' : 'none'
          }}
        >
          {waterLevel > 0 && (
            <div className="absolute top-1 right-6 text-[10px] text-cyan-300 font-mono flex items-center gap-1">
              <Waves className="w-3 h-3 animate-pulse" />
              <span>海面水位 +{waterLevel}m</span>
            </div>
          )}
        </div>

        {/* SVG Geological Structure Layer */}
        <div className="relative z-10 w-full h-72 sm:h-84 flex items-end">
          <svg viewBox="0 0 1000 360" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="redlineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#450a0a" />
              </linearGradient>
              <linearGradient id="daichiGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#78350f" />
                <stop offset="100%" stopColor="#292524" />
              </linearGradient>
              <linearGradient id="drainGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            {/* Red Line Pillar (Center-Right) */}
            <path
              d="M 520,360 L 520,30 L 600,30 L 600,360 Z"
              fill="url(#redlineGrad)"
              className="cursor-pointer hover:opacity-90"
              onClick={() => setActiveHotspot('redline')}
            />
            {/* Mary Geoise City Marker on top of Red Line */}
            <circle cx="560" cy="30" r="7" fill="#fbbf24" />
            <text x="560" y="18" fill="#fde68a" fontSize="12" textAnchor="middle" fontWeight="bold">
              聖地マリージョア
            </text>

            {/* The Sunken Vast Continent (Daichi) Bedrock */}
            <path
              d="M 0,360 L 0,220 Q 180,200 340,220 L 380,180 Q 420,180 440,240 L 520,240 L 520,360 Z"
              fill="url(#daichiGrad)"
              className="cursor-pointer hover:opacity-90"
              onClick={() => setActiveHotspot('daichi')}
            />
            <path
              d="M 600,360 L 600,240 Q 720,220 860,200 L 920,240 L 1000,230 L 1000,360 Z"
              fill="url(#daichiGrad)"
              className="cursor-pointer hover:opacity-90"
              onClick={() => setActiveHotspot('daichi')}
            />

            {/* Wano & Underground Caldera (Left Island with tall mountain) */}
            <g className="cursor-pointer" onClick={() => setActiveHotspot('wano')}>
              <path d="M 120,220 L 170,120 L 220,220 Z" fill="#44403c" stroke="#78716c" strokeWidth="2" />
              {/* Underground Pluton chamber */}
              <rect x="150" y="270" width="40" height="24" rx="3" fill="#1c1917" stroke="#ef4444" strokeWidth="1.5" />
              <text x="170" y="286" fill="#f87171" fontSize="9" textAnchor="middle">
                プルトン
              </text>
              <text x="170" y="110" fill="#e7e5e4" fontSize="11" textAnchor="middle" fontWeight="bold">
                ワノ国
              </text>
            </g>

            {/* Fish-Man Island & Noah (Deep inside the hole under Red Line) */}
            <g className="cursor-pointer" onClick={() => setActiveHotspot('fishman')}>
              <circle cx="560" cy="310" r="16" fill="rgba(6, 182, 212, 0.4)" stroke="#22d3ee" strokeWidth="1.5" />
              <text x="560" y="314" fill="#a5f3fc" fontSize="9" textAnchor="middle">
                魚人島
              </text>
              {/* Noah ark outline */}
              <ellipse cx="560" cy="336" rx="20" ry="6" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />
              <text x="560" y="352" fill="#fde68a" fontSize="8" textAnchor="middle">
                約束の巨船ノア
              </text>
            </g>

            {/* Laugh Tale & The World Drain Plug (Right side deep trench) */}
            <g className="cursor-pointer" onClick={() => setActiveHotspot('plug')}>
              <path d="M 830,220 L 860,160 L 890,220 Z" fill="#57534e" stroke="#d97706" strokeWidth="2" />
              {/* Giant Drain Valve / Plug */}
              <circle cx="860" cy="270" r="18" fill="url(#drainGlow)" stroke="#f59e0b" strokeWidth="2" className="animate-pulse" />
              <path d="M 852,270 L 868,270 M 860,262 L 860,278" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              <text x="860" y="150" fill="#fcd34d" fontSize="11" textAnchor="middle" fontWeight="bold">
                ラフテル
              </text>
              <text x="860" y="306" fill="#fbbf24" fontSize="9" textAnchor="middle">
                世界の巨大な栓 (Drain)
              </text>
            </g>

            {/* Water drain whirlpool animation if drained */}
            {isDrained && (
              <g opacity="0.8">
                <circle cx="860" cy="270" r="32" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="animate-spin" />
                <line x1="860" y1="220" x2="860" y2="250" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
              </g>
            )}
          </svg>
        </div>

        {/* Dynamic Status Banner */}
        <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-800/80 bg-stone-900/80 backdrop-blur-md -mx-4 -mb-4 sm:-mx-8 sm:-mb-8 p-4 sm:px-8">
          <div className="flex items-center gap-2">
            {isDrained ? (
              <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
            ) : (
              <Waves className="w-5 h-5 text-cyan-400" />
            )}
            <span className="text-xs sm:text-sm font-medium text-stone-200">
              {isDrained 
                ? "排水完了：海面が下がり、ひとつの陸地「Daichi」が再結合。世界共通の青空＝オールブルーが開通！" 
                : "水没状態：海面200m上昇により大地は分断。各島は隔絶され、世界政府が海を統治中。"}
            </span>
          </div>
          <div className="text-[11px] text-stone-400">
            上の図の各ポイントをクリックして解説を表示
          </div>
        </div>
      </div>

      {/* Explanatory Drawer based on active hotspot */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-2">
            <Eye className="w-4 h-4" />
            <span>選択した構造ポイントの解説</span>
          </div>

          {activeHotspot === 'plug' && (
            <div>
              <h4 className="text-base font-bold text-stone-100 mb-1">
                ラフテルと「世界の巨大な栓（ONE PIECE）」
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                ロジャーがラフテルで目にして大笑いした「宝」の物理的実体。世界を満たす海水を地底深奥へ流し込み、
                800年前に沈められた大陸を取り戻すための巨大な排水栓（Drain Valve）です。
                ジョイボーイの残したこの装置を開放することこそが、世界を檻から解き放つトリガーとなります。
              </p>
            </div>
          )}

          {activeHotspot === 'daichi' && (
            <div>
              <h4 className="text-base font-bold text-stone-100 mb-1">
                水没した巨大な陸地「Daichi（Dの源流）」
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                「Dの一族」の「D」の最大の根源は、かつて存在したこの広大無辺の大地「Daichi」の住人であること。
                イム様によって海中深くに沈められたため、現在は魚人島や各島の海底遺跡としてしか痕跡を残していません。
              </p>
            </div>
          )}

          {activeHotspot === 'wano' && (
            <div>
              <h4 className="text-base font-bold text-stone-100 mb-1">
                ワノ国とプルトンの三重封印
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                政府が建造した死の破壊兵器プルトン。光月家は800年前、二度と世界水没の殺戮に使わせないために奪取し、
                自然の壁で囲んで雨水で水没させた旧ワノ国のさらに地下深くに封印しました。「開国」とは壁を壊しプルトンを外へ解放することです。
              </p>
            </div>
          )}

          {activeHotspot === 'fishman' && (
            <div>
              <h4 className="text-base font-bold text-stone-100 mb-1">
                魚人島と巨船ノアの約束
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                世界の栓が抜かれ海面が下がるとき、深海の魚人島は水圧や地形の変化を迎えます。
                その時、ポセイドン（海王類）が引く約束の巨船ノアに全住人を乗せ、復活した陽光の大地へと引き揚げる契約こそが、ジョイボーイの約束でした。
              </p>
            </div>
          )}

          {activeHotspot === 'redline' && (
            <div>
              <h4 className="text-base font-bold text-stone-100 mb-1">
                赤い土の壁（レッドライン）とマリージョア
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                海抜1万メートルにそびえる人工的断崖。世界を東西南北に分断し、頂点に天竜人を住まわせることで、
                地上の人間同士の往来と情報共有を完全に遮断する世界統治の境界線です。
              </p>
            </div>
          )}
        </div>

        {/* All Blue Revelation Box */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-amber-950/30 to-stone-900 border border-amber-800/40">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-2">
            <Sun className="w-4 h-4" />
            <span>サンジの夢「オールブルー」の真の解釈</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed mb-3">
            サンジが追い求めてきた「オールブルー」。それは単に四つの海の魚が泳ぎ交う海域というに留まりません。
          </p>
          <div className="p-3 bg-stone-950/60 rounded border border-amber-700/30 text-xs font-serif-jp text-amber-200/90 leading-relaxed">
            「世界の栓が抜かれ、海という檻が消滅し、太古のDaichiが蘇ったとき——<br />
            世界中のすべての人間が足元の大地から見上げる、<span className="font-bold underline decoration-amber-400">『ひとつに繋がった太陽の青空（All Blue Sky）』</span>こそがオールブルーの真実である。」
          </div>
        </div>
      </div>
    </section>
  );
};

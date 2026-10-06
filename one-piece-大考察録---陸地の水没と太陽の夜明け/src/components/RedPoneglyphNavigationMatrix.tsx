import React, { useState } from 'react';
import { Compass, AlertOctagon, FileText, MapPin, ShieldCheck, Sparkles, Navigation, Lock, Layers } from 'lucide-react';

export const RedPoneglyphNavigationMatrix: React.FC = () => {
  const [selectedPoneglyph, setSelectedPoneglyph] = useState<'blue' | 'red'>('red');

  return (
    <section id="road-poneglyph" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-rose-400 font-semibold mb-2">
          <span>THE CRIMSON EMERGENCY CIPHER · 真紅の暗号と二重セキュリティ</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          なぜロードポーネグリフだけ「真っ赤」なのか？<br className="hidden sm:inline" />
          水没後の緊急ナビシステムと、イム様を拒む究極のプロテクト
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          通常のポーネグリフが静かな青黒い石であるのに対し、ロードポーネグリフだけは異様な<span className="text-rose-400 font-semibold">「毒々しいほどの真紅」</span>です。
          これは世界が水没し歴史が抹消されかけた時、未来の解放者（ニカ）を世界の栓（ラフテル）へ導くために、
          光月一族とリリィ女王が<span className="text-amber-300 font-semibold">「後から追加した非常時・緊急用ナビゲーションシステム」</span>だったのです。
        </p>
      </div>

      {/* Interactive Dual Stone Comparator */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Blue Poneglyph: Historical Record */}
        <div 
          onClick={() => setSelectedPoneglyph('blue')}
          className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
            selectedPoneglyph === 'blue'
              ? 'bg-cyan-950/20 border-cyan-500/80 shadow-lg ring-1 ring-cyan-400/50'
              : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span className="text-xs uppercase font-mono text-cyan-400 font-semibold">STANDARD · 青石</span>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50 font-mono">
                水没前の平和期〜混乱期
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100 mb-3">
              通常のポーネグリフ（歴史と記録の石）
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-jp mb-6">
              青みがかった一般的な硬石。かつての大陸時代に、純粋な記録・伝承・手紙（ジョイボーイの謝罪文など）として残されたもの。
              刻まれているのは「古代兵器の所在」や「歴史のテキスト情報」です。
            </p>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="p-3 bg-stone-950/80 rounded-xl border border-stone-850">
                <span className="text-cyan-300 font-bold block mb-1">【情報形態】テキスト情報</span>
                古代兵器ポセイドン・プルトンのありか、ジョイボーイの約束と謝罪。
              </div>
              <div className="p-3 bg-stone-950/80 rounded-xl border border-stone-850">
                <span className="text-cyan-300 font-bold block mb-1">【製造意図】記録の保存</span>
                後世に真実を伝えるための図書館的・アーカイブ的石碑。
              </div>
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-cyan-900/40 text-[11px] text-cyan-400 font-mono">
            ※全国約30個存在・歴史の本文（リオ・ポーネグリフ）を構成
          </div>
        </div>

        {/* Red Road Poneglyph: Emergency Navigation */}
        <div 
          onClick={() => setSelectedPoneglyph('red')}
          className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
            selectedPoneglyph === 'red'
              ? 'bg-rose-950/30 border-rose-500/80 shadow-2xl ring-1 ring-rose-400/50'
              : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
              <div className="flex items-center gap-2">
                <AlertOctagon className="w-5 h-5 text-rose-400" />
                <span className="text-xs uppercase font-mono text-rose-400 font-semibold">EMERGENCY CIPHER · 真紅の石</span>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-700 font-mono font-bold">
                水没直後の超非常時
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100 mb-3">
              ロードポーネグリフ（緊急案内図）
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-jp mb-6">
              世界が海に沈められ、世界が激変・分断された瞬間、「未来の解放者に何としても世界の栓（ラフテル）へ辿り着いてほしい」という強い意志を込めた<strong className="text-rose-400">緊急警告色の赤い石</strong>。
            </p>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="p-3 bg-stone-950/80 rounded-xl border border-stone-850">
                <span className="text-rose-400 font-bold block mb-1">【情報形態】座標・地図情報（ナビゲーション）</span>
                テキストではなく「4つの地点の交点」を示す空間ベクトル。
              </div>
              <div className="p-3 bg-stone-950/80 rounded-xl border border-stone-850">
                <span className="text-rose-400 font-bold block mb-1">【製造意図】世界の栓への緊急誘導</span>
                海に閉ざされた世界を排水し、大地を奪還するための起動鍵への道標。
              </div>
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-rose-900/40 text-[11px] text-rose-400 font-mono font-bold">
            ※世界にたった4つのみ存在・交点に「最後の島ラフテル」
          </div>
        </div>
      </div>

      {/* Part 2: Why Coordinates Became Necessary: The Cataclysm of Flooding */}
      <div className="p-6 sm:p-10 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-2xl mb-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold mb-3">
          <Navigation className="w-4 h-4" />
          <span>GEOMETRIC NECESSITY · なぜ「座標（交点）」が必要になったのか？</span>
        </div>

        <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100 mb-6">
          「水没したからこそ、交点という座標が必要になった」
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-2">
            <span className="text-amber-400 font-bold font-mono text-xs block">【水没前のパンゲア大陸（Daichi）】</span>
            <p className="text-stone-300 leading-relaxed font-sans-jp">
              もし世界がずっと一つの巨大陸地のままだったなら、人は山や川、街道を歩いて旅をすればラフテルへ辿り着けたはずです。複雑な4地点の交点など不要でした。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-950 border border-rose-900/50 space-y-2">
            <span className="text-rose-400 font-bold font-mono text-xs block">【水没後の海の世界（グランドライン）】</span>
            <p className="text-stone-300 leading-relaxed font-sans-jp">
              海面上昇200mによって世界は四つの海に分断され、気象と磁気が狂ったグランドラインが生まれました。
              通常の航海術では二度と辿り着けなくなったため、<strong className="text-rose-300">「変貌した海の上で隠された世界の栓を見つけ出す特殊システム」</strong>として、後から4つの赤い石が刻まれたのです。
            </p>
          </div>
        </div>
      </div>

      {/* Part 3: The Ultimate Security Lock against Imu */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-950 via-rose-950/20 to-stone-950 border border-rose-800/50">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-rose-400 font-bold mb-2">
          <Lock className="w-4 h-4 text-rose-400" />
          <span>THE ULTIMATE DUAL-LOCK SECURITY · イム様すら手を出せないプロテクト</span>
        </div>

        <h4 className="text-lg sm:text-xl font-bold font-serif-jp text-stone-100 mb-3">
          リリィ女王と光月一族が仕掛けた「二重のトラップ」
        </h4>

        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-jp mb-4">
          世界政府がオハラのように「歴史の本文」をどんなに回収・隠蔽・抹殺しようとしても、
          ロードポーネグリフの存在と4つの地点を知らない限り、<strong className="text-amber-300">イム様たち自身もラフテル（世界の排水装置がある場所）には手を出せません。</strong>
        </p>

        <div className="p-4 rounded-xl bg-stone-950/90 border border-stone-800 text-xs sm:text-sm text-amber-200 font-serif-jp leading-relaxed">
          もしラフテルの場所が普通の地図に記されていたなら、イム様は800年の間に古代兵器ウラノスで消滅させていたはずです。<br />
          <strong>「4つの座標の交点に隠し、真紅の非常石で未来の解放者だけを導く」</strong>——これこそが、世界政府の暴威から世界の心臓を守り抜いた、800年前の天才たちの究極のセキュリティなのです。
        </div>
      </div>
    </section>
  );
};

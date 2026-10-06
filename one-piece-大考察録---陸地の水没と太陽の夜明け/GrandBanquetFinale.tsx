import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Music, Heart, Users, Volume2, VolumeX, Shield, Skull } from 'lucide-react';
import { drumsAudio } from '../utils/audioDrums';

export const GrandBanquetFinale: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const unsub = drumsAudio.subscribe((step, _hit) => {
      setActiveStep(step);
      setIsPlaying(drumsAudio.getIsPlaying());
    });
    return () => unsub();
  }, []);

  const handleToggle = () => {
    const state = drumsAudio.toggle();
    setIsPlaying(state);
  };

  const cast = [
    {
      name: 'イム様',
      role: '負の感情を食らう復讐者',
      destiny: '死の兵器プルトンで世界を沈め、天竜人を傀儡（フィギュア）にして君臨。ルフィの笑いにより燃料を絶たれ、永久機関崩壊と共に消滅。',
      icon: Skull,
      color: 'text-rose-400',
      border: 'border-rose-900/40',
      bg: 'bg-rose-950/20'
    },
    {
      name: 'マーシャル・D・ティーチ',
      role: '政府の実験体（Double）',
      destiny: '作られたDとして負の感情を撒き散らし、力任せに世界を壊そうとした悲しき兵器。その異形と死への恐怖の呪縛から解放される。',
      icon: Shield,
      color: 'text-purple-400',
      border: 'border-purple-900/40',
      bg: 'bg-purple-950/20'
    },
    {
      name: 'シャンクス',
      role: '傀儡を拒んだ「D」の導き手',
      destiny: '最高峰フィガーランド家の血筋でありながら「陸の人間（D）」の魂を選び、世界の栓を抜く真の解放者ルフィに全てを託した。',
      icon: Heart,
      color: 'text-amber-400',
      border: 'border-amber-900/40',
      bg: 'bg-amber-950/20'
    },
    {
      name: 'モンキー・D・ルフィ',
      role: 'Daichiの解放者（ニカ）',
      destiny: '怒りを笑いに変えて悪魔を飢え死にさせ、ラフテルで世界の栓を抜いて大地を復元。そして全人類を巻き込む「夢の果て」へ。',
      icon: Sun,
      color: 'text-amber-300',
      border: 'border-amber-500/50',
      bg: 'bg-amber-950/40'
    }
  ];

  return (
    <section id="grand-banquet" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
          <span>CHAPTER 09 · 物語の着地点</span>
        </div>
        <h2 className="text-2xl sm:text-5xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          物語の着地点：<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
            復元された大地と、世界最大の宴
          </span>
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          四人の運命が結着した時、海という名の檻は役目を終えます。
          海水を排出し、800年ぶりに蘇った広大な「ひとつなぎの大地」の上で、すべての種族がでけぇ笑顔で肩を組む——
          それこそが、ルフィとロジャーが口にした「夢の果て」の真の姿です。
        </p>
      </div>

      {/* The 4 Destinies Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {cast.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-5 rounded-xl border ${item.border} ${item.bg} flex flex-col justify-between backdrop-blur-sm`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-[10px] font-mono text-stone-400 uppercase">ROLE {idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold font-serif-jp text-stone-100 mb-1">{item.name}</h3>
                <span className={`text-xs font-semibold block mb-3 ${item.color}`}>
                  {item.role}
                </span>
                <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
                  {item.destiny}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* The Climax Banquet Banner with Web Audio Drum Beat */}
      <div className="relative rounded-3xl overflow-hidden border border-amber-500/50 bg-gradient-to-br from-amber-950/40 via-stone-900 to-stone-950 p-6 sm:p-12 shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
            <Users className="w-4 h-4" />
            <span>ルフィの「夢の果て」の証明</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 leading-tight mb-6">
            「海という檻を終わらせ、<br />
            全人類と手を繋ぎ、<br />
            <span className="text-amber-400">でけぇ笑顔で世界最大の宴をやる</span>」
          </h3>

          <p className="text-xs sm:text-base text-stone-300 leading-relaxed font-sans-jp mb-8">
            世界を支配することでも、王として君臨することでもない。
            分断された海を抜き、境界の壁を壊し、人間も魚人も巨人も小人も、
            同じ広大なDaichiの上で美味い肉を喰らい、酒を酌み交わし、笑い合う。
            それこそが尾田栄一郎先生が一貫して描き続けた、自由の体現そのものなのです。
          </p>

          {/* Drums of Liberation Web Audio Controller */}
          <div className="p-5 rounded-2xl bg-stone-950/90 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handleToggle}
                className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center transition-all shadow-lg shadow-amber-500/30 cursor-pointer shrink-0"
              >
                {isPlaying ? <Volume2 className="w-6 h-6 animate-pulse" /> : <VolumeX className="w-6 h-6" />}
              </button>
              <div>
                <span className="text-xs font-semibold text-amber-300 block">
                  解放のドラム（心臓の鼓動）
                </span>
                <span className="text-[11px] text-stone-400">
                  ドンドットット… ドンドットット… (Web Audio API Synthesizer)
                </span>
              </div>
            </div>

            {/* Rhythm Beat Visualizer */}
            <div className="flex items-center gap-1.5 self-center sm:self-auto">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((s) => {
                const isHit = s === 0 || s === 2 || s === 4 || s === 5;
                const isCurrent = activeStep === s;
                return (
                  <div
                    key={s}
                    className={`w-3.5 h-6 rounded-sm transition-all ${
                      isCurrent && isPlaying
                        ? 'bg-amber-400 scale-y-125 shadow-sm shadow-amber-400'
                        : isHit
                        ? 'bg-amber-900/60'
                        : 'bg-stone-850'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

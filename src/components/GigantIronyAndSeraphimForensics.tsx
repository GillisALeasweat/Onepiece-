import React, { useState } from 'react';
import { 
  Sparkles, Skull, Eye, ShieldAlert, Cpu, Dna, 
  Smile, ArrowRight, Zap, Scale, HeartHandshake, Flame 
} from 'lucide-react';

export const GigantIronyAndSeraphimForensics: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<'inferiority' | 'seraphim' | 'irony'>('irony');

  return (
    <section id="gigant-irony" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Chapter Lead Header */}
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
          <Scale className="w-4 h-4 text-amber-400" />
          <span>PHYSIOLOGICAL & SCIENTIFIC RESENTMENT · 肉体コンプレックスと究極の皮肉</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif-jp font-bold text-stone-100 tracking-tight leading-tight mb-4">
          イム様の「巨大化コンプレックス」とセラフィム：<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-400 to-amber-300">
            800年の科学の闇を、ニカは「ギガントのギャグ」で笑い飛ばす
          </span>
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          なぜ世界政府は何百年も「人類巨大化実験」に執着し、子供の姿のセラフィムすら巨大に作ったのか？
          それは「本物の神々（巨人サイズ）」に踏みつけられていた小さな人間・イム様の強烈な劣等感の裏返しでした。
          そして、800年の血塗られた科学の渇望を、ルフィ（ニカ）は「ただのおふざけ」として一瞬で体現してみせるのです。
        </p>
      </div>

      {/* 3-Pillar Switcher Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          {
            id: 'inferiority',
            step: 'POINT 01',
            title: '「神のスケール」への劣等感',
            subtitle: '虫ケラと見下された小さな人間のルサンチマン',
            icon: Skull,
            color: 'text-rose-400'
          },
          {
            id: 'seraphim',
            step: 'POINT 02',
            title: 'セラフィムと巨大化実験の合流',
            subtitle: 'ルナリア族＋血統因子＋巨大化＝従順な人工の神',
            icon: Dna,
            color: 'text-purple-400'
          },
          {
            id: 'irony',
            step: 'POINT 03',
            title: 'ニカの「ギガント（巨神）」という究極の皮肉',
            subtitle: '800年のシリアスな執念を「アヒャヒャ！」と笑い飛ばす',
            icon: Smile,
            color: 'text-amber-300'
          }
        ].map((item) => {
          const isSelected = selectedCase === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedCase(item.id as any)}
              className={`p-5 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'bg-amber-950/40 border-amber-500/80 shadow-xl ring-1 ring-amber-400/50'
                  : 'bg-stone-900/60 border-stone-800 hover:border-stone-750'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">{item.step}</span>
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <h4 className="text-sm sm:text-base font-bold font-serif-jp text-stone-100 mb-1">{item.title}</h4>
              </div>
              <span className="text-[11px] text-stone-400 font-mono mt-3 truncate block">
                {item.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Deep Dive Spotlight Box */}
      <div className="p-6 sm:p-10 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-2xl">
        {selectedCase === 'inferiority' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-rose-400 uppercase">POINT 01 · 心理的根源</span>
                <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                  「本物の神々（巨人サイズ）」に対するイム様の圧倒的な劣等感
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-stone-950 text-rose-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
                マリージョア地下の巨大麦わら帽子
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-300">
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <span className="text-rose-400 font-mono text-xs font-bold block">【神話時代：大地の基準（デフォルト）】</span>
                <p className="leading-relaxed font-sans-jp">
                  太古の大陸時代、神々や上位種族（ルナリア族、古代巨人族、ズニーシャ）の標準サイズは<strong>「超巨大」</strong>でした。
                  イム様たち小さな人間は、その足元で虫ケラのように踏みつけられていた階級に過ぎませんでした。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <span className="text-amber-300 font-mono text-xs font-bold block">【簒奪後のコンプレックス】</span>
                <p className="leading-relaxed font-sans-jp">
                  ルナリア族の科学を盗み、悪魔の実を作り、大地を海に沈めて「世界の王」の座を奪った後も、自分の肉体は<strong>「小さな人間サイズのまま」</strong>でした。
                  天竜人が一般人を「下々民」と見下し、マリージョア地下に「巨大麦わら帽子」を凍結保存して恐れているのは、すべてこの肉体コンプレックスの遺伝です。
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedCase === 'seraphim' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase">POINT 02 · 科学技術の結実</span>
                <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                  「セラフィム」と「巨大化実験」の合流：従順な人工の神
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-stone-950 text-purple-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
                ルナリア族 × グリーンブラッド
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-300">
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <span className="text-purple-400 font-mono text-xs font-bold block">【なぜセラフィムは子供なのに巨大なのか？】</span>
                <p className="leading-relaxed font-sans-jp">
                  ベガパンクの最高傑作セラフィムは、子供の外見でありながら通常の成人よりも遥かに巨大にデザインされています。
                  世界政府が欲しかったのは、かつて自分たちを虐げていたルナリア族（神の巨躯・発火）の肉体に、悪魔の実の回収システム（緑血）を注ぎ込んだ<strong>「天竜人だけに従順な、新しい人工の神（巨大兵器）」</strong>だったのです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <span className="text-cyan-300 font-mono text-xs font-bold block">【シーザーからベガパンクへの執念】</span>
                <p className="leading-relaxed font-sans-jp">
                  パンクハザードでシーザーが行っていた「子供たちの巨大化実験」の失敗を経て、ベガパンクがセラフィムという形で完成させた。
                  世界政府の数百年にわたる冷酷な科学実験のタイムラインは、すべてイム様の<strong>「神のスケールを手に入れたいという怨念」</strong>の一点に収束していたのです。
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedCase === 'irony' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-amber-300 uppercase">POINT 03 · 究極の皮肉と救済</span>
                <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                  ルフィ（ニカ）の「ギガント（巨神）」という究極の皮肉
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-stone-950 text-amber-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
                ゴムゴムの巨神（ギガント）
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-300">
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <span className="text-rose-400 font-mono text-xs font-bold block">【イム様の800年】</span>
                <p className="leading-relaxed font-sans-jp">
                  血の滲むような人体実験、倫理を捨てた科学の闇、子供たちを犠牲にした何百年もの執念をもってしても、イム様は本物の神のスケールを手に入れることができなかった。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-amber-500/40 space-y-3">
                <span className="text-amber-300 font-mono text-xs font-bold block">【ニカの「おふざけ」】</span>
                <p className="leading-relaxed font-sans-jp">
                  しかしルフィ（ニカ）は、「アヒャヒャ！」と笑いながら体を巨大化（ギガント）させ、カイドウを縄跳びのように扱い、五老星（悪魔）たちを上から見下ろしておもちゃのようにふざけ倒す。
                  <strong>科学の闇で追い求めた悲願を、神（ニカ）はただのゴムの伸縮（ギャグ）としてあっさりとやってのける。</strong>
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/30 to-stone-950 border border-amber-900/40 text-xs sm:text-sm text-stone-200 font-serif-jp leading-relaxed">
              <strong>【小さな悪魔のシリアスを笑い飛ばす】</strong><br />
              世界を海に沈めて800年間居座り続けてきた小さな悪魔（イム様）の重苦しい執念を、文字通り根底から笑い飛ばして無力化する。
              これこそが、怒りではなく「笑い」で神話の支配を打ち砕く、太陽の神ニカの真骨頂なのです。
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

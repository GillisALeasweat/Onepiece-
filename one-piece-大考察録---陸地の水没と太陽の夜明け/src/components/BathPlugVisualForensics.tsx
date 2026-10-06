import React, { useState } from 'react';
import { 
  Waves, Sparkles, Smile, Skull, Flame, Droplets, 
  ArrowDownCircle, HelpCircle, AlertTriangle, Eye, Compass, ShieldAlert 
} from 'lucide-react';

export const BathPlugVisualForensics: React.FC = () => {
  const [activeDrainCase, setActiveDrainCase] = useState<'enies' | 'lulucia' | 'knockup' | 'laughtale'>('enies');
  const [activeTactic, setActiveTactic] = useState<'powerplants' | 'domain_override' | 'gag_unplug'>('powerplants');

  const drainCases = {
    enies: {
      id: 'enies',
      title: 'エニエス・ロビーの「底なしの大穴」と滝',
      location: '司法の島（前線基地）',
      visual: '丸い巨大な排水口に、世界中の海水が無限に落下し続ける「滝」',
      mechanism: '普通なら水が満杯になるはずが、800年間絶対に溢れない。水が地球の裏側や海底の超巨大空洞へと吸い込まれ続けている「常設排水口」そのもの。',
      foreshadowing: '過去に古代兵器プルトン等で地殻に穴を開け、海水の循環と水門を調整した物理的な痕跡。',
      icon: Waves,
      color: 'text-cyan-400',
      badge: '800年稼働の常設排水口'
    },
    lulucia: {
      id: 'lulucia',
      title: 'ルルシア王国跡地の「新たな底なし穴」と1m水位上昇',
      location: 'ルルシア王国跡（マザーフレイム照射後）',
      visual: 'エニエス・ロビーと寸分違わぬ、海水の滝が吸い込まれ続ける大穴',
      mechanism: 'イム様が古代兵器ウラノス（マザーフレイム）で島を消滅させた直後、世界中の海水位が「1メートル上昇」した。',
      foreshadowing: '「地殻に穴を開け／栓を抜くことで、全世界の海水位がダイナミックに変動する」という物理ギミックを、尾田先生が最新話でリアルタイムに実演した決定打。',
      icon: ArrowDownCircle,
      color: 'text-rose-400',
      badge: '最新話で実演された水位変動'
    },
    knockup: {
      id: 'knockup',
      title: 'ノックアップストリーム（突き上げる海流）の海底空洞',
      location: 'ジャヤ沖〜空島スカイピア',
      visual: '天を衝く巨大な水柱。海底に大量の海水が一気に吸い込まれる前兆',
      mechanism: 'モンブラン・クリケットの解説：「海底にある巨大な空洞（cavity）に海水が吸い込まれ、地熱爆発で噴き上がる」。',
      foreshadowing: '尾田先生は物語初期（20年以上前）から、「海の底には、水を一度に大量に吸い込める巨大な空洞（排水の受け皿）が存在する」という物理設定を提示していた。',
      icon: Droplets,
      color: 'text-amber-400',
      badge: '太古からの海底巨大空洞'
    },
    laughtale: {
      id: 'laughtale',
      title: 'ラフテルの「本物の世界の栓（ワンピース）」',
      location: '最後の島・ラフテル（Laugh Tale）',
      visual: '海を維持し続けてきた巨大な「お風呂の栓（物理オブジェクト）」',
      mechanism: 'ニカ（ルフィ）が最終天敵の緋熊（ヒグマ）を倒し、カートゥーンのギガント巨大化で「ポンッ！」と引き抜く。世界中の海水がエニエス・ロビーやルルシアの大穴（地球空洞）へ一気に引き込まれ、海が干上がる。',
      foreshadowing: 'ロジャーたちが涙を流して大爆笑した理由＝世界を支配していたのがあまりにもバカバカしい「お風呂の栓」だったから。',
      icon: Sparkles,
      color: 'text-amber-300',
      badge: '物理的ワンピースの正体'
    }
  };

  const selectedDrain = drainCases[activeDrainCase];

  return (
    <section id="bath-plug-forensics" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Lead Title Header */}
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">
          <Waves className="w-4 h-4 text-cyan-400" />
          <span>PHYSICAL VISUAL FORENSICS · 尾田先生が25年間描き続けてきた「排水の実演」</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif-jp font-bold text-stone-100 tracking-tight leading-tight mb-4">
          エニエス・ロビーとルルシアの「底なしの大穴」：<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-rose-400">
            作中でずっと実演されてきた『お風呂の栓と排水ギミック』
          </span>
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          なぜエニエス・ロビーとルルシアの大穴は、世界中の海水が800年流れ込んでも満杯にならないのか？
          なぜルルシア消滅直後に「世界の海水位が1m上昇」したのか？
          尾田栄一郎先生は、ラフテルで「世界の栓を抜いた瞬間に海が干上がる未来」のビジュアル・ヒントを、作中で何十年も前から実演し続けていました。
        </p>
      </div>

      {/* Part 1: The 3 Physical Drain Evidences + Laugh Tale */}
      <div className="p-6 sm:p-10 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-2xl mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-800 mb-8">
          <div>
            <span className="text-xs font-mono uppercase text-cyan-400 font-bold block mb-1">
              THE 4 HYDROLOGICAL FORENSICS · 海洋物理の決定打
            </span>
            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100">
              作中に存在する「水が無限に吸い込まれる排水口」の物理的証明
            </h3>
          </div>
          <span className="text-xs text-stone-400">タブを選択して検証</span>
        </div>

        {/* 4 Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {(['enies', 'lulucia', 'knockup', 'laughtale'] as const).map((key) => {
            const item = drainCases[key];
            const isSelected = activeDrainCase === key;
            const Icon = item.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveDrainCase(key)}
                className={`p-4 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-950/40 border-cyan-500/80 shadow-xl ring-1 ring-cyan-400/50'
                    : 'bg-stone-950/60 border-stone-850 hover:border-stone-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-[10px] font-mono text-stone-400 truncate">{item.badge}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold font-serif-jp text-stone-100 mb-1 leading-snug">
                    {item.title.split('の')[0]}
                  </h4>
                </div>
                <span className="text-[10px] text-stone-500 font-mono mt-3 truncate block">
                  {item.location}
                </span>
              </button>
            );
          })}
        </div>

        {/* Spotlight Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-stone-950/90 border border-cyan-500/40 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-850">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase">{selectedDrain.location}</span>
              <h4 className="text-lg sm:text-2xl font-serif-jp font-bold text-stone-100">
                {selectedDrain.title}
              </h4>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-stone-900 text-amber-300 border border-stone-800 self-start sm:self-auto">
              {selectedDrain.badge}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-stone-900/60 rounded-xl border border-stone-850 space-y-2">
              <span className="text-cyan-300 font-bold font-mono text-xs block">
                【作中の視覚的描写（お風呂の排水口そのもの）】
              </span>
              <p className="text-stone-300 leading-relaxed font-sans-jp">
                {selectedDrain.visual}
              </p>
              <p className="text-stone-400 leading-relaxed font-sans-jp pt-2 border-t border-stone-800 text-[11px]">
                {selectedDrain.mechanism}
              </p>
            </div>

            <div className="p-4 bg-stone-900/60 rounded-xl border border-stone-850 space-y-2">
              <span className="text-amber-300 font-bold font-mono text-xs block">
                【物語構造における伏線回収の核心】
              </span>
              <p className="text-stone-200 leading-relaxed font-sans-jp">
                {selectedDrain.foreshadowing}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: The Tactical Trio: Power Plant Shutdown -> Domain Override -> The Grand Gag Unplug */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-[#0e1424] border border-amber-500/40 shadow-2xl">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold mb-2">
            <Smile className="w-4 h-4 text-amber-400" />
            <span>THE TRI-PHASE SALVATION MECHANICS · 三段階の救済・解体システム</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
            「負の発電所破壊」から「カートゥーンによる支配領域乗っ取り」、そして「世界最大のギャグ（栓抜き）」へ
          </h3>
        </div>

        {/* 3 Step Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            {
              id: 'powerplants',
              step: 'PHASE 01',
              title: '各島の解放＝イム様を飢えさせる兵糧攻め',
              summary: 'アーロン、クロコダイル、ドフラミンゴ、カイドウ撃破。民衆の涙の大爆笑と宴（陽のエネルギー）で、世界中の「負の感情発電所」を一基ずつ強制シャットダウン。',
              color: 'text-amber-400'
            },
            {
              id: 'domain_override',
              step: 'PHASE 02',
              title: 'ニカの軽薄さ＝シリアス（悪魔の土俵）の無力化',
              summary: 'イム様の武器は800年の重苦しい「シリアスと絶望」。怒りで戦えば敵の燃料になる。だからこそ「バカバカしいギャグ（カートゥーン）」で支配領域を強制乗っ取り。',
              color: 'text-purple-400'
            },
            {
              id: 'gag_unplug',
              step: 'PHASE 03',
              title: 'ラフテルでの「お風呂の栓抜き（ワンピース）」',
              summary: '天敵・緋熊を倒し、巨大化したニカが海を維持していた栓を「ポンッ！」と引き抜く。海水が引き超大陸Daichiが復活。イム様は燃料を失い哀しき人間へ戻り消滅。',
              color: 'text-cyan-400'
            }
          ].map((item) => {
            const isSelected = activeTactic === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTactic(item.id as any)}
                className={`p-5 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-amber-950/40 border-amber-500/80 shadow-xl ring-1 ring-amber-400/50'
                    : 'bg-stone-950/60 border-stone-850 hover:border-stone-700'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono text-stone-400 uppercase">{item.step}</span>
                  <h4 className="text-sm font-bold font-serif-jp text-stone-100 my-2">{item.title}</h4>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">{item.summary}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Grand Literary Synthesis */}
        <div className="p-6 rounded-2xl bg-stone-950/90 border border-amber-500/30 text-xs sm:text-sm text-stone-200 font-serif-jp leading-relaxed space-y-3">
          <h4 className="text-amber-300 font-bold text-base">
            【完全解読：なぜ『ONE PIECE』は世界最大のギャグでなければならないのか】
          </h4>
          <p>
            世界政府の800年に及ぶ冷酷なディストピア（海という水没の檻、天竜人の選民思想、悪魔の実回収網）は、徹底的に重苦しい<strong>「シリアス（恐怖・絶望）」</strong>によって維持されてきました。
            もしルフィが同じように「怒りや憎しみ」でイム様を殴り倒したなら、それは悪魔の土俵の上での勝利に過ぎず、負の連鎖は終わりません。
          </p>
          <p>
            だからこそ、ルフィの覚醒は「常に笑い転げるニカ」であり、ラフテルにある大秘宝は「お風呂の栓（ワンピース）」なのです。
            <strong>「お前たちが800年間世界を恐怖で支配してきた装置なんて、俺のギャグの前にはただの『お風呂の栓』に過ぎねェ（Laugh Tale）」</strong>と笑い飛ばし、
            ポンッと栓を引き抜いて世界を陸に戻し、全世界の種族で手を取り合って「でけぇ宴（ONE PIECE）」を開く。
            これこそが、尾田栄一郎先生が第1話から仕掛け続けてきた、人類史上最大の救済のマスタープロットなのです。
          </p>
        </div>
      </div>
    </section>
  );
};

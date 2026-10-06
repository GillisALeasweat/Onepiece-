import React, { useState } from 'react';
import { Sun, CloudRain, Trees, Mountain, ShieldAlert, Sparkles, Anchor, RefreshCw, Eye, Skull, ArrowRight } from 'lucide-react';

export const FourGodsOriginOfDevilFruits: React.FC = () => {
  const [selectedGod, setSelectedGod] = useState<'sun' | 'rain' | 'forest' | 'earth'>('sun');

  const fourGods = {
    sun: {
      name: '太陽の神',
      epithet: '解放と夜明けの主権',
      incarnation: 'ニカ（ルフィ）',
      originalDomain: '抑圧された者を笑いで解放し、太古の大地（Daichi）に夜明けの光をもたらす絶対神。',
      sealingFate: '「ヒトヒトの実 幻獣種 モデル“ニカ”」として封印されるも、800年間世界政府の手をすり抜け逃走し続けた。',
      icon: Sun,
      color: 'text-amber-400',
      border: 'border-amber-500/50',
      bg: 'bg-amber-950/20'
    },
    rain: {
      name: '雨の神',
      epithet: '水循環と大地の恵み',
      incarnation: '大気と天候の統御（古代兵器ウラノス／天候の実の源流）',
      originalDomain: '乾いた大地に清浄な水を注ぎ、生命を潤す循環の神。アラバスタ等で雨が奪われた構造の原型。',
      sealingFate: '天候を左右する超常の実として解体・封印され、世界政府の気象兵器研究の基礎とされた。',
      icon: CloudRain,
      color: 'text-cyan-400',
      border: 'border-cyan-500/50',
      bg: 'bg-cyan-950/20'
    },
    forest: {
      name: '森の神',
      epithet: '生命の母樹と植物の繁栄',
      incarnation: '陽樹イブ／宝樹アダム／モリモリの実の始祖',
      originalDomain: '大地に緑を茂らせ、悪魔の実が実る母胎となったとされる太古の超常樹木と生態系の守護神。',
      sealingFate: '植物・自然系の権能として細分化され、海軍最高戦力（緑牛など）の生体管理下へと組み込まれた。',
      icon: Trees,
      color: 'text-emerald-400',
      border: 'border-emerald-500/50',
      bg: 'bg-emerald-950/20'
    },
    earth: {
      name: '大地の神',
      epithet: '巨大大陸「Daichi」の土台',
      incarnation: '大陸引き（オーズの始祖）／グラグラの実／プルトンの大地破壊力',
      originalDomain: 'かつて地球を覆っていた広大な大陸「Daichi」そのものを支え、地殻を安定させていた巨神。',
      sealingFate: '大地を揺るがす振動・破壊の実（グラグラ等）や古代兵器プルトンとして解体・分散された。',
      icon: Mountain,
      color: 'text-orange-400',
      border: 'border-orange-500/50',
      bg: 'bg-orange-950/20'
    }
  };

  const currentGod = fourGods[selectedGod];

  return (
    <section id="four-gods" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Chapter Lead Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
          <span>THE MYTHOLOGICAL ORIGIN · 神話的闘争の起源</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          「陸の4つの神」vs「イム様」：<br className="hidden sm:inline" />
          悪魔の実の始まり、逃亡する神の意志、そして不老の監視者
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          空島編の生贄の祭壇で明かされた<span className="text-amber-300 font-semibold">「太陽の神・雨の神・森の神・大地の神」</span>。
          イム様が世界を海に沈めるために最初に行ったのは、この陸の神々の力を奪い「悪魔の実」へと封印することでした。
          しかし神の意志は実から逃亡し、それを追うために海軍が作られ、神の再臨を恐れたイム様は自ら「不老の監視者」となったのです。
        </p>
      </div>

      {/* Part 1: The 4 Ancient Land Gods of Skypiea Lore */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase text-stone-400 font-semibold">
            空島で祈られた「太古の陸を司る4つの神々」
          </span>
          <span className="text-xs text-stone-500 hidden sm:inline">神を選択して権能と封印の経緯を確認</span>
        </div>

        {/* 4 God Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {(['sun', 'rain', 'forest', 'earth'] as const).map((key) => {
            const god = fourGods[key];
            const isSelected = selectedGod === key;
            const Icon = god.icon;
            return (
              <button
                key={key}
                onClick={() => setSelectedGod(key)}
                className={`p-4 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? `${god.bg} ${god.border} shadow-lg ring-1 ring-amber-400/50`
                    : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-4 h-4 ${god.color}`} />
                    <span className="text-[10px] font-mono text-stone-500 uppercase">ANCIENT DEITY</span>
                  </div>
                  <h3 className="text-sm font-bold font-serif-jp text-stone-100">{god.name}</h3>
                </div>
                <div className="mt-2 text-[11px] text-stone-400 truncate">
                  {god.epithet}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected God Spotlight Card */}
        <div className={`p-6 sm:p-8 rounded-2xl border ${currentGod.border} ${currentGod.bg} shadow-xl`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800 mb-6">
            <div>
              <span className="text-xs font-mono text-stone-400 uppercase">ORIGINAL DEITY PROFILE</span>
              <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100">
                {currentGod.name}（{currentGod.epithet}）
              </h3>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-stone-950/80 border border-stone-800 text-xs text-amber-300 font-semibold self-start sm:self-auto font-mono">
              現代の具現：{currentGod.incarnation}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-stone-950/80 rounded-xl border border-stone-850 space-y-1">
              <span className="text-stone-400 font-mono text-xs block mb-1">【太古のDaichiにおける本来の権能】</span>
              <p className="text-stone-200 leading-relaxed font-sans-jp">{currentGod.originalDomain}</p>
            </div>

            <div className="p-4 bg-stone-950/80 rounded-xl border border-stone-850 space-y-1">
              <span className="text-rose-400 font-mono text-xs block mb-1">【イム様による解体と悪魔の実への封印】</span>
              <p className="text-stone-300 leading-relaxed font-sans-jp">{currentGod.sealingFate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: The 4-Phase Mythological Cycle of Hegemony */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-[#0f1422] border border-amber-500/40 shadow-2xl mb-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold mb-2">
          <RefreshCw className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span>THE GRAND MYTHOLOGICAL CYCLE · 神話的闘争の4段階サイクル</span>
        </div>
        <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100 mb-8">
          なぜ悪魔の実が生まれ、海軍が作られ、イム様は不老になったのか？
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Phase 1: Beginning */}
          <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-amber-400 uppercase">PHASE 01 · 始まり</span>
                <Mountain className="w-4 h-4 text-amber-400" />
              </div>
              <h4 className="text-sm font-bold font-serif-jp text-stone-100 mb-2">
                「陸の4つの神」vs「イム様」
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
                豊かな大地を司る4柱の神々。陸の人々に排除され劣等感と復讐心に燃えたイム様が、神々に対抗するため世界水没を画策。
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-stone-850 text-[10px] text-stone-400 font-mono">
              神への嫉妬と復讐が原点
            </div>
          </div>

          {/* Phase 2: Means */}
          <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-purple-400 uppercase">PHASE 02 · 手段</span>
                <Skull className="w-4 h-4 text-purple-400" />
              </div>
              <h4 className="text-sm font-bold font-serif-jp text-stone-100 mb-2">
                神の力を「悪魔の実」へ封印
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
                神々を解体し、その権能を果実の中に幽閉。民衆に「悪魔の力」と刷り込むことで神への信仰と解放の芽を摘むプロパガンダを完了。
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-stone-850 text-[10px] text-purple-300 font-mono">
              「悪魔」という蔑称の欺瞞
            </div>
          </div>

          {/* Phase 3: Miscalculation */}
          <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-rose-400 uppercase">PHASE 03 · 誤算</span>
                <Anchor className="w-4 h-4 text-rose-400" />
              </div>
              <h4 className="text-sm font-bold font-serif-jp text-stone-100 mb-2">
                神の意志逃亡 ➔「海軍」設立
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
                ゾオン系の実に宿る神の意志が政府の手をすり抜けて逃走（五老星の告白）。散らばる神の実を回収・封印するための捜査網として「海軍」を創設。
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-stone-850 text-[10px] text-rose-300 font-mono">
              海軍の真の設立目的
            </div>
          </div>

          {/* Phase 4: Result */}
          <div className="p-5 rounded-2xl bg-stone-950 border border-amber-400/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-amber-300 uppercase">PHASE 04 · 恐怖と結末</span>
                <Eye className="w-4 h-4 text-amber-300" />
              </div>
              <h4 className="text-sm font-bold font-serif-jp text-stone-100 mb-2">
                神の再臨の恐怖 ➔「不老の監視」
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed font-sans-jp">
                神の意志を宿す実が覚醒（生まれ変わり）する恐怖。自分が死ねば大地と神が戻ってしまうため、イム様自身がオペオペで「不老の監視者」となった。
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-stone-850 text-[10px] text-amber-300 font-mono">
              不老手術を受けた究極の理由
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: Deep Theological Revelations (Navy & Immortality) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
        {/* Navy's Hidden True Objective */}
        <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase font-mono text-xs">
            <Anchor className="w-4 h-4" />
            <span>【新事実①】海軍設立の真の裏目的</span>
          </div>
          <h4 className="text-base font-bold font-serif-jp text-stone-100">
            「海賊の取り締まり」は表向きの治安維持カモフラージュ
          </h4>
          <p className="text-stone-300 leading-relaxed font-sans-jp text-xs">
            海軍という超巨大軍事組織が世界中に展開している真の理由は、海賊退治ではありません。<br />
            政府の手をすり抜けて世界中を勝手に転生・逃走し続ける<strong className="text-stone-100">「神の力（悪魔の実）」を捜索・回収・護送し、再び政府の金庫に封印するための巨大捜索網</strong>だったのです。
            フーズ・フーがニカの実を奪われただけで投獄された理由も、ここに完璧に符合します。
          </p>
        </div>

        {/* Why Imu Chose Immortality */}
        <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase font-mono text-xs">
            <Eye className="w-4 h-4" />
            <span>【新事実②】イム様が不老を選んだ本当の理由</span>
          </div>
          <h4 className="text-base font-bold font-serif-jp text-stone-100">
            「神の生まれ変わり（覚醒者）」を永久に監視し叩き潰すため
          </h4>
          <p className="text-stone-300 leading-relaxed font-sans-jp text-xs">
            イム様がオペオペの実の不老手術を受けて800年間生き永らえているのは、単なる権力欲ではありません。<br />
            逃げ続ける神の実を誰かが覚醒させ、<strong className="text-stone-100">「神の生まれ変わり（太陽の神ニカ）」として歴史の表舞台に再臨するその瞬間</strong>を、自分自身の目で永久に監視し、叩き潰し続けるためでした。
            自分が死ねば、水没させた大地も奪った神の権能もすべて解放されてしまう——これこそがイム様を縛り続ける「永遠の恐怖」なのです。
          </p>
        </div>
      </div>

      {/* Part 4: The Terrestrial Motifs & The True Nature of Devil Fruits */}
      <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-950 via-emerald-950/20 to-stone-950 border border-emerald-800/40">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-bold mb-2">
          <Trees className="w-4 h-4" />
          <span>TERRESTRIAL ESSENCE & ARTIFICIAL CONVERSION · 陸主体の4神と悪魔の実の正体</span>
        </div>
        <h4 className="text-lg sm:text-xl font-bold font-serif-jp text-stone-100 mb-3">
          なぜ「海の神」は存在しないのか？ ――ベガパンクの「願い説」の裏にある神性収奪
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-300">
          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-850">
            <span className="text-amber-300 font-bold block mb-1">【4つの神がすべて『陸と環境』に属する意味】</span>
            太陽（光・大気）、雨（天候・水循環）、森（植物・生態系）、大地（地殻・基盤）。
            4神すべてが「陸の生存環境」を司っており、海洋の神は一切含まれていません。
            これは、太古の世界が海ではなく<strong className="text-amber-200">「巨大な陸地（Daichi）」を主軸として生きていた動かぬ証拠</strong>です。
          </div>
          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-850">
            <span className="text-emerald-300 font-bold block mb-1">【悪魔の実＝神の力を人造化したツール】</span>
            ベガパンクは「人の進化の可能性（願い）」と語りましたが、その歴史的裏側にあるのは世界政府による冷徹な兵器化でした。
            元々存在していた「陸の神（自然の理）」から権能を削ぎ落とし、月の科学技術（血統因子）で果実に閉じ込めて人間が扱えるようにした<strong className="text-emerald-200">「神殺しの人造ツール」</strong>こそが悪魔の実の正体です。
          </div>
        </div>
      </div>
    </section>
  );
};

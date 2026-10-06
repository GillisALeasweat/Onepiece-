import React, { useState } from 'react';
import { 
  Flame, Skull, Castle, ShieldAlert, Sparkles, Waves, 
  MapPin, Anchor, Key, Compass, Smile, Eye, ArrowRight, ShieldCheck, Database
} from 'lucide-react';

export const FireAndCrimsonMasterPlot: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'genesis' | 'ch1_coldwar' | 'system' | 'salvation' | 'apocalypse'>('ch1_coldwar');

  const pillars = [
    {
      id: 'genesis',
      number: 'PART 01',
      title: '創世記：失われた大地の記憶',
      subtitle: '超巨大な大地のデフォルトと、イム様の肉体コンプレックス',
      icon: Waves,
      tag: '過去編・神話時代',
      color: 'text-amber-400'
    },
    {
      id: 'ch1_coldwar',
      number: 'PART 02',
      title: '第1話の真実：最高暗殺者2人の冷戦',
      subtitle: '初代最高粛清者「緋熊（ヒグマ）」と赤髪海賊団の大芝居',
      icon: Skull,
      tag: '第1話・情報戦',
      color: 'text-rose-400'
    },
    {
      id: 'system',
      number: 'PART 03',
      title: '支配の構造：悪魔の実集荷網と「緋」の系譜',
      subtitle: '集荷網としての海軍、番犬サカズキ、失敗作Double黒ひげ',
      icon: Castle,
      tag: '国家支配機構',
      color: 'text-purple-400'
    },
    {
      id: 'salvation',
      number: 'PART 04',
      title: '救済の戦術：ニカの軽薄さと縮図破壊',
      subtitle: '対悪魔エネルギー遮断、カートゥーン兵糧攻め、島々の発電所解体',
      icon: Smile,
      tag: '戦闘・救済論',
      color: 'text-amber-300'
    },
    {
      id: 'apocalypse',
      number: 'PART 05',
      title: '黙示録：ラフテルの栓抜きと真のONE PIECE',
      subtitle: '火ノ傷（緋熊）の正体、お風呂の栓、超大陸Daichiと大宴会',
      icon: Sparkles,
      tag: '未来編・グランドフィナーレ',
      color: 'text-cyan-400'
    }
  ];

  return (
    <section id="fire-and-crimson" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Grand Title Header */}
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
          <Flame className="w-4 h-4 text-amber-400" />
          <span>THE GRAND MASTER PLOT · 完全解体録</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif-jp font-bold text-stone-100 tracking-tight leading-tight mb-4">
          【ONE PIECE 完全解体録】<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-amber-200">
            〜火（解放）と緋（支配）の神話〜
          </span>
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          不自然な戦闘描写、ネーミングの法則、そして第1話に隠された情報戦の冷戦構造から逆算された『ONE PIECE』の真の設計図。
          太古の巨大大陸創世記から、初代最高粛清者「緋熊（ヒグマ）」の狂言、ニカのギャグ兵糧攻め、そしてラフテルの物理的な「お風呂の栓」までを完全統合します。
        </p>
      </div>

      {/* 5-Pillar Navigation Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
        {pillars.map((p) => {
          const isSelected = activePillar === p.id;
          const Icon = p.icon;
          return (
            <button
              key={p.id}
              onClick={() => setActivePillar(p.id as any)}
              className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'bg-amber-950/40 border-amber-500/80 shadow-xl ring-1 ring-amber-400/50'
                  : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">{p.number}</span>
                  <Icon className={`w-4 h-4 ${p.color}`} />
                </div>
                <h3 className="text-xs sm:text-sm font-bold font-serif-jp text-stone-100 leading-snug mb-1">
                  {p.title}
                </h3>
              </div>
              <span className="text-[10px] text-stone-400 font-mono mt-3 block truncate">
                {p.tag}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Content Panel by Pillar */}
      <div className="p-6 sm:p-10 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-2xl">
        {/* Pillar 01: Genesis */}
        {activePillar === 'genesis' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase">PART 01 · 創世記</span>
                <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                  失われた大地の記憶：超巨大がデフォルトだった世界
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-stone-950 text-amber-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
                時代設定：空白の100年以前（神話時代）
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-300">
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <h4 className="text-amber-300 font-bold font-serif-jp text-base">
                  【大地のデフォルト＝超巨大】
                </h4>
                <p className="leading-relaxed font-sans-jp">
                  神話の時代、世界に「海」は存在せず、見渡す限り広大で豊かな<strong>「一つの大地（D＝Daichi）」</strong>だけで繋がっていました。
                  この時代の生物や神々の基準（デフォルト）は<strong>「超巨大」</strong>であり、ルナリア族、古代巨人族、ズニーシャ（象主）、アイランドクジラのラブーンは、この巨大な大地の時代のスケールを残す生き残りです。
                </p>
                <div className="pt-2 border-t border-stone-850 text-stone-400 text-[11px]">
                  ※ポセイドン（人魚姫）覚醒時の巨大化＝太古の神のスケールへの先祖返り
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <h4 className="text-rose-400 font-bold font-serif-jp text-base">
                  【持たざる者・イムの怨念と巨大麦わら帽子】
                </h4>
                <p className="leading-relaxed font-sans-jp">
                  巨大な神々の足元で虫ケラのように虐げられていた小さな人間階級。その代表者であり、大地の民への強烈なルサンチマンから「負の感情を喰らう最初の悪魔」となったのが<strong>イム様</strong>です。
                  世界政府が何百年も「人類巨大化実験」に執着し、マリージョア地下に「巨大な麦わら帽子」を凍結保存しているのは、イム様の根深い肉体コンプレックスの裏返しです。
                </p>
                <div className="pt-2 border-t border-stone-850 text-stone-400 text-[11px]">
                  ※プルトンで大地を割り海に沈め、神々の力を「悪魔の実」として削ぎ落とした
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pillar 02: Chapter 1 Cold War */}
        {activePillar === 'ch1_coldwar' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-rose-400 uppercase">PART 02 · 第1話の真実</span>
                <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                  最高暗殺者2人の「大騙し合い（冷戦）」と初代「緋熊（ヒグマ）」
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-stone-950 text-rose-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
                暗殺コードネーム：緋熊（ヒグマ）
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-300">
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-2">
                <h4 className="text-rose-400 font-bold font-serif-jp text-sm">
                  ① ヒグマの正体は「緋熊」
                </h4>
                <p className="leading-relaxed font-sans-jp text-xs">
                  大将の命名規則（色＋動物：赤犬・青雉・黄猿・藤虎・緑牛）を持つ、イム様直属の初代最高粛清者<strong>「緋熊（ヒグマ）」</strong>。
                  元神の騎士団シャンクスとは元同僚の関係にありました。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-2">
                <h4 className="text-amber-300 font-bold font-serif-jp text-sm">
                  ② 酒場での隠語（交渉）
                </h4>
                <p className="leading-relaxed font-sans-jp text-xs">
                  シャンクスが差し出した「一本の酒」とは大地の自由の象徴（ビンクスの酒＝ニカの実の管理協定）。
                  ヒグマが「一本じゃ足りねェ（one piece では満足できねェ）」と叩き割ったのは、政府側が冷徹に交渉を拒絶した暗号実演。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-2">
                <h4 className="text-cyan-400 font-bold font-serif-jp text-sm">
                  ③ 落とし前としての左腕
                </h4>
                <p className="leading-relaxed font-sans-jp text-xs">
                  「ニカ（ルフィ）は海へ落として殺害」「シャンクスは利き腕（左腕）を奪い無力化」という完璧な偽装報告を政府へ上納。
                  ヒグマはこの功績でラフテルの栓の「終身看守」へと昇格した。
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-rose-950/40 to-stone-950 border border-rose-900/50 text-xs sm:text-sm text-stone-200 font-serif-jp leading-relaxed">
              <strong>【見聞色の覇気と狂言誘拐】</strong><br />
              赤髪海賊団ほどの達人が、カウンターのニカの実をつまみ食いされるのを見落とすはずがない。
              シャンクスは出会った瞬間からルフィをニカと見抜き、「事故で食べられた」という狂言を打ち、左腕を手切れ金として差し出すことで、神の目を欺き通したのです。
            </div>
          </div>
        )}

        {/* Pillar 03: System of Hegemony */}
        {activePillar === 'system' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase">PART 03 · 国家支配機構</span>
                <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                  悪魔の実の「多重回収システム」と緋（ひ）の系譜
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-stone-950 text-purple-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
                回収網・番犬・失敗作
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-300">
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-2">
                <span className="text-xs font-mono text-purple-400 uppercase">LOGISTICS</span>
                <h4 className="text-base font-bold font-serif-jp text-stone-100">海軍＝巨大な集荷網</h4>
                <p className="leading-relaxed font-sans-jp text-xs">
                  海軍は治安組織ではなく、世界中に逃げて転生する神の実を吸い上げ、マリージョアへ上納するための集荷網。海軍本部がレッドライン真下にある証左。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-2">
                <span className="text-xs font-mono text-rose-400 uppercase">PUNISHER</span>
                <h4 className="text-base font-bold font-serif-jp text-stone-100">赤犬サカズキ＝無自覚な番犬</h4>
                <p className="leading-relaxed font-sans-jp text-xs">
                  純粋な己の正義を信じるが、政府の「緋の粛清術」の最高戦力。ニカのプロトタイプ（火）のエースを殺し、ルフィにX字の消えない傷を刻んだ、ヒグマの正統後継者。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase">EXPERIMENT</span>
                <h4 className="text-base font-bold font-serif-jp text-stone-100">黒ひげ＝政府の失敗作Double</h4>
                <p className="leading-relaxed font-sans-jp text-xs">
                  悪魔の実を一括回収・多重運用するために設計されたデザイナーベビー。眠れないバグで廃棄されたが、ヤミヤミ（回収術式）を奪い暴走。青雉クザンはその懐に潜入中。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Pillar 04: Salvation Tactics */}
        {activePillar === 'salvation' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-amber-300 uppercase">PART 04 · 救済論</span>
                <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                  対悪魔エネルギー遮断システム：ニカの笑いと世界の縮図破壊
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-stone-950 text-amber-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
                ギャグ空間による兵糧攻め
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-300">
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <h4 className="text-amber-300 font-bold font-serif-jp text-base">
                  【シリアス（怒り）を遮断するカートゥーン化】
                </h4>
                <p className="leading-relaxed font-sans-jp">
                  イム様や五老星（悪魔）は、人間の怒り・悲しみ・絶望といった「負の感情」を喰らってエネルギー源にしています。
                  怒りで戦うと敵に燃料を与えてしまう。だからこそギア5は<strong>「笑い転げ、戦場をカートゥーンに変える」ことで負の感情を強制遮断し、悪魔たちを干上がらせる兵糧攻め</strong>を実行しているのです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <h4 className="text-cyan-300 font-bold font-serif-jp text-base">
                  【各島のエピソードはすべて世界の縮図】
                </h4>
                <p className="leading-relaxed font-sans-jp">
                  アーロン、クロコダイル、エネル、ドフラミンゴ、カイドウ——すべてマリージョアの支配構造のミニチュアでした。
                  ルフィが各地の檻を壊し、民衆に「大爆笑と宴（陽のエネルギー）」を取り戻してきた航海とは、世界中にあったイム様の<strong>「負の感情の発電所」を一基ずつ破壊してきたチュートリアル</strong>だったのです。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Pillar 05: Apocalypse */}
        {activePillar === 'apocalypse' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase">PART 05 · 黙示録</span>
                <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                  火ノ傷（緋熊）の正体とお風呂の栓：真の「ONE PIECE」
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-stone-950 text-cyan-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
                未来編・グランドフィナーレ
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-300">
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <h4 className="text-rose-400 font-bold font-serif-jp text-base">
                  【「火ノ傷の男」＝世界の栓を守る「緋熊」】
                </h4>
                <p className="leading-relaxed font-sans-jp">
                  エルバフのスコッパー・ギャバンは歴史の案内人。
                  本物の「火ノ傷（ヒノキズ）の男」とは、800年の口伝で音が歪んだ初代最高粛清者<strong>「緋熊（ヒグマ）」</strong>のこと。
                  近づく船を沈める巨大な大渦は、ラフテルの栓の周囲で起きている海水吸い込みの渦そのもの。エニエス・ロビーやルルシアの大穴がずっと実演していた伏線です。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <h4 className="text-amber-300 font-bold font-serif-jp text-base">
                  【物理的なワンピースとお風呂の栓】
                </h4>
                <p className="leading-relaxed font-sans-jp">
                  ラフテルにある大秘宝の物理的実体は、世界を水没させている巨大な海の<strong>「お風呂の栓（物理オブジェクト）」</strong>。
                  あまりにバカバカしいギャグのような存在だからこそ、ロジャーたちは涙を流して大爆笑（Laugh Tale）したのです。
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-stone-950 to-stone-950 border border-amber-500/50 text-xs sm:text-sm text-stone-200 font-serif-jp leading-relaxed">
              <h4 className="text-amber-300 font-bold text-base mb-2">
                【タイトルのONE PIECEと、ルフィの「夢の果て」】
              </h4>
              ルフィが世界政府の800年に及ぶ海没支配を打ち破り、ニカの巨大化（ギガント）カートゥーンによって、世界最大の「お風呂のコルク栓」を「キュッポーン！」と引き抜く。<br />
              同時にゾロが万物の呼吸で分断の壁「レッドライン」を一刀両断し、海水が引いて元の広大な超大陸「大地（Daichi）」が復活。東西南北の海の壁が消えて「空のオールブルー」が完成する。<br />
              <strong>「大地で繋がった全世界の種族が、境界なく手を取り合う『ひと繋ぎの平和』の世界（＝世界最大の大宴会）」</strong>——これこそが、作者が第1話からタイトルに掲げ続けてきた真の『ONE PIECE』の正体です。
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Castle, Key, Mountain, Skull, Compass, ShieldAlert, ArrowRight, Waves, Globe, Sparkles } from 'lucide-react';

export const PangeaCastleAndHigumaTheory: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const activationSteps = [
    {
      step: 1,
      title: 'ラフテルで「超巨大コルク栓」をコミカルに引っこ抜く',
      location: 'Laugh Tale（最後の島）',
      detail: 'ニカ（ルフィ）がギガント化し、ラフテルに眠るバカバカしい「超巨大な風呂のコルク栓」を両手で掴んで「キュッポーン！」と引き抜く。歴史上最大の海水排水が開始される。',
      icon: Sparkles,
      color: 'text-amber-400',
      border: 'border-amber-500/50'
    },
    {
      step: 2,
      title: 'ゾロの横の解放による「レッドライン切断」とパンゲア城の崩壊',
      location: '聖地マリージョア・パンゲア城',
      detail: '万物の呼吸を極めたゾロが世界を分断していた不条理の壁「レッドライン」を一刀両断。イム様の座すパンゲア城の支配機構が物理的に大崩壊を起こす。',
      icon: Castle,
      color: 'text-rose-400',
      border: 'border-rose-500/50'
    },
    {
      step: 3,
      title: '「パンゲア（超大陸）」の復活とオールブルー誕生',
      location: '地球全海域',
      detail: '海が適正水位（マイナス200m）へ下がり、800年間海底に眠っていた巨大な大陸が再び日光を浴びる。東・西・南・北の海を隔てていた壁が消滅し、全海域の魚が泳ぎ交う「オールブルー」が完成。',
      icon: Waves,
      color: 'text-cyan-400',
      border: 'border-cyan-500/50'
    },
    {
      step: 4,
      title: 'ひとつなぎの大地で「世界最大の宴」開幕',
      location: '復元されたDaichi',
      detail: '島々の孤立と海の檻が終わり、全種族・全国家が陸続きで手を繋ぎ合う。ルフィとロジャーが語った「夢の果て＝世界中のやつらと開くでけぇ宴」が成就する。',
      icon: Sparkles,
      color: 'text-amber-300',
      border: 'border-amber-400'
    }
  ];

  return (
    <section id="pangea-and-higuma" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Chapter Lead Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
          <span>THE CENTRAL SYSTEM & MOUNTAIN OLIGARCHY · 中枢支配と地上利権</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          パンゲア城の「偽りの王座」とラフテルの「超巨大コルク栓」：<br className="hidden sm:inline" />
          山賊ヒグマの裏利権と、ワンピース発動の物理連動
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          世界政府の中枢「パンゲア城」は、かつての大陸を沈めた壁（レッドライン）の上に築かれた簒奪の象徴であり、
          終着点ラフテルには海水を一気に抜く<span className="text-amber-300 font-semibold">「超巨大な風呂のコルク栓（ONE PIECE）」</span>が眠っています。
          さらに、海没後の超希少資源「山林」を巡る政府と山賊ヒグマの裏協定から、ワンピース発動後の世界新秩序までを紐解きます。
        </p>
      </div>

      {/* Part 1: The Dual Architecture: Pangea Castle vs Laugh Tale */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {/* Pangea Castle: Stolen Continent Name & Red Line */}
        <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
              <div className="flex items-center gap-2">
                <Castle className="w-5 h-5 text-rose-400" />
                <span className="text-xs uppercase font-mono text-rose-400 font-semibold">STOLEN CONTINENT · 簒奪の象徴</span>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded bg-stone-950 text-stone-300 border border-stone-800 font-mono">
                聖地マリージョア
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100 mb-3">
              パンゲア城とレッドラインの「分断の壁」
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-jp mb-6">
              世界政府は、かつて存在した一つ繋ぎの大陸（パンゲア）を海に沈めた場所の上に、あえてその名を冠した「パンゲア城」を建て権力を誇示しています。
              虚の玉座や巨大な麦わら帽子が眠るこの地は、レッドラインという人工の赤い壁によって世界を東西南北に分断し、海水の循環を歪めて人々を孤立させる統治の本丸です。
            </p>

            <div className="p-3.5 bg-stone-950/80 rounded-xl border border-stone-850 text-xs text-stone-300">
              <span className="text-rose-400 font-bold block mb-1">【支配のカラクリ】</span>
              世界中の海水を高位で維持し、本来の大地を海底に閉じ込め続けるための分断機構。
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-stone-800 text-[11px] text-stone-400 font-mono">
            ※ゾロによる「レッドライン切断」で物理的に完全崩壊する対象
          </div>
        </div>

        {/* Laugh Tale: Ridiculous Bath Cork Plug */}
        <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/90 border border-amber-500/40 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span className="text-xs uppercase font-mono text-amber-300 font-semibold">PHYSICAL CORK PLUG · お風呂の栓</span>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800/50 font-mono">
                最後の島・ラフテル
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100 mb-3">
              ラフテルに眠る「超巨大な風呂のコルク栓」
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-jp mb-6">
              世界の最深部に眠るのは、難解な電脳装置や軍事兵器ではなく、最高にコミカルな「超巨大な風呂のコルク栓」です。
              800年のシリアスな歴史の最深部にあったのが「ただの風呂の栓」だったからこそ、ロジャーたちは腹を抱えて大爆笑（Laugh Tale）し、「お前と同じ時代に生まれたかった」と泣き笑いしたのです。
            </p>

            <div className="p-3.5 bg-stone-950/80 rounded-xl border border-stone-850 text-xs text-stone-300">
              <span className="text-cyan-300 font-bold block mb-1">【ラフテルとパンゲア城の対構造】</span>
              「パンゲア城＝巨大な錠前（Lock）」に対し、「ラフテル＝遠隔起動キー（Key）」。二つが揃って初めて世界の栓が抜ける。
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-stone-800 text-[11px] text-cyan-300 font-mono">
            ※ロジャーが「早すぎた」と笑ったのは、ニカ（生体キー）の不在のため
          </div>
        </div>
      </div>

      {/* Part 2: The Secret Alliance: Mountain Bandits & World Government */}
      <div className="p-6 sm:p-10 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-2xl mb-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-rose-400 font-bold mb-2">
          <Mountain className="w-4 h-4 text-rose-400" />
          <span>THE MOUNTAIN OLIGARCHY · 山賊と世界政府の裏利権協定</span>
        </div>
        <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100 mb-6">
          山賊ヒグマの「56人殺害」の真実：地上利権の番人
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm mb-6">
          <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
            <span className="text-amber-400 font-bold font-mono text-xs block">
              【水没世界における「山・高地」の超希少性】
            </span>
            <p className="text-stone-300 leading-relaxed font-sans-jp text-xs">
              世界が200m沈んだ後、海水に浸からない「山や高地」は世界で最も贅沢で希少な資源となりました。<br />
              世界政府はレッドラインの上に君臨する一方、各島の僅かな「山（陸地）」を直轄統治せず、ヒグマのような<strong className="text-stone-100">裏の協力者（山賊）</strong>に地上の治安維持や反乱分子の粛清を任せ、見返りとして山の利権（莫大な縄張り収入）を貪らせていました。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-950 border border-rose-900/50 space-y-3">
            <span className="text-rose-400 font-bold font-mono text-xs block">
              【ヒグマ「俺のように生意気な奴を56人殺した」の真相】
            </span>
            <p className="text-stone-300 leading-relaxed font-sans-jp text-xs">
              ヒグマの言葉は、単なる田舎チンピラの喧嘩自慢ではありません。<br />
              <strong>「政府の密命を受けて、陸地の秘密や旧世界の真実、水没の構造に気づきかけた危険分子（裏切り者）を56人暗殺・抹殺してきた」</strong>という政府工作員としての冷徹な実績だったのです。<br />
              だからこそ、四皇シャンクスに対しても「俺の後ろには世界政府の利権網がいる」という強烈なバックボーンゆえの傲慢な態度を取ることができました。
            </p>
          </div>
        </div>

        {/* Shanks & Higuma: The Staged Kidnapping & The Sacrifice of the Left Arm */}
        <div className="p-6 rounded-2xl bg-stone-950/90 border border-amber-500/40 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase font-mono text-xs">
            <Skull className="w-4 h-4 text-amber-400" />
            <span>【最大の伏線解明】シャンクスとヒグマの「狂言誘拐」説と左腕の代償</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold font-serif-jp text-stone-100">
            なぜ四皇シャンクスが「近海の主」レベルに左腕を差し出したのか？
          </h4>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-jp">
            シャンクスは元々世界政府の特務船から「ゴムゴムの実（太陽の神ニカ）」を奪い去った大罪人です。
            その実を食べたルフィを政府の粛清者であるヒグマが海へ連れ出したのは、単なる誘拐ではなく、
            <strong className="text-amber-200">「ルフィ（ニカ）の存在を世界政府の抹殺網から隠蔽し、シャンクスが落とし前をつけるための取引（狂言誘拐）」</strong>であった可能性があります。
          </p>
          <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-xs sm:text-sm text-stone-200 font-serif-jp italic leading-relaxed">
            白ひげに「あの海でお前にそれほどの傷を負わせた男は誰だ？」と問われたシャンクスは、「新しい時代に懸けてきた」と答えました。<br />
            覇王色の覇気で一瞬で海獣を追い払える男が腕を失った真意——それは、政府の裏工作員ヒグマとの暗黙の取引の中で、
            <strong>「ニカの器となったルフィの命を見逃す代償として、自らの利き腕（左腕）を政府への落とし前として差し出した」</strong>という、
            世界を欺き通すための命がけの布石だったと考えれば、第1話の最大の謎が完璧に氷解します。
          </div>
        </div>
      </div>

      {/* Part 3: The 4-Stage World Rebirth Sequence (Post-One Piece) */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-[#0e1322] border border-amber-500/40 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-800 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold mb-1">
              <Globe className="w-4 h-4 text-amber-400" />
              <span>THE GRAND RESTORATION · ワンピース発動後の新世界再生シミュレーション</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100">
              世界の栓が抜かれた瞬間、地球規模で連動する4大現象
            </h3>
          </div>
          <span className="text-xs text-stone-400">ステップをクリックして展開</span>
        </div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {activationSteps.map((s) => {
            const isSelected = activeStep === s.step;
            const Icon = s.icon;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-4 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-amber-950/40 border-amber-500/80 shadow-lg ring-1 ring-amber-400/50'
                    : 'bg-stone-950/60 border-stone-850 hover:border-stone-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-amber-400 uppercase">STEP 0{s.step}</span>
                    <Icon className={`w-4 h-4 ${s.color}`} />
                  </div>
                  <h4 className="text-xs font-bold font-serif-jp text-stone-100 mb-1">{s.title}</h4>
                </div>
                <div className="mt-2 text-[10px] text-stone-400 truncate">
                  {s.location}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Spotlight */}
        {(() => {
          const current = activationSteps.find(s => s.step === activeStep)!;
          const Icon = current.icon;
          return (
            <div className="p-6 rounded-2xl bg-stone-950/90 border border-amber-500/30 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-850">
                <div className="flex items-center gap-2">
                  <Icon className={`w-5 h-5 ${current.color}`} />
                  <h4 className="text-lg font-bold font-serif-jp text-stone-100">
                    STEP 0{current.step}：{current.title}
                  </h4>
                </div>
                <span className="text-xs font-mono text-amber-400 px-2.5 py-1 rounded bg-stone-900 border border-stone-800 self-start sm:self-auto">
                  発生域：{current.location}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans-jp">
                {current.detail}
              </p>
            </div>
          );
        })()}

        {/* Conclusion Synthesis */}
        <div className="mt-6 pt-4 border-t border-stone-800 text-xs sm:text-sm text-stone-300 font-serif-jp leading-relaxed">
          <strong className="text-amber-300">【結論：物理と政治の完全合致】</strong>
          パンゲア城地下の栓が開き、レッドラインが崩壊し、超大陸パンゲアが海から浮上した時、
          サンジの「オールブルー」、ナミの「世界地図」、フランキーの「世界の果てへ届く舟」、そしてルフィの「全人類との大宴」がすべて同時に完成する。
          これこそが尾田栄一郎先生が25年以上かけて張り巡らせてきた『ONE PIECE』の最終解答です。
        </div>
      </div>
    </section>
  );
};

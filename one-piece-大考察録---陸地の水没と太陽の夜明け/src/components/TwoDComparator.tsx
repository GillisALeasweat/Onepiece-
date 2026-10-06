import React, { useState } from 'react';
import { 
  Smile, Frown, Sun, Moon, ShieldCheck, AlertOctagon, 
  Users, Sparkles, Compass, Shield, Heart, Anchor, Flame, Key 
} from 'lucide-react';

interface DCharacter {
  name: string;
  category: 'strawhat' | 'roger' | 'taboo' | 'history';
  role: string;
  liberationAction: string;
  daichiResonance: string;
  quote: string;
  isDouble?: boolean;
}

export const TwoDComparator: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'strawhat' | 'roger' | 'taboo' | 'history'>('all');
  const [selectedChar, setSelectedChar] = useState<string>('モンキー・D・ルフィ');

  const dCharacters: DCharacter[] = [
    // 麦わら＆革命の血統
    {
      name: 'モンキー・D・ルフィ',
      category: 'strawhat',
      role: '「太陽の神ニカ」・真の解放の戦士',
      liberationAction: '理不尽に虐げられた島々（アラバスタ、ドレスローザ、ワノ国）の檻をぶち破り、最終的に世界の栓を抜いて全人類を海から解放する。',
      daichiResonance: 'Daichi（大地）の心臓。怒りを笑いに変えて悪魔のエネルギーを断ち、世界最大の宴を開く主人公。',
      quote: '「おれ達が…!!! 腹いっぱいメシを食える世界だ!!!」'
    },
    {
      name: 'モンキー・D・ドラゴン',
      category: 'strawhat',
      role: '革命軍総司令官・世界の反逆者',
      liberationAction: '天竜人の支配や世界政府の圧政から人々や国々を直接「解放」するために軍を率い、天上金の補給線を断ち奴隷を解放する。',
      daichiResonance: '国家スケールでの直接的な解放者。世界を海に閉じ込めるイム様の支配構造の解体を目的とする。',
      quote: '「いつの日か必ず…奴らに見せてやる…!! 我らが手にした『自由』を!!」'
    },
    {
      name: 'モンキー・D・ガープ',
      category: 'strawhat',
      role: '海軍本部特務中将・「海軍の英雄」',
      liberationAction: '天竜人の直属の部下（大将）になることを生涯拒絶し続け、海軍という巨大組織の内側から正義と自由を貫いた。',
      daichiResonance: '身分や権威による不当な束縛を嫌い、次代の若者たちの未来を自らの命を賭して切り拓く「大地の自由人」。',
      quote: '「天竜人の直属の部下になれってんだろ？ だから断っとるんじゃ!!」'
    },

    // 海賊王とロジャー海賊団
    {
      name: 'ゴール・D・ロジャー',
      category: 'roger',
      role: '伝説の海賊王・大海賊時代の創始者',
      liberationAction: 'ラフテルに到達し陸地水没の真実を知った後、処刑台で世界中の人々を海（世界の栓）へと解き放つ大号令を下した。',
      daichiResonance: '政府の「海賊王」という悪のレッテルを逆手に取り、次代へ世界の栓抜きのバトンを託した先駆者。死に際に満面の笑みを浮かべる。',
      quote: '「おれの財宝か？ 欲しけりゃくれてやる… 探せ！ この世の全てをそこに置いてきた！」'
    },
    {
      name: 'ポートガス・D・エース',
      category: 'roger',
      role: '白ひげ海賊団2番隊隊長・ロジャーの息子',
      liberationAction: '「生まれてきてよかったのか」という呪縛に苦しみながらも、弟ルフィと仲間のために命を賭し、愛されて死ぬことで心の解放を得た。',
      daichiResonance: '処刑台と赤犬の一撃の前に倒れながらも、最期に穏やかな「笑み」を残して逝った正統なDの血統。',
      quote: '「愛してくれて…ありがとう!!!」'
    },
    {
      name: 'ポートガス・D・ルージュ',
      category: 'roger',
      role: 'エースの母親・意志と血を繋いだ女性',
      liberationAction: '政府による「ロジャーの血絶やし」の探索の目を逃れるため、特異な精神力で20ヶ月もの間エースを胎内に宿し続けた。',
      daichiResonance: '自らの命と引き換えに大地の意志を次代へ繋ぎ、力尽きた瞬間に安らかな笑顔を浮かべた。',
      quote: '「男の子なら『エース』… ポートガス・D・エース… 彼と私の子供…」'
    },

    // 禁忌の覇者と異端
    {
      name: 'マーシャル・D・ティーチ',
      category: 'taboo',
      role: '黒ひげ海賊団提督・政府の実験体（Double）',
      liberationAction: '解放ではなく支配と破壊。政府の兵器システムを強奪し、死を恐れて命乞いをし、負の感情を撒き散らす「笑えないD」。',
      daichiResonance: '作られたD（Double）。白ひげが「ロジャーの待ってる男はお前じゃねぇ」と断じた、正統なDaichiの系譜ではない異形。',
      quote: '「待て親父!! 息子だぞ!! おれを本当に殺す気かァ!?」',
      isDouble: true
    },
    {
      name: 'ロックス・D・ジーベック',
      category: 'taboo',
      role: 'ロックス海賊団船長・世界の王を目指した男',
      liberationAction: 'テロ組織のように世界政府を直接脅かし、世界の王になろうとした禁忌の男。ゴッドバレーで世界を震撼させた。',
      daichiResonance: 'イム様の玉座を力づくで奪おうとした覇者。世界のタブーに触れすぎたため、政府によって歴史から完全に抹消された。',
      quote: '「この世界の王に、おれはなる…!!」'
    },

    // 歴史の鍵と最初の20人
    {
      name: 'トラファルガー・D・ワーテル・ロー',
      category: 'history',
      role: 'ハートの海賊団船長・「死の外科医」',
      liberationAction: 'フレバンスの白い町で全てを奪われながらもコラソンに愛され解放される。「Dはまた必ず嵐を呼ぶ」を胸に世界の真実を暴く。',
      daichiResonance: '本名に忌み名「ワーテル（水没の記憶）」を持つD。歴史の真実を追い求め、理不尽な神の支配を解体する知の解放者。',
      quote: '「Dはまた…必ず嵐を呼ぶ…!!」'
    },
    {
      name: 'ハグワール・D・サウロ',
      category: 'history',
      role: '元海軍本部中将・巨人族の恩人',
      liberationAction: 'オハラの悲劇において政府のバスターコールに反逆し、ロビンの命と心を「笑って生きろ」と解き放った。エルバフで文献を守り抜く。',
      daichiResonance: '正義の名のもとに行われる虐殺を拒絶し、氷漬けにされながらも笑顔で未来を託した、大地の優しき巨人。',
      quote: '「デレシシシ!! 笑ってりゃええでよ!! 苦しい時は笑うだで!!」'
    },
    {
      name: 'ネフェルタリ・D・リリィ',
      category: 'history',
      role: '800年前のアラバスタ女王・最初の20人',
      liberationAction: 'マリージョアへの移住を拒否し、歴史の本文（ポーネグリフ）を世界中に散らばらせる「ミス（大計）」を仕掛けて真実を未来へ遺した。',
      daichiResonance: 'イム様がもっとも恐れ、憎悪した最初のD。世界を海に沈めて真実を隠蔽しようとしたイム様の計画を根本から破壊した解放の母。',
      quote: '「ゆく先々に…ポーネグリフの散らばる未来を…」'
    },
    {
      name: 'ネフェルタリ・D・コブラ ＆ ビビ',
      category: 'history',
      role: 'アラバスタ国王 ＆ 王女・大地の正統なる継承者',
      liberationAction: 'コブラは虚の玉座のイム様の前に立ち、リリィの手紙の真実を問いただして命と引き換えにサボへ真実を託した。ビビは世界を翔ける希望。',
      daichiResonance: '創設20人の血を引きながら天竜人になることを拒み、「大地（Daichi）」と民と共に生きることを選んだ誇り高きDの一族。',
      quote: '「リリィの名は…ネフェルタリ・D・リリィじゃ…!!」'
    }
  ];

  const filtered = activeCategory === 'all' 
    ? dCharacters 
    : dCharacters.filter(c => c.category === activeCategory);

  const selectedData = dCharacters.find(c => c.name === selectedChar) || dCharacters[0];

  return (
    <section id="two-d-truths" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Chapter Lead Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
          <span>CHAPTER 05 · Dの意志と全系譜録</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif-jp font-bold text-stone-100 tracking-tight mb-4">
          「D」の二つの真実と全12名の大系譜：<br className="hidden sm:inline" />
          正統な「Daichi（解放者）」と、実験体「Double」
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          「D」とは何か？ それは太古の巨大大陸<span className="text-amber-300 font-semibold">「Daichi（大地）」</span>の記憶を宿し、
          世界政府によって閉ざされた真実や世界を<span className="text-amber-200 font-semibold">「解き放つ（解放する）」</span>者たちの総称でした。
          死に際にも笑う正統なDと、死を恐れて命乞いをする作られた実験体「Double（黒ひげ）」——その全系譜を紐解きます。
        </p>
      </div>

      {/* Side-by-side Dual Truth: Daichi vs Double */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {/* Authentic D: Daichi */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-amber-950/20 via-stone-900 to-stone-900 border border-amber-600/40 relative shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
            <div className="flex items-center gap-2.5">
              <Sun className="w-5 h-5 text-amber-400" />
              <div>
                <span className="text-xs uppercase font-semibold text-amber-400 tracking-wider">正統なる系譜</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-jp text-stone-100">D ＝ Daichi（大地／解放者）</h3>
              </div>
            </div>
            <div className="p-2 rounded-full bg-amber-500/10 border border-amber-500/30">
              <Smile className="w-5 h-5 text-amber-300" />
            </div>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm text-stone-300 font-sans-jp">
            <div className="p-3.5 bg-stone-950/80 rounded-xl border border-stone-800">
              <span className="text-amber-300 font-semibold block mb-1">【本質】陸地と真実の「解放」</span>
              かつて存在した巨大な大陸「Daichi」の記憶を宿す者。世界の栓を抜き（Drain）、海水を排出し大地を蘇らせる宿命。サウロのロビン解放、リリィのポーネグリフ拡散など、すべてが「閉ざされた世界の解放」に直結。
            </div>

            <div className="p-3.5 bg-stone-950/80 rounded-xl border border-stone-800">
              <span className="text-amber-300 font-semibold block mb-1">【死への態度】死に際の「笑い」</span>
              ルフィ、ロジャー、エース、ルージュ、サウロ。皆、死の宣告を受けた瞬間に穏やかに笑う。絶望（負の感情）を笑いで無力化する「神の天敵」。
            </div>
          </div>
        </div>

        {/* Counterfeit D: Double */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-950 via-purple-950/20 to-stone-900 border border-purple-800/40 relative shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
            <div className="flex items-center gap-2.5">
              <Moon className="w-5 h-5 text-purple-400" />
              <div>
                <span className="text-xs uppercase font-semibold text-purple-400 tracking-wider">作られた異形</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-jp text-stone-100">D ＝ Double（二重存在）</h3>
              </div>
            </div>
            <div className="p-2 rounded-full bg-purple-500/10 border border-purple-500/30">
              <Frown className="w-5 h-5 text-purple-300" />
            </div>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm text-stone-300 font-sans-jp">
            <div className="p-3.5 bg-stone-950/80 rounded-xl border border-stone-800">
              <span className="text-purple-300 font-semibold block mb-1">【本質】政府の人体実験コード</span>
              世界政府が古代の力を再現するために行った多重肉体・多重魂実験の生き残り。マルコが語った「体の構造が異形（二重構造）」の真相。
            </div>

            <div className="p-3.5 bg-stone-950/80 rounded-xl border border-stone-800">
              <span className="text-purple-300 font-semibold block mb-1">【死への態度】死への恐怖と命乞い</span>
              ティーチは瀕死になると「待て親父！ 息子だぞ！」と醜く命乞いをする。死を恐れ、憎悪や野心という負の感情を撒き散らす「笑えないD」。白ひげは「お前じゃねェ」と見抜いていた。
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: The Complete 12-Member "D" Liberation Roster */}
      <div className="p-6 sm:p-10 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-800 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold mb-1">
              <Users className="w-4 h-4" />
              <span>THE 12 BEARERS OF "D" · 全12名の「D」一族大系譜録</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100">
              作中に登場したすべての「D」と、その解放のアクション
            </h3>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-stone-950 rounded-lg border border-stone-800">
            {[
              { id: 'all', label: '全員' },
              { id: 'strawhat', label: '麦わら・革命' },
              { id: 'roger', label: '海賊王と血脈' },
              { id: 'taboo', label: '禁忌・異端' },
              { id: 'history', label: '歴史の鍵' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Character Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {filtered.map((char) => {
            const isSelected = selectedChar === char.name;
            return (
              <button
                key={char.name}
                onClick={() => setSelectedChar(char.name)}
                className={`p-3.5 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? char.isDouble
                      ? 'bg-purple-950/40 border-purple-500/80 shadow-md ring-1 ring-purple-400/50'
                      : 'bg-amber-950/40 border-amber-500/80 shadow-md ring-1 ring-amber-400/50'
                    : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-stone-400 uppercase">
                      {char.isDouble ? 'DOUBLE' : 'DAICHI'}
                    </span>
                    {char.isDouble ? (
                      <Frown className="w-3.5 h-3.5 text-purple-400" />
                    ) : (
                      <Smile className="w-3.5 h-3.5 text-amber-400" />
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold font-serif-jp text-stone-100 mb-1 leading-snug">
                    {char.name}
                  </h4>
                </div>
                <div className="text-[10px] text-stone-400 truncate mt-2">
                  {char.role.split('・')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Character Deep Profile Spotlight */}
        <div className={`p-6 sm:p-8 rounded-2xl border ${
          selectedData.isDouble ? 'border-purple-800/60 bg-purple-950/20' : 'border-amber-500/40 bg-amber-950/20'
        } space-y-4`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800">
            <div>
              <span className={`text-[11px] font-mono uppercase ${selectedData.isDouble ? 'text-purple-400' : 'text-amber-400'}`}>
                {selectedData.isDouble ? '異端のD（Double）' : '正統なるD（Daichi / 解放者）'}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-jp font-bold text-stone-100">
                {selectedData.name}
              </h3>
              <span className="text-xs text-stone-300 font-semibold">{selectedData.role}</span>
            </div>
            <div className="p-3 bg-stone-950/90 rounded-xl border border-stone-800 text-xs italic text-stone-200 font-serif-jp max-w-md">
              {selectedData.quote}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-stone-950/80 rounded-xl border border-stone-800 space-y-1">
              <span className="text-amber-300 font-bold block text-xs uppercase font-mono">
                【解放のアクション（世界を解き放つ行動）】
              </span>
              <p className="text-stone-300 leading-relaxed font-sans-jp text-xs">
                {selectedData.liberationAction}
              </p>
            </div>

            <div className="p-4 bg-stone-950/80 rounded-xl border border-stone-800 space-y-1">
              <span className="text-cyan-300 font-bold block text-xs uppercase font-mono">
                【Daichi（大地）の意志との共鳴】
              </span>
              <p className="text-stone-300 leading-relaxed font-sans-jp text-xs">
                {selectedData.daichiResonance}
              </p>
            </div>
          </div>
        </div>

        {/* Grand Synthesis of the "D" Bearers */}
        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-amber-950/30 via-stone-950 to-stone-950 border border-amber-900/40 text-xs sm:text-sm text-stone-200 font-serif-jp leading-relaxed">
          <strong className="text-amber-300 block mb-1">
            【総括：なぜ「D」は世界政府によって閉ざされた真実や世界を解き放つのか？】
          </strong>
          ルフィやドラゴンはもちろん、サウロがロビンを逃がしたことも、リリィがポーネグリフを世界に撒き散らしたことも、
          コブラが虚の玉座の前に立ちはだかったことも、すべては<strong className="text-amber-200">「世界政府によって閉ざされた真実や大地を解き放つ」</strong>行動そのものでした。
          「D」とは単なるアルファベットではなく、800年前に水没させられた太古の大陸「Daichi」の記憶と、閉ざされた海を終わらせる「解放の宿命」を背負った者たちの血の刻印なのです。
        </div>
      </div>
    </section>
  );
};

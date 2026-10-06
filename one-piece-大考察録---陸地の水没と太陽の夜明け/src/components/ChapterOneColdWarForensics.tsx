import React, { useState } from 'react';
import { 
  ShieldAlert, Skull, Wine, Anchor, Eye, EyeOff, Award, 
  HelpCircle, CheckCircle2, ChevronRight, Sparkles, Flame 
} from 'lucide-react';

export const ChapterOneColdWarForensics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'shanks_quote' | 'sake_code' | 'heist_act' | 'sea_escape' | 'dual_report'>('shanks_quote');

  const forensicTabs = [
    {
      id: 'shanks_quote',
      label: '「敵にやられた傷じゃねェ」の真実',
      subtitle: '敗北ではなく、世界政府をハメ抜いた『手切れ金』',
      icon: Award,
      color: 'text-amber-400'
    },
    {
      id: 'sake_code',
      label: '酒（Sake）の隠語プロトコル',
      subtitle: '「一本じゃ足りねェ（one pieceでは満足できねェ）」',
      icon: Wine,
      color: 'text-rose-400'
    },
    {
      id: 'heist_act',
      label: '見聞色と赤髪海賊団の「決死の大芝居」',
      subtitle: 'カウンター放置と「あいつの実を食べたァ〜!?」の狂言',
      icon: EyeOff,
      color: 'text-purple-400'
    },
    {
      id: 'sea_escape',
      label: '山賊が「海の上」に逃げた大矛盾',
      subtitle: '海＝世界政府のホームグラウンド（絶対の檻）への避難',
      icon: Anchor,
      color: 'text-cyan-400'
    },
    {
      id: 'dual_report',
      label: 'イム様を納得させた「二重の絶対報告」',
      subtitle: 'ニカ海没処理（偽装）とシャンクス左腕上納（無力化）',
      icon: Skull,
      color: 'text-emerald-400'
    }
  ];

  return (
    <section id="ch1-cold-war" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Chapter Lead Header */}
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-rose-400 font-semibold mb-3">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          <span>CHAPTER 01 COLD WAR FORENSICS · 第1話冷戦構造の完全解読</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif-jp font-bold text-stone-100 tracking-tight leading-tight mb-4">
          「敵にやられた傷じゃねェ」の本当の恐怖：<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-300">
            元同僚「緋熊」との冷戦と、世界政府を欺いた『手切れ金』
          </span>
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          白ひげの船でシャンクスが言い放ったあの一言。海王類相手なら「敵」と呼んでも不自然ではないのに、なぜわざわざ「敵にやられた傷じゃねェ」と否定したのか？
          相手が野生の怪物ではなく、手の内を知り尽くした政府最高暗殺機関の「元同僚（ヒグマ）」であり、神（ニカ）の未来を買い取るために自らの意志で支払った「手切れ金（契約）」だったからである。
        </p>
      </div>

      {/* Interactive 5-Pillar Forensic Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
        {forensicTabs.map((tab, idx) => {
          const isSelected = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'bg-rose-950/40 border-rose-500/80 shadow-xl ring-1 ring-rose-400/50'
                  : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">CASE 0{idx + 1}</span>
                  <Icon className={`w-4 h-4 ${tab.color}`} />
                </div>
                <h3 className="text-xs sm:text-sm font-bold font-serif-jp text-stone-100 leading-snug mb-1">
                  {tab.label}
                </h3>
              </div>
              <span className="text-[10px] text-stone-400 font-mono mt-3 block truncate">
                {tab.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Spotlight Forensic Evidence Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-2xl">
        {/* Case 1: The Quote */}
        {activeTab === 'shanks_quote' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase">FORENSIC 01 · 名言の真意</span>
                <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                  「敵にやられた傷じゃねェ」——敗北ではなく、自ら支払った『手切れ金』
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-stone-950 text-amber-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
                白ひげとの対話（第434話）
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-300">
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <span className="text-rose-400 font-mono text-xs font-bold block">【世間の浅い解釈の限界】</span>
                <p className="leading-relaxed font-sans-jp">
                  「最弱の東の海で海獣に腕を食われたのが恥ずかしいから、シャンクスが見栄を張って新時代と言い訳した」。
                  しかし、四皇の男が世界最強の白ひげを前にしてそんな子供じみた見栄を張るはずがありません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-amber-500/40 space-y-3">
                <span className="text-amber-300 font-mono text-xs font-bold block">【完全解読：元同僚ヒグマとの契約】</span>
                <p className="leading-relaxed font-sans-jp">
                  「あれは敵に遅れを取った無様な傷なんかじゃない。世界政府という最悪の悪魔（イム）のシステムを完璧に欺き、神（ニカ）の未来を買い取るために、俺が自分の意志で対等に支払った『手切れ金』なんだよ」という、シャンクスの圧倒的な誇りと勝利宣言だったのです。
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/30 to-stone-950 border border-amber-900/40 text-xs sm:text-sm text-stone-200 font-serif-jp leading-relaxed">
              <strong>【元同僚「緋熊」だからこその冷戦】</strong><br />
              ヒグマは大将の命名規則（色＋動物）を持つ初代最高粛清者「緋熊」。シャンクスは元神の騎士団（フィガーランド家）。
              手の内を知り尽くした元同僚だったからこそ、あの酒場は四皇の覇気で吹き飛ばすことのできない、一歩も間違えられない極限の冷戦・心理交渉の場でした。
            </div>
          </div>
        )}

        {/* Case 2: Sake Code */}
        {activeTab === 'sake_code' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-rose-400 uppercase">FORENSIC 02 · 酒の暗号</span>
                <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                  酒場での隠語プロトコル：「一本じゃ足りねェな（one pieceでは満足できねェ）」
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-stone-950 text-rose-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
                暗号外交の決裂
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-300">
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <span className="text-amber-400 font-mono text-xs font-bold block">【シャンクスが差し出した「一本の酒」】</span>
                <p className="leading-relaxed font-sans-jp">
                  赤髪海賊団が歌い飲んでいたのは「ビンクスの酒（大地の民の自由の象徴＝陽のエネルギー）」。
                  シャンクスが差し出した酒とは、「これ（ビンクスの酒＝ニカの実を自分たちが管理するというスパイ任務）で手を打って、今回はイム様へのお土産（上納品）として見逃してくれ」という、政府の回収システムに対する隠語（プロトコル）でした。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-rose-900/50 space-y-3">
                <span className="text-rose-400 font-mono text-xs font-bold block">【ヒグマが叩き割った真意】</span>
                <p className="leading-relaxed font-sans-jp">
                  ヒグマが酒瓶を叩き割り「一本じゃ足りねェな（one piece of sake では満足できねェ）」と吐き捨てたのは、
                  「ニカの実（酒）一つ回収した程度では、イム様の強欲さは満足させられねェ（世界をシリアスで満たすには足りねェ）」という、政府側による冷酷な交渉拒絶の実演でした。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Case 3: The Heist Act */}
        {activeTab === 'heist_act' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase">FORENSIC 03 · 見聞色の欺瞞</span>
                <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                  見聞色の達人たちが見落とすはずがない：赤髪海賊団の「決死の狂言」
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-stone-950 text-purple-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
                カウンターの不自然さ
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-300">
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <span className="text-purple-400 font-mono text-xs font-bold block">【覇気の設定から見た絶対の矛盾】</span>
                <p className="leading-relaxed font-sans-jp">
                  政府の特務船から命がけで奪ってきた最重要機密の宝箱を、カウンターの上に開きっぱなしで放置し、子供のルフィが手にとって口に運ぶまで「誰一人として気づかなかった」というのは、未来視すら可能な見聞色の達人集団として絶対にあり得ない大バグです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-purple-900/50 space-y-3">
                <span className="text-amber-300 font-mono text-xs font-bold block">【全員で見て見ぬふりをしたアシスト】</span>
                <p className="leading-relaxed font-sans-jp">
                  シャンクスたちはルフィがニカの器だと確信していたからこそ、あえて実をルフィに食べさせるよう全員でアシストした。
                  その後の「あいつの実を食べたァ〜!?」という大慌てリアクションこそ、現場の政府粛清者ヒグマの目を欺き、「これは事故であって故意に復活させたわけではない」と言い訳するための決死の大芝居でした。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Case 4: Escape into the Sea */}
        {activeTab === 'sea_escape' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase">FORENSIC 04 · 地理の反転</span>
                <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                  山賊が「海」に逃げた大矛盾：世界政府のホームグラウンド（絶対の檻）
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-stone-950 text-cyan-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
                政府管理領域への避難
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-300">
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <span className="text-cyan-400 font-mono text-xs font-bold block">【普通ならあり得ない「海の小舟」】</span>
                <p className="leading-relaxed font-sans-jp">
                  山賊が海のプロ（赤髪海賊団）から逃げるために、拠点である山を捨てて海へ小舟を出すのは自殺行為です。
                  しかし、ヒグマが世界政府の最高戦力「緋熊」だったとすれば、意味は180度反転します。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-cyan-900/50 space-y-3">
                <span className="text-amber-300 font-mono text-xs font-bold block">【海＝イム様が作った絶対の支配陣地】</span>
                <p className="leading-relaxed font-sans-jp">
                  陸地はシャンクスの覇気が届く危険地帯ですが、海の上はイム様が大地を沈めて作った「世界政府のホームグラウンド（絶対の檻）」です。
                  近海の主も政府の防衛システム。ヒグマは自分たちの絶対優位な陣地へ逃げ込んだからこそ、あの海上で左腕を代償とするスパイ脱退の裏取引が成立したのです。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Case 5: The Dual Report */}
        {activeTab === 'dual_report' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase">FORENSIC 05 · イム様への偽装報告</span>
                <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                  イム様を納得させた「二重の絶対報告」：完璧なカモフラージュ
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-stone-950 text-emerald-300 border border-stone-800 text-xs font-mono self-start sm:self-auto">
                最高国家機密の処理
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-300">
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <span className="text-rose-400 font-mono text-xs font-bold block">
                  報告①：「ニカ（ルフィ）は海へ叩き落とし確実に殺害した」
                </span>
                <p className="leading-relaxed font-sans-jp">
                  能力者は海で100%死ぬ。「器のガキは海王類に食わせて処理した。実は再び転生したため、次の海軍集荷網を待てばいい」と報告。
                  これにより、ルフィという存在は世界政府の監視リストから完全に消去（カモフラージュ）された。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-850 space-y-3">
                <span className="text-amber-300 font-mono text-xs font-bold block">
                  報告②：「裏切り者シャンクスは利き腕を失い完全に無力化させた」
                </span>
                <p className="leading-relaxed font-sans-jp">
                  スパイとしてのケジメとして左腕を証拠品として上納。「利き腕を失い再起不能となったため、もはや政府の脅威ではない」と報告。
                  この2つの完璧な成果があったからこそ、イム様は赤髪海賊団を一度「処理済み」として歴史の闇へ葬り、四皇として泳がせることになった。
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 to-stone-950 border border-emerald-900/40 text-xs sm:text-sm text-stone-200 font-serif-jp leading-relaxed">
              <strong>【ヒグマの昇進とラフテルの看守】</strong><br />
              世界を揺るがす「ニカの抹殺」と「裏切り者シャンクスの無力化」という二大功績をあげた初代最高粛清者「緋熊」は、歴史から名前を消され、ラフテルの栓を守る終身看守（後のヒノキズの男）へと特進を遂げたのです。
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

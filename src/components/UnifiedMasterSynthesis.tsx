import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, AlertTriangle, Layers, BookOpen, 
  Flame, Waves, ShieldCheck, Skull, Award, Compass, Globe, 
  Anchor, Heart, Smile, Sword, Train, Cpu, Dna, FileCheck, Copy, Check
} from 'lucide-react';

export const UnifiedMasterSynthesis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'audit_fixes' | 'master_blueprint' | 'ten_dreams'>('audit_fixes');
  const [selectedAuditId, setSelectedAuditId] = useState<string>('shanks_higuma');
  const [selectedDimId, setSelectedDimId] = useState<string>('dim_physics');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // 1. FORENSIC AUDIT: RESOLVING CONTRADICTIONS & DUPLICATES
  const contradictionFixes = [
    {
      id: 'shanks_higuma',
      title: '① シャンクスの左腕：「敗北」ではなく『手切れ金（契約）』',
      problemBefore: '【以前の曖昧さ・ネットの誤解】東の海の近海の主に腕を食われたのが「無様な油断や敗北」に見え、ヒグマを「ただの雑魚山賊」あるいは「最終天敵」と呼んでしまう矛盾。',
      resolution: '【完全解消・一本化】白ひげへの「敵にやられた傷じゃねェ」の一言ですべてが証明される。相手は野生の怪物でも単なる仇敵でもなく、政府最高暗殺機関の「元同僚（緋熊）」。シャンクスは神（ニカ）の未来を買い取り、政府の監視から消し去るために、自らの意志で利き腕を「手切れ金（契約金）」として支払った。ヒグマが海へ逃げたのも海が政府のホームグラウンドだからであり、イム様へ「ニカ海没死・シャンクス無力化」という完璧な虚偽二重報告を持ち帰らせるための情報戦だった。',
      status: '矛盾解消・100%整合',
      icon: Award,
      badgeColor: 'text-amber-400 border-amber-500/50 bg-amber-950/30'
    },
    {
      id: 'bath_cork_plug',
      title: '② ラフテルのONE PIECE：難解な装置ではなく「超巨大な風呂のコルク栓」',
      problemBefore: '【以前の重複・曖昧さ】パンゲア城地下のメインバルブとラフテルの遠隔解除キーという「難解なサイバー兵器風の解釈」と、物理的な栓の描写が二重化していた点。',
      resolution: '【完全解消・一本化】世界最深部ラフテルにあるのは、難解な電脳装置ではなく最高にコミカルな「超巨大な風呂（コルク）の栓」！だからこそロジャーたちは800年の歴史の深淵で涙を流して腹を抱えて大爆笑（Laugh Tale＝とんだ笑い話）した。ギア5（ニカ）のドタバタアニメや巨大化（ギガント）は、この超巨大な栓を両手で掴んで「キュッポーン！」と引き抜くための必然的チュートリアルである。',
      status: '描写統合・100%整合',
      icon: Sparkles,
      badgeColor: 'text-cyan-400 border-cyan-500/50 bg-cyan-950/30'
    },
    {
      id: 'two_d_teach',
      title: '③ 「Dの意志」の二重性：正統なDaichi（夜明け） vs 作られたDouble（生物兵器）',
      problemBefore: '【従来の矛盾】「Dの一族は死に際に笑う」という法則に対し、なぜマーシャル・D・ティーチだけが白ひげの前で「死にたくねェ！」と醜く命乞いをして怯えるのか説明がつかなかった点。',
      resolution: '【完全解消・一本化】正統なDは「Daichi（大地／排水Drain）」の記憶を宿し、己の死が世界の解放へ繋がることを確信して微笑む者たち。対してティーチは、世界政府が能力回収用に作った生体兵器コード「Double（二重）」。キメラ多重器＋ケルベロスOS＋ヤミヤミ回収ドライブの3点セットで設計された悲哀の実験体であり、大地の記憶を持たないため死を誰よりも恐れる。白ひげの「ロジャーの待ってる男はお前じゃねェ」がこの二重性を決定づけた。',
      status: '心理・設定の完全分離',
      icon: Dna,
      badgeColor: 'text-purple-400 border-purple-500/50 bg-purple-950/30'
    },
    {
      id: 'dual_liberation',
      title: '④ レッドラインと排水の役割分担：ルフィの縦の解放 ✕ ゾロの横の解放',
      problemBefore: '【以前の重複】ルフィが一人ですべて（栓抜きとレッドライン破壊）を行うのか、それとも古代兵器が壊すのかが曖昧だった点。',
      resolution: '【完全解消・一本化】麦わらの一味「二大看板」による完全な役割分担！ルフィ（縦の解放）＝巨大化ニカが海のコルク栓を「キュッポーン！」と抜いて海面を200m下げる。ゾロ（横の解放）＝ミホークが見せ続けた斬撃スケール（隕石切り・次元切断）に到達し、万物の呼吸で不条理の壁「レッドライン」を一刀両断。この二つの解放が同時に起こることで、一味10人全員の夢が同時に完結する。',
      status: '二大看板の完全分担',
      icon: Sword,
      badgeColor: 'text-rose-400 border-rose-500/50 bg-rose-950/30'
    },
    {
      id: 'imu_scale_complex',
      title: '⑤ イム様の動機：単なる権力欲ではなく「神のスケールへの劣等感」',
      problemBefore: '【従来の平板な解釈】イム様を単なる「絶対権力者・悪の支配者」と見なすだけでは、なぜ数百年間も巨大化実験を執拗に続け、セラフィムを巨大に造り、地下に巨大麦わら帽子を置いているのかが説明不能だった点。',
      resolution: '【完全解消・一本化】イム様は小さな人間サイズの簒奪者であり、大地の本来の主である「本物の神々（巨人族・ルナリア・巨大神）」に対して底知れぬ劣等感とコンプレックスを抱く復讐者。だからこそ従順な人工の神（巨大化・セラフィム）を作り、天竜人をデコイにして「負の感情の永久機関」を回し、怨念の海で大地を沈め続けた。',
      status: '心理・科学実験の完全一致',
      icon: Skull,
      badgeColor: 'text-amber-300 border-amber-500/50 bg-amber-950/30'
    }
  ];

  // 2. MASTER BLUEPRINT: 7 GRAND SYNTHESIS DIMENSIONS
  const masterDimensions = [
    {
      id: 'dim_physics',
      number: 'DIMENSION 01',
      title: '世界の物理構造と海洋物理：檻としての海と地球深部空洞',
      icon: Waves,
      color: 'text-cyan-400',
      summary: '海は自然ではなく、200m水没によって作られた液体の檻。エニエス・ロビーとルルシアの大穴は、海水が地球深部空洞へ落ちる排水口の実演。',
      corePoints: [
        '200mの水没システム：イム様がプルトン等で大地を沈め、人類を島ごとに分断・孤立させて統治した液体の監獄。',
        'エニエス・ロビーの底なし大穴：800年間世界中の海水が流れ込んでも満杯にならない常設の排水口。',
        'ルルシア王国跡地の大穴：最新話で古代兵器ウラノス（マザーフレイム）が穿ち、世界水位が1m上昇したリアルタイム実演。',
        'ノックアップストリームの海底空洞：尾田先生が20年以上前から提示していた「海底に海水が落ち込む巨大な空洞（受け皿）」の物理法則。',
        'ラフテルの超巨大コルク栓：世界最深部にあり、ニカが両手で「キュッポーン！」と抜くことで海水をすべて飲み込ませるマスター栓。'
      ]
    },
    {
      id: 'dim_coldwar',
      number: 'DIMENSION 02',
      title: '第1話冷戦構造：「敵にやられた傷じゃねェ」と初代最高粛清者「緋熊」',
      icon: Award,
      color: 'text-rose-400',
      summary: '白ひげへの一言が証明する冷戦の極点。四皇の腕喪失は油断ではなく、世界政府を完全欺瞞して神の未来を買った手切れ金。',
      corePoints: [
        '「敵にやられた傷じゃねェ」の証明：海王類相手なら敵と呼ぶはずなのに真っ向から否定したのは、相手が手の内を知る元同僚ヒグマであり、自ら支払った手切れ金だから。',
        '初代最高粛清者「緋熊」：大将の命名規則（赤犬・青雉・黄猿・藤虎・緑牛）と同系列の、政府最高暗殺機関のトップコード。',
        '酒（Sake）の隠語プロトコル：「一本じゃ足りねェ（ONE PIECEでは満足できねェ）」というニカ管理協定の暗号外交。',
        '山賊が海へ逃げた必然性：海こそが世界政府のホームグラウンド（絶対の檻）であり、近海の主も政府の防衛兵器。',
        'イム様への二重虚偽報告：「ニカ海没死」と「シャンクス利き腕喪失で無力化」を持ち帰らせ、ルフィを追跡リストから10年間完全消去させた。'
      ]
    },
    {
      id: 'dim_dual_strike',
      number: 'DIMENSION 03',
      title: '二大看板の同時解放：ルフィ（縦の解放） ✕ ゾロ（横の解放）',
      icon: Sword,
      color: 'text-amber-400',
      summary: 'ルフィが海の栓を垂直に抜き、ゾロがレッドラインを水平に両断する。二次元の解放が重なる時、世界がONE PIECEになる。',
      corePoints: [
        'ルフィ（縦の解放）：ギア5のギガント（巨神化）でラフテルの風呂のコルク栓を「キュッポーン！」と引き抜き、海面を200m低下させる。',
        'ゾロ（横の解放）：ミホークの斬撃スケール（隕石・次元切り）に到達し、万物の呼吸で不条理の壁「レッドライン」を一刀両断。',
        'ロジャーのLaugh Tale（大爆笑）：800年の深淵にあったのが難解な装置ではなく「ただの風呂のコルク栓」だったからこそ、腹を抱えて笑い転げた。',
        'カートゥーン演出の必然性：ドタバタアニメ表現は、読者のリアリティラインを慣らし、超巨大な栓をコミカルに抜くクライマックスへの前振り。'
      ]
    },
    {
      id: 'dim_bio_teach',
      number: 'DIMENSION 04',
      title: '生物兵器黒ひげ（コードDouble）：キメラ化＋ケルベロスOS＋ヤミヤミ回収機',
      icon: Dna,
      color: 'text-purple-400',
      summary: 'ベガパンクの「悪魔の実＝願い」説を回収・無力化するために政府が設計した生物兵器の3点セットと不眠の狂気。',
      corePoints: [
        'キメラ化（多重の器）：通常2つで体が爆散するルールに対し、複数の魂・心臓を人工接合して多重保持を可能にした。',
        'ヒトヒトの実 モデル“ケルベロス”：3つの頭と心臓を持つ地獄の番犬因子による「3スロット維持基盤OS」。',
        'ヤミヤミの実（回収ドライブ）：能力を引きずり出し無力化する吸引機。敵の願い（実）を吸い上げて独占するシステム。',
        '不眠の体質と「あいつらだ」：交代稼働する複数心臓による不眠の狂気。モックタウンでルフィとゾロが見抜いた直感と3連ドクロ旗の完全合致。',
        '二つのDの対比：大地を記憶し死に笑う正統なD（Daichi） vs 作られた兵器ゆえに死に怯え命乞いする偽りのD（Double）。'
      ]
    },
    {
      id: 'dim_complex_imu',
      number: 'DIMENSION 05',
      title: 'イム様の深層心理：神のスケールへの劣等感と負の感情の永久機関',
      icon: Skull,
      color: 'text-rose-300',
      summary: '小さな人間の簒奪者が抱く「本物の神々（巨人サイズ）」へのコンプレックス。数百年繰り返された巨大化実験とセラフィムの正体。',
      corePoints: [
        '神のスケールへの劣等感：世界を支配しても自分は虫ケラサイズというルサンチマン。だからこそ従順な人工の神（巨大化・セラフィム）を作った。',
        '冷凍巨大麦わら帽子：マリージョア地下に保管された、太古の巨大神（ニカ／ジョイボーイ）のスケールへの恐怖と執着。',
        '天竜人という肉の盾（デコイ）：愚物化させた20の王の末裔に民衆を虐待させ、真の黒幕イム様への怒りを逸らす防波堤。',
        '負の感情の永久機関：民衆から湧き出る憎悪・怒り・絶望を主食（エネルギー）として吸い上げ、800年間の不老不死を維持する自作自演プラント。'
      ]
    },
    {
      id: 'dim_minis',
      number: 'DIMENSION 06',
      title: '箱庭の反復と先行ミニチュア演出：トムさんの海列車、ゼフのオールブルー',
      icon: Train,
      color: 'text-amber-300',
      summary: 'ミクロの島で起きた奇跡は、最終章のマクロ解放の完全な相似形。水没した海に陸の列車を敷いたトムの奇跡。',
      corePoints: [
        'トムさんの海列車（パッフィング・トム）：水没する海の上に陸を走るべき列車を敷き島々を繋ぎ直した＝水抜きで大地を取り戻す未来の先行ミニチュア演出！',
        'ゼフのオールブルー：分断された世界の歪みを嗅ぎ取り、四つの海が一つに繋がる空と海を信じてサンジへ託した原点。',
        '各編の島々の縮図：アラバスタ、空島、ドレスローザ、ワノ国。ルフィが各地の檻を壊してきた軌跡は、イム様の絶望発電所を一つずつ破壊したチュートリアル。'
      ]
    },
    {
      id: 'dim_matrix_contrast',
      number: 'DIMENSION 07',
      title: 'ネット有力説との徹底対照：なぜ従来の説は破綻し、本考察のみが100%整合するのか',
      icon: Layers,
      color: 'text-emerald-400',
      summary: '9大論点（ワンピース、Dの意志、シャンクス腕、火ノ傷、ニカ笑い、悪魔の実、イム様、赤石、パンゲア）において未解決矛盾をゼロに統一。',
      corePoints: [
        'ワンピース：破壊計画書説は「ロジャーの爆笑」「形あるもの発言」「ルフィの夢の果て」で破綻 → 「お風呂の栓＋超大陸での宴」で100%整合。',
        'Dの意志：夜明け・半月説は「黒ひげの命乞い」を説明不能 → 「正統Daichi vs 実験体Double」で完璧に分離。',
        'シャンクスの腕：編集者の要請説・油断説は「敵にやられた傷じゃねェ」で破綻 → 「元同僚ヒグマとの冷戦と手切れ金」で完全証明。',
        '火ノ傷の男：サウロ・ギャバン説は「近づく船を沈める大渦」で破綻 → 「音が歪んだ緋熊＋ラフテルの排水大渦」で物理と円環が完結。',
        'ニカの笑い：賛否のギャグ説 → 「惨劇をギャグに上書きし悪魔の燃料を断つ絶対兵糧攻め」として戦闘理論が完結。'
      ]
    }
  ];

  // 3. TEN CREW MEMBERS DREAMS SIMULTANEOUS FULFILLMENT
  const tenCrewDreams = [
    { name: 'モンキー・D・ルフィ', dream: '世界中の奴ら全員と開く「世界最大の宴」（夢の果て）', role: '縦の解放：超巨大コルク栓抜き', color: 'text-amber-400', bg: 'bg-amber-950/20 border-amber-500/40' },
    { name: 'ロロノア・ゾロ', dream: '世界一の大剣豪（世界で最も硬く不条理な壁を切断）', role: '横の解放：レッドライン一刀両断', color: 'text-emerald-400', bg: 'bg-emerald-950/20 border-emerald-500/40' },
    { name: 'サンジ', dream: 'オールブルー（All Blue）の発見と到達', role: '四つの海を隔てていた壁が消滅し海流が一体化', color: 'text-cyan-400', bg: 'bg-cyan-950/20 border-cyan-500/40' },
    { name: 'ナミ', dream: '全世界の海図（境界線のない真の世界地図）を描く', role: 'カームベルト・レッドラインが消え、浮上した超大陸の輪郭を記録', color: 'text-amber-300', bg: 'bg-amber-950/20 border-amber-500/40' },
    { name: 'ブルック', dream: '双子岬のラブーンとの正面からの再会', role: 'リヴァース・マウンテンが崩壊し、遮る壁のない穏やかな海を一直線に進む', color: 'text-purple-400', bg: 'bg-purple-950/20 border-purple-500/40' },
    { name: 'ニコ・ロビン', dream: '真の歴史の本文（リオ・ポーネグリフ）と空白の100年の解明', role: '海が排水され海底200mに沈んでいた古代都市群と神殿が一挙に日光を浴びる', color: 'text-blue-400', bg: 'bg-blue-950/20 border-blue-500/40' },
    { name: 'フランキー', dream: '夢の船（サニー号）で世界の海を巡り届ける', role: '世界の栓を抜き壁を壊したサニー号が、障害のない平和な海をドンと胸を張って航行', color: 'text-sky-400', bg: 'bg-sky-950/20 border-sky-500/40' },
    { name: 'トニートニー・チョッパー', dream: '何でも治せる医者（万能薬の完成）', role: '超大陸復活に伴い気候分断が正常化。孤立していた世界中の薬草が生態系統合で集結', color: 'text-rose-400', bg: 'bg-rose-950/20 border-rose-500/40' },
    { name: 'ジンベエ', dream: '魚人族の真の解放と、太陽の下での共生', role: '巨船ノアとポセイドンにより、全魚人・人魚が真の太陽が輝く超大陸の地上へ移住', color: 'text-teal-400', bg: 'bg-teal-950/20 border-teal-500/40' },
    { name: 'ウソップ', dream: '誇り高き勇敢なる海の戦士になる', role: '世界を救った大英雄として名を刻み、シロップ村で語っていた無数のホラがすべて現実に昇華', color: 'text-yellow-400', bg: 'bg-yellow-950/20 border-yellow-500/40' }
  ];

  const activeFix = contradictionFixes.find(f => f.id === selectedAuditId) || contradictionFixes[0];
  const activeDim = masterDimensions.find(d => d.id === selectedDimId) || masterDimensions[0];

  const handleCopyText = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="master-synthesis" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Lead Section Title */}
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
          <FileCheck className="w-4 h-4 text-amber-400" />
          <span>COMPREHENSIVE MASTER SYNTHESIS · 全理論完全統合・矛盾重複解消マップ</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif-jp font-bold text-stone-100 tracking-tight leading-tight mb-4">
          【完全体系化マスターマップ】<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-cyan-300">
            すべての論点・矛盾・伏線の完全回収と一元化
          </span>
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          対話の中で掘り下げられてきた超弩級のプロット（第1話冷戦構造、エニエス・ルルシア大穴、黒ひげ生物兵器、カートゥーンコルク栓、二大看板の役割分担、神のスケールへの劣等感、トムさんの海列車）を再検証。
          これまでの記述に見られた重複・矛盾を100%解消し、一本の完璧な神話として体系化しました。
        </p>
      </div>

      {/* Mode Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-3 p-1.5 bg-stone-900/90 rounded-2xl border border-stone-800 mb-10 w-fit">
        <button
          onClick={() => setActiveTab('audit_fixes')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'audit_fixes'
              ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>① 重複・矛盾の完全解消レポート（5大ポイント）</span>
        </button>

        <button
          onClick={() => setActiveTab('master_blueprint')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'master_blueprint'
              ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>② 全理論完全体系化マップ（7大ディメンション）</span>
        </button>

        <button
          onClick={() => setActiveTab('ten_dreams')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'ten_dreams'
              ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>③ 麦わらの一味10人全員の夢・完全同時達成マトリクス</span>
        </button>
      </div>

      {/* TAB 1: CONTRADICTION & DUPLICATE FIX REPORT */}
      {activeTab === 'audit_fixes' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Quick Select Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {contradictionFixes.map((item) => {
              const isSelected = item.id === selectedAuditId;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedAuditId(item.id)}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-stone-900 border-amber-500/80 shadow-lg ring-1 ring-amber-500/50'
                      : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="w-4 h-4 text-amber-400" />
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold">{item.status}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold font-serif-jp text-stone-100 line-clamp-2">
                    {item.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Detailed Resolution Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-stone-900/90 border border-amber-500/40 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800">
              <div className="flex items-center gap-3">
                <activeFix.icon className="w-6 h-6 text-amber-400 shrink-0" />
                <h3 className="text-lg sm:text-2xl font-serif-jp font-bold text-stone-100">
                  {activeFix.title}
                </h3>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full border font-mono font-semibold self-start sm:self-auto ${activeFix.badgeColor}`}>
                {activeFix.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem Before */}
              <div className="p-5 rounded-2xl bg-stone-950/80 border border-stone-850 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs font-mono uppercase">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>従来の曖昧さ・重複・矛盾点</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-jp">
                  {activeFix.problemBefore}
                </p>
              </div>

              {/* Resolution Now */}
              <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/40 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs font-mono uppercase">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>本考察による完全解消ロジック</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans-jp font-medium">
                  {activeFix.resolution}
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => handleCopyText(activeFix.id, `${activeFix.title}\n\n【解消前】${activeFix.problemBefore}\n\n【完全解消】${activeFix.resolution}`)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-950 hover:bg-stone-850 border border-stone-750 text-xs text-stone-300 hover:text-stone-100 transition-all cursor-pointer font-mono"
              >
                {copiedKey === activeFix.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === activeFix.id ? '考察メモをコピーしました' : 'この論点の解消要約をコピー'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MASTER BLUEPRINT (7 GRAND DIMENSIONS) */}
      {activeTab === 'master_blueprint' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Dimension Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {masterDimensions.map((d) => {
              const isSelected = d.id === selectedDimId;
              const Icon = d.icon;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDimId(d.id)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-stone-900 border-amber-500/80 shadow-lg ring-1 ring-amber-500/50'
                      : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-mono text-stone-400 uppercase">{d.number}</span>
                    <Icon className={`w-3.5 h-3.5 ${d.color}`} />
                  </div>
                  <h4 className="text-xs font-bold font-serif-jp text-stone-100 line-clamp-2 leading-tight">
                    {d.title.split('：')[0]}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Dimension Deep Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-stone-900/90 border border-amber-500/40 shadow-2xl space-y-6">
            <div className="pb-4 border-b border-stone-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-amber-400 uppercase">{activeDim.number}</span>
                <span className="text-stone-600">·</span>
                <span className="text-xs text-stone-400">STRUCTURED CANONICAL PILLAR</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-serif-jp font-bold text-stone-100">
                {activeDim.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 font-sans-jp leading-relaxed">
                {activeDim.summary}
              </p>
            </div>

            {/* Core Bullet Points Grid */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
                【この体系における決定打・論理構造】
              </span>
              <div className="grid grid-cols-1 gap-2.5">
                {activeDim.corePoints.map((pt, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-850 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-300 font-sans-jp leading-relaxed">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => handleCopyText(activeDim.id, `${activeDim.title}\n\n${activeDim.summary}\n\n` + activeDim.corePoints.map((p, i) => `${i+1}. ${p}`).join('\n'))}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-950 hover:bg-stone-850 border border-stone-750 text-xs text-stone-300 hover:text-stone-100 transition-all cursor-pointer font-mono"
              >
                {copiedKey === activeDim.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === activeDim.id ? 'ディメンション要約をコピーしました' : 'この大体系をクリップボードにコピー'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TEN CREW MEMBERS DREAMS SIMULTANEOUS FULFILLMENT */}
      {activeTab === 'ten_dreams' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/40">
            <h3 className="text-lg sm:text-2xl font-serif-jp font-bold text-amber-300 mb-2">
              二大看板の一撃が引き起こす「奇跡の同時成就」
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans-jp">
              ルフィ（巨大化ニカ）がラフテルで世界のコルク栓を「キュッポーン！」と引き抜き海面を200m下げ（縦の解放）、
              ゾロが万物の呼吸で不条理の壁「レッドライン」を一刀両断する（横の解放）。
              このたった一度の連動により、25年以上積み重ねられてきた<strong>麦わらの一味10人全員の夢が、1秒のズレもなく完全に同時達成</strong>されます。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {tenCrewDreams.map((c, idx) => (
              <div key={idx} className={`p-4 rounded-2xl border ${c.bg} flex flex-col justify-between shadow-lg`}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-stone-400">CREW 0{idx + 1}</span>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-stone-950/80 text-stone-300 border border-stone-800">
                      成就
                    </span>
                  </div>
                  <h4 className="text-sm font-bold font-serif-jp text-stone-100 mb-1">{c.name}</h4>
                  <span className={`text-xs font-semibold block mb-2.5 ${c.color}`}>
                    {c.dream}
                  </span>
                </div>
                <div className="pt-2.5 border-t border-stone-800/80 text-[11px] text-stone-300 font-sans-jp leading-relaxed">
                  {c.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

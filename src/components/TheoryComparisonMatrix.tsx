import React, { useState } from 'react';
import { 
  Scale, AlertCircle, CheckCircle2, Sparkles, Flame, 
  Globe, XCircle, ArrowRight, ShieldAlert, Layers, HelpCircle, 
  ExternalLink, ChevronRight, BookOpen, Check, ShieldCheck 
} from 'lucide-react';

interface RichComparisonTopic {
  id: string;
  topicNumber: string;
  topicTitle: string;
  coreDivergence: string; // The central point of collision
  mainstream: {
    archetypeTitle: string;
    subTheories: string[];
    coreArguments: string[];
    unsolvedContradictions: string[];
    overallRating: string;
  };
  ourTheory: {
    archetypeTitle: string;
    unifyingConcepts: string[];
    detailedResolution: string[];
    decisiveEvidences: string[];
    whyItFitsFlawlessly: string;
    overallRating: string;
  };
}

export const TheoryComparisonMatrix: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('one-piece');
  const [activeTab, setActiveTab] = useState<'side_by_side' | 'summary_table'>('side_by_side');

  const topics: RichComparisonTopic[] = [
    {
      id: 'one-piece',
      topicNumber: '01',
      topicTitle: 'ワンピース（ひとつなぎの大秘宝）の正体',
      coreDivergence: '「古代兵器による破壊計画書」なのか、それとも「物理的なお風呂の栓」なのか？',
      mainstream: {
        archetypeTitle: '【主流説】レッドライン破壊・オールブルー創出計画書 / リオ・ポーネグリフ説',
        subTheories: [
          '説A：古代兵器プルトンとポセイドンでレッドライン（マリージョア）を爆破し、魚人をノアで地上へ移住させ、4つの海を一つに繋いでオールブルーを作る「軍事計画書」。',
          '説B：空白の100年の歴史の真実を記録したリオ・ポーネグリフそのもの、またはジョイボーイの残した笑えるメッセージ・自虐手紙。',
          '説C：世界を一つにする音楽のレコード（ビンクスの酒の原曲）や、物語そのもの（コミックス）。'
        ],
        coreArguments: [
          '魚人島の「マダム・シャーリーのルフィが魚人島を滅ぼす予言」と合致する。',
          'サンジの夢である「オールブルー」の物理的創出方法として合理的。',
          '歴史の真実を知ることが世界政府打倒の動機になる。'
        ],
        unsolvedContradictions: [
          '矛盾①【ロジャーの爆笑】：戦争計画書や虐殺の歴史を読んで、海賊王たちが「涙を流して腹を抱えて大爆笑（Laugh Tale）」するのは人として異常。計画書では笑えない。',
          '矛盾②【物理的オブジェクトの不在】：尾田先生はインタビューで「ワンピースは家族の絆とかではなく、ちゃんとした形のある物（物理的報酬）」と明言している。',
          '矛盾③【ルフィの夢の果て】：ロジャーもルフィも同じ「子供じみた夢の果て」を語り仲間を呆れさせた。破壊計画書が夢の果てであるはずがない。'
        ],
        overallRating: '物語の政治面は説明できるが、ロジャーの爆笑やルフィの夢の果ての「バカバカしさ」が完全に抜け落ちている。'
      },
      ourTheory: {
        archetypeTitle: '【本考察】物理的な「お風呂の栓」＋ それを抜いた後の「超大陸での大宴会」',
        unifyingConcepts: [
          '物理的実体：ラフテルにある、海を維持していた巨大な「お風呂の栓（物理オブジェクト）」。',
          'タイトルの真意：栓を抜いた後に海水が引き、境界のない超大陸「Daichi」で全人類が手を取り合う「世界最大の宴（ひと繋ぎの平和＝ONE PIECE）」。'
        ],
        detailedResolution: [
          'なぜロジャーは笑ったのか？：800年間世界を恐怖で支配し水没させていた元凶が、あまりにもバカバカしい「ただのお風呂の栓」だったから。「とんだ笑い話（Laugh Tale）だ」と涙を流して笑い転げた。',
          'なぜ「早すぎた」のか？：栓を引き抜くには、ニカの覚醒による「ギガント（巨神化）のギャグ」と、海王類を操るポセイドン（しらほし）の誕生が必要だったから。',
          'ルフィの「夢の果て」との合致：「海を干上がらせて世界中の奴らとでけぇ宴を開くこと」。幼少期のルフィが思いつく、あきれるほど無邪気でスケールの大きな夢そのもの。'
        ],
        decisiveEvidences: [
          'エニエス・ロビーの底なし大穴（800年水が流れ込んでも満杯にならない常設排水口）。',
          'ルルシア消滅直後に大穴が出現し、世界中の海水位が1m上昇したリアルタイム実演。',
          '空島ノックアップストリームで明かされた「海底の巨大な空洞（排水の受け皿）」。'
        ],
        whyItFitsFlawlessly: '物理オブジェクトとしての実在性、ロジャーの爆笑、ルフィの夢の果て、尾田先生の「宴で終わる」発言が1ミリの狂いもなく完全合致する。',
        overallRating: '◎ 完全整合：作中の物理現象、心理描写、作劇の結末まで100%回収'
      }
    },
    {
      id: 'd-will',
      topicNumber: '02',
      topicTitle: '「Dの意志」の真の語源と意味',
      coreDivergence: '「夜明け（Dawn）」や「半月」なのか、それとも「大地の解放者」と「政府の実験体」なのか？',
      mainstream: {
        archetypeTitle: '【主流説】Dawn（夜明け） / 半月（月の民） / Davy Jones / Democracy説',
        subTheories: [
          '説A：Dawn（夜明け）説。第1話のサブタイトル「ROMANCE DAWN」やペドロの「世界の夜明け」に由来。',
          '説B：半月説。エネルの扉絵連載から、月面都市ビルカの民の象徴である「半月（Dの形状）」を表す。',
          '説C：Davy Jones（デイヴィ・ジョーンズ）説。海の悪魔と呼ばれた伝説の海賊の末裔。',
          '説D：Democracy（民主主義）説。天竜人の独裁に対して自由と平等を掲げた思想。'
        ],
        coreArguments: [
          '夜明けという言葉は作中で何度も肯定的に使われている。',
          '月と地球の関係は太古の歴史に深く関わっている。'
        ],
        unsolvedContradictions: [
          '矛盾①【なぜ死ぬ瞬間に笑うのか？】：夜明けや月の民という記号だけでは、処刑台で死を悟った瞬間に満面の笑みを浮かべる心理的必然性が説明できない。',
          '矛盾②【黒ひげ（ティーチ）の異質さ】：同じ「D」でありながら、黒ひげだけは白ひげの死に際に「やめろォ！死にたくねェ！」と命乞いをして怯え切っている。主流説はこの二重性を説明できない。'
        ],
        overallRating: 'ロマンチックな単語の羅列に留まり、キャラクターの生死の態度（笑う者と怯える者）の理由を解明できていない。'
      },
      ourTheory: {
        archetypeTitle: '【本考察】正統な「Daichi（大地／排水Drain）」 vs 作られた「Double（二重実験体）」',
        unifyingConcepts: [
          '正統なD（ルフィ・ロジャー・リリィ・サウロ）：太古の超大陸「Daichi」の記憶と、海水を排水する「Drain」の宿命を継ぐ解放者たち。',
          '偽りのD（黒ひげ・ティーチ）：世界政府が神の力を多重運用するために作ったデザイナーベビーの実験コード「Double（二重）」。'
        ],
        detailedResolution: [
          'なぜ正統なDは笑って死ぬのか？：彼らの魂は大地の解放（世界の栓が抜かれる夜明け）を確信しており、己の死が次の解放へ繋がることを知っているため、恐怖を超越して笑う。',
          'なぜ黒ひげだけが命乞いをするのか？：彼は作られた実験体（Double）であり、血統因子のバグで眠れない異形の怪物。大地の魂を持っていないため、普通の人間以上に死を恐れる。',
          '白ひげの宣告の真意：「ロジャーが待っている男はお前じゃねェ…」という言葉は、ティーチが本物のDaichiではなく、政府の実験体Doubleであることを見抜いた台詞。'
        ],
        decisiveEvidences: [
          '全12名のDの行動がすべて「世界政府の檻や封印を解き放つ（解放）」に直結している事実。',
          'マルコの「体の構造が異形」、サッチのヤミヤミの実の強奪（政府の回収術式）。',
          'リリィ女王がポーネグリフを世界に散らばらせて真実を解放した歴史的事実。'
        ],
        whyItFitsFlawlessly: '「笑うD」と「笑えないD」の境界線を完全に言語化し、黒ひげの特異体質まで一本の線で繋がる。',
        overallRating: '◎ 完全整合：正統と異端の対比により、黒ひげの存在理由まで完璧に解明'
      }
    },
    {
      id: 'ch1-shanks',
      topicNumber: '03',
      topicTitle: '第1話のシャンクスの左腕とヒグマの真実',
      coreDivergence: '「編集者の演出要請（初期のブレ）」なのか、それとも「元同僚との冷戦と手切れ金」なのか？',
      mainstream: {
        archetypeTitle: '【主流説】メタ的演出説（初代編集者の助言） / 新時代への覚悟・ハッパかけ説',
        subTheories: [
          '説A：メタ的演出説。初代担当編集者が「第1話にインパクトと劇的なドラマが足りない」と助言したため、オダッチが腕を落とさせたという制作裏話。',
          '説B：新時代へのハッパかけ説。ルフィに海の厳しさと命の重みを教え、覚悟を植え付けるためにあえて腕を差し出した。',
          '説C：未来視（見聞色）説。シャンクスは未来が見えており、腕を失うことがルフィの覚醒に必要だと予知していた。'
        ],
        coreArguments: [
          '少年漫画の導入部としての感動とドラマ性は文句なしに最高。',
          '作中でも「新しい時代に懸けてきた」と語られている。'
        ],
        unsolvedContradictions: [
          '矛盾①【戦闘力の圧倒的インフレ】：後の四皇であり、見聞色・覇王色で海軍大将（緑牛）を行動不能にする男が、最弱の海・東の海の海獣ごときに腕を奪われるのは描写として致命的なバグ。',
          '矛盾②【白ひげへのセリフ】：「敵にやられた傷じゃねェ」とわざわざ海王類を「敵」と呼ぶことすら否定している点。単なる油断なら「敵にやられた」と言うはず。',
          '矛盾③【山賊ヒグマの異常な態度】：四皇相手に酒を頭から浴びせ「56人殺した」と豪語した男が、なぜ山賊なのに小舟で海へ逃げたのか？'
        ],
        overallRating: 'メタ的な裏話でごまかすしかなく、四皇の戦闘力と白ひげへのセリフの真意が25年間未回収のまま。'
      },
      ourTheory: {
        archetypeTitle: '【本考察】最高暗殺者2人の冷戦：初代「緋熊（ヒグマ）」との狂言誘拐と手切れ金',
        unifyingConcepts: [
          'ヒグマの正体：世界政府最高戦力の命名規則（色＋動物：赤犬・青雉・黄猿・藤虎・緑牛）を持つ、初代最高粛清者「緋熊（ヒグマ）」。',
          'シャンクスの立場：天竜人（フィガーランド家）血統であり、元神の騎士団・政府スパイの訓練を受けた元同僚。',
          '左腕の真意：ルフィ（ニカ）を政府の目から隠蔽し、スパイを脱退するケジメとして差し出した「手切れ金（最高の投資）」。'
        ],
        detailedResolution: [
          'なぜシャンクスは酒場で下手に出たのか？：相手が対ニカ粛清術を極めた元同僚「緋熊」だと熟知していたから。その場でルフィが殺されないよう、あえて道化を演じた極限の外交交渉。',
          'なぜ山賊が海へ逃げたのか？：海こそがイム様の作った「世界政府のホームグラウンド（絶対の檻）」であり、近海の主も政府の防衛システム。ヒグマは自分たちの陣地へ逃げ込んだ。',
          'イム様への二重報告：①「ニカ（器のガキ）は海に落として殺害した」 ＆ ②「裏切り者シャンクスは利き腕を奪い再起不能にした」。この完璧な成果を持ち帰ったことで、ルフィは政府の監視から消去され、シャンクスは泳がされた。',
          '「敵にやられた傷じゃねェ」の真意：世界政府という最悪のシステムを欺き、神（ニカ）の未来を買い取るために自ら対等に支払った手切れ金だからこそ、敗北の傷ではないと誇り高く宣言した。'
        ],
        decisiveEvidences: [
          '大将の命名規則（色＋動物）と「緋熊（ヒグマ）」の完全一致。',
          'ヒグマの「56人殺害」＝政府の暗殺工作員としての粛清実績。',
          'シャンクスが差し出した「一本の酒」＝ニカ管理協定の隠語プロトコル。'
        ],
        whyItFitsFlawlessly: '第1話のあらゆる不自然さ（見聞色の放置、海の逃亡、四皇の腕喪失、白ひげへのセリフ）が、冷戦の情報戦として100%美しく氷解する。',
        overallRating: '◎ 完全整合：第1話の最大の謎が、世界政府をハメ抜いた男の最高の勝利宣言へ反転'
      }
    },
    {
      id: 'hinokizu',
      topicNumber: '04',
      topicTitle: '「火ノ傷（ヒノキズ）の男」の正体と大渦',
      coreDivergence: '「サウロやギャバン」なのか、それとも「音の歪んだ緋熊とラフテルの大渦」なのか？',
      mainstream: {
        archetypeTitle: '【主流説】ハグワール・D・サウロ / スコッパー・ギャバン / クザン説',
        subTheories: [
          '説A：サウロ説。オハラのバスターコールで火傷を負い、全身に包帯を巻いてエルバフに生存している。',
          '説B：スコッパー・ギャバン説。ロジャー海賊団のNo.3。エルバフでルフィたちを待っている。',
          '説C：クザン（青雉）や元海軍説。赤犬との決闘で全身に火傷を負った黒い船の男。'
        ],
        coreArguments: [
          'エルバフ編でサウロが生きていることが明かされ、火傷の描写が存在する。',
          '最後のロードポーネグリフの手がかりを握っている人物として旧世代の海賊が自然。'
        ],
        unsolvedContradictions: [
          '矛盾①【なぜ近づく船を巨大な大渦で沈めるのか？】：サウロやギャバン、あるいは元海軍の人物が、なぜ近づく船を無差別に大渦で海底へ沈めるような凶暴な行動を取るのか？ 能力的にも動機的にも説明がつかない。',
          '矛盾②【黒い船と最後の石の管理】：なぜ世界政府や黒ひげ海賊団すら手を出せないのか？'
        ],
        overallRating: '人物のビジュアル（火傷）だけで選ばれており、「大渦で船を沈める」という物理現象と任務の必然性が全く説明できていない。'
      },
      ourTheory: {
        archetypeTitle: '【本考察】800年の口伝で音が歪んだ「緋熊（ヒグマ）」＝ラフテルの終身看守',
        unifyingConcepts: [
          '音の歪み：800年の口伝や伝言ゲームの中で、「緋熊（ヒグマ）」の音が「火ノ傷（ヒノキズ）」へと歪曲して伝わった。',
          '大渦の物理正体：ラフテルの栓の周囲で常に発生している「海水吸い込みの巨大な排水渦」そのもの。'
        ],
        detailedResolution: [
          'なぜ大渦で船を沈めるのか？：ヒグマが能力で渦を起こしているのではなく、彼が守っている「ラフテルの栓」の周りが、エニエス・ロビーの滝のように海水を吸い込む物理的な大渦になっているから。近づいた船は自然の物理法則で引きずり込まれる。',
          'ヒグマの昇進の経緯：第1話で「ニカの抹殺」と「シャンクスの無力化」という最高機密を完璧に処理した功績により、歴史から名前を消され、イム様直属で世界の栓を守る「終身看守」へと昇格した。',
          '物語の円環構造：第1話でルフィの歯を折り、シャンクスに腕を落とさせた最初の天敵「緋熊」が、最終決戦の地ラフテルで最後の門番として立ちふさがるという究極の伏線回収。'
        ],
        decisiveEvidences: [
          'エニエス・ロビーやルルシアの大穴で実演されている「吸い込みの滝と渦」。',
          'エルバフのスコッパー・ギャバンは歴史の案内人（光のナビゲーター）であり、看守ではない。'
        ],
        whyItFitsFlawlessly: '大渦の物理メカニズムと、第1話から最終章に至るストーリーテリングの劇的な円環が完璧に成立する。',
        overallRating: '◎ 完全整合：大渦の物理現象と第1話の人物の再登場が一本の線で完結'
      }
    },
    {
      id: 'nika-laugh',
      topicNumber: '05',
      topicTitle: 'ニカ（ギア5）の「笑い」とカートゥーン表現',
      coreDivergence: '「作劇のルーツへの回帰（賛否両論ギャグ）」なのか、それとも「対悪魔用エネルギー遮断システム」なのか？',
      mainstream: {
        archetypeTitle: '【主流説】トムとジェリーへのオマージュ / 自由の象徴 / 賛否の分かれる悪ふざけ説',
        subTheories: [
          '説A：尾田先生が少年時代に愛した「トムとジェリー」やクラシック・アニメーションへの原点回帰表現。',
          '説B：何にも縛られない「究極の自由」を表現するためのコミカルなバトルスタイル。',
          '説C：一部読者からの批判（「命のやり取りなのに緊張感がない」「ふざけすぎて萎える」）。'
        ],
        coreArguments: [
          '尾田先生自身がインタビューで「昔のアニメの記号（目が飛び出るなど）を描きたかった」と語っている。',
          'ジョイボーイ（笑う男）のテーマと合致している。'
        ],
        unsolvedContradictions: [
          '矛盾①【作中戦術としての必然性の欠如】：なぜ命懸けの最終決戦（カイドウ戦、五老星戦）で「ふざけ転げなければならないのか？」という作中の戦闘ロジックが説明されていない。',
          '矛盾②【読者の違和感の放置】：シリアスな暴力の前にギャグを置くことの「必然性」が提示されず、単なる好みの問題で片付けられている。'
        ],
        overallRating: '原点回帰の楽しさは評価できるが、なぜ最終決戦で笑わなければならないのかという作中戦術の必然性が欠落している。'
      },
      ourTheory: {
        archetypeTitle: '【本考察】対悪魔用エネルギー遮断システム（兵糧攻めプロトコル）',
          unifyingConcepts: [
            '悪魔のエネルギー源：イム様や五老星は、人間の怒り・悲しみ・絶望といった「負の感情（シリアス）」を喰らって永久機関を動かしている。',
            'ギャグの真意：戦場をカートゥーン化して笑い転げることで、戦場から負の感情を強制遮断し、悪魔たちを完全に干上がらせる必勝の兵糧攻め。'
          ],
          detailedResolution: [
            'なぜ怒りでは勝てないのか？：これまでのルフィのように「怒り（熱血）」で殴ると、その負の感情が悪魔の燃料になってしまい泥沼化する。怒りでは悪魔は倒せない。',
            '読者が感じた「緊張感のなさ」の真意：それこそが作者の狙い。重苦しいシリアスで世界を支配してきた悪魔に対し、「お前の暴力なんてただのギャグだ」と突きつけて支配領域（ドメイン）を無力化している。',
            '各島の縮図破壊との合致：アーロンやドフラミンゴを倒した後に訪れる民衆の「大爆笑と宴」こそが、イム様の負の感情発電所を一基ずつ破壊してきた前振りだった。'
          ],
          decisiveEvidences: [
            'カイドウを縄跳びのように扱い、五老星の攻撃を目玉を飛び出させてギャグに変える戦闘描写。',
            'イム様と五老星が纏う黒い影・怪異の姿（負の感情の権化）。'
          ],
          whyItFitsFlawlessly: '読者が感じた「違和感」すらも、悪魔の支配を解体するための計算された演出として完璧に救済・昇華。',
          overallRating: '◎ 完全整合：ギャグ表現を作中最強の必勝戦術として論理的に証明'
        }
      },
      {
        id: 'devil-fruit-origin',
      topicNumber: '06',
      topicTitle: '悪魔の実の起源と海軍設立の裏目的',
      coreDivergence: '「人の願いによる自然発生」なのか、それとも「陸の神々の神性剥奪と集荷網」なのか？',
      mainstream: {
        archetypeTitle: '【主流説】ベガパンクの「人の願い・進化の可能性」説 / 海軍は正義の治安組織',
        subTheories: [
          '説A：エッグヘッド編でベガパンクが語った「悪魔の実とは、誰かが望んだ人の進化の可能性（願い）である」という言葉を文字通り受け止める説。',
          '説B：母なる海に嫌われるのは、自然に反した不自然な存在だから。',
          '説C：海軍は、大海賊時代から罪なき市民を守るための正義の軍事組織。'
        ],
        coreArguments: [
          'ベガパンクという作中最高知能のセリフであり、説得力がある。',
          'コビーたちの「正義」の描写と合致する。'
        ],
        unsolvedContradictions: [
          '矛盾①【なぜゾオン系に意志が宿るのか？】：単なる人の「願い」の具現化なら、なぜゾオン系の実だけが自らの意志で800年間も政府の手から逃げ続けるのか？',
          '矛盾②【空島の4つの神との不整合】：空島で祈られた神々（太陽・雨・森・大地）に「海」がいない理由が説明できない。',
          '矛盾③【海軍の異常な実の独占】：なぜ世界政府は悪魔の実の回収に異常な執念を燃やし、大将に最高級ロギアを配備しているのか？'
        ],
        overallRating: 'ベガパンクの美しい哲学に目を奪われ、世界政府による神性収奪というダークな裏面が見えていない。'
      },
      ourTheory: {
        archetypeTitle: '【本考察】「陸の4つの神」からの神性剥奪・人造ツール化 ＆ 海軍＝実の巨大集荷網',
        unifyingConcepts: [
          '悪魔の実の正体：元々存在した「陸の4つの神（太陽・雨・森・大地）」から権能を無理やり削ぎ落とし、月の科学技術で果実に閉じ込めた人造兵器。',
          '海軍の真の設立目的：世界中に散らばり自らの意志で逃走・転生を繰り返す「神の実（悪魔の実）」を捜索・回収・上納するための世界規模の集荷網。'
        ],
        detailedResolution: [
          'なぜ実が逃げるのか？：元々が意志を持った「神々」から剥ぎ取った力だから。五老星の「まるで実が逃げていくようだ」という言葉の物理的真相。',
          '「悪魔の実」という蔑称の欺瞞：元々は神の力だったものを、政府が独占・管理し、民衆に「悪魔の力」と刷り込むことで神への信仰を奪うプロパガンダ。',
          'フーズ・フーの重罰の理由：護送中のゴムゴムの実（ニカ）を奪われただけで投獄されたのは、治安維持の失敗ではなく「神の封印の失敗」だったから。'
        ],
        decisiveEvidences: [
          '空島の4神がすべて「陸と環境」に属し、海の神が一切存在しない事実。',
          '海軍本部がマリージョア（レッドライン）の真下に配置されている兵站構造。'
        ],
        whyItFitsFlawlessly: 'ベガパンクの「願い説」の裏にある歴史の暗黒面を暴き、海軍組織の裏の存在意義まで一網打尽に解明。',
        overallRating: '◎ 完全整合：神話の起源から軍事組織の配置理由まで完璧に接続'
      }
    },
    {
      id: 'imu-motive',
      topicNumber: '07',
      topicTitle: 'イム様の動機と「不老」の真相',
      coreDivergence: '「単なる権力欲の独裁者」なのか、それとも「神のスケールへの劣等感とニカへの恐怖」なのか？',
      mainstream: {
        archetypeTitle: '【主流説】絶対の独裁者 / ネロナ・イム聖のオペオペ不老手術説',
        subTheories: [
          '説A：800年前の最初の20人の一人「ネロナ・イム聖」。古代兵器を使って世界を支配した。',
          '説B：オペオペの実の不老手術を受け、永遠の命で天竜人の頂点に君臨し続ける独裁者。',
          '説C：虚の玉座に座り、歴史から都合の悪い存在を「消す（ルルシアなど）」権力者。'
        ],
        coreArguments: [
          'イワンコフが語った「最初の20人のネロナ・イム聖」の記録と一致。',
          'ドフラミンゴが言及したマリージョアの国宝とオペオペの実の関係と合致。'
        ],
        unsolvedContradictions: [
          '矛盾①【なぜ巨大麦わら帽子を凍結保存しているのか？】：単なる独裁者なら、なぜ地下の冷凍室に「巨大な麦わら帽子」を保管し、それを一人で見つめるのか？',
          '矛盾②【なぜ人類巨大化実験に執着するのか？】：世界政府が何百年も子供の巨大化実験を続け、セラフィムを巨大に作った動機が説明できない。',
          '矛盾③【なぜ不老でなければならなかったのか？】：次の世代に権力を継承せず、自らが800年も居座り続ける根本的な恐怖の理由が不明。'
        ],
        overallRating: '事実（ネロナ家、不老手術）をなぞっているだけで、イム様を突き動かす根深い執念の心理的根源が空欄のまま。'
      },
      ourTheory: {
        archetypeTitle: '【本考察】巨大な神々への肉体コンプレックス ＆ ニカ再臨への絶対の恐怖',
        unifyingConcepts: [
          '肉体コンプレックス：太古の巨大な神々の足元で虫ケラ扱いされていた小さな人間。その怨念から悪魔となり大地を水没させたが、自分の肉体は小さな人間サイズのままだった。',
          '不老を選んだ理由：自分が死ねば大地と神が復活してしまう。神の生まれ変わり（覚醒者ニカ）がいつか現れる恐怖から、自ら不老となって永久に監視し叩き潰すためだけに居座り続けている。'
        ],
        detailedResolution: [
          '巨大麦わら帽子の真相：かつての大地の神（ジョイボーイ）のスケールの象徴であり、イム様を縛り続けるトラウマと恐怖の対象。',
          'セラフィムの巨大化の真相：神の肉体（ルナリア族）＋悪魔の実＋巨大化により、天竜人のためだけに動く「人工の巨大神」を作ろうとした800年の執念の結実。',
          'ニカのギガント（巨神）という皮肉：イム様が何百年かけても手に入れられなかった神のスケールを、ルフィは「アヒャヒャ！」と笑いながらただのゴムの伸縮（ギャグ）であっさり体現して笑い飛ばす。'
        ],
        decisiveEvidences: [
          'パンクハザードから続く数百年の「人類巨大化実験」の歴史。',
          'マリージョア地下冷凍室の巨大麦わら帽子の描写。',
          'イム様がルフィの写真（ニカ）を切り刻んでいた感情的な焦燥感。'
        ],
        whyItFitsFlawlessly: 'イム様の行動原理、世界政府の科学実験の歴史、そして最終決戦の構図まで、心理・科学・神話が完璧に一致。',
        overallRating: '◎ 完全整合：悪魔の心理的弱点と、ニカによる救済の必然性を完全解明'
      }
    }
  ];

  const currentTopic = topics.find(t => t.id === selectedTopicId) || topics[0];

  return (
    <section id="theory-comparison" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone-800">
      {/* Lead Header */}
      <div className="max-w-4xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">
          <Scale className="w-4 h-4 text-cyan-400" />
          <span>RIGOROUS THEORETICAL CONTRAST · 有力定説との徹底対照マトリクス</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif-jp font-bold text-stone-100 tracking-tight leading-tight mb-4">
          ネット上の有力説 vs 本考察：<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-rose-400">
            7大論点で浮き彫りになる「未解決の矛盾」と「完全整合」
          </span>
        </h2>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
          現在ネット上で広く支持されている代表的な有力説（レッドライン破壊説・Dawn説・担当編集者の演出説など）が、なぜ一部の描写と致命的に食い違ってしまうのか？
          7つの核心的論点において、主流説の抱える矛盾と、本考察（火と緋の神話）による完全解明を詳細に対比検証します。
        </p>
      </div>

      {/* View Switcher: Side-by-side Deep Dive vs Summary Table */}
      <div className="flex items-center gap-2 mb-8 border-b border-stone-800 pb-4">
        <button
          onClick={() => setActiveTab('side_by_side')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'side_by_side'
              ? 'bg-amber-950/40 border border-amber-500/80 text-amber-300 shadow-md'
              : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-stone-200'
          }`}
        >
          【詳細対照モード】論点別ディープダイブ
        </button>
        <button
          onClick={() => setActiveTab('summary_table')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'summary_table'
              ? 'bg-amber-950/40 border border-amber-500/80 text-amber-300 shadow-md'
              : 'bg-stone-900/60 border border-stone-800 text-stone-400 hover:text-stone-200'
          }`}
        >
          【一目瞭然】7大論点比較サマリー表
        </button>
      </div>

      {/* MODE 1: SIDE-BY-SIDE DEEP DIVE */}
      {activeTab === 'side_by_side' && (
        <div>
          {/* Topic Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            {topics.map((t) => {
              const isSelected = selectedTopicId === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTopicId(t.id)}
                  className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 border-amber-500/90 shadow-lg ring-1 ring-amber-400/40'
                      : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <span className="text-[10px] font-mono text-stone-400 uppercase font-bold">TOPIC {t.topicNumber}</span>
                  <h4 className="text-xs font-bold font-serif-jp text-stone-100 truncate mt-1">
                    {t.topicTitle.split('（')[0]}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Central Point of Divergence Banner */}
          <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-amber-950 text-amber-400 border border-amber-800/60 text-xs font-mono font-bold">
                核心の対立軸
              </span>
              <p className="text-xs sm:text-sm text-stone-200 font-serif-jp font-semibold">
                {currentTopic.coreDivergence}
              </p>
            </div>
            <span className="text-xs font-mono text-stone-400">
              TOPIC {currentTopic.topicNumber} / 07
            </span>
          </div>

          {/* Side-by-side Dual Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Card: Mainstream Theory with Contradictions */}
            <div className="p-6 sm:p-8 rounded-3xl bg-stone-950 border border-stone-800 flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-850 mb-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-stone-400" />
                    <span className="text-xs font-mono uppercase text-stone-400 font-bold">ネット上の有力説・定説</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-900 text-rose-400 border border-rose-900/60 font-semibold">
                    未解決の矛盾あり
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-serif-jp text-stone-200 mb-4">
                  {currentTopic.mainstream.archetypeTitle}
                </h3>

                {/* Sub Theories */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono text-stone-400 block font-semibold">【代表的な派生説の概要】</span>
                  {currentTopic.mainstream.subTheories.map((sub, i) => (
                    <div key={i} className="p-3 bg-stone-900/60 rounded-xl border border-stone-850 text-xs text-stone-300 leading-relaxed font-sans-jp">
                      {sub}
                    </div>
                  ))}
                </div>

                {/* Why People Believed It */}
                <div className="p-3.5 bg-stone-900/40 rounded-xl border border-stone-850 mb-6">
                  <span className="text-xs font-mono text-emerald-400 font-bold block mb-1.5 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>支持される論拠（表向きの納得感）</span>
                  </span>
                  <ul className="space-y-1 text-xs text-stone-300 list-disc list-inside leading-relaxed font-sans-jp">
                    {currentTopic.mainstream.coreArguments.map((arg, i) => (
                      <li key={i}>{arg}</li>
                    ))}
                  </ul>
                </div>

                {/* The Unsolved Contradictions (The Fatal Flaws) */}
                <div className="p-4 bg-rose-950/20 rounded-2xl border border-rose-900/50 space-y-2.5">
                  <span className="text-xs font-mono text-rose-400 font-bold block flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span>主流説が抱える【致命的な作中の矛盾・盲点】</span>
                  </span>
                  <div className="space-y-2 text-xs text-stone-300 font-sans-jp leading-relaxed">
                    {currentTopic.mainstream.unsolvedContradictions.map((contra, i) => (
                      <div key={i} className="pl-2 border-l-2 border-rose-800/60">
                        {contra}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Summary Rating */}
              <div className="pt-4 border-t border-stone-850 text-xs text-stone-400 font-serif-jp italic leading-relaxed">
                {currentTopic.mainstream.overallRating}
              </div>
            </div>

            {/* Right Card: Our Theory with Unified Resolution */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-amber-950/20 via-stone-950 to-stone-950 border border-amber-500/70 flex flex-col justify-between space-y-6 shadow-2xl">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-850 mb-4">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-mono uppercase text-amber-400 font-bold">本考察（火と緋の神話 / 完全解体録）</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700 font-bold">
                    100% 整合
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-serif-jp text-amber-200 mb-4">
                  {currentTopic.ourTheory.archetypeTitle}
                </h3>

                {/* Core Unifying Concepts */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono text-amber-300 block font-semibold">【本考察の統一概念】</span>
                  {currentTopic.ourTheory.unifyingConcepts.map((concept, i) => (
                    <div key={i} className="p-3 bg-stone-900/80 rounded-xl border border-amber-950/70 text-xs text-amber-100/90 leading-relaxed font-sans-jp">
                      {concept}
                    </div>
                  ))}
                </div>

                {/* Detailed Resolution (How the Contradictions Vanish) */}
                <div className="p-4 bg-stone-900/60 rounded-2xl border border-stone-800 space-y-2.5 mb-6">
                  <span className="text-xs font-mono text-cyan-300 font-bold block flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>矛盾を解消する【革新的な論理構造】</span>
                  </span>
                  <div className="space-y-2 text-xs text-stone-200 font-sans-jp leading-relaxed">
                    {currentTopic.ourTheory.detailedResolution.map((res, i) => (
                      <div key={i} className="pl-2 border-l-2 border-cyan-500/60">
                        {res}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decisive Evidence from the Manga */}
                <div className="p-3.5 bg-amber-950/30 rounded-xl border border-amber-900/50">
                  <span className="text-xs font-mono text-amber-300 font-bold block mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>作中の動かぬ証拠・決定打</span>
                  </span>
                  <ul className="space-y-1 text-xs text-stone-300 list-disc list-inside leading-relaxed font-sans-jp">
                    {currentTopic.ourTheory.decisiveEvidences.map((ev, i) => (
                      <li key={i}>{ev}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Summary Rating */}
              <div className="pt-4 border-t border-stone-850 text-xs text-amber-300 font-serif-jp font-semibold leading-relaxed">
                {currentTopic.ourTheory.overallRating}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: SUMMARY TABLE ACROSS ALL 7 TOPICS */}
      {activeTab === 'summary_table' && (
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-stone-800 bg-stone-900/80 text-stone-300 font-mono text-xs">
                <th className="p-4 w-1/5">論点</th>
                <th className="p-4 w-2/5 text-stone-400">主流の有力説（ネット定説）</th>
                <th className="p-4 w-2/5 text-amber-300">本考察（火と緋の神話 / 完全解体録）</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-850 font-sans-jp">
              {topics.map((t) => (
                <tr key={t.id} className="hover:bg-stone-900/40 transition-colors">
                  <td className="p-4 align-top font-serif-jp font-bold text-stone-100">
                    <span className="text-[10px] font-mono text-amber-400 block">TOPIC {t.topicNumber}</span>
                    {t.topicTitle}
                  </td>
                  <td className="p-4 align-top text-stone-300 space-y-2">
                    <strong className="text-stone-200 block text-xs">{t.mainstream.archetypeTitle}</strong>
                    <p className="text-xs text-stone-400 leading-relaxed">{t.mainstream.subTheories[0]}</p>
                    <div className="text-[11px] text-rose-400 bg-rose-950/30 p-2 rounded-lg border border-rose-900/40">
                      <strong>盲点：</strong>{t.mainstream.unsolvedContradictions[0]}
                    </div>
                  </td>
                  <td className="p-4 align-top text-stone-200 space-y-2 bg-amber-950/10">
                    <strong className="text-amber-300 block text-xs">{t.ourTheory.archetypeTitle}</strong>
                    <p className="text-xs text-stone-200 leading-relaxed">{t.ourTheory.unifyingConcepts[0]}</p>
                    <div className="text-[11px] text-cyan-300 bg-cyan-950/30 p-2 rounded-lg border border-cyan-800/40">
                      <strong>解決：</strong>{t.ourTheory.detailedResolution[0]}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Closing Epilogue on Theoretical Methodology */}
      <div className="p-6 sm:p-8 rounded-2xl bg-stone-950 border border-stone-800 text-xs sm:text-sm text-stone-300 font-serif-jp leading-relaxed space-y-3">
        <h4 className="text-amber-300 font-bold text-base mb-1">
          【対比総括：なぜ本考察だけがすべての矛盾を解消できるのか】
        </h4>
        <p>
          ネット上の主流説の多くは、<strong className="text-stone-100">「作中の一つのセリフや歴史的モチーフ」に注目した部分最適</strong>の仮説です。
          そのため、「政治的な計画」としては成り立っても、ロジャーの涙の大爆笑や、ルフィのあきれるような夢の果て、ギア5のギャグ戦闘という、尾田先生が最も大切にしてきた「少年の笑顔とバカバカしさ」を説明できずに矛盾を残してしまいました。
        </p>
        <p>
          本考察は、<strong className="text-amber-200">「尾田栄一郎先生が25年間描いてきた作劇の美学（シリアスな支配をギャグで救済する構造）」と「エニエス・ロビーやルルシアで実演された物理法則」</strong>を土台に組み立てられた全体最適のマスタープロットです。<br />
          第1話の酒場の小競り合いから、最新話の五老星の不死の謎、そして未来のラフテルでの「お風呂の栓抜き」と「世界最大の大宴会」に至るまで、すべての矛盾が解けて一本の美しい神話へと昇華されます。
        </p>
      </div>
    </section>
  );
};

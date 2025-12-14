import './App.css'

const nutrientBasics = [
  {
    label: 'PROTEIN',
    title: 'たんぱく質 6.4g',
    body: '必須アミノ酸スコア100。1日一個でハリと代謝を下支え。',
  },
  {
    label: 'VITAMIN D',
    title: 'ビタミンD 2.0µg',
    body: 'カルシウム吸収と免疫の要。巡りを美しく整える礎に。',
  },
  {
    label: 'BIOTIN',
    title: 'ビオチン 25µg',
    body: '肌・髪・爪のコンディションを左右するビューティー要素。',
  },
  {
    label: 'OMEGA & LECITHIN',
    title: 'オメガ3・レシチン',
    body: '良質な脂質でツヤと冴えをプラス。脳とホルモンにも寄り添う。',
  },
  {
    label: 'IRON & B12',
    title: '鉄・ビタミンB12',
    body: '酸素を運び、エネルギーをつくる。くすみのない毎日に。',
  },
]

const beautyFlow = [
  {
    title: '自然 × 科学',
    text: '天然水、オーガニック飼料、放牧環境でストレスフリーに育てた卵に、美容視点の栄養設計をプラス。',
  },
  {
    title: '「美の完全栄養食」へ',
    text: '基本の栄養バランスを崩さず、ビタミンD・ビオチン・レシチンなど美容寄りの栄養素にこだわり強化。',
  },
  {
    title: '限定とトレーサビリティ',
    text: '年間100個限定、産地と鶏の系統番号を明記。生産過程は開示し、安心を可視化。',
  },
]

const luxuryWords = [
  '木箱＋和紙スリーブ＋箔押しロゴ',
  'ギフトは桐箱＆リボンシーリング',
  '天然水・オーガニック飼料・放牧',
  '年間100個限定／系統番号つき',
]

const legalNotes = [
  '特定商取引法表記：会社住所・代表者・販売責任者を明記',
  'プライバシーポリシー：個人情報保護と利用目的の透明化',
  '商標登録：ブランド名とロゴの出願・登録済み',
  '信用：生産地公開とトレーサビリティシステム導入',
]

const copyLines = [
  '一日一個のラグジュアリー',
  '卵で、美しさに革命を',
  '栄養を超えて、美をまとう',
  '自然と科学が育んだ、美の完全栄養',
  '毎日の習慣が、未来の美をつくる',
]

const collectionCards = [
  {
    title: 'The Radiant Routine',
    subtitle: 'サブスク | 内側から綺麗になりたい方に',
    image: '/detail1.jpg',
    bullets: [
      '毎月1日発送でペースを固定',
      '1日一個×30日＝9,980円（税込）',
      '今なら送料無料＋保証用たまご5個入り',
      '美容卵：ビタミンD・ビオチン・レシチンを重視',
    ],
  },
  {
    title: 'The Heritage Gift',
    subtitle: 'ギフト | 大切な人にずっと健康で綺麗にいてほしい方に',
    image: '/gift.jpg',
    bullets: [
      '桐箱＋和紙スリーブ＋箔押しロゴのギフト仕様',
      '産地と系統番号を明記したカード付き',
      '1か月前予約必須／年間100個限定',
      '保証用たまご5個入りで安心の贈り物',
    ],
  },
  {
    title: 'The Atelier Limited',
    subtitle: '限定 | 年間100個限定のアトリエ仕立て',
    image: '/detail2.jpg',
    bullets: [
      '天然水・オーガニック飼料・放牧型の生産工程',
      '美容設計の栄養バランスをそのままに',
      '系統番号つきでトレーサビリティを明確化',
      '「栄養を超えて、美をまとう」ための一本筋',
    ],
  },
]

function App() {
  return (
    <div className="page">
      <nav className="nav">
        <div className="brand">
          <span className="brand-mark">L’Œuf Beauté</span>
          <span className="brand-sub">美容卵 / Beauty Egg</span>
        </div>
        <div className="nav-links">
          <a href="#nutrition">栄養</a>
          <a href="#subscription">サブスク</a>
          <a href="#story">ブランド</a>
          <a href="#legal">信頼</a>
        </div>
        <a className="nav-cta" href="#subscription">
          今なら送料無料
        </a>
      </nav>

      <header
        id="top"
        className="hero"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(6,4,2,0.75), rgba(12,7,3,0.35)), url(/hero.jpg)',
        }}
      >
        <div className="hero-content">
          <div className="tag-row">
            <span className="tag">美の完全栄養食</span>
            <span className="tag ghost">年間100個限定</span>
            <span className="tag ghost">毎月1日発送</span>
          </div>
          <h1>卵で、美しさに革命を。</h1>
          <p className="lede">
            栄養を超えて、美をまとう。「一日一個のラグジュアリー」を叶える美容卵
            <strong> L’Œuf Beauté</strong>。内側から輝くための習慣を、贅沢なデザインとともに。
          </p>
          <div className="cta-row">
            <div className="cta-block">
              <span className="label">内側から綺麗になりたい方に</span>
              <a className="btn primary" href="#subscription">
                サブスクを申し込む
              </a>
              <p className="cta-note">1日1つ×30日＝9,980円（税込）今なら送料無料</p>
            </div>
            <div className="cta-block ghost">
              <span className="label">大切な人にずっと健康で綺麗にいてほしい方に</span>
              <a className="btn outline" href="#gift">
                ギフトを予約する
              </a>
              <p className="cta-note">ギフトは1か月前予約必須・保証用たまご5個入り</p>
            </div>
          </div>
          <div className="hero-badges">
            <span className="badge">送料無料（今なら）</span>
            <span className="badge">保証用たまご5個入り</span>
            <span className="badge">美容卵 設計</span>
          </div>
        </div>
      </header>

      <section className="section" id="nutrition">
        <div className="section-header">
          <p className="eyebrow">BEAUTY NUTRITION</p>
          <h2>卵は「美の完全栄養食」。だから美容卵へ。</h2>
          <p className="section-lede">
            卵は必須アミノ酸・ビタミン・ミネラルをバランスよく含む「完全栄養食」。その力に美容視点を加え、
            <strong>さらに栄養にこだわった卵</strong>としてアップデートしました。
          </p>
        </div>
        <div className="pill-row">
          {copyLines.map((line) => (
            <span key={line} className="pill">
              {line}
            </span>
          ))}
        </div>
        <div className="grid three">
          {nutrientBasics.map((item) => (
            <div key={item.label} className="card">
              <span className="micro">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section warm">
        <div className="split">
          <div className="text-block">
            <p className="eyebrow">卵の基本的な栄養成分</p>
            <h2>健やかさと美しさを「1日一個」で。</h2>
            <p className="section-lede">
              たまごLifeの資料をそのままご覧いただけるPDFを設置しました。基本の栄養をイラスト感覚で理解したあと、
              「美容卵」へと自然につながる導線にしています。
            </p>
            <ul className="list">
              <li>キーワードは大文字で強調し、視覚的にわかりやすく配置</li>
              <li>「食材」ではなく「日常にわくわくを与える存在」として表現</li>
              <li>栄養比較表は維持し、第三者認証のページはカット</li>
            </ul>
          </div>
          <div className="pdf-block">
            <object
              data="/nutrition.pdf#toolbar=0&navpanes=0"
              type="application/pdf"
              className="pdf-frame"
            >
              <div className="pdf-fallback">
                <p>PDFを表示できない場合は、こちらからダウンロードしてください。</p>
                <a className="btn outline" href="/nutrition.pdf" download>
                  PDFをダウンロード
                </a>
              </div>
            </object>
          </div>
        </div>
      </section>

      <section className="section" id="beauty-egg">
        <div className="section-header">
          <p className="eyebrow">FROM NUTRITION TO BEAUTY</p>
          <h2>「美容卵」への進化。自然と科学で磨き上げる。</h2>
        </div>
        <div className="grid three">
          {beautyFlow.map((item) => (
            <div key={item.title} className="card soft">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="luxury-row">
          {luxuryWords.map((word) => (
            <span key={word} className="luxury-chip">
              {word}
            </span>
          ))}
        </div>
      </section>

      <section className="section warm" id="collection">
        <div className="section-header">
          <p className="eyebrow">THE COLLECTION</p>
          <h2>商品ラインナップは「コレクション」と呼び、憧れをデザイン。</h2>
          <p className="section-lede">
            サブスクもギフトも、単なる商品ではなく「美と健康の習慣」を贈るコレクションとして提示。
            誰に向けた提案かを冒頭で明記し、選びやすさと記憶に残るネーミングを両立させました。
          </p>
        </div>
        <div className="grid three collection-grid">
          {collectionCards.map((item) => (
            <div
              key={item.title}
              className="collection-card"
              style={{
                backgroundImage: `linear-gradient(160deg, rgba(12,8,4,0.78), rgba(12,8,4,0.2)), url(${item.image})`,
              }}
            >
              <div className="collection-tag">{item.subtitle}</div>
              <h3>{item.title}</h3>
              <ul className="list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section highlight" id="subscription">
        <div className="section-header">
          <p className="eyebrow">SUBSCRIPTION & GIFT</p>
          <h2>サブスク導線を最優先。「毎月1日発送」「送料無料」</h2>
          <p className="section-lede">
            価格例：1日1つ×30日＝9,980円（税込）。今なら送料無料、保証用たまご5個入り。年間100個限定の希少性を明記し、
            サブスクの申し込みを誘導します。
          </p>
        </div>
        <div className="split plans">
          <div className="plan-card">
            <div className="plan-label">内側から綺麗になりたい方に</div>
            <h3>サブスクリプション</h3>
            <p className="price">月額9,980円（税込）</p>
            <ul className="list">
              <li>毎月1日発送でリズムを固定</li>
              <li>今なら送料無料</li>
              <li>保証用たまご5個入りで安心</li>
              <li>年間100個限定／系統番号つき</li>
            </ul>
            <a className="btn primary wide" href="#top">
              サブスクを申し込む
            </a>
          </div>
          <div className="plan-card ghost" id="gift">
            <div className="plan-label">大切な人にずっと健康で綺麗にいてほしい方に</div>
            <h3>ギフト予約</h3>
            <p className="price">1か月前予約必須</p>
            <ul className="list">
              <li>木箱＋和紙スリーブ＋箔押しロゴ</li>
              <li>桐箱入りギフト仕様・系統番号カード</li>
              <li>保証用たまご5個入り</li>
              <li>ビタミンDを摂りたい方に「美容卵」が最適</li>
            </ul>
            <a className="btn outline wide" href="#top">
              ギフトを予約する
            </a>
          </div>
        </div>
        <div className="note-bar">
          <span>「忙しい日常に、ひとさじの贅沢を」</span>
          <span>毎月の習慣が、未来の美をつくる</span>
          <span>栄養を超えて、美をまとう美容卵</span>
        </div>
      </section>

      <section className="section warm" id="story">
        <div className="section-header">
          <p className="eyebrow">BRAND STORY</p>
          <h2>創業背景と社長メッセージ</h2>
        </div>
        <div className="split story">
          <div className="text-block">
            <h3>私たちの物語</h3>
            <p>
              私たちの物語は、一羽一羽を大切に育てる小さな養鶏場から始まりました。「卵は完全栄養食」と呼ばれるほど豊かな栄養を持ち、その力をもっと多くの人に届けたい──。
              その想いでスイーツ店を開き、卵の可能性をスイーツを通じて表現してきました。そして今、卵を“健康と美の象徴”へと進化させるために、美容卵ブランドを立ち上げます。
            </p>
            <p>
              私たちが届けたいのは、ただの食材ではなく「美と健康を叶えるライフスタイル」。毎日の小さな選択が、一生の美しさをつくると信じています。
            </p>
          </div>
          <div className="text-block">
            <h3>社長メッセージ</h3>
            <p>
              「私はアナウンサーとして多忙な日々を送りながら、毎朝卵を欠かさず食べてきました。完全栄養食と呼ばれる卵に、美容のために数々のサプリや栄養ドリンクを試してきた中で、さらに美容と健康の要素を加えられたら──と強く思うようになったのです。
              そんな想いから、このブランドは生まれました。“忙しい人の毎日に、安心と美しさを届けたい“それが私たちの使命です。」
            </p>
            <div className="ideals">
              <div>
                <p className="eyebrow">理念</p>
                <ul className="list">
                  <li>「健康と美を食卓から」</li>
                  <li>「未来の世代に、安心できる栄養と習慣を残す」</li>
                  <li>「一日の小さな選択が、一生の美しさをつくる」</li>
                </ul>
              </div>
              <div>
                <p className="eyebrow">短いバージョン</p>
                <ul className="list">
                  <li>「健康と美を食卓から」</li>
                  <li>「未来の世代に安心を残す」</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="naming">
        <div className="section-header">
          <p className="eyebrow">NAMING & COPY</p>
          <h2>憧れと記憶に残る強さを。</h2>
        </div>
        <div className="naming-block">
          <div className="naming-main">
            <p className="eyebrow">ブランド名候補（高級ライン）</p>
            <h3>L’Œuf Beauté（ルフ・ボーテ）</h3>
            <p>意味：フランス語で「美の卵」。高級百貨店・ホテル展開に響く音色。</p>
          </div>
          <div className="copy-grid">
            {copyLines.map((line) => (
              <div key={line} className="copy-card">
                <span className="micro">COPY</span>
                <p>{line}</p>
              </div>
            ))}
          </div>
          <p className="note">
            ブランドストーリーで「共感」を作り、ネーミング＆コピーで「憧れと記憶に残る強さ」を持たせます。
          </p>
        </div>
      </section>

      <section className="section warm" id="legal">
        <div className="section-header">
          <p className="eyebrow">TRUST & LAW</p>
          <h2>ブランドを支える法務・信用情報</h2>
        </div>
        <div className="grid two">
          <div className="card soft">
            <h3>言葉で伝える高級感</h3>
            <ul className="list">
              <li>パッケージ：木箱＋和紙スリーブ＋箔押しロゴ。ギフト用は桐箱。</li>
              <li>生産工程：天然水・オーガニック飼料・放牧型でストレスフリー飼育。</li>
              <li>限定性：「年間100個限定」「産地・鶏の系統番号付き」で希少性を明記。</li>
            </ul>
          </div>
          <div className="card soft">
            <h3>法務・信用</h3>
            <ul className="list">
              {legalNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section accent">
        <div className="cta-banner">
          <div>
            <p className="eyebrow">SUBSCRIPTION CTA</p>
            <h3>今なら送料無料。毎月1日発送、保証用たまご5個入り。</h3>
            <p className="cta-note">
              忙しい毎日に寄り添う美容卵。1日1個で、未来の美しさに投資する新習慣を。
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn dark" href="#subscription">
              サブスクを申し込む
            </a>
            <a className="btn light" href="#gift">
              ギフトを予約する
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

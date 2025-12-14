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
    text: '天然水、20種類以上のこだわり飼料、放牧環境でストレスフリーに育てた卵に、美容視点の栄養設計をプラス。',
  },
  {
    title: '「美の完全栄養食」へ',
    text: '基本の栄養バランスを崩さず、ビタミンD・ビオチン・レシチンなど美容寄りの栄養素にこだわり強化。',
  },
  {
    title: 'トレーサビリティ',
    text: '産地と鶏の系統番号を明記。生産過程は開示し、安心を可視化。',
  },
]

const luxuryWords = [
  '20種類以上のこだわり飼料',
  '天然水・開放式鶏舎・放牧',
  '抗生剤・合成着色剤不使用',
  '産地・系統番号つき',
]

const copyLines = [
  '一日一個のラグジュアリー',
  '卵で、美しさに革命を',
  '栄養を超えて、美をまとう',
  '自然と科学が育んだ、美の完全栄養',
  '毎日の習慣が、未来の美をつくる',
]

function App() {
  return (
    <div className="page">
      <nav className="nav">
        <div className="brand">
          <span className="brand-mark">L'Œuf Beauté</span>
          <span className="brand-sub">美容卵 / Beauty Egg</span>
        </div>
        <div className="nav-links">
          <a href="#nutrition">栄養</a>
          <a href="#commitment">こだわり</a>
          <a href="#subscription">ご購入</a>
          <a href="#story">ブランド</a>
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
            'linear-gradient(135deg, rgba(255, 253, 248, 0.92), rgba(255, 249, 240, 0.88)), url(/hero.jpg)',
        }}
      >
        <div className="hero-content">
          <div className="tag-row">
            <span className="tag">美の完全栄養食</span>
            <span className="tag ghost">毎月発送</span>
            <span className="tag ghost">送料込み</span>
          </div>
          <h1>卵で、美しさに革命を。</h1>
          <p className="lede">
            栄養を超えて、美をまとう。「一日一個のラグジュアリー」を叶える美容卵
            <strong> L'Œuf Beauté</strong>。
            内側から輝くための習慣を、こだわり抜いた品質とともに。
          </p>
          <div className="cta-row">
            <div className="cta-block">
              <span className="label">内側から綺麗になりたい方に</span>
              <a className="btn primary" href="#subscription">
                サブスクを申し込む
              </a>
              <p className="cta-note">美容卵30個 5,980円（税別・送料込）</p>
            </div>
          </div>
          <div className="hero-badges">
            <span className="badge">送料無料（今なら）</span>
            <span className="badge">保証用卵5個つき</span>
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
        <div className="nutrition-container">
          <div className="text-block">
            <p className="eyebrow">卵の基本的な栄養成分</p>
            <h2>健やかさと美しさを「1日一個」で。</h2>
            <p className="section-lede">
              たまごの栄養価をイラストでわかりやすく解説。
              基本の栄養を理解したあと、「美容卵」へと自然につながります。
            </p>
            <ul className="list" style={{ listStyle: 'none', padding: 0 }}>
              <li>・ キーワードは視覚的にわかりやすく配置</li>
              <li>・ 「食材」ではなく「日常にわくわくを与える存在」として表現</li>
              <li>・ 栄養比較表で一目でわかる</li>
            </ul>
          </div>
          <div className="image-block">
            <img
              src="/nutrition.png"
              alt="たまごの栄養成分"
              className="nutrition-image"
            />
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

      <section className="section warm" id="commitment">
        <div className="section-header">
          <p className="eyebrow">OUR COMMITMENT</p>
          <h2>私たちのこだわり</h2>
          <p className="section-lede">
            たまごは、鶏が食べたものからできています。
            だからこそ、鶏が食べる飼料や水の質にも徹底的にこだわっています。
          </p>
        </div>
        <div className="commitment-grid">
          <div className="commitment-card">
            <h4>鶏の飼育環境</h4>
            <p>
              ルフボーテの養鶏場は、熊本市の中心部から車で1時間ほどの小高い丘の上に位置しています。
              日本の養鶏は鶏舎に窓を設けないウインドーレス式が主流ですが、私たちは窓のある開放式を採用。
              太陽の光が注ぎ、自然な風が通る鶏舎で、鶏たちがゆったりできる飼育スペースを確保。
              窓があることで外気の影響を受けやすいものの、それは四季を感じながら生きられる環境だということです。
              夏には地下水を噴霧して室温を下げるなど、鶏にとって快適な環境を保っています。
            </p>
          </div>
          <div className="commitment-card">
            <h4>20種類以上のこだわり飼料</h4>
            <p>
              基本的な飼料は、とうもろこしや大豆かす、にんにく、とうがらしなど、
              20種類以上の材料をオリジナルでブレンド。
              季節やその日の気温、鶏の日齢といったさまざまな条件に応じて、配合を微調整して与えています。
              抗生剤や合成卵黄着色剤といった添加物は使わず、材料の残留農薬チェックも怠りません。
            </p>
          </div>
          <div className="commitment-card">
            <h4>こだわりの水</h4>
            <p>
              飲み水には地下90mから汲み上げ、活性化させた「BM活性水」を使用しています。
            </p>
          </div>
          <div className="commitment-card">
            <h4>地産地消への取り組み</h4>
            <p>
              お米は地域の農家さんと連携して、20haの飼料米を地産地消。
              さらにとうもろこしは、2022年から自社栽培に挑戦しています。
            </p>
          </div>
        </div>
      </section>

      <section className="section highlight" id="subscription">
        <div className="section-header">
          <p className="eyebrow">SUBSCRIPTION</p>
          <h2>美容卵のサブスクリプション</h2>
          <p className="section-lede">
            毎月届く、美と健康のための習慣。
            忙しい毎日に寄り添う美容卵で、未来の美しさに投資を。
          </p>
        </div>
        <div className="split plans">
          <div className="plan-card">
            <div className="plan-label">内側から綺麗になりたい方に</div>
            <h3>美容卵 サブスクリプション</h3>
            <p className="price">5,980円<span className="price-tax">（税別・送料込）</span></p>
            <p className="price-incl-tax">税込 6,458円</p>
            <p className="price-note">保証用卵5個つき</p>
            <ul className="list">
              <li>美容卵30個を毎月お届け</li>
              <li>送料込みでお届け</li>
              <li>保証用卵5個入りで安心</li>
              <li>ビタミンD・ビオチン・レシチンを重視</li>
            </ul>
            <a className="btn primary wide" href="#order">
              サブスクを申し込む
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
          <h2>私たちの物語</h2>
        </div>
        <div className="split story">
          <div className="text-block">
            <h3>ブランドストーリー</h3>
            <p>
              私たちの物語は、一羽一羽を大切に育てる小さな養鶏場から始まりました。
              「卵は完全栄養食」と呼ばれるほど豊かな栄養を持ち、
              その力をもっと多くの人に届けたい。
            </p>
            <p>
              その想いでスイーツ店を開き、卵の可能性をスイーツを通じて表現してきました。
              そして今、卵を"健康と美の象徴"へと進化させるために、
              美容卵ブランドを立ち上げます。
            </p>
            <p>
              私たちが届けたいのは、ただの食材ではなく
              「美と健康を叶えるライフスタイル」。
              毎日の小さな選択が、一生の美しさをつくると信じています。
            </p>
            <div className="ideals">
              <p className="eyebrow">私たちの理念</p>
              <ul className="ideals-list">
                <li>健康と美を食卓から</li>
                <li>一羽一羽の幸せと環境へのやさしさを大切にする</li>
                <li>未来の世代に安心を残す</li>
              </ul>
            </div>
          </div>
          <div className="ceo-message">
            <h3>社長メッセージ</h3>
            <p>
              私はアナウンサーとして多忙な日々を送りながら、毎朝卵を欠かさず食べてきました。
              この仕事は体調管理が何より求められる職業で、どれだけ忙しくても声や体調を崩すわけにはいきません。
              そんな中でも、ここまでほとんど風邪をひかず元気に走り続けてこられたのは、
              卵の力も大きいのかなと感じています。
            </p>
            <p>
              完全栄養食と呼ばれる卵に、さらに美容と健康の要素を加えられたら。
              その想いから、このブランドは生まれました。
            </p>
            <p>
              そのために、飼料、水、環境、すべてを見直し、
              一羽一羽の健康状態に徹底的に向き合い、
              どこまでも妥協しない卵づくりを続けています。
            </p>
            <p>
              忙しい毎日に、美しさを育てる一口を。
              あなたの未来のために、今日選ぶ一つの卵を。
            </p>
            <p>
              私たちは、卵の可能性を"美の領域"へ押し上げることに情熱を注ぎ続けます。
              忙しい人の毎日に、安心と美しさを届けたい。
              それが私たちの使命です。
            </p>
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
            <p className="eyebrow">ブランド名</p>
            <h3>L'Œuf Beauté（ルフ・ボーテ）</h3>
            <p>意味：フランス語で「美の卵」。高級百貨店・ホテル展開に響く音色。</p>
          </div>
          <div className="copy-grid">
            {copyLines.map((line) => (
              <div key={line} className="copy-card">
                <p>{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section accent" id="order">
        <div className="cta-banner">
          <div>
            <p className="eyebrow">ORDER NOW</p>
            <h3>今なら送料無料。保証用卵5個つき。</h3>
            <p className="cta-note">
              忙しい毎日に寄り添う美容卵。1日1個で、未来の美しさに投資する新習慣を。
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn primary" href="#subscription">
              サブスクを申し込む
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2024 L'Œuf Beauté. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import './App.css'

// コンテンツデータ
const subPlan = {
  price: '5,980',
  tax: '（税別・送料込）',
  total: '税込 6,458円',
  guarantee: '保証用卵5個つき',
}

const subscriptionUrl = 'https://square.link/u/gNVtukWt'
const giftPopupUrl = 'https://square.link/u/UYnDbRss'

import feedMixBg from './assets/feed_mix_bg.jpg'
import bmWaterBg from './assets/bm_water_bg.png'
import packageImage from './assets/package_image.jpg'
import ExitIntentPopup from './ExitIntentPopup'


// Mobile Lightbox Component
function MobileLightbox({ src, alt, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>×</button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

// Zoomable Image Component (Mobile Only)
function ZoomableImage({ src, alt, className, style }) {
  const [showLightbox, setShowLightbox] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className || ''} ${isMobile ? 'zoomable-image' : ''}`}
        style={style}
        onClick={() => isMobile && setShowLightbox(true)}
      />
      {showLightbox && (
        <MobileLightbox src={src} alt={alt} onClose={() => setShowLightbox(false)} />
      )}
    </>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className="page">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="brand">
          <span className="brand-mark">L'Œuf Beauté</span>
          <span className="brand-sub">美容卵 / BEAUTY EGG</span>
        </div>
        <div className="nav-links pc-only">
          <a href="#intro">美の方程式</a>
          <a href="#features">3つの贅沢</a>
          <a href="#story">物語</a>
          <a href="#recipes">レシピ</a>
          <a href={subscriptionUrl} className="nav-cta-btn">ご予約</a>
        </div>
      </nav>

      {/* Hero Section (FV) - Vertical Writing */}
      <header className="hero-section">
        <div className="hero-bg"></div>
        <div
          className="hero-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '100%',
            margin: 0,
          }}
        >
          <div className="hero-copy-vertical t-vertical">
            <h1>「新しい美容卵」で<br />忙しい朝を<br />美しさの仕込み時間へ</h1>
          </div>
          <div
            className="hero-sub-vertical hero-sub-center"
            style={{
              width: '100%',
              display: 'block',
              textAlign: 'center',
            }}
          >
            <div
              className="hero-sub-inner"
              data-hero-sub="center"
              style={{
                display: 'inline-block',
                textAlign: 'center',
              }}
            >
              <p className="hero-sub-line">「何を食べるか」は「どんな自分になりたいか」</p>
              <p className="hero-sub-line">あなたは食べたものでできている</p>
              <p className="hero-sub-line">栄養以上の価値を一日一個補うだけ</p>
              <p className="hero-sub-line">L'Œuf Beauté</p>
            </div>
          </div>
        </div>

        {/* Egg Accent Image */}
        <div className="hero-egg-layer">
          <img src="/hero_egg_right.jpg" alt="" />
        </div>

      </header>

      {/* Concept Intro (Centered) */}
      <section id="intro" className="section">
        <div className="intro-text-block">
          <span className="section-eyebrow">CONCEPT</span>
          <h2 className="section-title">美の完全栄養食</h2>
        </div>
        <div className="intro-text-block">
          <p className="intro-lead intro-copy-unified">
            「忙しいから美しさを諦める」<br className="sp-only" />を終わりに
          </p>
          <p className="intro-desc intro-copy-unified">
            化粧水やサプリメント<br className="sp-only" />を塗り重ねる前に<br />
            毎日の「食」そのもの<br className="sp-only" />を美容に変えられたら<br />
            <br />
            たくさんの栄養や<br className="sp-only" />自然の恵みを浴びて育った<br />
            20種類以上のアミノ酸をまとう卵<br />
            <br />
            L'Œuf Beauté （ルフ・ボーテ）<br />
            栄養を超える食べる美容習慣
          </p>
        </div>
        <div className="habit-cards-wrapper">
          <div className="habit-cards">
            <div className="habit-card">
              <p className="habit-card-title">01 髪や爪の悩みがある方へ</p>
              <p className="habit-card-desc">
                髪の主成分「シスチン」を22%<br className="sp-only" />
                多く含むから内側から<br className="sp-only" />
                美しさの土台をサポートできる
              </p>
            </div>
            <div className="habit-card">
              <p className="habit-card-title">02 忙しくても美しさを維持したい方へ</p>
              <p className="habit-card-desc">
                美容に欠かせない「セリン」などの<br className="sp-only" />
                アミノ酸が豊富だから食べるだけで<br className="sp-only" />
                効率的なインナーケアが叶う
              </p>
            </div>
            <div className="habit-card">
              <p className="habit-card-title">03 アンチエイジングに関心がある方へ</p>
              <p className="habit-card-desc">
                サイクルを整える「メチオニン」が<br className="sp-only" />
                14%多いから常にクリアで健やかな<br className="sp-only" />
                自分をキープできる
              </p>
            </div>
          </div>
          <p className="habit-note">※成分の一般的な特徴を説明したものです</p>
        </div>
        <div className="intro-text-block">
          <p className="intro-desc intro-copy-unified">
            心も体も美しい人は日常が違う<br />
            一日一個のラグジュアリーな食習慣
          </p>
          <div className="intro-cta">
            <a href={subscriptionUrl} className="cta-button-secondary">申し込む</a>
          </div>
        </div>
      </section>

      {/* Beauty & Diet Effects (Text Only) */}
      <section id="beauty-diet" className="section beauty-diet-section">
        <div className="section-header">
          <span className="section-eyebrow">TAMAGO LIFE</span>
          <h2 className="section-title">美容とダイエットの効果</h2>
        </div>
        <div className="effect-block">
          <p className="effect-lead">内側からつくるキレイの習慣</p>
          <ul className="effect-list">
            <li>
              <strong>ビタミンEとシアル酸</strong>
              <span>
                抗酸化作用で肌荒れを防ぎ<br className="sp-only" />
                コラーゲンやヒアルロン酸が<br className="sp-only" />
                必要なところへ届くようサポートします
              </span>
            </li>
            <li>
              <strong>低糖質</strong>
              <span>
                糖質がほぼゼロで腹持ちも良く<br className="sp-only" />
                ダイエット中の強い味方です
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Amino Acids Guide (Temporary Copy) */}
      <section id="amino-guide" className="section amino-guide-section">
        <div className="section-header">
          <span className="section-eyebrow">AMINO ACIDS</span>
          <h2 className="section-title">アミノ酸が美に良い理由</h2>
        </div>
        <div className="amino-guide-content">
          <p className="amino-guide-lead">
            アミノ酸は毎日の食事から取り入れたい<br className="sp-only" />タンパク質の構成要素です<br />
            肌や髪、爪を含む体の土台は<br className="sp-only" />日々の栄養の積み重ねでつくられるため<br />
            美しさを考えるうえでも<br className="sp-only" />「何を食べるか」が大切になります
          </p>
          <div className="amino-guide-grid">
            <div className="amino-guide-card">
              <h3 className="amino-guide-title">美しさの土台を支える</h3>
              <p className="amino-guide-desc">
                アミノ酸は肌髪爪などを<br className="sp-only" />
                形づくるタンパク質のもと<br className="sp-only" />
                となる栄養素です
              </p>
            </div>
            <div className="amino-guide-card">
              <h3 className="amino-guide-title">日々のリズムに寄り添う</h3>
              <p className="amino-guide-desc">
                美容は一日で完成するものでは<br className="sp-only" />
                なく バランスのよい食習慣の<br className="sp-only" />
                積み重ねが大切です
              </p>
            </div>
            <div className="amino-guide-card">
              <h3 className="amino-guide-title">続ける習慣にする</h3>
              <p className="amino-guide-desc">
                特別なことを増やすより<br className="sp-only" />
                毎日の食事で無理なく続ける事<br className="sp-only" />
                がポイントです
              </p>
            </div>
          </div>
          <p className="amino-guide-note">※記載は栄養学的な一般情報であり特定の効果を保証するものではありません</p>
        </div>
      </section>

      {/* Amino Acid Comparison Section */}
      <section id="amino-compare" className="amino-section-wrapper">
        <div className="amino-section-bg-v2"></div>
        <div className="amino-section-content">
          <div className="section-header">
            <span className="section-eyebrow">WHAT MAKES US DIFFERENT</span>
            <h2 className="section-title">
              ただの卵ではない<br className="sp-only" />
              「美を仕込む」<br className="sp-only" />
              ための設計図
            </h2>
            <p className="section-subtitle">
              独自の20種類以上の飼料で育んだ<br className="sp-only" />
              『アミノ酸の黄金比』
            </p>
          </div>

          {/* Hero Stat - 117% Display */}
          <div className="amino-hero-stat">
            <p className="amino-stat-label">含硫アミノ酸（メチオニン＋シスチン）</p>
            <p className="amino-stat-number">
              117<span className="amino-stat-unit">%</span>
            </p>
            <p className="amino-stat-desc">
              日差しに負けたくない内側から『飲む日焼け止め』の習慣を<br />
              <span className="amino-stat-highlight">
                一般的な卵と比較して美容成分の含有量が大幅にアップ
              </span>
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="amino-benefits-grid">
            <div className="amino-benefit-card">
              <p className="amino-benefit-number">113%</p>
              <p className="amino-benefit-label">グルタミン酸</p>
              <p className="amino-benefit-desc">
                鏡を見るのが楽しみになる<br className="sp-only" />
                理想のターンオーバーをサポート
              </p>
            </div>
            <div className="amino-benefit-card">
              <p className="amino-benefit-number">109%</p>
              <p className="amino-benefit-label">セリン</p>
              <p className="amino-benefit-desc">
                夕方のカサつきが気になる肌に天然の潤い成分をチャージ
              </p>
            </div>
            <div className="amino-benefit-card">
              <p className="amino-benefit-number">111%</p>
              <p className="amino-benefit-label">アスパラギン酸</p>
              <p className="amino-benefit-desc">
                活力と潤いの源<br />
                肌のターンオーバーを<br className="sp-only" />
                サポートします
              </p>
            </div>
          </div>

          {/* Sake Story */}
          <div className="amino-story-block">
            <h3 className="amino-story-title">なぜここまで違うのか？</h3>
            <p className="amino-story-text">
              独自の飼料を与えることで<br className="sp-only" />
              通常では成し得ない豊かな<br className="sp-only" />
              アミノ酸バランスを実現しました<br />
              ただの卵ではありません<br className="sp-only" />
              <strong>データが証明する<br className="sp-only" />美しさを育むアミノ酸量</strong>
            </p>
          </div>

          {/* Bar Chart Visualization */}
          <div className="amino-chart-section">
            <div className="chart-header">
              <div className="chart-header-row">
                <div className="chart-spacer" aria-hidden="true"></div>
                <span className="chart-badge">美容卵と一般的な卵のアミノ酸含有量比較</span>
                <div className="chart-legend" aria-label="凡例">
                  <div className="legend-item">
                    <span className="legend-swatch legend-beauty" aria-hidden="true"></span>
                    <span className="legend-label">美容卵</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-swatch legend-base" aria-hidden="true"></span>
                    <span className="legend-label">一般的な卵</span>
                  </div>
                </div>
              </div>
              <p className="chart-subtitle">バー内に含有量を表示</p>
            </div>
            <div className="amino-bars">
              {/* 美容卵を上に配置バーの長さは含有量に比例 */}
              {/* シスチン: 美容卵316mg(最大)=100%, 一般卵260mg=82% */}
              <div className="amino-bar-row">
                <div className="bar-label">
                  <span className="bar-name">シスチン</span>
                  <span className="bar-benefit">（美肌・美髪）</span>
                </div>
                <div className="bar-stack bar-stack-ref">
                  <div className="bar-line bar-beauty-line" style={{ width: '100%' }}><span>316mg</span></div>
                  <div className="bar-line bar-base-line" style={{ width: '82%' }}><span>260mg</span></div>
                </div>
                <span className="bar-percent">+約22%UP</span>
              </div>
              {/* グリシン: 美容卵401mg=100%, 一般卵340mg=85% */}
              <div className="amino-bar-row">
                <div className="bar-label">
                  <span className="bar-name">グリシン</span>
                  <span className="bar-benefit">（睡眠・美肌）</span>
                </div>
                <div className="bar-stack bar-stack-ref">
                  <div className="bar-line bar-beauty-line" style={{ width: '100%' }}><span>401mg</span></div>
                  <div className="bar-line bar-base-line" style={{ width: '85%' }}><span>340mg</span></div>
                </div>
                <span className="bar-percent">+約18%UP</span>
              </div>
              {/* メチオニン: 美容卵400mg=94%, 一般卵350mg=83% */}
              <div className="amino-bar-row">
                <div className="bar-label">
                  <span className="bar-name">メチオニン</span>
                  <span className="bar-benefit">（代謝・デトックス）</span>
                </div>
                <div className="bar-stack bar-stack-ref">
                  <div className="bar-line bar-beauty-line" style={{ width: '100%' }}><span>400mg</span></div>
                  <div className="bar-line bar-base-line" style={{ width: '88%' }}><span>350mg</span></div>
                </div>
                <span className="bar-percent">+約14%UP</span>
              </div>
              {/* グルタミン酸: 美容卵1580mg=88%, 一般卵1400mg=78% */}
              <div className="amino-bar-row">
                <div className="bar-label">
                  <span className="bar-name">グルタミン酸</span>
                  <span className="bar-benefit">（旨味・代謝）</span>
                </div>
                <div className="bar-stack bar-stack-ref">
                  <div className="bar-line bar-beauty-line" style={{ width: '100%' }}><span>1580mg</span></div>
                  <div className="bar-line bar-base-line" style={{ width: '89%' }}><span>1400mg</span></div>
                </div>
                <span className="bar-percent">+約13%UP</span>
              </div>
              {/* アスパラギン酸: 美容卵1220mg, 一般卵1100mg */}
              <div className="amino-bar-row">
                <div className="bar-label">
                  <span className="bar-name">アスパラギン酸</span>
                  <span className="bar-benefit">（活力・潤い）</span>
                </div>
                <div className="bar-stack bar-stack-ref">
                  <div className="bar-line bar-beauty-line" style={{ width: '100%' }}><span>1220mg</span></div>
                  <div className="bar-line bar-base-line" style={{ width: '90%' }}><span>1100mg</span></div>
                </div>
                <span className="bar-percent">+約11%UP</span>
              </div>
              {/* セリン: 美容卵894mg, 一般卵820mg */}
              <div className="amino-bar-row">
                <div className="bar-label">
                  <span className="bar-name">セリン</span>
                  <span className="bar-benefit">（保湿）</span>
                </div>
                <div className="bar-stack bar-stack-ref">
                  <div className="bar-line bar-beauty-line" style={{ width: '100%' }}><span>894mg</span></div>
                  <div className="bar-line bar-base-line" style={{ width: '92%' }}><span>820mg</span></div>
                </div>
                <span className="bar-percent">+約9%UP</span>
              </div>
            </div>
            <p className="chart-note">※比較対象：文部科学省「日本食品標準成分表2020年版（八訂）」の鶏卵/全卵/生データ参照当社調べ</p>
          </div>
        </div>
      </section>

      {/* Family Nutrition */}
      <section id="nutrition" className="section nutrition-section">
        <div className="section-header">
          <span className="section-eyebrow">FAMILY NUTRITION</span>
          <h2 className="section-title">
            なぜ卵は完全栄養食<br className="sp-only" />
            と言われるのか
          </h2>
          <p className="section-subtitle nutrition-subtitle">
            卵には毎日にうれしい栄養素が<br className="sp-only" />
            たくさん含まれています
          </p>
        </div>
        <div className="tamago-life-grid">
          <div className="tamago-life-card">
            <div className="tamago-life-img-wrap">
              <ZoomableImage src="/tamago_life_premama.png" alt="プレママ・赤ちゃん 一生の健康の土台づくり" className="tamago-life-img" />
            </div>
            <div className="tamago-life-content">
              <h3 className="tamago-life-title">
                【プレママ・赤ちゃん】<br className="sp-only" />
                一生の健康の土台づくり
              </h3>
              <ul className="tamago-life-list">
                <li>
                  <strong>葉酸（20〜30代の妊婦さんへ）:</strong><br className="sp-only" /> 赤ちゃんの健康な発育やお母さんの貧血予防に<br className="sp-only" />
                  調理による損失が少ないのも卵のメリットです
                </li>
                <li>
                  <strong>コリン（赤ちゃんの脳形成に）:</strong><br className="sp-only" /> 脳を大きくするために必要な栄養素<br className="sp-only" />
                  卵は含有量が多く吸収効率も抜群です
                </li>
              </ul>
            </div>
          </div>
          <div className="tamago-life-card">
            <div className="tamago-life-img-wrap">
              <ZoomableImage src="/tamago_life_student.png" alt="学生・受験生 集中力とひらめきをサポート" className="tamago-life-img" />
            </div>
            <div className="tamago-life-content">
              <h3 className="tamago-life-title">
                【学生・受験生】<br className="sp-only" />
                集中力とひらめきをサポート
              </h3>
              <ul className="tamago-life-list">
                <li>
                  <strong>コリン（記憶力・学習能力に）:</strong><br className="sp-only" /> 記憶や学習に深く関わる神経伝達物質の<br className="sp-only" />
                  原料になります
                </li>
                <li>
                  <strong>鉄分（ふらつき・集中力不足に）:</strong><br className="sp-only" /> 成長期やハードな生活で不足しがちな鉄分を<br className="sp-only" />
                  補いスッキリした毎日を支えます
                </li>
              </ul>
            </div>
          </div>
          <div className="tamago-life-card">
            <div className="tamago-life-img-wrap">
              <ZoomableImage src="/tamago_life_active.png" alt="働き盛り・アクティブ層 疲れを溜めない動ける体" className="tamago-life-img" />
            </div>
            <div className="tamago-life-content">
              <h3 className="tamago-life-title">
                【働き盛り・アクティブ層】<br className="sp-only" />
                疲れを溜めない動ける体
              </h3>
              <ul className="tamago-life-list">
                <li>
                  <strong>メチオニン（お酒好きの方へ）:</strong><br className="sp-only" /> 肝臓でのアルコール分解を助け二日酔い対策に<br className="sp-only" />
                  プリン体もゼロなので安心です
                </li>
                <li>
                  <strong>タンパク質・ビタミンD<br className="sp-only" />（未来のアスリートへ）:</strong><br className="sp-only" /> 筋肉の材料となる「アミノ酸スコア100」の<br className="sp-only" />
                  良質なタンパク質と骨の形成を助ける<br className="sp-only" />
                  ビタミンDを同時に摂取できます
                </li>
              </ul>
            </div>
          </div>
          <div className="tamago-life-card">
            <div className="tamago-life-img-wrap">
              <ZoomableImage src="/tamago_life_senior.png" alt="シニア いつまでも若々しく自分らしく" className="tamago-life-img" />
            </div>
            <div className="tamago-life-content">
              <h3 className="tamago-life-title">【シニア】いつまでも若々しく自分らしく</h3>
              <ul className="tamago-life-list">
                <li>
                  <strong>コリン（認知機能の維持に）:</strong><br className="sp-only" /> 脳の働きを活性化し認知症予防への効果も<br className="sp-only" />
                  期待されています
                </li>
                <li>
                  <strong>タンパク質（フレイル予防に）:</strong><br className="sp-only" /> 加齢による筋肉量の減少を抑え健康寿命を<br className="sp-only" />
                  延ばすために不可欠な栄養です
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ZigZag Features */}
      <section id="features" className="section">
        <div className="section-header">
          <span className="section-eyebrow">OUR COMMITMENT</span>
          <h2 className="section-title">美を紡ぐ3つの贅沢</h2>
        </div>

        {/* Feature 1 */}
        <div className="zigzag-row">
          <div className="zigzag-image">
            <img src="/chicken_farm.jpg" alt="開放的な鶏舎" />
          </div>
          <div className="zigzag-content">
            <span className="zigzag-num">01</span>
            <h3 className="zigzag-title">光と風が通る<br />開放式鶏舎</h3>
            <p className="zigzag-desc">
              ルフボーテの養鶏場は熊本市の中心部から車で1時間ほどの小高い丘の上に位置しています<br />
              日本の養鶏は鶏舎に窓を設けないウインドーレス式が主流ですが私たちは窓のある開放式を採用<br />
              太陽の光が注ぎ自然な風が通る鶏舎で鶏たちがゆったりできる飼育スペースを確保<br />
              窓があることで外気の影響を受けやすいもののそれは四季を感じながら生きられる環境だということです<br />
              夏には地下水を噴霧して室温を下げるなど鶏にとって快適な環境を保っています
            </p>
            <div className="tags-row">
              <span className="outline-tag">アニマルウェルフェア</span>
              <span className="outline-tag">熊本県産</span>
            </div>
          </div>
        </div>

        {/* Feature 2: Reverse Layout */}
        <div className="zigzag-row reverse">
          <div className="zigzag-image">
            <img src={feedMixBg} alt="20種類以上のこだわり飼料" />
          </div>
          <div className="zigzag-content">
            <span className="zigzag-num">02</span>
            <h3 className="zigzag-title">20種類以上の<br />こだわり飼料</h3>
            <p className="zigzag-desc">
              たまごは鶏が食べたものからできています<br />
              だからこそ鶏が食べる飼料や水の質にも徹底的にこだわっています<br />
              基本的な飼料はとうもろこしや大豆かすにんにくとうがらしなど20種類以上の材料をオリジナルでブレンド<br />
              季節やその日の気温鶏の日齢といったさまざまな条件に応じて配合を微調整して与えています<br />
              抗生剤や合成卵黄着色剤といった添加物は使わず材料の残留農薬チェックも怠りません
            </p>
            <div className="tags-row">
              <span className="outline-tag">自家配合</span>
              <span className="outline-tag">抗生剤不使用</span>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="zigzag-row">
          <div className="zigzag-image">
            <img src={bmWaterBg} alt="BM活性水" />
          </div>
          <div className="zigzag-content">
            <span className="zigzag-num">03</span>
            <h3 className="zigzag-title">生命の水<br />そして地産地消へ</h3>
            <p className="zigzag-desc">
              また飲み水には地下90mから汲み上げ活性化させた「BM活性水」を使用しています<br />
              お米は地域の農家さんと連携して20haの飼料米を地産地消<br />
              更にとうもろこしは2022年から自社栽培に挑戦しています
            </p>
            <div className="tags-row">
              <span className="outline-tag">BM活性水</span>
              <span className="outline-tag">SDGs</span>
            </div>
          </div>
        </div>

        {/* Eating Suggestions Section */}
        <div className="eating-suggestions">
          <div className="section-header">
            <span className="section-eyebrow">HOW TO ENJOY</span>
            <h2 className="section-title">
              美しさを整える<br className="sp-only" />
              3つの食べ方提案
            </h2>
            <p className="intro-desc">一日一個のラグジュアリー</p>
          </div>
          <div className="eating-cards">
            <div className="eating-card">
              <span className="eating-time">Morning</span>
              <p className="eating-desc">究極の卵かけご飯で<br />一日の美しさをチャージ</p>
            </div>
            <div className="eating-card">
              <span className="eating-time">Night</span>
              <p className="eating-desc">頑張った自分へのご褒美に<br />半熟とろとろの<br className="sp-only" />ポーチドエッグを</p>
            </div>
            <div className="eating-card">
              <span className="eating-time">Gift</span>
              <p className="eating-desc">大切な友人の<br />体と美しさを労わる<br className="sp-only" />特別なギフトとして</p>
            </div>
          </div>
        </div>

        {/* Middle CTA */}
        <div className="middle-cta">
          <a href={subscriptionUrl} className="cta-button-secondary">申し込む</a>
        </div>

      </section>

      {/* Brand Story & CEO */}
      <section id="story" className="section ceo-section-bg">
        <div className="ceo-bg"></div>
        <div className="section-header">
          <span className="section-eyebrow">STORY</span>
          <h2 className="section-title">美しさへの想い</h2>
        </div>

		        <div className="ceo-container">
		          <div className="ceo-text ceo-fixed-lines">
		            <p className="ceo-paragraph">
		              <span className="ceo-line">私はアナウンサーとして多忙な日々を送りながら</span>
		              <span className="ceo-line">毎朝 欠かさず卵を食べてきました</span>
		            </p>
		            <p className="ceo-paragraph">
		              <span className="ceo-line">この仕事は体調管理が何より求められる職業です</span>
		              <span className="ceo-line">どれだけ忙しくても声や体調を崩すわけにはいきません</span>
		              <span className="ceo-line">そんな中でもここまでほとんど風邪をひかず元気に走り続けてこられたのは完全栄養食と呼ばれる卵の力も大きいのかなと感じています</span>
		            </p>
		            <p className="ceo-paragraph">
		              <span className="ceo-line">卵にさらなる美容と健康の要素を加えられたら</span>
		            </p>
		            <p className="ceo-paragraph">
		              <span className="ceo-line">その想いから このブランドは生まれました</span>
		              <span className="ceo-line">そのために飼料 水 環境 すべてを見直し</span>
		              <span className="ceo-line">一羽一羽の健康状態に徹底的に向き合い</span>
		              <span className="ceo-line">どこまでも妥協しない卵づくりを続けています</span>
		            </p>
		            <p className="ceo-paragraph">
		              <span className="ceo-line">忙しい毎日に 美しさを育てる一口を</span>
		              <span className="ceo-line">あなたの未来のために 今日選ぶ一つの卵を</span>
		            </p>
		          </div>
	          <p className="t-mincho ceo-signature" style={{ textAlign: 'right', marginTop: '64px', fontSize: '18px' }}>
	            代表取締役
	          </p>
	        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section review-section-bg" style={{ background: '#fff' }}>
        <div className="section-header">
          <span className="section-eyebrow">VOICE</span>
          <h2 className="section-title">愛用者の声</h2>
        </div>
        <div className="review-grid">
          {/* Review 1 */}
          <div className="review-card">
            <div className="reviewer-profile">
              <img src="/review_doctor.png" alt="Doctor" className="reviewer-img" />
              <div className="reviewer-meta">
                <span className="reviewer-attr">40代 女性 / 医師</span>
              </div>
            </div>
            <p className="review-text">
              「これまで食べてきた卵とはまるで違う上品な味わい朝食が一層特別な時間になりました」
            </p>
          </div>

          {/* Review 2 */}
          <div className="review-card">
            <div className="reviewer-profile">
              <img src="/review_exec.png" alt="Executive" className="reviewer-img" />
              <div className="reviewer-meta">
                <span className="reviewer-attr">50代 男性 / 経営者</span>
              </div>
            </div>
            <p className="review-text">
              「健康診断の結果が気になり<br className="sp-only" />日々の食生活を見直して<br className="sp-only" />
              いましたがこの卵なら<br className="sp-only" />安心して続けられます」
            </p>
          </div>

          {/* Review 3 */}
          <div className="review-card">
            <div className="reviewer-profile">
              <img src="/review_office.png" alt="Office Worker" className="reviewer-img" />
              <div className="reviewer-meta">
                <span className="reviewer-attr">30代 女性 / 会社員</span>
              </div>
            </div>
            <p className="review-text">
              「贈り物として知人に<br className="sp-only" />お届けしたところとても<br className="sp-only" />
              喜ばれました<br className="sp-only" />特別な日のギフトにも<br className="sp-only" />
              ふさわしい商品です」
            </p>
          </div>

          {/* Review 4 */}
          <div className="review-card">
            <div className="reviewer-profile">
              <img src="/review_model.png" alt="Model" className="reviewer-img" />
              <div className="reviewer-meta">
                <span className="reviewer-attr">20代 女性 / モデル</span>
              </div>
            </div>
            <p className="review-text">
              「卵を変えるだけで<br className="sp-only" />美容や健康習慣を自然に<br className="sp-only" />
              取り入れられる手軽さと<br className="sp-only" />
              確かな品質に感動しています」
            </p>
          </div>
        </div>
      </section>

      {/* Subscription (Invitation) */}
      <section id="subscription" className="section">
        <div className="sub-invitation">
          <p className="sub-lead">INVITATION</p>
          <h2 className="sub-title">月一回美しさが届く<br />サブスクリプション</h2>

          <div className="sub-product-area">
            {/* Product Image Area */}
            <div className="sub-product-image">
              <img src={packageImage} alt="美容卵 30個入り" />
            </div>
            <p className="t-mincho" style={{ fontSize: '18px' }}>美容卵 30個入り</p>
          </div>

          <div className="sub-price-block">
            <span className="main-price">{subPlan.price}</span>
            <span className="price-unit">円</span>
            <p className="sub-price-detail">{subPlan.tax} / {subPlan.total}</p>
          </div>

          <p className="sub-closing-copy-large">
            10年後の自分にいま贈れるもの
          </p>
          <a href={subscriptionUrl} className="cta-button-large">
            申し込む
          </a>

          <div className="sub-guarantee">
            <span className="check-icon">✓</span> {subPlan.guarantee}
            <span style={{ margin: '0 10px' }}>|</span>
            <span className="check-icon">✓</span> 送料無料
          </div>

          <p style={{ marginTop: '40px', fontSize: '12px', color: '#888' }}>
            ※ 初回お届け日はお申し込みから1週間以内を目安に<br className="sp-only" />
            発送いたします
          </p>
        </div>
      </section>

      {/* 相乗効果レシピ */}
      <section id="recipes" className="section recipes-section">
        <div className="section-header">
          <span className="section-eyebrow">RECIPE</span>
          <h2 className="section-title">相乗効果レシピ</h2>
        </div>

        {/* キャッチコピー＋卵の効能説明 */}
        <div className="recipe-intro">
          <p className="recipe-intro-catch">「卵ひとつで、美しさの吸収率は<br className="sp-only" />変えられる」</p>
          <p className="recipe-intro-desc">卵はただのたんぱく質ではありません</p>
          <p className="recipe-intro-desc">脂溶性ビタミンの吸収を助け</p>
          <p className="recipe-intro-desc">食べた栄養を"ちゃんと体に届かせる"</p>
          <p className="recipe-intro-desc">美容と健康のブースター食材です</p>
          <p className="recipe-intro-desc recipe-intro-break">組み合わせ次第で</p>
          <p className="recipe-intro-desc">同じ食材でも効果は何倍にも高まります</p>
        </div>

        {/* ビタミン吸収が高まる《美容ベース卵》 */}
        <div className="recipe-block">
          <h3 className="recipe-block-title">ビタミン吸収が高まる《美容ベース卵》</h3>
          <div className="recipe-grid">
            <div className="recipe-card">
              <img src="/recipe_hourensou.png" alt="ほうれん草×卵" className="recipe-card-img recipe-img-lower" />
              <p className="recipe-combo">ほうれん草 × 卵</p>
              <p className="recipe-catch">― 血色感と元気をつくる ―</p>
              <p className="recipe-desc">卵のたんぱく質が、鉄と葉酸の吸収をサポート</p>
              <p className="recipe-meta">疲れやすさ、顔色が気になる日に</p>
            </div>
            <div className="recipe-card">
              <img src="/recipe_avocado.jpg" alt="アボカド×卵" className="recipe-card-img" />
              <p className="recipe-combo">アボカド × 卵</p>
              <p className="recipe-catch recipe-catch-avocado">― ツヤと女性らしさを育てる ―</p>
              <p className="recipe-desc">
                ビタミンE・Kの吸収率が<br className="sp-only" />ぐっと高まり<br />
                肌・髪・ホルモンバランスを<br className="sp-only" />内側から支えます
              </p>
            </div>
            <div className="recipe-card">
              <img src="/recipe_tomato.jpg" alt="トマト×卵" className="recipe-card-img" />
              <p className="recipe-combo">トマト × 卵</p>
              <p className="recipe-catch">― 透明感と紫外線対策 ―</p>
              <p className="recipe-desc">リコピンは卵の脂と一緒で<br className="sp-only" />吸収力アップ</p>
              <p className="recipe-meta">年齢肌の"くすみ予防"に</p>
            </div>
            <div className="recipe-card">
              <img src="/recipe_broccoli.jpg" alt="ブロッコリー×卵" className="recipe-card-img" />
              <p className="recipe-combo">ブロッコリー × 卵</p>
              <p className="recipe-catch">― 免疫と代謝の底上げ ―</p>
              <p className="recipe-desc">ビタミンA・Kを効率よく<br className="sp-only" />取り込み</p>
              <p className="recipe-meta">忙しい毎日の体調管理に</p>
            </div>
          </div>
        </div>

        {/* 代謝・集中力を支える《エネルギー卵》 */}
        <div className="recipe-block">
          <h3 className="recipe-block-title">代謝・集中力を支える《エネルギー卵》</h3>
          <div className="recipe-grid">
            <div className="recipe-card">
              <img src="/recipe_natto.jpg" alt="納豆×卵黄" className="recipe-card-img" />
              <p className="recipe-combo">納豆 × 卵黄</p>
              <p className="recipe-catch">― 腸から整い、肌が変わる ―</p>
              <p className="recipe-desc">アミノ酸バランスが整い<br />美肌も筋肉も同時にサポート</p>
            </div>
            <div className="recipe-card">
              <img src="/recipe_tori.png" alt="鶏むね肉×卵" className="recipe-card-img recipe-img-top" />
              <p className="recipe-combo">鶏むね肉 × 卵</p>
              <p className="recipe-catch">― 引き締まった体づくり ―</p>
              <p className="recipe-desc">
                良質なたんぱく質の<br className="sp-only" />組み合わせで<br />
                無理のない代謝アップを
              </p>
            </div>
            <div className="recipe-card">
              <img src="/recipe_tuna.png" alt="ツナ×卵" className="recipe-card-img" />
              <p className="recipe-combo">ツナ × 卵</p>
              <p className="recipe-catch">― 頭と心をクリアに ―</p>
              <p className="recipe-desc">DHA・EPA＋コリンで<br />集中力と仕事効率をサポート</p>
            </div>
          </div>
        </div>

        {/* 女性のための《いたわり卵》 */}
        <div className="recipe-block">
          <h3 className="recipe-block-title">女性のための《いたわり卵》</h3>
          <div className="recipe-grid">
            <div className="recipe-card">
              <img src="/recipe_yamaimo.jpg" alt="山芋×卵" className="recipe-card-img" />
              <p className="recipe-combo">山芋 × 卵</p>
              <p className="recipe-catch">― 疲れた体をやさしく回復 ―</p>
              <p className="recipe-desc">消化がよく忙しい日の<br className="sp-only" />栄養補給に最適</p>
            </div>
            <div className="recipe-card">
              <img src="/recipe_kinoko.jpg" alt="きのこ×卵" className="recipe-card-img recipe-img-top" />
              <p className="recipe-combo">きのこ × 卵</p>
              <p className="recipe-catch">― 自律神経と睡眠の質 ―</p>
              <p className="recipe-desc">ビタミンDが心と体の安定をサポート</p>
            </div>
            <div className="recipe-card">
              <img src="/recipe_shirasu.png" alt="しらす×卵" className="recipe-card-img" />
              <p className="recipe-combo">しらす × 卵</p>
              <p className="recipe-catch">― 骨・肌の土台づくり ―</p>
              <p className="recipe-desc">カルシウムとビタミンDを<br className="sp-only" />効率よく</p>
            </div>
          </div>
        </div>

        {/* ワンポイント */}
        <div className="recipe-tips">
          <h4 className="recipe-tips-title">ポイント</h4>
          <ul>
            <li>卵は半熟〜加熱しすぎない</li>
            <li>卵黄を捨てないことが美容の鍵</li>
            <li>朝・運動後は吸収率が高まりやすい</li>
          </ul>
        </div>

        {/* 締めの文章 */}
        <div className="recipe-cta">
          <p>毎日の食事は<br />少しの工夫で「美容ケア」に<br className="sp-only" />変わります</p>
          <p>今日の卵から体の中の美しさを<br className="sp-only" />育ててみませんか</p>
        </div>

        {/* サブスク案内 */}
        <div className="recipe-sub-block">
          <p className="recipe-sub-product">美容卵 30個入り</p>
          <div className="recipe-sub-price">
            <span className="main-price">{subPlan.price}</span>
            <span className="price-unit">円</span>
          </div>
          <p className="recipe-sub-detail">{subPlan.tax} / {subPlan.total}</p>
          <p className="recipe-sub-copy">10年後の自分にいま贈れるもの</p>
          <a href={subscriptionUrl} className="cta-button-large">申し込む</a>
          <div className="recipe-sub-guarantee">
            <span className="check-icon">✓</span> {subPlan.guarantee}
            <span style={{ margin: '0 10px' }}>|</span>
            <span className="check-icon">✓</span> 送料無料
          </div>
          <p className="recipe-sub-note">
            ※ 初回お届け日はお申し込みから1週間以内を目安に<br className="sp-only" />
            発送いたします
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>© 2024 L'Œuf Beauté. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Exit Intent Popup */}
      <ExitIntentPopup ctaUrl={giftPopupUrl} />
    </div>
  )
}

export default App

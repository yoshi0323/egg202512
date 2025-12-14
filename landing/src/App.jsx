import React, { useEffect, useState } from 'react'
import './App.css'

// コンテンツデータ
const subPlan = {
  price: '5,980',
  tax: '（税別・送料込）',
  total: '税込 6,458円',
  guarantee: '保証用卵5個つき',
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
          <a href="#subscription" className="nav-cta-btn">ご予約</a>
        </div>
      </nav>

      {/* Hero Section (FV) - Vertical Writing */}
      <header className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-copy-vertical t-vertical">
            <h1>卵で、美しさに革命を。</h1>
          </div>
          <div className="hero-sub-vertical t-vertical">
            <p>栄養を超えて、美をまとう</p>
            <p>一日一個のラグジュアリー</p>
            <p>L'Œuf Beauté</p>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>
      </header>

      {/* Concept Intro (Centered) */}
      <section id="intro" className="section">
        <div className="intro-text-block">
          <span className="section-eyebrow">CONCEPT</span>
          <h2 className="section-title">美の完全栄養食</h2>
        </div>
        <div className="intro-text-block">
          <p className="intro-lead">
            健やかさと美しさは、<br />
            日々の「食」から生まれます。
          </p>
          <p className="intro-desc">
            卵は、生命を育むために必要な栄養が凝縮されたカプセル。<br />
            私たちはその神秘的な力に、さらに「美容」という視点を注ぎ込みました。<br />
            自然の恵みと科学の融合。<br />
            それが、L'Œuf Beauté（ルフ・ボーテ）です。
          </p>
        </div>
        <div className="intro-image-wrapper">
          {/* Nutrition comparison image provided by user */}
          <img src="/nutrition.png" alt="栄養比較グラフ" />
        </div>
      </section>

      {/* ZigZag Features */}
      <section id="features" className="section">
        <div className="section-header">
          <span className="section-eyebrow">OUR COMMITMENT</span>
          <h2 className="section-title">美を紡ぐ、3つの贅沢</h2>
        </div>

        {/* Feature 1 */}
        <div className="zigzag-row">
          <div className="zigzag-image">
            {/* Placeholder until user provides specific image, using hero for now or similar */}
            <img src="/hero.jpg" alt="開放的な鶏舎" style={{ filter: 'grayscale(20%) contrast(1.1)' }} />
          </div>
          <div className="zigzag-content">
            <span className="zigzag-num">01</span>
            <h3 className="zigzag-title">光と風が通る、<br />開放式鶏舎。</h3>
            <p className="zigzag-desc">
              熊本市の中心部から離れた静かな丘の上。<br />
              私たちの鶏舎には窓があり、太陽の光と自然な風が通り抜けます。<br />
              効率よりも、鶏の「幸せ」を優先したストレスフリーな環境。<br />
              四季を感じながら健やかに育った鶏たちは、生命力にあふれています。
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
            {/* Using a placeholder color/pattern if no image available, but here reusing an image for structure */}
            <div style={{ width: '100%', height: '100%', minHeight: '400px', background: '#f0efe9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
              Image: 20種類以上の飼料
            </div>
          </div>
          <div className="zigzag-content">
            <span className="zigzag-num">02</span>
            <h3 className="zigzag-title">20種類以上の<br />こだわり飼料。</h3>
            <p className="zigzag-desc">
              食べたものが、そのまま卵になる。<br />
              だからこそ、とうもろこし、大豆、にんにく、唐辛子など、<br />
              厳選された20種類以上の自然素材を独自にブレンド。<br />
              季節や鶏の体調に合わせて配合を微調整する職人技が、<br />
              濃厚でコクのある、唯一無二の味わいを生み出します。
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
            {/* Using a placeholder */}
            <div style={{ width: '100%', height: '100%', minHeight: '400px', background: '#f0efe9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
              Image: BM活性水
            </div>
          </div>
          <div className="zigzag-content">
            <span className="zigzag-num">03</span>
            <h3 className="zigzag-title">生命の水、<br />そして地産地消へ。</h3>
            <p className="zigzag-desc">
              飲み水には、地下90mから汲み上げ活性化させた「BM活性水」を使用。<br />
              鶏たちの体内環境を整え、臭みのない透き通るような美味しさを実現しています。<br />
              さらに、お米は地域の農家さんと連携して20haの飼料米を地産地消。<br />
              とうもろこしも2022年から自社栽培に挑戦するなど、<br />
              地域と環境に根ざした持続可能な養鶏に取り組んでいます。
            </p>
            <div className="tags-row">
              <span className="outline-tag">BM活性水</span>
              <span className="outline-tag">SDGs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story & CEO (Merged for flow) */}
      <section id="story" className="section ceo-section-bg">
        <div className="section-header">
          <span className="section-eyebrow">STORY</span>
          <h2 className="section-title">美しさへの想い</h2>
        </div>
        <div className="ceo-container">
          <div className="ceo-text">
            <p>
              私はアナウンサーとして多忙な日々を送りながら、毎朝卵を欠かさず食べてきました。<br />
              この仕事は体調管理が何より求められる職業で、どれだけ忙しくても声や体調を崩すわけにはいきません。<br />
              そんな中でも、ここまで ほとんど風邪をひかず元気に走り続けてこられたのは、卵の力も大きいのかな… と感じています。
            </p>
            <p>
              完全栄養食と呼ばれる卵に、さらに美容と健康の要素を加えられたら──。<br />
              その想いから、このブランドは生まれました。
            </p>
            <p>
              そのために、飼料、水、環境、すべてを見直し、<br />
              一羽一羽の健康状態に徹底的に向き合い、<br />
              どこまでも妥協しない卵づくりを続けています。
            </p>
            <p>
              忙しい毎日に、美しさを育てる一口を。<br />
              あなたの未来のために、今日選ぶ一つの卵を。
            </p>
            <p>
              私たちは、卵の可能性を“美の領域”へ押し上げることに情熱を注ぎ続けます。<br />
              忙しい人の毎日に、安心と美しさを届けたい。<br />
              それが私たちの使命です。
            </p>
          </div>
          <p className="t-mincho" style={{ textAlign: 'right', marginTop: '40px', fontSize: '18px' }}>
            代表取締役
          </p>
        </div>
      </section>

      {/* Subscription (Invitation) */}
      <section id="subscription" className="section">
        <div className="sub-invitation">
          <p className="sub-lead">INVITATION</p>
          <h2 className="sub-title">月一回、美しさが届く。<br />サブスクリプション。</h2>

          <div className="sub-product-area">
            {/* Product Image Area */}
            <div style={{ width: '200px', height: '260px', background: '#faf7f0', border: '1px solid #e6d3a3', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              Package Image
            </div>
            <p className="t-mincho" style={{ fontSize: '18px' }}>美容卵 30個入り</p>
          </div>

          <div className="sub-price-block">
            <span className="main-price">{subPlan.price}</span>
            <span className="price-unit">円</span>
            <p className="sub-price-detail">{subPlan.tax} / {subPlan.total}</p>
          </div>

          <a href="#order" className="cta-button-large">
            申し込む
          </a>

          <div className="sub-guarantee">
            <span className="check-icon">✓</span> {subPlan.guarantee}
            <span style={{ margin: '0 10px' }}>|</span>
            <span className="check-icon">✓</span> 送料無料
          </div>

          <p style={{ marginTop: '40px', fontSize: '12px', color: '#888' }}>
            ※ 初回お届け日はお申し込みから1週間以内を目安に発送いたします。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>© 2024 L'Œuf Beauté. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

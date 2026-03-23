import React, { useState, useEffect } from 'react';
import './ExitIntentPopup.css';

const ExitIntentPopup = ({ ctaUrl }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Trigger when mouse moves out of the browser window
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    const handlePopState = () => {
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('popstate', handlePopState);

    // Push a state to history so popstate will trigger on back button
    window.history.pushState({ noBack: true }, '');

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [hasShown]);

  if (!showPopup) return null;

  return (
    <div className="exit-intent-overlay" onClick={() => setShowPopup(false)}>
      <div className="exit-intent-popup" onClick={(e) => e.stopPropagation()}>
        <button className="exit-intent-close" onClick={() => setShowPopup(false)}>×</button>
        <div className="exit-intent-content">
          <span className="exit-intent-eyebrow">SPECIAL OFFER</span>
          <h3 className="exit-intent-title">大切な方へのギフトで<br />いかがでしょう？</h3>
          <p className="exit-intent-desc">
            いつも頑張っているあの方へ。<br />
            10年後の美しさを贈る、特別なギフト。
          </p>
          <div className="exit-intent-product">
            <img src="/gift_popup_img.jpg" alt="美容卵 ギフト" className="exit-intent-img" />
            <div className="exit-intent-price">
              <span className="ei-price">10,000</span><span className="ei-unit">円</span>
              <p className="ei-tax">税込・送料込</p>
            </div>
          </div>
          <a href={ctaUrl} className="cta-button-large exit-intent-btn" onClick={() => setShowPopup(false)}>
            ギフトとして贈る
          </a>
          <button className="exit-intent-cancel" onClick={() => setShowPopup(false)}>
            今回は見送る
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;

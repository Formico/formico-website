import React from 'react'

import CTA from '../CTA';

import './index.scss'

const Splash = ({ data }) => {
  return (
  <section className="splash">
    <div className="splash-inner">
      <h1 className="tagline">You've Found Your Dev Team</h1>
      <h2 className="biline">Full stack web-dev: React, Node.js, & Postgres</h2>
      <div className="buttons">
        <CTA text="Get Started" link="https://formico.typeform.com/to/CvuKzs" />
      </div>
      <div className="wavy-border" />
    </div>
    {/*<div className="wavy-border"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M0.00,49.98 C151.80,-147.53 306.99,331.08 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff'}}></path></svg></div>*/}
  </section>
  )
}

export default Splash


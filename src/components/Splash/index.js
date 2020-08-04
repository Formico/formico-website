import React from 'react'

import CTA from '../CTA';

import './index.scss'

const Splash = ({ data }) => {
  return (
  <div className="splash">
    <h1 className="tagline">You've Found Your Dev Team</h1>
    <h2 className="biline">Full stack web-dev: React, Node.js, & Postgres</h2>
    <div className="buttons">
      <CTA text="Get Started" link="https://formico.typeform.com/to/CvuKzs" />
    </div>
  </div>
  )
}

export default Splash


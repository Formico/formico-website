import React from 'react'

import CTA from '../CTA';

import './index.scss'

const Splash = ({ data }) => {
  return (
  <div className="splash">
    <h1 className="tagline">You've Found Your Dev Team</h1>
    <div className="buttons">
      <CTA text="Contact Us" link="https://formico.typeform.com/to/CvuKzs" />
    </div>
  </div>
  )
}

export default Splash


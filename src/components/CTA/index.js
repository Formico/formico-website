import React, { Component } from 'react'

import './index.scss'

export default class CTA extends Component {
  render() {
    const {
      link,
      text,
      type
    } = this.props;

    return (
      <a
        className={ `button-cta ${!type || type === 'primary' ? 'primary' : 'secondary'}` }
        href={ link }>
        <div className="arrow-circle">
          <img alt="" className="arrow" src="/icon/arrow.svg" />
        </div>
        <div className="emphasized-text">
          <p>{ text }</p>
          <div className="expando" />
        </div>
      </a>
    );
  }
}


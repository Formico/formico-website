import React, { Component } from 'react';

import './index.scss'

export default class FlashyText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoverStates: {}
    }

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { hoverStates } = this.state;

    setTimeout(() => {
      Object.keys(hoverStates).forEach(id => this.onChange(id));
      Object.keys(hoverStates).forEach(id => this.onChange(id));
    }, 100);
  }

  onChange(id) {
    const { hoverStates } = this.state;

    if (hoverStates[id]) {
      setTimeout(() => {
        hoverStates[id] = !hoverStates[id];
        this.forceUpdate();
      }, 1000);
    } else {
      hoverStates[id] = !hoverStates[id];
      this.forceUpdate();
    }
  }

  render() {
    const { text } = this.props,
          { hoverStates } = this.state;

    const letters = text.split('').map((chr, idx) => {
      if (hoverStates[idx] === undefined) hoverStates[idx] = false;
      if (chr !== ' ') {
        return <span key={ idx }
                className={ hoverStates[idx] ? "flashy-chr" : "" }
                onMouseEnter={ () => this.onChange(idx) }
                onMouseLeave={ () => this.onChange(idx) }>{ chr }</span>
      } else {
        return <span key={ idx }>&nbsp;</span>
      }
    });

    return (
      <div className="flashy-text">
        { letters }
      </div>
    );
  }
}

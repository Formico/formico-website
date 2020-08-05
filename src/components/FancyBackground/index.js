import React from 'react'

import './index.scss'

class FancyBackground extends React.Component {

  createColumns = ({ numCols=6, numCells=30 }) => {
    let columns = [];
    const cellTypes = ['filled', 'unfilled'];

    for (let i = 1; i < numCols; i++) {
      let cells = []

      for (let j = 0; j < numCells; j++) {
        let cellType = cellTypes[Math.floor(Math.random() * cellTypes.length)];
        cells.push(<div key={ j } className={ `fancy-cell ${cellType}` } />);
      }

      columns.push(<div key={ i } className={ `fancy-column col-${i}` }>{ cells }</div>);
    }

    return columns
  };

  render() {
    const { numCols, numCells } = this.props;

    return (
      <div className="fancy-background">
        { this.createColumns({ numCols, numCells }) }
      </div>
    )
  }
}

export default FancyBackground


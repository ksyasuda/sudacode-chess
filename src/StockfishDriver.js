import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';
import STOCKFISH from 'stockfish';
import Helmet from 'react-helmet';

import MyStockfish from './components/stockfish/stockfish';

class StockfishDriver extends Component {
  state = {
    width: 550
  }

  componentDidMount() {
    if(window !== undefined) {
      this.setState({width: window.innerHeight - 120})
    };
  }

  render() {
    return (
      <>
        <Helmet>
          <style>{"body {background-color: #282c34}"}</style>
        </Helmet>
        <div style={boardsContainer}>
          <MyStockfish>
            {({ position, onDrop }) => (
              <Chessboard
                id="stockfish"
                position={position}
                width={this.state.width}
                onDrop={onDrop}
                boardStyle={boardStyle}
                orientation="black"
              />
            )}
          </MyStockfish>
        </div>
      </>
    );
  }
}

export default StockfishDriver;

const boardsContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: '3%'
};
const boardStyle = {
  borderRadius: '5px',
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
};

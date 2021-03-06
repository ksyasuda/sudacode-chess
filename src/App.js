import React from 'react';
import MyBoard from './components/board/board';
import './App.css';

const app = () => {
  return (
    <section>
      <h2
        id="outcome"
        style={{
          justifyContent: 'center',
          fontSize: 'xxLarge',
          fontWeight: 'bold',
          margin: '20px 0px 0px 0px',
          padding: '0px',
        }}
      ></h2>
      <div style={boardStyle}>
        <MyBoard />
      </div>
    </section>
  );
};

const boardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: '4%',
};

export default app;

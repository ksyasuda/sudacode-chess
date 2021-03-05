import React from 'react';
import MyBoard from './components/board/board';

const app = () => {
  return (
    <section style={boardStyle}>
      <MyBoard />
    </section>
  );
};

const boardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: '5%',
};

export default app;

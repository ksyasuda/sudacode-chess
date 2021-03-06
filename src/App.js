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
  marginTop: '4%',
};

export default app;

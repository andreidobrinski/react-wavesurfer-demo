import React from 'react';
import styled from 'styled-components';
import Waveform from './Waveform';

const App = () => {
  return (
    <Wrap>
      <h1>WaveSurfer Demo</h1>
      <Waveform />
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 16px;
`;

export default App;

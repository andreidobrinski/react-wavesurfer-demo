import React from 'react';
import styled from 'styled-components';
import Waveform from './Waveform';
import pianoClip from './piano.mp3';

const App = () => {
  return (
    <Wrap>
      <h1>WaveSurfer Demo</h1>
      <Waveform audio={pianoClip} />
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 16px;
`;

export default App;

import React from 'react';
import Waveform from './waveform';
import pianoClip from './piano.mp3';
import { Wrap } from './styled';

const App = () => {
  return (
    <Wrap>
      <h1>WaveSurfer Demo</h1>
      <Waveform audio={pianoClip} />
    </Wrap>
  );
}

export default App;

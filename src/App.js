import React from 'react';
import styled from 'styled-components';
import Waveform from './waveform';
import pianoClip from './piano.mp3';

const App = () => {
  return (
    <main style={{ padding: '16px' }}>
      <h1>WaveSurfer Demo</h1>
      <Waveform audio={pianoClip} />
      <footer style={{ marginTop: '32px' }}>
        <p>
          Made by
          {' '}
          <Link href="https://andreidobrinski.com">Andrei Dobrinski</Link>
        </p>
        <p>Check out the
          {' '}
          <Link href="https://andreidobrinski.com/blog/implementing-an-audio-waveform-with-react-hooks-and-wavesurferjs/">tutorial</Link>
          {' '}
          and
          {' '}
          <Link href="https://github.com/andreidobrinski/react-wavesurfer-demo/blob/master/src/waveform.js">source code.</Link>
        </p>
      </footer>
    </main>
  );
}

const Link = styled.a`
  --primary: #61dbff;
  color: rgba(0, 0, 0, 0.9);
  text-decoration: none;
  padding: 0 1px;
  box-shadow: inset 0 -6px 0 0 var(--primary);
  transition: box-shadow 0.3s ease-in;

  &:hover {
    box-shadow: inset 0 -40px 0 0 var(--primary);
  }

  &:active {
    box-shadow: inset 0 -40px 0 0 var(--primary);
  }
`;

export default App;

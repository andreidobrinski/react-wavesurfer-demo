import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { WaveSurferWrap } from './styled';

const Waveform = ({ audio }) => {
  const waveSurferRef = useRef();
  const [isPlaying, toggleIsPlaying] = useState(false);
  const [localWaveSurfer, setLocalWaveSurfer] = useState(() => {});

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: waveSurferRef.current,
      responsive: true,
      barWidth: 2,
      barHeight: 10,
      cursorWidth: 0,
    });
    waveSurfer.load(audio);
    waveSurfer.on('ready', () => {
      setLocalWaveSurfer(waveSurfer);
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);

  return (
    <WaveSurferWrap>
      <button
        onClick={() => {
          localWaveSurfer.playPause();
          toggleIsPlaying(prevState => !prevState);
        }}
        type="button"
      >
        {isPlaying ? <FaPauseCircle size="3em" /> : <FaPlayCircle size="3em" />}
      </button>
      <div ref={waveSurferRef} />
    </WaveSurferWrap>
  );
};

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
};

export default Waveform;

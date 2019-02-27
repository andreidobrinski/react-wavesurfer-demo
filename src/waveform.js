import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';

const Waveform = ({ audio }) => {
  const [localWaveSurfer, setLocalWaveSurfer] = useState(() => {});

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: '#waveForm',
    });
    waveSurfer.load(audio);
    waveSurfer.on('ready', () => {
      setLocalWaveSurfer(waveSurfer);
    });

    return () => {
      waveSurfer.destroy();
    };
  }, []);

  return (
    <>
      <button
        onClick={() => localWaveSurfer.playPause()}
        type="button"
      >
        play/pause
      </button>
      <div id="waveForm" />
    </>
  );
};

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
};

export default Waveform;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';

const Waveform = ({ audio }) => {
  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: '#waveForm',
    });
    waveSurfer.load(audio);
  }, []);

  return (
    <div id="waveForm" />
  );
};

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
};

export default Waveform;

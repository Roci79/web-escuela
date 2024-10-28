// src/screens/MusicButton.js

import React, { useState } from 'react';
import { Howl } from 'howler';

const sound = new Howl({
  src: [`${process.env.PUBLIC_URL}/audio/musicaFondo.mp3`],
  volume: 0.5,
  loop: true,
});

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button onClick={togglePlay} className="music-button">
      {isPlaying ? 'Pausa' : 'Reproducir'}
    </button>
  );
};

export default MusicButton;

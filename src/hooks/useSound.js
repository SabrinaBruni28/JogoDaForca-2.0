import { useEffect, useRef } from "react";

function useSound(
  soundName,
  { volume = 0.7, loop = false, autoplay = false } = {}
) {
  const base = import.meta.env.BASE_URL;
  const audioRef = useRef(null);

  const soundPath = `${base}assets/sounds/${soundName}.mp3`;

  useEffect(() => {
    audioRef.current = new Audio(soundPath);
    audioRef.current.volume = volume;
    audioRef.current.loop = loop;

    if (autoplay) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  }, [soundPath, volume, loop, autoplay]);

  function play() {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  }

  function stop() {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  return { play, stop };
}

export default useSound;

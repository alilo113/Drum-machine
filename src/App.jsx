import { useRef, useState } from "react";
import heater1 from "./audio/Heater-1.mp3";
import heater2 from "./audio/Heater-2.mp3";
import heater3 from "./audio/Heater-3.mp3";
import heater4 from "./audio/Heater-4_1.mp3";
import heater6 from "./audio/Heater-6.mp3";
import cev from "./audio/Cev_H2.mp3";
import kick from "./audio/Kick_n_Hat.mp3";
import RP4 from "./audio/RP4_KICK_1.mp3";

function App() {
  const [volume, setVolume] = useState(100); // Volume as a percentage

  const audioRefs = {
    heater1: useRef(null),
    heater2: useRef(null),
    heater3: useRef(null),
    heater4: useRef(null),
    heater6: useRef(null),
    cev: useRef(null),
    kick: useRef(null),
    RP4: useRef(null),
  };

  const audioFiles = {
    heater1,
    heater2,
    heater3,
    heater4,
    heater6,
    cev,
    kick,
    RP4,
  };

  const playAudio = (audioKey) => {
    if (audioRefs[audioKey].current) {
      audioRefs[audioKey].current.volume = volume / 100; // Convert percentage to volume level
      audioRefs[audioKey].current.play();
    }
  };

  const handleVolumeChange = (event) => {
    setVolume(parseInt(event.target.value, 10)); // Update volume as a percentage
  };

  return (
    <div className="bg-gray-500 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-400 border border-orange-300 p-3 flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {Object.keys(audioRefs).map((key) => (
            <div key={key} className="flex flex-col items-center">
              <button
                onClick={() => playAudio(key)}
                className="bg-gray-500 p-4 rounded w-full text-center"
              >
                {key.charAt(0).toUpperCase()}
              </button>
              <audio ref={audioRefs[key]} src={audioFiles[key]}></audio>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center w-full mt-6">
          <div className="bg-gray-500 p-3 text-center mb-2">Volume: {volume}%</div>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-700"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
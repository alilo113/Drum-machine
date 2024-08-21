import { useRef } from "react";
import heater1 from "./audio/Heater-1.mp3";
import heater2 from "./audio/Heater-2.mp3";
import heater3 from "./audio/Heater-3.mp3";
import heater4 from "./audio/Heater-4_1.mp3";
import heater6 from "./audio/Heater-6.mp3";
import cev from "./audio/Cev_H2.mp3";
import kick from "./audio/Kick_n_Hat.mp3";
import RP4 from "./audio/RP4_KICK_1.mp3";
import { useState } from "react";

function App() {
  const [volume, setVolume] = useState(0)
  
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

  const playAudio = (audioKey) => {
    if (audioRefs[audioKey].current) {
      audioRefs[audioKey].current.play();
    }
  };

  function handleVolume() {
    setVolume(volume + 1)
    console.log(volume)
  }
  
  return (
    <div className="bg-gray-500 min-h-screen flex items-center justify-center">
      <div className="bg-gray-400 border border-orange-300 p-3 flex gap-6 flex-wrap m-3">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <button onClick={() => playAudio('heater1')} className="bg-gray-500 p-10 rounded w-full">Q</button>
            <audio ref={audioRefs.heater1} src={heater1}></audio>
          </div>
          <div>
            <button onClick={() => playAudio('heater2')} className="bg-gray-500 p-10 rounded w-full">W</button>
            <audio ref={audioRefs.heater2} src={heater2}></audio>
          </div>
          <div>
            <button onClick={() => playAudio('heater3')} className="bg-gray-500 p-10 rounded w-full">E</button>
            <audio ref={audioRefs.heater3} src={heater3}></audio>
          </div>
          <div>
            <button onClick={() => playAudio('heater4')} className="bg-gray-500 p-10 rounded w-full">A</button>
            <audio ref={audioRefs.heater4} src={heater4}></audio>
          </div>
          <div>
            <button onClick={() => playAudio('heater6')} className="bg-gray-500 p-10 rounded w-full">S</button>
            <audio ref={audioRefs.heater6} src={heater6}></audio>
          </div>
          <div>
            <button onClick={() => playAudio('cev')} className="bg-gray-500 p-10 rounded w-full">D</button>
            <audio ref={audioRefs.cev} src={cev}></audio>
          </div>
          <div>
            <button onClick={() => playAudio('kick')} className="bg-gray-500 p-10 rounded w-full">Z</button>
            <audio ref={audioRefs.kick} src={kick}></audio>
          </div>
          <div>
            <button onClick={() => playAudio('RP4')} className="bg-gray-500 p-10 rounded w-full">X</button>
            <audio ref={audioRefs.RP4} src={RP4}></audio>
          </div>
          <div>
            <button onClick={() => playAudio('RP4')} className="bg-gray-500 p-10 rounded w-full">C</button>
            <audio ref={audioRefs.RP4} src={RP4}></audio>
          </div>
        </div>
        <div>
            <div className="bg-gray-500 p-3 text-center">fff</div>
            <input type="range" onChange={handleVolume} className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-700"/>
          </div>
      </div>
    </div>
  );
}

export default App;
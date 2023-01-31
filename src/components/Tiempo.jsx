import React from 'react';
import PlayButton from './Botones/PlayButton';

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './Botones/PauseButton';
import SettingsButton from './Botones/SettingsButton';

import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './Contexto/SettingsContext';
import AddButton from './Botones/AddButton';

// colores
const red = "#f54e4e";
const green = "#4aec8c";

function Tiempo() {

  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [medio, setMedio] = useState('work'); // work/pause/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const medioRef = useRef(medio);

  function switchMode() {
    const nextMode = medioRef.current === 'work' ? 'break' : 'work';
    const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes: settingsInfo.breakMinutes) * 60;

    setMedio(nextMode);
    medioRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  function initTiempo(){
    setSecondsLeft( settingsInfo.workMinutes * 60)
  }

  useEffect(()=>{
    initTiempo();

    const interval = setInterval(() => {
      if(isPausedRef.current) {
        return;
      }
      if(secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    } , 1000)

    return () => clearInterval(interval);

  }, [settingsInfo]);


  const totalSeconds = medio === 'work' ? settingsInfo.workMinutes *60 : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft/totalSeconds  * 100);

  const minutes = Math.floor(secondsLeft/60); // 
  let seconds = secondsLeft % 60;

  if(seconds<10) seconds = '0'+seconds;

  return (
    <div>
      <CircularProgressbar value={percentage} text={`${minutes}:${seconds}`} styles={buildStyles({
        textColor:'#fff',
        pathColor: medio==='work'? red : green,
        trailColor: 'rgba(255, 255, 255, 0.2)',
        })}/>
        <div style={{marginTop: '20px'}}>
          {isPaused ? 
          <PlayButton onClick={()=>{setIsPaused(false); isPausedRef.current = false;}}/> 
          : <PauseButton onClick={()=>{setIsPaused(true); isPausedRef.current = true;}}/>}
        </div>
        <div style={{marginTop: '20px'}}>
          <SettingsButton onClick={()=> settingsInfo.setShowSettings(!settingsInfo.showSettings)} />
        </div>
        <div style={{position: 'absolute', bottom: '20px', left: '10px'}}>
          <AddButton onClick={()=>settingsInfo.setShowForm(!settingsInfo.showForm) }/>
        </div>
    </div>
  )
}

export default Tiempo;
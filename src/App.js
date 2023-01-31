import './App.css';
import Settings from './components/Settings';
import SettingsContext from './components/Contexto/SettingsContext';
import Tiempo from './components/Tiempo';
import Tarea from './components/Formulario/Tarea';
import { useState } from 'react';


function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [showForm, setShowFrom] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);


  return (
    <>
      <div className='container'>
        <div className="App">
          <SettingsContext.Provider value={{
            showSettings: showSettings,
            setShowSettings,
            workMinutes: workMinutes,
            breakMinutes: breakMinutes,
            setBreakMinutes,
            setWorkMinutes
          }}>
            {showSettings ? <Settings /> : showForm ? <Tarea/> : <Tiempo />}  
          </SettingsContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;

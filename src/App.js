import './App.css';
import Settings from './components/Settings';
import SettingsContext from './components/Contexto/SettingsContext';
import Tiempo from './components/Tiempo';
import Tarea from './components/Formulario/Tarea';
import { useState } from 'react';
import { Lista } from './components/Lista-tareas/Lista';


function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [tareas, setTareas] = useState([{
    tarea: "react",
    asignacion: "props",
    descripcion: "hola mundo"
  }])
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);


  return (
    <>
      <div className='container'>
          <SettingsContext.Provider value={{
            showSettings: showSettings,
            setShowSettings,
            showForm: showForm,
            setShowForm,
            workMinutes: workMinutes,
            breakMinutes: breakMinutes,
            setBreakMinutes,
            setWorkMinutes,
            tareas: tareas,
            setTareas
          }}>
        <div className="App">
            {showSettings ? <Settings /> : showForm ? <Tarea/> : <Tiempo />}
        </div>
            <Lista/>  
          </SettingsContext.Provider>
      </div>
    </>
  );
}

export default App;

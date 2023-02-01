import React, { useContext } from 'react';
import SettingsContext from '../Contexto/SettingsContext';
import './Lista.css';

export const Lista = () => {

    const settingsInfo = useContext(SettingsContext);
    
    return (
        <div className='lista-tareas'>

            {settingsInfo.tareas.map((tarea) => (
                <div className='tarea-realizada'>
                    <div className='tarea-realizada-frente'>
                      <h4>{tarea.tarea}</h4>
                    </div>
                    <div>

                    </div>
                </div>
            ))}
        </div>
    )
}

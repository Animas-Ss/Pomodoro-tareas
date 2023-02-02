import React, { useContext } from 'react';
import SettingsContext from '../Contexto/SettingsContext';
import './Lista.css';

export const Lista = () => {

    const settingsInfo = useContext(SettingsContext);

    return (
        <div className='lista-tareas'>
            {settingsInfo.tareas.map((tarea) => (
                <div className='tarea-padre'>
                    <div className='tarea-realizada'>
                        <div className='tarea-realizada-frente'>
                            <div className='frente-contenido'>
                                <h4>{tarea.tarea}</h4>
                            </div>
                        </div>
                        <div className='tarea-realizada-atras'>
                            <div className='atras-contenido'>
                                <h3>{tarea.asignacion}</h3>
                                <p>{tarea.descripcion}</p>
                                <button className='btn-tareas'>Modificar</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

import ReactSlider from "react-slider";
import './slider.css';
import { useContext } from "react";
import SettingsContext from "./Contexto/SettingsContext";
import Backbutton from "./Botones/BackButton";

function Settings(){

    const settingsInfo = useContext(SettingsContext);

    return(
        <div style={{textAlign:'left'}}>
            <label>Minutos de trabajo: {settingsInfo.workMinutes}:00</label>
            <ReactSlider
             className={'slider'}
             thumbClassName={'thumb'}
             trackClassName={'track'}
             value={settingsInfo.workMinutes}
             onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
             min={1}
             max={120}
             />
            <label>Minutos de descanso: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider
             className={'slider green'}
             thumbClassName={'thumb'}
             trackClassName={'track'}
             value={settingsInfo.breakMinutes}
             onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
             min={1}
             max={120}
             />
             <div style={{textAlign: 'center', marginTop: '20px'}}>
             <Backbutton onClick={() => settingsInfo.setShowSettings(!settingsInfo.showSettings)}/>
             </div>
        </div>
    );
}

export default Settings;
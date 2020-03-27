import React, { useState } from 'react';
import './style.css';
import Main from './../../Components/Main';
import Header from './../../Components/Header';
import { Colours, InitialElementsCount, Resources } from '../../Constants';
import shuffleArray from '../../Utils/ShuffleArray';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: Resources,
        lng: 'ru',
        fallbackLng: 'ru',

        interpolation: {
            escapeValue: false
        }
    });

function App() {
    const [count, setCount] = useState(InitialElementsCount);
    const [colours, setColours] = useState(Colours);

    return (
        <div className="App">
            <Header
                count={count}
                setElementsCount={setCount}
                shuffle={() => setColours(shuffleArray(colours))}/>
            <Main
                count={count}
                elements={colours}
                colours={colours}/>
        </div>
    );
}

export default App;

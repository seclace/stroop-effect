import React from 'react';
import './style.css';
import {useTranslation} from "react-i18next";

interface HeaderProps {
    shuffle: () => void;
    setElementsCount: (n: number) => void;
    count: number;
}

function Header(props: HeaderProps) {
    const { t, i18n } = useTranslation();

    return (
        <header className="App-header">
            <input
                defaultValue={props.count}
                type={'number'}
                onChange={(event) => props.setElementsCount(+event.target.value)}/>
            <button className={'shuffle-button'} onClick={props.shuffle}>{t('shuffleButton')}</button>
            <select onChange={(e) => {
                i18n.changeLanguage(e.target.value)
            }}>
                <option value={''}>{t('selectLanguage')}</option>
                <option value={'en-US'}>English</option>
                <option value={'ru-RU'}>Русский</option>
            </select>
        </header>
    );
}

export default Header;

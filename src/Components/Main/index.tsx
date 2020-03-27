import React from 'react';
import './style.css';
import { useTranslation } from "react-i18next";

interface MainProps {
    count: number;
    elements: any[];
    colours: string[];
}

function Main(props: MainProps) {
    const { t } = useTranslation();

    const elements: any[] = [];
    for (let i = 0; i < props.count; i++) {
        const randomElementIndex = Math.floor(Math.random() * props.elements.length);
        const e = props.elements[randomElementIndex];
        const randomColorIndex = Math.floor(Math.random() * props.colours.length);
        const color = props.colours[randomColorIndex];
        elements.push(<div key={i} style={{ color }} className={'colored-row'}>{t(e)}</div>);
    }

    return (
        <main className="App-body">{elements}</main>
    );
}

export default Main;

import React from 'react';
import { useSelector } from 'react-redux';
import { IStoreState } from '../../store/store';

export function Debugger() {
    const inputState = useSelector((state: IStoreState) => state.input);

    return (
        <div className="flex column">
            <span>currentKey: {inputState.currentKey}</span>
            <span>vertical: {inputState.vertical}</span>
            <span>horizontal: {inputState.horizontal}</span>
        </div>
    );
}

import { useDispatch, useSelector } from 'react-redux';
import { IStoreState } from '../store/store';
import { useEffect, useState } from 'react';
import { InputActions } from '../store/slices/input.slice';
import { getInputActionByKeyCode } from '../services/input.service';

export function useInput(): void {
    const dispatch = useDispatch();
    const inputState = useSelector((state: IStoreState) => state.input);
    const [keydownCode, setKeydownCode] = useState<string>('');
    const [keyupCode, setKeyupCode] = useState<string>('');

    function handleKeyDown(event: KeyboardEvent): void {
        setKeyupCode('');
        setKeydownCode(event.code);
    }

    function handleKeyUp(event: KeyboardEvent): void {
        setKeydownCode('');
        setKeyupCode(event.code);
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useEffect(() => {
        dispatch(InputActions.setCurrentKey(keydownCode));

        switch (getInputActionByKeyCode(keydownCode)) {
            case 'forward':
                inputState.vertical !== 1 && dispatch(InputActions.setVertical(1));
                break;
            case 'backward':
                inputState.vertical !== -1 && dispatch(InputActions.setVertical(-1));
                break;
            case 'leftward':
                inputState.horizontal !== -1 && dispatch(InputActions.setHorizontal(-1));
                break;
            case 'rightward':
                inputState.horizontal !== 1 && dispatch(InputActions.setHorizontal(1));
                break;
        }
    }, [keydownCode]);

    useEffect(() => {
        switch (getInputActionByKeyCode(keyupCode)) {
            case 'forward':
            case 'backward':
                inputState.vertical !== 0 && dispatch(InputActions.setVertical(0));
                break;
            case 'leftward':
            case 'rightward':
                inputState.horizontal !== 0 && dispatch(InputActions.setHorizontal(0));
                break;
        }
    }, [keyupCode]);
}

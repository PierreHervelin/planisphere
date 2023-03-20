import { TInputAction } from '../interfaces/input.interface';
import { store } from '../store/store';

export function getInputActionByKeyCode(keyCode: string): TInputAction | undefined {
    const inputState = store.getState().input;

    if (inputState.keyMap.forward.includes(keyCode)) return 'forward';
    else if (inputState.keyMap.backward.includes(keyCode)) return 'backward';
    else if (inputState.keyMap.leftward.includes(keyCode)) return 'leftward';
    else if (inputState.keyMap.rightward.includes(keyCode)) return 'rightward';
}

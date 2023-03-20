import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IInputKeyMap {
    forward: string[];
    backward: string[];
    leftward: string[];
    rightward: string[];
}

export interface IInputState {
    vertical: number;
    horizontal: number;
    currentKey: string;
    keyMap: IInputKeyMap;
}

const INITIAL_STATE: IInputState = {
    vertical: 0,
    horizontal: 0,
    currentKey: '',
    keyMap: {
        forward: ['KeyW', 'ArrowUp'],
        backward: ['KeyS', 'ArrowDown'],
        leftward: ['KeyQ', 'ArrowLeft'],
        rightward: ['KeyD', 'ArrowRight'],
    },
};

export const InputSlice = createSlice({
    name: 'Input',
    initialState: INITIAL_STATE,
    reducers: {
        setVertical(state, action: PayloadAction<number>) {
            state.vertical = action.payload;
        },
        setHorizontal(state, action: PayloadAction<number>) {
            state.horizontal = action.payload;
        },
        setCurrentKey(state, action: PayloadAction<string>) {
            state.currentKey = action.payload;
        },
    },
});

export const InputActions = InputSlice.actions;

export const InputReducer = InputSlice.reducer;

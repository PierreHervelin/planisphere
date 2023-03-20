import { configureStore } from '@reduxjs/toolkit';
import { IInputState, InputReducer } from './slices/input.slice';

export interface IStoreState {
    input: IInputState;
}

export const store = configureStore({
    reducer: {
        input: InputReducer,
    },
});

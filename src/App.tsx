import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Terrain } from './components/Terrain';
import { Camera } from './components/Camera';
import { useInput } from './hooks/input.hook';
import { Debugger } from './components/ui/Debugger';

export function App() {
    useInput();

    return (
        <div id="canvas-container">
            <Debugger />
            <Canvas>
                <Camera />
                <Physics>
                    <Terrain />
                </Physics>
            </Canvas>
        </div>
    );
}

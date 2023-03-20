import { Api, usePlane } from '@react-three/cannon';
import React from 'react';
import { BufferGeometry, Material, Mesh } from 'three';

export function Terrain() {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0] })) as Api<Mesh<BufferGeometry, Material | Material[]>>;

    return (
        <mesh ref={ref}>
            <planeGeometry args={[100, 100]} />
        </mesh>
    );
}

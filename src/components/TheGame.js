import React from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

const MyCanvas = styled.canvas`
    background-color: black;
    width: 100%;
    height: 100%;
`;

const TheGame = () => {
    return (
        <div>
            <MyCanvas width='100%'></MyCanvas>
            <script>
            //newScene
                let scene = new THREE.Scene();
                let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 0.1, 1000 );
                let renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );
                document.body.appendChile( renderer.domElement );
            //geometry 
                let geometry = new THREE.BoxGeometry( 1, 1, 1 );
            //material
                let material = new THREE.MeshBasicMaterial({ color: '0xff000' });
            //cube 
                let cube = new THREE.Mesh( geometry, material );
            //camera position 
            camera.position.z = 5; 
            </script>
        </div>
    )
}

export default TheGame
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';
import React from 'react';
import styled from 'styled-components';

const MyCanvas = styled.canvas`
    background-color: black;
    width: 100%;
    height: 100%;
`;

class TheGame extends React.Component {

    render() {
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        let renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;
        function animate() {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        }
        animate();
        return (
            <div>
                
            </div>
        )
    }
}

export default TheGame
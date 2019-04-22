import * as THREE from 'three';
import React from 'react';

class TheGame extends React.Component {

    componentWillUnmount() {
       let renderer = document.getElementsByTagName("renderer");
        console.log(typeof renderer);
    }

    render() {
        //scene
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        //grid helper
        let size = 10;
        let division = 10;

        let gridHelper = new THREE.GridHelper( size, division );
        scene.add( gridHelper );

        //cube
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 10;
        camera.position.y = 2;
        // create an AudioListener and add it to the camera
        var listener = new THREE.AudioListener();
        camera.add( listener );

        // create a global audio source
        var sound = new THREE.Audio( listener );

        // load a sound and set it as the Audio object's buffer
        var audioLoader = new THREE.AudioLoader();
        audioLoader.load( 'sounds/ambient.ogg', function( buffer ) {
            sound.setBuffer( buffer );
            sound.setLoop( true );
            sound.setVolume( 0.5 );
            sound.autoplay( true );
            sound.play();
        });
        //fonts 
        // let loader = new THREE.FontLoader();

        // loader.load( 'fonts/helvetiker_regular.typeface.json';
        // function( font ) {
        //     let geometry = new THREE.TextGeometry( 'Depression', 
        //     {
        //         font: font,
        //         size: 80, 
        //         height: 5, 
        //         curveSegments: 12,
        //         bevelEnabled: true,
        //         bevelThickness: 10,
        //         bevelSize: 8,
        //         bevelSegments: 5
        //     });
        // });
        //text
        // new THREE.TextGeometry( text, parameters );
        
        //player controls
        document.onkeydown = checkKey;

        function checkKey(e) {

            e = e || window.event;

            if (e.keyCode == '38') {
                // up arrow
                cube.position.z -= 1;
            }
            else if (e.keyCode == '40') {
                // down arrow
                cube.position.z += 1;
            }
            else if (e.keyCode == '37') {
            // left arrow
                cube.position.x -= 1;
            }
            else if (e.keyCode == '39') {
            // right arrow
                cube.position.x += 1;
            }

        }

        //animation
        function animate() {
            cube.rotation.y += 0.01;
            camera.position.x = cube.position.x;
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        }
        animate();
        return (
            <div></div>
        )
    }
}

export default TheGame
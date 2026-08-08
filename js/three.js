import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.178.0/build/three.module.js";


/* 
   Solvra
   REALISTIC 3D SOLAR PANEL
 */

const container = document.getElementById("solar-scene");


if (!container) {

    console.error(
        "Solvra 3D Error: #solar-scene was not found."
    );

} else {


    /* 
       SCENE
        */

    const scene = new THREE.Scene();

    scene.background = null;

    scene.fog = new THREE.FogExp2(
        0x07100d,
        0.055
    );


    /* 
       CAMERA
     */

    const camera = new THREE.PerspectiveCamera(
        42,
        container.clientWidth /
        container.clientHeight,
        0.1,
        100
    );

    camera.position.set(
        0,
        0.15,
        8.5
    );


    camera.lookAt(
        0,
        -0.45,
        0
    );


    /* 
       RENDERER
     */

    const renderer =
        new THREE.WebGLRenderer({

            antialias: true,

            alpha: true

        });


    renderer.setPixelRatio(
        Math.min(
            window.devicePixelRatio,
            2
        )
    );


    renderer.setSize(
        container.clientWidth,
        container.clientHeight
    );


    renderer.shadowMap.enabled = true;

    renderer.shadowMap.type =
        THREE.PCFSoftShadowMap;


    renderer.outputColorSpace =
        THREE.SRGBColorSpace;


    renderer.toneMapping =
        THREE.ACESFilmicToneMapping;


    renderer.toneMappingExposure =
        1.15;


    container.appendChild(
        renderer.domElement
    );


    /*
       LIGHTING
    */

    /* Soft environment light */

    const ambientLight =
        new THREE.AmbientLight(
            0xffffff,
            1.25
        );

    scene.add(
        ambientLight
    );


    /* Cool sky light */

    const hemisphereLight =
        new THREE.HemisphereLight(

            0xbfd8ff,
            0x07100d,
            1.5

        );

    scene.add(
        hemisphereLight
    );


    /* Main white sunlight */

    const sunLight =
        new THREE.DirectionalLight(
            0xffffff,
            3.8
        );


    sunLight.position.set(
        4,
        7,
        6
    );


    sunLight.castShadow = true;


    sunLight.shadow.mapSize.width =
        1024;


    sunLight.shadow.mapSize.height =
        1024;


    scene.add(
        sunLight
    );


    /* Solvra green atmospheric light */

    const greenLight =
        new THREE.PointLight(
            0xb8ff32,
            18,
            11
        );


    greenLight.position.set(
        -2.8,
        0.5,
        2.5
    );


    scene.add(
        greenLight
    );


    /* Blue reflection on panel */

    const blueLight =
        new THREE.PointLight(
            0x3d7dff,
            5,
            10
        );


    blueLight.position.set(
        4,
        2,
        4
    );


    scene.add(
        blueLight
    );


    /* 
       PROCEDURAL BACKGROUND
       */

    /*
       Dark environment plane.
       This is NOT an image.
    */

    const groundMaterial =
        new THREE.MeshStandardMaterial({

            color: 0x07100c,

            metalness: 0.15,

            roughness: 0.32

        });


    const groundGeometry =
        new THREE.PlaneGeometry(
            20,
            20,
            32,
            32
        );


    const ground =
        new THREE.Mesh(
            groundGeometry,
            groundMaterial
        );


    ground.rotation.x =
        THREE.MathUtils.degToRad(-90);


    ground.position.y =
        -3.05;


    ground.receiveShadow = true;


    scene.add(
        ground
    );


    /*
       REFLECTIVE WATER / GROUND PATCH
     */

    const reflectionMaterial =
        new THREE.MeshPhysicalMaterial({

            color: 0x0b1812,

            metalness: 0.55,

            roughness: 0.18,

            clearcoat: 0.8,

            clearcoatRoughness: 0.15,

            transparent: true,

            opacity: 0.9

        });


    const reflectionGeometry =
        new THREE.CircleGeometry(
            5.5,
            64
        );


    const reflection =
        new THREE.Mesh(
            reflectionGeometry,
            reflectionMaterial
        );


    reflection.rotation.x =
        THREE.MathUtils.degToRad(-90);


    reflection.position.set(
        0,
        -3.01,
        -0.5
    );


    scene.add(
        reflection
    );


    /* 
       SOFT GREEN ENVIRONMENT GLOW
        */

    const glowMaterial =
        new THREE.MeshBasicMaterial({

            color: 0x8dff24,

            transparent: true,

            opacity: 0.08,

            depthWrite: false

        });


    const glowGeometry =
        new THREE.CircleGeometry(
            4.5,
            64
        );


    const glow =
        new THREE.Mesh(
            glowGeometry,
            glowMaterial
        );


    glow.rotation.x =
        THREE.MathUtils.degToRad(-90);


    glow.position.set(
        -1.3,
        -3.0,
        0
    );


    glow.scale.set(
        1.3,
        0.65,
        1
    );


    scene.add(
        glow
    );


    /* 
       SOLAR PANEL GROUP
     */

    const solarPanel =
        new THREE.Group();


    /*
       Larger than previous version.
    */

    solarPanel.scale.set(
        0.94,
        0.94,
        0.94
    );


    solarPanel.position.set(
        0,
        0.10,
        0
    );


    solarPanel.rotation.x =
        THREE.MathUtils.degToRad(-12);


    solarPanel.rotation.y =
        THREE.MathUtils.degToRad(-14);


    scene.add(
        solarPanel
    );


    /* 
       PANEL FRAME
    */

    const frameMaterial =
        new THREE.MeshPhysicalMaterial({

            color: 0xe9eef2,

            metalness: 0.92,

            roughness: 0.16,

            clearcoat: 0.6,

            clearcoatRoughness: 0.12

        });


    const frameWidth = 5.2;

    const frameHeight = 3.2;

    const frameDepth = 0.16;


    const frameGeometry =
        new THREE.BoxGeometry(

            frameWidth,

            frameHeight,

            frameDepth

        );


    const frame =
        new THREE.Mesh(

            frameGeometry,

            frameMaterial

        );


    frame.castShadow = true;

    frame.receiveShadow = true;


    solarPanel.add(
        frame
    );


    /* 
       BLUE PANEL SURFACE
       */

    const panelMaterial =
        new THREE.MeshPhysicalMaterial({

            color: 0x082b78,

            metalness: 0.38,

            roughness: 0.18,

            clearcoat: 0.85,

            clearcoatRoughness: 0.1

        });


    const panelGeometry =
        new THREE.BoxGeometry(

            4.88,

            2.88,

            0.075

        );


    const panelSurface =
        new THREE.Mesh(

            panelGeometry,

            panelMaterial

        );


    panelSurface.position.z =
        0.11;


    panelSurface.castShadow = true;

    panelSurface.receiveShadow = true;


    solarPanel.add(
        panelSurface
    );


    /* 
       PHOTOVOLTAIC CELLS
     */

    const cellMaterial =
        new THREE.MeshPhysicalMaterial({

            color: 0x123f91,

            metalness: 0.32,

            roughness: 0.2,

            clearcoat: 0.9,

            clearcoatRoughness: 0.08

        });


    const columns = 8;

    const rows = 5;


    const cellWidth = 0.565;

    const cellHeight = 0.485;


    const cellGeometry =
        new THREE.BoxGeometry(

            cellWidth,

            cellHeight,

            0.035

        );


    for (
        let row = 0;
        row < rows;
        row++
    ) {


        for (
            let column = 0;
            column < columns;
            column++
        ) {


            const cell =
                new THREE.Mesh(

                    cellGeometry,

                    cellMaterial

                );


            const x =
                (
                    column -
                    (columns - 1) / 2
                ) * 0.60;


            const y =
                (
                    row -
                    (rows - 1) / 2
                ) * 0.55;


            cell.position.set(
                x,
                y,
                0.165
            );


            cell.castShadow = true;

            cell.receiveShadow = true;


            solarPanel.add(
                cell
            );

        }

    }


    /* 
       WHITE CELL GRID
        */

    const gridMaterial =
        new THREE.MeshPhysicalMaterial({

            color: 0xf4f7fa,

            metalness: 0.85,

            roughness: 0.17,

            clearcoat: 0.5

        });


    /* Horizontal bars */

    for (
        let i = 0;
        i <= rows;
        i++
    ) {


        const y =
            -frameHeight / 2 +
            i *
            (
                frameHeight / rows
            );


        const geometry =
            new THREE.BoxGeometry(

                frameWidth,

                0.028,

                0.045

            );


        const bar =
            new THREE.Mesh(

                geometry,

                gridMaterial

            );


        bar.position.set(
            0,
            y,
            0.205
        );


        bar.castShadow = true;


        solarPanel.add(
            bar
        );

    }


    /* Vertical bars */

    for (
        let i = 0;
        i <= columns;
        i++
    ) {


        const x =
            -frameWidth / 2 +
            i *
            (
                frameWidth /
                columns
            );


        const geometry =
            new THREE.BoxGeometry(

                0.028,

                frameHeight,

                0.045

            );


        const bar =
            new THREE.Mesh(

                geometry,

                gridMaterial

            );


        bar.position.set(
            x,
            0,
            0.205
        );


        bar.castShadow = true;


        solarPanel.add(
            bar
        );

    }


    /* 
       PANEL EDGE HIGHLIGHT
        */

    const edgeMaterial =
        new THREE.MeshBasicMaterial({

            color: 0xffffff,

            transparent: true,

            opacity: 0.6

        });


    const topEdge =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                4.9,
                0.025,
                0.025
            ),

            edgeMaterial

        );


    topEdge.position.set(
        0,
        1.43,
        0.24
    );


    solarPanel.add(
        topEdge
    );


    /* 
       CENTER SUPPORT
     */

    const supportMaterial =
        new THREE.MeshPhysicalMaterial({

            color: 0x56616b,

            metalness: 0.9,

            roughness: 0.2,

            clearcoat: 0.4

        });


    const supportGeometry =
        new THREE.BoxGeometry(
            0.30,
            2.35,
            0.30
        );


    const support =
        new THREE.Mesh(

            supportGeometry,

            supportMaterial

        );


    support.position.set(
        0,
        -1.95,
        -0.18
    );


    support.rotation.z =
        THREE.MathUtils.degToRad(-12);


    support.castShadow = true;

    support.receiveShadow = true;


    solarPanel.add(
        support
    );


    /* 
       SUPPORT BACK BRACE
        */

    const braceGeometry =
        new THREE.BoxGeometry(
            0.16,
            2.1,
            0.16
        );


    const brace =
        new THREE.Mesh(
            braceGeometry,
            supportMaterial
        );


    brace.position.set(
        -0.48,
        -1.9,
        -0.25
    );


    brace.rotation.z =
        THREE.MathUtils.degToRad(18);


    brace.castShadow = true;


    solarPanel.add(
        brace
    );


    /* 
       BASE
        */

    const baseMaterial =
        new THREE.MeshPhysicalMaterial({

            color: 0x1c242a,

            metalness: 0.88,

            roughness: 0.2,

            clearcoat: 0.5

        });


    const baseGeometry =
        new THREE.BoxGeometry(
            2.0,
            0.20,
            1.25
        );


    const base =
        new THREE.Mesh(
            baseGeometry,
            baseMaterial
        );


    base.position.set(
        0,
        -3.02,
        -0.18
    );


    base.rotation.y =
        THREE.MathUtils.degToRad(-12);


    base.castShadow = true;

    base.receiveShadow = true;


    solarPanel.add(
        base
    );


    /* 
       BASE TOP PLATE
       */

    const plateGeometry =
        new THREE.BoxGeometry(
            1.35,
            0.08,
            0.75
        );


    const plate =
        new THREE.Mesh(
            plateGeometry,
            supportMaterial
        );


    plate.position.set(
        0,
        -2.89,
        -0.18
    );


    plate.rotation.y =
        THREE.MathUtils.degToRad(-12);


    plate.castShadow = true;


    solarPanel.add(
        plate
    );


    /*
       GREEN ENERGY PARTICLES
     */

    const particleCount = 95;


    const particlePositions =
        new Float32Array(
            particleCount * 3
        );


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {


        particlePositions[
            i * 3
        ] =
            (
                Math.random() - 0.5
            ) * 8;


        particlePositions[
            i * 3 + 1
        ] =
            (
                Math.random() - 0.5
            ) * 6;


        particlePositions[
            i * 3 + 2
        ] =
            (
                Math.random() - 0.5
            ) * 4;

    }


    const particleGeometry =
        new THREE.BufferGeometry();


    particleGeometry.setAttribute(

        "position",

        new THREE.BufferAttribute(

            particlePositions,

            3

        )

    );


    const particleMaterial =
        new THREE.PointsMaterial({

            color: 0xc5ff38,

            size: 0.035,

            transparent: true,

            opacity: 0.75,

            depthWrite: false

        });


    const particles =
        new THREE.Points(

            particleGeometry,

            particleMaterial

        );


    scene.add(
        particles
    );


    /* 
       DISTANT GREEN LIGHT PARTICLES
        */

    const glowParticleMaterial =
        new THREE.PointsMaterial({

            color: 0x9cff28,

            size: 0.07,

            transparent: true,

            opacity: 0.35,

            depthWrite: false

        });


    const glowParticles =
        new THREE.Points(

            particleGeometry,

            glowParticleMaterial

        );


    glowParticles.position.z =
        -1.5;


    scene.add(
        glowParticles
    );


    /* 
       MOUSE INTERACTION
       */

    let mouseX = 0;

    let mouseY = 0;


    let targetRotationX = 0;

    let targetRotationY = 0;


    window.addEventListener(

        "mousemove",

        (event) => {


            mouseX =
                (
                    event.clientX /
                    window.innerWidth
                ) * 2 - 1;


            mouseY =
                (
                    event.clientY /
                    window.innerHeight
                ) * 2 - 1;


            targetRotationY =
                mouseX * 0.13;


            targetRotationX =
                mouseY * 0.07;

        }

    );


    /*
       RESIZE
     */

    function resizeRenderer() {


        const width =
            container.clientWidth;


        const height =
            container.clientHeight;


        if (
            width <= 0 ||
            height <= 0
        ) {

            return;

        }


        camera.aspect =
            width / height;


        camera.updateProjectionMatrix();


        renderer.setSize(
            width,
            height
        );


        renderer.setPixelRatio(
            Math.min(
                window.devicePixelRatio,
                2
            )
        );

    }


    window.addEventListener(
        "resize",
        resizeRenderer
    );


    /*
       ANIMATION
     */

    const clock =
        new THREE.Clock();


    const baseRotationX =
        THREE.MathUtils.degToRad(-12);


    const baseRotationY =
        THREE.MathUtils.degToRad(-14);


    function animate() {


        requestAnimationFrame(
            animate
        );


        const elapsed =
            clock.getElapsedTime();


        /*
           FLOATING
         */

        solarPanel.position.y =
            0.10 +
            Math.sin(
                elapsed * 1.05
            ) * 0.045;


        /*
           MOUSE ROTATION
         */

        const desiredX =
            baseRotationX +
            targetRotationX;


        const desiredY =
            baseRotationY +
            targetRotationY;


        solarPanel.rotation.x +=
            (
                desiredX -
                solarPanel.rotation.x
            ) * 0.025;


        solarPanel.rotation.y +=
            (
                desiredY -
                solarPanel.rotation.y
            ) * 0.025;


        /*
           PARTICLE MOVEMENT
         */

        particles.rotation.y =
            elapsed * 0.018;


        particles.rotation.x =
            Math.sin(
                elapsed * 0.15
            ) * 0.04;


        glowParticles.rotation.y =
            -elapsed * 0.01;


        /*
           ATMOSPHERIC LIGHT MOVEMENT
         */

        greenLight.position.x =
            -2.8 +
            Math.sin(
                elapsed * 0.35
            ) * 0.4;


        greenLight.position.z =
            2.5 +
            Math.cos(
                elapsed * 0.3
            ) * 0.3;


        /*
           GLOW ANIMATION
         */

        glow.material.opacity =
            0.055 +
            Math.sin(
                elapsed * 0.7
            ) * 0.015;


        /*
           RENDER
         */

        renderer.render(
            scene,
            camera
        );

    }


    /*
       START
    */

    resizeRenderer();

    animate();

}
// Create the first script element for Three.js
var threeScript = document.createElement('script');
threeScript.src = 'https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js';
threeScript.onload = function() {
    // Create the second script element for Vanta.js DOTS effect
    var vantaScript = document.createElement('script');
    vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.dots.min.js';
    vantaScript.onload = function() {
        // Initialize Vanta.js only after both Three.js and Vanta.js have loaded
        console.log("Window loaded, initializing Vanta.js");
        VANTA.DOTS({
            el: ".page",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 100,
            minWidth: 100,
            scale: 1,
            scaleMobile: 1.00,
            color: 0xff2020,
            color2: 0xff2020
        });
    };
    document.head.appendChild(vantaScript);
};
document.head.appendChild(threeScript);

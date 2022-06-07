const canvas = document.getElementById('viewport');
const gfx = canvas.getContext('2d');
gfx.translate(0.5,0.5); // Make lines sharp
gfx.imageSmoothingEnabled = false;


// Init and center monopoly instance
const mp = new Monopoly(0,0);

window.onload = window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    mp.x = Math.round((canvas.width - mp.width) / 2);
    mp.y = Math.round((canvas.height - mp.height) / 2);
    console.log(`Canvas size: ${canvas.width}, ${canvas.height}`);
    repaint();
};

function repaint() {
    mp.draw(gfx);
}

repaint();
const canvas = document.getElementById('viewport');
const gfx = canvas.getContext('2d');
gfx.translate(0.5,0.5); // Make lines sharp

const GFX_WIDTH = 400, GFX_HEIGHT = 400;

// Init and center monopoly instance
const mp = new Monopoly(0,0);
mp.x = Math.round((GFX_WIDTH - mp.width) / 2);
mp.y = Math.round((GFX_HEIGHT - mp.height) / 2);

mp.draw(gfx);

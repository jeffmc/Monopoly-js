const BOARD_SIZE = 370;
const PROPERTY_HEIGHT = 50;
const PROPERTY_PER_EDGE = 9;
const PROPERTY_WIDTH = (BOARD_SIZE-PROPERTY_HEIGHT*2)
  / PROPERTY_PER_EDGE;


const LUCK_CARD_WIDTH = 0;


if (PROPERTY_HEIGHT > BOARD_SIZE / 2) 
  throw "Property height too large!";
if (PROPERTY_HEIGHT <= 0) 
  throw "Property height too small!";

console.log(`Property size: ${PROPERTY_WIDTH}px, ${PROPERTY_HEIGHT}px`);

class Monopoly {
  constructor(x = 0, y = 0) {
    this.transform = {
      'x': x, 'y': y,
      'width': BOARD_SIZE, 'height': BOARD_SIZE
    };
  }
  
  // Transform getters/setters
  get x() { return this.transform.x; }
  get y() { return this.transform.y; }
  set x(v) { this.transform.x = v; }
  set y(v) { this.transform.y = v; }
  get width() { return this.transform.width; }
  get height() { return this.transform.height; }

  // Graphics
  draw(gfx) {
    gfx.save();
    gfx.translate(this.x,this.y);
    this.render(gfx);
    gfx.restore();
  }

  render(gfx) {
    gfx.strokeStyle = "#fff";
    gfx.beginPath();
    const w = this.width, h = this.height;
    // Board outline Rect
    gfx.moveTo(0,0);
    gfx.lineTo(w,0);
    gfx.lineTo(w,h);
    gfx.lineTo(0,h);
    gfx.lineTo(0,0);

    // Property tops
    gfx.moveTo(0,PROPERTY_HEIGHT);
    gfx.lineTo(w,PROPERTY_HEIGHT);
    gfx.moveTo(w-PROPERTY_HEIGHT,0);
    gfx.lineTo(w-PROPERTY_HEIGHT,h);
    gfx.moveTo(w,h-PROPERTY_HEIGHT);
    gfx.lineTo(0,h-PROPERTY_HEIGHT);
    gfx.moveTo(PROPERTY_HEIGHT,h);
    gfx.lineTo(PROPERTY_HEIGHT,0);

    for (let i=1;i<=PROPERTY_PER_EDGE;i++) {
      const tx = PROPERTY_HEIGHT+i*PROPERTY_WIDTH;
      gfx.moveTo(tx,0);
      gfx.lineTo(tx,PROPERTY_HEIGHT);
      gfx.moveTo(tx,h);
      gfx.lineTo(tx,h-PROPERTY_HEIGHT);
      
      const ry = PROPERTY_HEIGHT+i*PROPERTY_WIDTH;
      gfx.moveTo(0,ry);
      gfx.lineTo(PROPERTY_HEIGHT,ry);
      gfx.moveTo(w,ry);
      gfx.lineTo(w-PROPERTY_HEIGHT,ry);
      
    }
    
    gfx.stroke();
  }
}
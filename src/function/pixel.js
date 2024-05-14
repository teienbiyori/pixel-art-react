//Seem verbose, but clear, maintainable, avoids typos.
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup"
  },
  touch: {
    down: "touchstart",
    mobe: "touchmove",
    up: "touchend",
  }
};

let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () =>{
  try{
    document.createElement("TouchEvent");
    deviceType = "touch";
  }catch(e){
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();


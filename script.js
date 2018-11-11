import * as BC from 'https://cdn.jsdelivr.net/gh/Demonstrandum/BasicCanvas/lib/BasicCanvas.js';
import {rectangle} from
'https://cdn.jsdelivr.net/gh/Demonstrandum/BasicCanvas/lib/BasicShapes.js';

use(BC)
const sketch = canvas_id("sketch")

sketch.dimensions(400,400)

sketch.fill = "#63D1F4"

sketch.stroke = "white"

sketch.stroke_weight = 5

let directionPlayer = 0

key_up(event => {
  if (event.key==="ArrowUp" || "ArrowDown"){
    directionPlayer = 0
  }
})

key_down(event => {
  if (event.key==="ArrowUp"){
    directionPlayer = -1
  } else if (event.key==="ArrowDown"){
    directionPlayer = 1
  }
})

let playerPosition = 150
let ballPositiony = 180
let ballPositionx = 180
let ballDirection = 0
let ballStart = true
let ballHit = false

sketch.loop(frame => {
  sketch.background("pink")
  sketch.shape("player", rectangle(Point(20,playerPosition), 20,100))
  playerPosition+=directionPlayer*2

  sketch.shape("ball", rectangle(Point(ballPositionx, ballPositiony), 20,20))
  if (ballStart===true){
    ballPositionx-=2
  } 

  if (ballPositiony>=playerPosition && ballPositiony<=playerPosition+100 && ballPositionx===40){
    ballHit = true
    ballStart=false
  }

  if (ballHit===true){
    ballPositiony+= (-directionPlayer)
  }

  if (ballStart===false){
    ballPositionx+=2
  }

  if (ballPositionx>=sketch.width-20){
    ballStart=true
  }
})

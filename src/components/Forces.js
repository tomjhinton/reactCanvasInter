import React from 'react'





class Forces extends React.Component {


  constructor() {
    super()

    this.state = {
      time: {}

    }

    this.drawForces = this.drawForces.bind(this)

  }





  componentDidMount() {

    this.drawForces()
  }

  componentDidUpdate(){


  }

  drawForces(){
    const canvas = document.getElementById('forces')
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 1
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    const  FPS = 60

    canvas.addEventListener('mousemove', function(evt) {

      mouse.x = evt.offsetX,
      mouse.y = evt.offsetY

    }, false)

    canvas.addEventListener('mouseleave', function() {
      mouse.x = -100
      mouse.y = -100

      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }, false)

    canvas.addEventListener('mouseenter', function() {

    }, false)



    const  mouse = {
      x: -100,
      y: -100
    }


    let points =  []
    points = []
    for (var i = 0; i < 500; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 0.1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
        color: `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},1)`
      })
    }

    function drawForcesDots(){


      points.map(x=> {
        ctx.globalAlpha = 0.4
        ctx.fillStyle = x.color
        ctx.beginPath()
        ctx.arc(x.x, x.y, x.radius, 0, 5 * Math.PI)
        ctx.fill()
        ctx.fillStyle = 'black'
        ctx.stroke()
      })



    }
    function drawPaths(){
      ctx.beginPath()
      for (var i = 0, x = points.length; i < x; i++) {

        var pointA = points[i]
        ctx.moveTo(pointA.x,pointA.y)

        if(distance(mouse, pointA) < 50){

          pointA.radius+=0.5
          pointA.vy = -pointA.vy
          for (var j = 0, y = points.length; j < y; j++) {
            var pointB = points[j]
            if(distance(pointA, pointB) < 10) {
              // pointA.vx = -pointA.vx
              // pointA.vy = -pointA.vy
              // pointB.vx = -pointB.vx
              // pointB.vy = -pointB.vy
              // ctx.lineTo(pointB.x,pointB.y)
            }
          }
        }
        else if(distance(mouse, pointA) > 150 && pointA.radius > 0.1){

          pointA.radius-=0.1

        }


      }
      ctx.lineWidth = 0.25
      ctx.strokeStyle = 'green'
      ctx.stroke()
    }


    function distance( point1, point2 ){
      var xs = 0
      var ys = 0

      xs = point2.x - point1.x
      xs = xs * xs

      ys = point2.y - point1.y
      ys = ys * ys

      return Math.sqrt( xs + ys )
    }

    function update() {
      for (var i = 0, x = points.length; i < x; i++) {
        var s = points[i]

        s.x += s.vx / FPS
        s.y += s.vy / FPS

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy
      }
    }
    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      update()
      drawForcesDots()
      drawPaths()
      requestAnimationFrame(tick)
    }

    tick()

  }



  render() {



    return(
      <div className='forcesDiv'>
        <canvas id="forces" width={900} height={280}>  </canvas>
      </div>
    )
  }
}

export default Forces

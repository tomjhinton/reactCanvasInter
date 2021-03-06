import React from 'react'





class Points extends React.Component {


  constructor() {
    super()

    this.state = {
      time: {}

    }

    this.drawPoints = this.drawPoints.bind(this)

  }





  componentDidMount() {

    this.drawPoints()
  }

  componentDidUpdate(){


  }

  drawPoints(){
    const canvas = document.getElementById('points')
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

      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }, false)

    canvas.addEventListener('mouseenter', function() {
  
    }, false)



    const  mouse = {
      x: 0,
      y: 0
    }


    let points =  []
    points = []
    for (var i = 0; i < 100; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25
      })
    }

    function drawPointsDots(){


      points.map(x=> {

        ctx.fillStyle = 'rgba(0,255,0,0.5)'
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

        if(distance(mouse, pointA) < 150){

          ctx.lineTo(mouse.x, mouse.y)

          for (var j = 0, y = points.length; j < y; j++) {
            var pointB = points[j]
            if(distance(pointA, pointB) < 95) {

              ctx.lineTo(pointB.x,pointB.y)
            }
          }
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
      drawPointsDots()
      drawPaths()
      requestAnimationFrame(tick)
    }

    tick()

  }



  render() {



    return(
      <div className='pointsDiv'>
        <canvas id="points" width={900} height={280}>  </canvas>
      </div>
    )
  }
}

export default Points

import React from 'react'





class Trinagles extends React.Component {


  constructor() {
    super()

    this.state = {
      time: {}

    }



  }





  componentDidMount() {

    this.drawTriangles()

  }


  drawTriangles(){
    const canvas = document.getElementById('triangles')
    const ctx = canvas.getContext('2d')
    const triangle = {
      posX: 275,
      posY: 250,
      angle: 90 /180  * Math.PI,
      size: 30,
      rotation: 0
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    canvas.addEventListener('mousemove', function(evt) {
      var mousePos = getMousePos(canvas, evt)
      var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y
      console.log(message)
    }, false)

    canvas.addEventListener('mouseleave', function() {
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      triangle.posX =  canvas.height,
      triangle.posY = canvas.width
      console.log('hiya')
    }, false)

    function getMousePos(canvas, evt) {
      triangle.rotation =  evt.offsetX
      triangle.posX =  evt.offsetX
      triangle.posY =  evt.offsetY
      return {
        x: evt.clientX,
        y: evt.clientY
      }
    }

    let triangleColor =`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},1)`

    setInterval(function () {
      triangleColor =`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},1)`
    }, 1000)


    setInterval(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }, 2000)

    function  update(){

      ctx.globalAlpha = 0.9
      ctx.fillStyle = 'black'
      ctx.shadowColor = 'red'
      ctx.shadowBlur = 15

      ctx.strokeStyle = triangleColor
      ctx.lineWidth = 2
      ctx.shadowOffsetX = 2
      ctx.shadowOffsetY = 2
      ctx.shadowBlur    = 8
      ctx.shadowColor   = 'green'
      ctx.beginPath()
      ctx.moveTo(
        triangle.posX + 4 / 3 * triangle.size * Math.cos(triangle.angle),
        triangle.posY - 4 / 3 * triangle.size * Math.sin(triangle.angle)
      )
      ctx.lineTo(
        triangle.posX - triangle.size * (2 / 3 * Math.cos(triangle.angle) + Math.sin(triangle.angle)),
        triangle.posY + triangle.size * (2 / 3 * Math.sin(triangle.angle) - Math.cos(triangle.angle))
      )
      ctx.lineTo(
        triangle.posX - triangle.size * (2 / 3 * Math.cos(triangle.angle) - Math.sin(triangle.angle)),
        triangle.posY + triangle.size * (2 / 3 * Math.sin(triangle.angle) + Math.cos(triangle.angle))
      )
      ctx.closePath()
      ctx.stroke()

      triangle.size = Math.floor(Math.random()* 200)
      triangle.angle += triangle.rotation
    }
    setInterval(update,  100)
  }



  render() {



    return(
      <div className='trianglesDiv'>
        <canvas id="triangles" width={900} height={280}>  </canvas>
      </div>
    )
  }
}

export default Trinagles

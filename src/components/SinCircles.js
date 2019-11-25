import React from 'react'





class SinCircles extends React.Component {


  constructor() {
    super()

    this.state = {
      time: {}

    }

    this.draw = this.draw.bind(this)

  }





  componentDidMount() {

    this.draw()
  }

  componentDidUpdate(){


  }

  draw(){
    const canvas = document.getElementById('SinCircles')
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 1
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)


    canvas.addEventListener('mousemove', function(evt) {
    //  var mousePos = getMousePos(canvas, evt)
      //var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y
      mouse.x = evt.offsetX,
      mouse.y = evt.offsetY

      const x = evt.offsetX
      const y = evt.offsetY

      // Get the color data of the canvas version of our element at that location
      const rgbaColorArr = ctx.getImageData(x, y, 1, 1).data




    }, false)

    canvas.addEventListener('mouseleave', function() {
      mouse.x=0
      mouse.y=0
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

    }, false)

    canvas.addEventListener('mouseenter', function() {

    }, false)




    const  mouse = {
      x: 0,
      y: 0
    }


    setInterval(function () {
      const canvas = document.getElementById('SinCircles')
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.globalAlpha = 0.5
      ctx.strokeStyle = `rgba(${mouse.x},${mouse.y},${mouse.y},0.8)`

      var cx= mouse.x
      var cy= mouse.y
      var radius= 150
      var amp= mouse.x
      var sineCount= mouse.y
      //ctx.lineWidth = mouse.x/mouse.y
      ctx.shadowOffsetX = 2
      ctx.shadowOffsetY = 2
      ctx.shadowBlur    = 8
      ctx.shadowColor   = 'green'
      ctx.beginPath()
      for(var i=0;i<360;i++){
        var angle=i*Math.PI/180
        var pt=sineCircleXYatAngle(cx,cy,radius,amp,angle,sineCount)
        ctx.lineTo(pt.x,pt.y)
      }
      ctx.closePath()

      ctx.stroke()

      function
      sineCircleXYatAngle(cx,cy,radius,amplitude,angle,sineCount){

        var x = cx+(radius+amplitude*Math.sin(sineCount*angle))*Math.cos(angle)
        var y = cy+(radius+amplitude*Math.sin(sineCount*angle))*Math.sin(angle)
        return({x: x,y: y})
      }


    }, 100)


  }



  render() {



    return(
      <div className='SinCirclesDiv'>
        <canvas id="SinCircles" width={900} height={280}>  </canvas>
      </div>
    )
  }
}

export default SinCircles

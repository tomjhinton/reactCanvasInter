import React from 'react'





class FractalTree extends React.Component {


  constructor() {
    super()

    this.state = {
      time: {},
      drawing: true

    }

    this.draw = this.draw.bind(this)

  }





  componentDidMount() {

    this.draw()
  }

  componentDidUpdate(){


  }

  draw(){
    const canvas = document.getElementById('FractalTree')
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
      //this.setState({ drawing: true })
    }, false)




    const  mouse = {
      x: 0,
      y: 0
    }


    setInterval(function () {
      const canvas = document.getElementById('FractalTree')
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.globalAlpha = 0.5
      ctx.strokeStyle = `rgba(${mouse.x},${mouse.y},${mouse.y},0.8)`

      function draw(startX, startY, len, angle) {
        ctx.beginPath()
        ctx.save()

        ctx.translate(startX, startY)
        ctx.rotate(angle * Math.PI/9)
        ctx.moveTo(0, 0)
        ctx.lineTo(0, -len)
        ctx.stroke()

        if(len < 5) {
          ctx.restore()
          return
        }

        draw(0, -len, len*0.8, -15)
        draw(0, -len, len*0.8, 15)

        ctx.restore()
      }


      draw(mouse.x, mouse.y,80,mouse.x)
      draw(mouse.x, mouse.y,80,mouse.y)

    }, 100)


  }



  render() {



    return(
      <div className='FractalTreeDiv'>
        <canvas id="FractalTree" width={900} height={280}>  </canvas>
      </div>
    )
  }
}

export default FractalTree

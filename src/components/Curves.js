import React from 'react'





class Curves extends React.Component {


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
    const canvas = document.getElementById('curves')
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
      console.log('hiya')

    }, false)

    canvas.addEventListener('mouseenter', function() {

    }, false)




    const  mouse = {
      x: 0,
      y: 0
    }


    setInterval(function () {
      const canvas = document.getElementById('curves')
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.globalAlpha = 0.5
      ctx.strokeStyle = `rgba(${mouse.x},${mouse.y},${mouse.y},1)`
  
      ctx.lineWidth = 200
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.quadraticCurveTo(0, mouse.x, canvas.width+50, canvas.height)
      ctx.stroke()


      ctx.strokeStyle = `rgba(${mouse.y},${mouse.y},${mouse.x},1)`
      ctx.lineWidth = 200
      ctx.beginPath()
      ctx.moveTo(canvas.width, 0)
      ctx.quadraticCurveTo(0, mouse.y, 0, canvas.height)
      ctx.stroke()


    }, 100)


  }



  render() {



    return(
      <div className='curvesDiv'>
        <canvas id="curves" width={900} height={280}>  </canvas>
      </div>
    )
  }
}

export default Curves

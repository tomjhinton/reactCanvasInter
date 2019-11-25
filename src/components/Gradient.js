import React from 'react'





class Gradients extends React.Component {


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
    const canvas = document.getElementById('gradient')
    const ctx = canvas.getContext('2d')

    canvas.addEventListener('mousemove', function(evt) {

      mouse.x = evt.offsetX,
      mouse.y = evt.offsetY

    }, false)

    canvas.addEventListener('mouseleave', function() {

      // ctx.fillStyle = 'black'
      // ctx.fillRect(0, 0, canvas.width, canvas.height)

    }, false)

    canvas.addEventListener('mouseenter', function() {
      // drawPointsDots()
      // drawPaths()
    }, false)




    const  mouse = {
      x: 0,
      y: 0
    }

    function drawGradient(){
    //ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 0.4
      var grd = ctx.createRadialGradient(mouse.x+20, mouse.y, canvas.width, mouse.x*2, mouse.y*2,  canvas.width)
      grd.addColorStop(0, `rgba(${mouse.y},0,0,0.4)`)
      grd.addColorStop(0.2, `rgba(25,${mouse.x},0,0.4)`)
      grd.addColorStop(0.4, `rgba(25,${mouse.x},${mouse.y},0.4)`)
      grd.addColorStop(0.6, `rgba(${mouse.x},0,${mouse.y},0.4)`)
      grd.addColorStop(0.8, `rgba(125,${mouse.y},${mouse.x},0.4)`)
      grd.addColorStop(1, `rgba(0,0,${mouse.y},0.4)`)


      ctx.fillStyle = grd
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawGradient()
      requestAnimationFrame(tick)
    }

    tick()


  }



  render() {



    return(
      <div className='pointsDiv'>
        <canvas id="gradient" width={900} height={280}>  </canvas>
      </div>
    )
  }
}

export default Gradients

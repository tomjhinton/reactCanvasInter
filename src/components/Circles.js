import React from 'react'





class Points extends React.Component {


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
    const canvas = document.getElementById('circles')
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
      new createParticleAtPoint( evt.offsetX,  evt.offsetY, `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},1)`)
      // Get the color data of the canvas version of our element at that location
      const rgbaColorArr = ctx.getImageData(x, y, 1, 1).data




    }, false)

    canvas.addEventListener('mouseleave', function() {

      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      console.log('hiya')
      particles =  []
    }, false)

    canvas.addEventListener('mouseenter', function() {
      // drawPointsDots()
      // drawPaths()
    }, false)




    const  mouse = {
      x: 0,
      y: 0
    }

    let particles = []
    function createParticleAtPoint(x, y, color) {
      const particle = {}
      particle.posX = x
      particle.posY = y
      particle.startTime = Date.now()
      particle.radius = Math.floor(Math.random()*40)
      particle.color = color

      particles.push(particle)


    }

    setInterval(function () {
      const canvas = document.getElementById('circles')
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      particles  = particles.filter(x=> x.posY < canvas.height + x.radius)
      particles  = particles.filter(x=> x.posX < canvas.width + x.radius)
      particles.map(x  => {
        ctx.beginPath()
        ctx.arc(x.posX, x.posY, x.radius, 0, Math.PI * 2)
        ctx.globalAlpha = 0.1
        ctx.fillStyle = x.color
        ctx.fill()

        x.posY +=  Math.random()
        x.posX +=  Math.random()



      })
    }, 100)


  }



  render() {



    return(
      <div className='circlesDiv'>
        <canvas id="circles" width={900} height={280}>  </canvas>
      </div>
    )
  }
}

export default Points

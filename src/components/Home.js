import React from 'react'


import Trinagles from './Triangles'
import Points from './Points'
import Gradient from './Gradient'
import Circles from './Circles'
import Curves from './Curves'
import SinCircles from './SinCircles'
import SinLine from './SinLine'
import FractalTree from './FractalTree'
import Forces from './Forces'

import Sidebar from './Sidebar'

const Home = () => {
  return(
    <section className="section">
      <div className='title'>🐭</div>
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <Sidebar />
          </div>
          <div className="column">
            <div className="container">
              <Trinagles />
              <Points />
              <Gradient />
              <Circles />
              <Curves />
              <SinCircles />
              <SinLine />
              <FractalTree />
              <Forces />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Home

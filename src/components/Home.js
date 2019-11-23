import React from 'react'


import Trinagles from './Triangles'
import Sidebar from './Sidebar'

const Home = () => {
  return(
    <section className="section">
      <div className='title'>Canvas</div>
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <Sidebar />
          </div>
          <div className="column">
            <Trinagles />
          </div>
        </div>
      </div>
    </section>
  )
}


export default Home

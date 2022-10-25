import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <section>
                    <h3>Hello</h3>
                    <div className='container' style={{ width: "40rem" }}>

                        <div className="jumbotron">
                            <img src="" alt="" />
                            <h1 className="display-4">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-4" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p className="lead">
                                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                            </p>
                        </div>
                    </div>
                </section>
                <section className='d-flex container justify-content-center align-item-center'>

                    <div className="container my-3">
                        <h2>NewsMeds Top Headlines</h2>
                        <div className="row">
                
                        </div>
    
                    </div>
                </section>
            </div>
        )
    }
}

{/* <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="...">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import JumbotronItem from './JumbotronItem';
import Jumbotron from './Jumbotron';

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bbb834e150f94d98a99926735643660f&page=1&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }
    handlePrevClick= async()=>{
        console.log("Previous was clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bbb834e150f94d98a99926735643660f&page=${this.state.page-1}&pageSize=9`;
        let data = await fetch(url);
        let parsedData= await data.json();
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles
        })
    }
    handleNextClick=async()=>{
        console.log("Next was clicked");
        if(this.state.page+1 >   Math.ceil(this.state.totalResults/20)){

        }
        else{

            let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bbb834e150f94d98a99926735643660f&page=${this.state.page+1}&pageSize=9`;
            let data = await fetch(url);
            let parsedData= await data.json();
            // console.log(parsedData);
            this.setState({
                page: this.state.page+1,
                articles: parsedData.articles
            })
        }
    }
    render() {
        return (
            <div>
                <section>
                    <Jumbotron/>
                </section>
                {/* <section>
                    <h3>Hello</h3>
                    <div className='container' style={{ width: "40rem" }}>
                    <div className="jumbotron">
                    <img src={this.setState.articles.imageUrl ? this.setState.articles.imageUrl : ""} alt="" />
                    <h1 className="display-4">{this.state.articles.title?  this.state.articles.title : ""}</h1>
                    <p className="lead">{this.state.articles.imageUrl ? this.state.articles.description : ""}</p>
                    <hr className="my-4" />
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href={this.setState.articles.imageUrl ?this.setState.articles.newsUrl: ""} role="button">Learn more</a>
                    </p>
                </div>
                    </div>
                </section> */}
                <section className='d-flex container justify-content-center align-item-center'>

                    <div className="container my-3">
                        <h2>NewsMeds All Articles</h2>
                        <div className="row">
                            {this.state.articles.map((element) => {

                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 88) : " "} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                            })}
                        </div>
                        <div className="container d-flex justify-content-between">
                    <button disabled = {this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
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
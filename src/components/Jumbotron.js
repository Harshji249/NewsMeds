import React, { Component } from 'react'
import JumbotronItem from './JumbotronItem';

export default class Jumbotron extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bbb834e150f94d98a99926735643660f&page=2&pageSize=1`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }
    
  render() {
    return (
      <div>
        <div className="container my-3">
                        <h2>NewsMeds Top Headlines</h2>
                        <div className="row">
                            {this.state.articles.map((element) => {

                                return <div key={element.url}>
                                    <JumbotronItem title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 88) : " "} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                            })}
                        </div>
                        
                    </div>
                    
      </div>
    )
  }
}

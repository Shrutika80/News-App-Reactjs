import React, { Component } from 'react'
import SourceCard from './SourcesCard'
import LinearProgress from '@material-ui/core/LinearProgress';

export default class TopNews extends Component {

    constructor(){
        super();
        this.state={
            articles:[],
            loading: true
        }
    }

    fetchTopNews(){
        fetch(`http://newsapi.org/v2/top-headlines?country=in&apiKey=86ce5a9fba75471fa28bfd9790cab9d9`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.setState({
            articles: data.articles,
            loading: false
          })
          console.log(data)
        })
        .catch(err => console.log("opps!! an error ocurred"))
      }

      componentWillMount(){
        this.fetchTopNews()
      }

    render() {

        const topNews = this.state.articles.map((article, id) => (
            <SourceCard
              key={id}
              cid={article.source.id}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
        ));

        return (
            <div>
                { this.state.loading ? <LinearProgress /> : topNews }
            </div>
        )
    }
}



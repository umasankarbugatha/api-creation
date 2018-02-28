import React, {Component} from 'react'
import NewSingle from './NewSingle'

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: [],
        };
    }
componentDidMount(){
    const url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=50b9f75f89714b10b04de5408693b103";

    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data) => {
        this.setState({
            news:data.articles
        })
    })
    .catch((error)=>console.log(error));
}

    renderItems(){
        return this.state.news.map((item)=>(
            <NewSingle key={item.id} item={item} />
        ));
    }

    render(){
        return(
            <ul>
                {this.renderItems()}
            </ul>   
        );
    }
}

export default News

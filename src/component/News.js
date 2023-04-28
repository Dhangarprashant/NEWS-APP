import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setPage]=useState(0) //isko shyad htana pade ya 0 krna pade wrna extend krne ke liye woh rukta nhi hai ekdum start se start hota hai
  const[totalResults,setTotalResults]=useState(0)



  
  const updateNews = async()=> {
    props.setProgress(15);
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pagesize=${props.pageSize}`;
    setPage(page+1)
    props.setProgress(35);
    let data = await fetch(url);
    props.setProgress(55);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    props.setProgress(85);
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(()=>{
    document.title=props.category?`${props.category} - NewsBoy`:`General - NewsBoy`
    // eslint-disable-next-line
    updateNews()},[])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    
  };

    return (
      <>
        
        <h1 className="text-center" style={{marginTop:'90px'}}>
          NewsBoy - Top {props.category} Headlines of the day
        </h1>
        <br />
        <br />
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 60) : ""}
                      description={
                        element.description? element.description.slice(0, 80): ""
                      }
                      imageurl={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 15,
  category: "general",
}

News.proptype = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;



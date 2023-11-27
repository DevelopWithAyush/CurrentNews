import React, { useEffect, useState, } from 'react'
import Cards from '../Cards/Cards';
import Spinner from '../Spinner/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';


function News(props) {
   const Navigate = useNavigate() 
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(false)
const [pages, setPages] = useState(false)
const [totalResult, setTotalResult] = useState(0)
let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&pageSize=15&page=${pages}`



const updateNews = async()=>{
   setLoading(true)
   props.setProgress(10)
try {
   

   const data = await fetch(url)
   setLoading(true)
   props.setProgress(30)
   
   const parsedata = await data.json()
   setLoading(true)
   

   setArticles(articles.concat(parsedata.articles))
   props.setProgress(100)
   setLoading(false)
   setTotalResult(parsedata.totalResults)

   setPages(pages+1);
   console.log(articles)
} catch (error) {
   Navigate("/404")
}


}
useEffect(()=>{
updateNews()
// eslint-disable-next-line 
},[])


   const fetchMoreData = async ()=>{
      setLoading(true)
      try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&pageSize=15&page=${pages+1}`
      const data = await fetch(url)
      setLoading(true)
      
      const parsedata = await data.json()
      setLoading(true)
      
   
      setArticles(articles.concat(parsedata.articles))
      setTotalResult(parsedata.totalResults)
      setLoading(false)
   
      setPages(pages+1);

} catch (error) {
   Navigate("/404")
   
   
}
}

 
 return (

  <>
  <h1 style={{
   width:"100vw",
   display:"flex",
   alignItems:"center",
   fontSize:"3rem",marginTop:"11rem"

  }} className='container'>{props.category === "general"?"home":`${props.category}`}</h1>
    {loading && <Spinner/>}

  <InfiniteScroll
  dataLength={articles.length}
  next={fetchMoreData}
  hasMore={articles.length<totalResult}
  loader={loading && <Spinner/>}
  >
    <div className="container">
    {articles.map((element)=>{
      return  <Cards title = {element.title} description = {element.description} imgurl={element.urlToImage}  url={element.url} />
  
    })}
    </div>
    </InfiniteScroll>
        
        </>
      

  )
}

export default News


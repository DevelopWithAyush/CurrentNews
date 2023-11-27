import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from './Components/News/News';
import LoadingBar from 'react-top-loading-bar'
import PageNotFound from './Components/404/PageNotFound';
import { useState } from 'react';


function App() {

  const [progress, setProgress] = useState(10)
  let apikey = process.env.REACT_APP_NEWS_API
  console.log(apikey)
  return (
<>
<Router>
<NavBar/>
<LoadingBar
        color='red'
        progress={progress}
        height={4}
      />


<Routes>
<Route path="/" element={<News key="general" apikey = {apikey} setProgress= {setProgress} category= "general" />} />
<Route path="/business" element={<News key="business" apikey = {apikey} setProgress= {setProgress} category= "business"/>}/>
<Route path="/entertainment" element={<News key="entertainment" apikey = {apikey} setProgress= {setProgress} category= "entertainment"/>}/>
<Route path="/health" element={<News key="health" apikey = {apikey} setProgress= {setProgress} category= "health"/>}/>
<Route path="/science" element={<News key="science" apikey = {apikey} setProgress= {setProgress} category= "science"/>}/>
<Route path="/sports" element={<News key="sports" apikey = {apikey} setProgress= {setProgress} category= "sports"/>}/>
<Route path="/technology" element={<News key="technology" apikey = {apikey} setProgress= {setProgress} category= "technology"/>}/>
<Route path="/404" element={<PageNotFound />}/>
</Routes>
</Router>
</>
  );
}

export default App;

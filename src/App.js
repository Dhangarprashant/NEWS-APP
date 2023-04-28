import './App.css';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import{BrowserRouter,Routes,Route,}from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = (props)=> {
  const pageSize=15;//number of news to be diplayed on one page// 
  const apik=process.env.REACT_APP_NEWS_API;
  const coun="in"
 
 const[progress,setProgress]=useState(0); 
  

  
    return (
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <div>
        <Routes>
        <Route exact path="/" element={<News key='General'  setProgress={setProgress} api={apik} pageSize={pageSize} country={coun} category='' />} />
        <Route exact path="/business" element ={<News key="business" setProgress={setProgress}api={apik} pageSize={pageSize} country={coun} category="Business"/>}/>
        <Route exact path="/entertainment" element ={<News key="entertainment" setProgress={setProgress}api={apik} pageSize={pageSize} country={coun} category="Entertainment"/>}/>
        <Route exact path="/health" element ={<News key="health" setProgress={setProgress}api={apik} pageSize={pageSize} country={coun} category="Health"/>}/>
        <Route exact path="/science" element ={<News key="science" setProgress={setProgress}api={apik} pageSize={pageSize} country={coun} category="Science"/>}/>
        <Route exact path="/sports" element ={<News key="sports" setProgress={setProgress}api={apik} pageSize={pageSize} country={coun} category="Sports"/>}/>
        <Route exact path="/technology" element ={<News key="technology" setProgress={setProgress}api={apik} pageSize={pageSize} country={coun} category="Technology"/>}/>
        </Routes>
        </div>
        
        </BrowserRouter>

    )}

export default App;
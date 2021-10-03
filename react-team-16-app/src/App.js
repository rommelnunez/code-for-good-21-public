import React , { useState } from 'react';
import RankedList from './RankedList'
import Stylesheet from './Stylesheet'
import './myStyles.css'
import { Helmet } from 'react-helmet';
import Tableau from "tableau-react";
  {/*import tableau from 'tableau-api'*/}


function App() {


  const [ranks, setRanks] = useState([{id : 1, name: 'United'},{id : 2, name: 'Bronx Science'}])
  const options = {
    hideTabs: true,
    hideToolbar: true
  };
  return (
    <>
    <Stylesheet />
    <Helmet><script type='text/javascript' src='https://public.tableau.com/javascripts/api/tableau-2.min.js'></script>
    <img
    src="../src/logo.png"
    alt="logo"
    height="87"
    width="100" /></Helmet>
    
    <div className = "firstbox">
      <div>
        <h1 className = "primary box">Making our schools inclusive is not a one person job...</h1>
      
        <div className = "box">
          <h2 className = "primary">Parents / Students</h2>
          <p className = "secondary">GLSEN cares about student wellbeing and fighting for inclusivity
          in the places where students spend most of their day: schools.
          Find out how your school measures up to GLSEN's Bullying and Harassment
          Prevention Policy.</p>
        </div>
      

        <div className = "box">
          <h2 className = "primary">Schools</h2>
          <p className = "secondary">Is your inclusivity score low? Have you recently updated your 
          Bullying and Harassment Prevention Policy? Find out how you
          can make your institution be more inclusive.</p>
        </div>
      </div>
      
      <div className="App">
      <h1 className = "primary">National Public High School Rankings</h1>

      <Tableau
        className="tableau"
        url="https://public.tableau.com/views/GLSENMOCKDATAHEATMAP/Sheet1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
        options={options}
      />
      </div>
    </div>
    
    

    {/*This is how the rankings will be displayed*/}
    
    </>
  )
}

export default App;

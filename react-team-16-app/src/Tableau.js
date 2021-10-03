import React, { useEffect, useRef } from 'react';
const {tableau} = window;
export const Tableau =()=> {
  const ref = useRef(null);
  const url =  "https://public.tableau.com/app/profile/keerthana.manivasakan/viz/GLSENMOCKDATA/Sheet2?publish=yes";
  function initViz(){
    newtableau.Viz(ref.current,url);
  }
  return (
    <div ref={ref} style={{width:'70%', margin:'auto'}}> </div>
  );
}